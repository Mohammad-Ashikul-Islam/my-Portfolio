interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  color: string;
}

export function ExperienceCard({ title, company, period, responsibilities, color }: ExperienceCardProps) {
  const colorClasses: Record<string, { card: string; text: string }> = {
    blue: {
      card: "hover:border-blue-500/50",
      text: "group-hover:text-blue-600 dark:group-hover:text-blue-400"
    },
    green: {
      card: "hover:border-green-500/50",
      text: "group-hover:text-green-600 dark:group-hover:text-green-400"
    },
    purple: {
      card: "hover:border-purple-500/50",
      text: "group-hover:text-purple-600 dark:group-hover:text-purple-400"
    }
  };

  const classes = colorClasses[color] || colorClasses.blue;

  return (
    <div className="relative pl-0 md:pl-20">
      {/* Timeline dot */}
      <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>
      
      <div className={`group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${classes.card}`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <div>
            <h3 className={`text-xl font-bold text-primary transition-colors ${classes.text}`}>
              {title}
            </h3>
            <p className="text-sm font-medium text-muted-foreground mt-0.5">{company}</p>
          </div>
          <span className="text-sm font-medium text-muted-foreground mt-2 md:mt-0">{period}</span>
        </div>
        <ul className="space-y-2 text-muted-foreground">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-primary">•</span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
