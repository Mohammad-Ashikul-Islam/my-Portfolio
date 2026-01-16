import { BlogPost } from "@/lib/blog-api";
import { BookText, Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";

interface BlogPostsCardProps {
  posts: BlogPost[];
}

export function BlogPostsCard({ posts }: BlogPostsCardProps) {
  if (posts.length === 0) {
    return null;
  }

  const hoverColors = [
    "hover:border-rose-500/50 hover:shadow-rose-500/10",
    "hover:border-yellow-500/50 hover:shadow-yellow-500/10",
    "hover:border-green-500/50 hover:shadow-green-500/10",
    "hover:border-orange-500/50 hover:shadow-orange-500/10",
    "hover:border-blue-500/50 hover:shadow-blue-500/10",
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {posts.map((post, index) => {
        const hoverClass = hoverColors[index % hoverColors.length];
        
        return (
          <a 
            key={post.slug} 
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block p-3 rounded-xl border border-border/50 bg-gradient-to-br from-background via-muted/20 to-background shadow-sm transition-all duration-300 ${hoverClass} hover:scale-[1.01]`}
          >
            <div className="flex items-center gap-4">
              {/* Small Thumbnail */}
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 relative overflow-hidden rounded-lg border border-border/30 bg-muted/20">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <BookText className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-primary/70">
                    <Calendar className="w-2.5 h-2.5" />
                    {post.date}
                  </span>
                  {post.tags && post.tags.length > 0 && (
                    <span className="text-[9px] text-muted-foreground/60 border-l border-border/50 pl-2">
                      {post.tags[0]}
                    </span>
                  )}
                </div>
                
                <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 leading-snug">
                  {post.title}
                </h4>
                
                {post.description && (
                  <p className="text-[11px] text-muted-foreground/80 line-clamp-1 mt-0.5 leading-relaxed">
                    {post.description}
                  </p>
                )}
                
                <div className="mt-1 flex items-center gap-1 text-[10px] font-bold text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read article <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
