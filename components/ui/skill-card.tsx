interface SkillCardProps {
  name: string;
  category: string;
  color: string;
  icon: string;
}

export function SkillCard({ name, category, color, icon }: SkillCardProps) {
  const getIconPath = (icon: string) => {
    const icons: Record<string, string> = {
      rails: "M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.45 3.59L12 11.36 5.55 7.77 12 4.18zM5 9.13l6 3.35v6.7l-6-3.35v-6.7zm8 10.05v-6.7l6-3.35v6.7l-6 3.35z",
      react: "M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z",
      database: "M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z",
      git: "M21.62 11.108l-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 0 1 0 2.166 1.536 1.536 0 0 1-2.174 0 1.528 1.528 0 0 1 0-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 0 1-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822",
      oop: "M12 2L4 7v10l8 5 8-5V7l-8-5m0 2.18l5.45 2.73L12 9.64 6.55 6.91 12 4.18M6 8.5l5 2.5v5l-5-2.5v-5m7 7.5v-5l5-2.5v5l-5 2.5z",
      search: "M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z",
    };
    return icons[icon] || icons.search;
  };

  const colorClasses: Record<string, { card: string; icon: string; iconHover: string; text: string }> = {
    red: {
      card: "hover:border-red-500/50",
      icon: "bg-red-500/10 text-red-600 dark:text-red-400 group-hover:bg-red-500/20",
      iconHover: "",
      text: "group-hover:text-red-600 dark:group-hover:text-red-400"
    },
    cyan: {
      card: "hover:border-cyan-500/50",
      icon: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/20",
      iconHover: "",
      text: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
    },
    amber: {
      card: "hover:border-amber-500/50",
      icon: "bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500/20",
      iconHover: "",
      text: "group-hover:text-amber-600 dark:group-hover:text-amber-400"
    },
    slate: {
      card: "hover:border-slate-500/50",
      icon: "bg-slate-500/10 text-slate-700 dark:text-slate-400 group-hover:bg-slate-500/20",
      iconHover: "",
      text: "group-hover:text-slate-700 dark:group-hover:text-slate-400"
    },
    emerald: {
      card: "hover:border-emerald-500/50",
      icon: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500/20",
      iconHover: "",
      text: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
    },
    violet: {
      card: "hover:border-violet-500/50",
      icon: "bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:bg-violet-500/20",
      iconHover: "",
      text: "group-hover:text-violet-600 dark:group-hover:text-violet-400"
    }
  };

  const classes = colorClasses[color] || colorClasses.red;

  return (
    <div className={`group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 ${classes.card}`}>
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg transition-colors ${classes.icon}`}>
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d={getIconPath(icon)} />
          </svg>
        </div>
        <div>
          <h4 className={`font-semibold text-lg transition-colors ${classes.text}`}>
            {name}
          </h4>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
      </div>
    </div>
  );
}
