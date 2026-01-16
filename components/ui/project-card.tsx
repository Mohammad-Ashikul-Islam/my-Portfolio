interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  features: string[];
  techStack: string[];
  color: string;
}

export function ProjectCard({ name, description, url, features, techStack, color }: ProjectCardProps) {
  const colorClasses: Record<string, { card: string; text: string }> = {
    teal: {
      card: "hover:border-teal-500/50",
      text: "group-hover:text-teal-600 dark:group-hover:text-teal-400"
    },
    orange: {
      card: "hover:border-orange-500/50",
      text: "group-hover:text-orange-600 dark:group-hover:text-orange-400"
    }
  };

  const techStackClasses: Record<string, string> = {
    Rails: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    React: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    PostgreSQL: "bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-600/20",
    Redis: "bg-red-600/10 text-red-700 dark:text-red-300 border-red-600/20",
    Sidekiq: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
    Cancancan: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    Hotwire: "bg-purple-600/10 text-purple-700 dark:text-purple-300 border-purple-600/20",
    Stimulus: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
  };

  const classes = colorClasses[color] || colorClasses.teal;

  return (
    <div className={`group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${classes.card}`}>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <h3 className={`text-2xl font-bold transition-colors ${classes.text}`}>
            {name}
          </h3>
          <div className="flex gap-2">
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              title="Live Demo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        
        <p className="text-muted-foreground font-medium">{description}</p>
        
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-primary mt-0.5">▸</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="pt-4 border-t">
          <p className="text-xs font-semibold text-muted-foreground mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => {
              const techClass = techStackClasses[tech] || "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20";
              return (
                <span 
                  key={index} 
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${techClass}`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
