interface PlatformCardProps {
  name: string;
  problemsSolved: string;
  contests: string;
  highestRating: number;
  profiles: Array<{
    username: string;
    url: string;
  }>;
  color: string;
}

export function PlatformCard({ name, problemsSolved, contests, highestRating, profiles, color }: PlatformCardProps) {
  const colorClasses: Record<string, { card: string; title: string; rating: string; button: string }> = {
    blue: {
      card: "hover:border-blue-500/50",
      title: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
      rating: "text-blue-600 dark:text-blue-400",
      button: "bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white"
    },
    amber: {
      card: "hover:border-amber-500/50",
      title: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
      rating: "text-amber-600 dark:text-amber-400",
      button: "bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white"
    },
    rose: {
      card: "hover:border-rose-500/50",
      title: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
      rating: "text-rose-600 dark:text-rose-400",
      button: "bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500 hover:text-white"
    },
    indigo: {
      card: "hover:border-indigo-500/50",
      title: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
      rating: "text-indigo-600 dark:text-indigo-400",
      button: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white"
    }
  };

  const classes = colorClasses[color] || colorClasses.blue;

  return (
    <div className={`group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${classes.card}`}>
      <div className="space-y-4">
        <div>
          <h4 className={`text-2xl font-bold transition-colors ${classes.title}`}>
            {name}
          </h4>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Problems Solved</span>
            <span className="font-semibold text-lg">{problemsSolved}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Contests</span>
            <span className="font-semibold text-lg">{contests}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Highest Rating</span>
            <span className={`font-semibold text-lg ${classes.rating}`}>
              {highestRating}
            </span>
          </div>
          <div className="pt-2 border-t">
            <p className="text-sm font-semibold text-center text-muted-foreground mb-2">Profiles</p>
            <div className="flex gap-2">
              {profiles.map((profile, index) => (
                <a 
                  key={index}
                  href={profile.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex-1 px-3 py-2 text-xs font-medium rounded-lg transition-colors text-center ${classes.button}`}
                >
                  {profile.username}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
