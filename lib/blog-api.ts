export interface BlogPost {
  title: string;
  url: string;
  published_at: string;
  description?: string;
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
        const posts = Array.isArray(data) ? data : data.posts || [];
        
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
