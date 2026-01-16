interface EducationCardProps {
  degree: string;
  institution: string;
  graduation: string;
  color: string;
  icon: string;
}

export function EducationCard({ degree, institution, graduation, color, icon }: EducationCardProps) {
  const getIconPaths = (iconType: string) => {
    const icons: Record<string, string[]> = {
      graduation: [
        "M12 14l9-5-9-5-9 5 9 5z",
        "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
        "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
      ],
      book: [
        "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      ],
      school: [
        "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      ],
    };
    return icons[iconType] || icons.graduation;
  };

  const colorClasses: Record<string, { card: string; icon: string; text: string }> = {
    fuchsia: {
      card: "hover:border-fuchsia-500/50",
      icon: "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 group-hover:bg-fuchsia-500/20",
      text: "group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400"
    },
    cyan: {
      card: "hover:border-cyan-500/50",
      icon: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/20",
      text: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
    },
    indigo: {
      card: "hover:border-indigo-500/50",
      icon: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500/20",
      text: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
    }
  };

  const classes = colorClasses[color] || colorClasses.fuchsia;

  return (
    <div className={`group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 ${classes.card}`}>
      <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className={`p-3 rounded-lg transition-colors ${classes.icon}`}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {getIconPaths(icon).map((path, index) => (
              <path key={index} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
            ))}
          </svg>
        </div>
        <div className="flex-1">
          <h4 className={`font-semibold text-lg transition-colors ${classes.text}`}>
            {degree}
          </h4>
          <p className="text-sm text-muted-foreground">{institution}</p>
          <p className="text-xs text-muted-foreground mt-1">Graduation: {graduation}</p>
        </div>
      </div>
    </div>
  );
}
