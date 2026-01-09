import { BlogPost } from "@/lib/blog-api";
import { formatRelativeTime } from "@/lib/github-api";
import { BookText, ExternalLink } from "lucide-react";

interface BlogPostsCardProps {
  posts: BlogPost[];
}

export function BlogPostsCard({ posts }: BlogPostsCardProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-6 md:p-8 border-2 rounded-2xl bg-gradient-to-br from-background via-muted/40 to-background border-border/60 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-500">
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div 
              key={post.url} 
              className={`group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-background/80 to-muted/20 hover:from-primary/5 hover:to-primary/10 hover:scale-[1.02] transition-all duration-300 ${
                index !== posts.length - 1 ? 'border-b border-border/30' : ''
              }`}
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <BookText className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-1">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-base font-bold text-foreground hover:text-primary transition-colors hover:underline decoration-primary/30 hover:decoration-primary underline-offset-4"
                  >
                    <span className="truncate">{post.title}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                  {post.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {post.description}
                    </p>
                  )}
                  <span className="text-xs text-muted-foreground/70 mt-1 flex items-center gap-2">
                    {formatRelativeTime(post.published_at)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
