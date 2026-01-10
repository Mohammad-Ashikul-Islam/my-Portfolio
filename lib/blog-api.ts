export interface BlogPost {
  title: string;
  url: string;
  image?: string;
  date: string;
  description?: string;
  slug: string;
}

const BLOG_API_URL = process.env.BLOG_API_URL;
const BLOG_API_TOKEN = process.env.BLOG_API_TOKEN;

// Simple in-memory circuit breaker
let lastFailureTime: number | null = null;
const BREAKER_COOLDOWN = 300000; // 5 minutes

/**
 * Fetches latest blog posts with retry logic for cold starts and 1-day caching.
 */
export async function fetchLatestBlogPosts(): Promise<BlogPost[]> {
  if (!BLOG_API_URL) {
    console.warn("BLOG_API_URL is not defined in environment variables.");
    return [];
  }

  // Check circuit breaker
  if (lastFailureTime && Date.now() - lastFailureTime < BREAKER_COOLDOWN) {
    return [];
  }

  const maxRetries = 2; // Reduced retries since wait is much longer
  const retryDelay = 45000; // 45 seconds as requested by user

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(BLOG_API_URL, {
        headers: {
          ...(BLOG_API_TOKEN && { Authorization: `Bearer ${BLOG_API_TOKEN}` }),
          Accept: "application/json",
        },
        next: {
          revalidate: 86400, // 24 hours
        },
      });

      if (response.ok) {
        const data = await response.json();
        const rawPosts = Array.isArray(data) ? data : data.posts || [];
        
        // Normalize URLs and map fields
        const posts: BlogPost[] = rawPosts.map((post: any) => {
          let blogUrl = post.url || "#";
          let imageUrl = post.image || "";
          
          // Fix localhost URLs if they come from the server by pointing them to the production domain
          if (blogUrl.includes("localhost:3001") && BLOG_API_URL) {
            try {
              const domain = new URL(BLOG_API_URL).origin;
              blogUrl = blogUrl.replace(/http:\/\/localhost:3001/g, domain);
              if (imageUrl.includes("localhost:3001")) {
                imageUrl = imageUrl.replace(/http:\/\/localhost:3001/g, domain);
              }
            } catch (e) {
              console.error("Error normalizing URLs:", e);
            }
          }

          return {
            title: post.title,
            url: blogUrl,
            image: imageUrl,
            date: post.date,
            description: post.description,
            slug: post.slug
          };
        });

        if (posts.length > 0) {
          lastFailureTime = null; // Reset on success
          return posts;
        }
      } else if (response.status === 401 || response.status === 403) {
        console.error(`Blog API authentication error: ${response.status}`);
        lastFailureTime = Date.now();
        return []; // Don't retry on auth errors
      } else {
        console.warn(`Blog API attempt ${attempt} failed with status ${response.status}.`);
      }
    } catch (error) {
      console.error(`Blog API fetch error (Attempt ${attempt}):`, error);
    }

    if (attempt < maxRetries) {
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }

  // All retries failed
  lastFailureTime = Date.now();
  return [];
}
