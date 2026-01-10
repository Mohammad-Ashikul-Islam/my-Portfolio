import { BlogPost } from "@/lib/blog-api";
import { BookText } from "lucide-react";

interface BlogPostsCardProps {
  posts: BlogPost[];
}

export function BlogPostsCard({ posts }: BlogPostsCardProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {posts.map((post) => (
        <a 
          key={post.slug} 
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-4 rounded-xl border-2 bg-gradient-to-br from-background via-muted/40 to-background border-border/60 shadow-lg hover:shadow-2xl hover:border-primary/50 hover:scale-[1.01] transition-all duration-500"
        >
          <div className="flex items-start gap-4">
            {/* Image/Icon Thumbnail */}
            <div className="flex-shrink-0 w-20 h-20 relative overflow-hidden rounded-lg border border-border/50 bg-muted/20">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <BookText className="w-8 h-8 text-primary/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {post.title}
              </h4>
              {post.description && (
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
              )}
              <div className="text-[10px] text-muted-foreground/70 mt-2 flex items-center justify-between font-medium">
                <span>{post.date}</span>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read article →
                </span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
