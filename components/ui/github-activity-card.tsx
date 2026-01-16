import { GitHubActivity } from "@/lib/github-types";
import { formatRelativeTime } from "@/lib/github-api";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface GitHubActivitiesCardProps {
  activities: GitHubActivity[];
}

// Helper function to get the icon component dynamically
function getIconComponent(iconName: string): LucideIcon {
  // Convert icon name to PascalCase (e.g., "git-commit" -> "GitCommit")
  const pascalCase = iconName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  
  // @ts-ignore - Dynamic icon lookup
  return LucideIcons[pascalCase] || LucideIcons.Activity;
}

export function GitHubActivitiesCard({ activities }: GitHubActivitiesCardProps) {
  if (activities.length === 0) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-6 md:p-8 border-2 rounded-2xl bg-gradient-to-br from-background via-muted/40 to-background border-border/60 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-500">
        <div className="space-y-3">
          {activities.map((activity, index) => {
            const IconComponent = getIconComponent(activity.icon);
            
            return (
              <div 
                key={activity.id} 
                className={`group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-background/80 to-muted/20 hover:from-primary/5 hover:to-primary/10 hover:scale-[1.02] transition-all duration-300 ${
                  index !== activities.length - 1 ? 'border-b border-border/30' : ''
                }`}
              >
                {/* Dynamic Icon */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 flex-wrap">
                    <span className="text-sm text-muted-foreground font-medium">
                      {activity.action}
                    </span>
                    <a
                      href={activity.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-foreground hover:text-primary transition-colors underline decoration-primary/30 hover:decoration-primary underline-offset-2 break-words"
                    >
                      {activity.repo}
                    </a>
                  </div>
                  <span className="text-xs text-muted-foreground/70 mt-1 block">
                    {formatRelativeTime(activity.timestamp)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
