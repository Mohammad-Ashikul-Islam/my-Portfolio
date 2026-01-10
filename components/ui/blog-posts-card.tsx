import { BlogPost } from "@/lib/blog-api";
import { formatRelativeTime } from "@/lib/github-api";
import { BookText } from "lucide-react";

interface BlogPostsCardProps {
  posts: BlogPost[];
}

export function BlogPostsCard({ posts }: BlogPostsCardProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <a
          key={post.blog_url}
          href={post.blog_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden border-2 rounded-xl bg-card shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50"
        >
          <div className="flex flex-col h-full">
            {post.image_url ? (
              <div className="relative aspect-video overflow-hidden border-b border-border/50">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="aspect-video flex items-center justify-center bg-muted/30 border-b border-border/50">
                <BookText className="w-12 h-12 text-muted-foreground/30 group-hover:scale-110 transition-transform duration-500" />
              </div>
            )}
            
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                {post.description && (
                  <p className="text-sm text-muted-foreground mt-3 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                )}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground/70">
                  {formatRelativeTime(post.created_at)}
                </span>
                <span className="text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                  Read Article →
                </span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
