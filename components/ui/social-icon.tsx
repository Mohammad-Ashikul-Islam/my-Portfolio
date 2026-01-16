interface SocialIconProps {
  name: string;
  url: string;
  icon: string;
  color: string;
  variant?: "default" | "large";
}

export function SocialIcon({ name, url, icon, color, variant = "default" }: SocialIconProps) {
  const getIconPath = (iconType: string) => {
    const icons: Record<string, { path: string; fill?: boolean }> = {
      email: {
        path: "M1.5 4.5l9.42 6.28a1.5 1.5 0 0 0 1.66 0l9.42-6.28A2.25 2.25 0 0 0 19.5 3h-15A2.25 2.25 0 0 0 1.5 4.5z M22.5 6.908l-9.662 6.442a2.25 2.25 0 0 1-2.496 0L.75 6.908V19.5a2.25 2.25 0 0 0 2.25 2.25h18a2.25 2.25 0 0 0 2.25-2.25V6.908z",
        fill: true,
      },
      github: {
        path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
        fill: true,
      },
      linkedin: {
        path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
        fill: true,
      },
      facebook: {
        path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
        fill: true,
      },
      twitter: {
        path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
        fill: true,
      },
      phone: {
        path: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
        fill: false,
      },
    };
    return icons[iconType] || icons.email;
  };

  const colorClasses: Record<string, { default: string; large: string; largeBorder: string; largeHover: string; largeBg: string; largeShadow: string }> = {
    "red-500": {
      default: "hover:text-red-500",
      large: "group-hover:text-red-600 dark:group-hover:text-red-400",
      largeBorder: "hover:border-red-500",
      largeHover: "hover:bg-red-500/20",
      largeBg: "bg-red-500/10",
      largeShadow: "hover:shadow-lg hover:shadow-red-500/25"
    },
    foreground: {
      default: "hover:text-foreground",
      large: "group-hover:text-foreground",
      largeBorder: "hover:border-foreground",
      largeHover: "hover:bg-foreground/20",
      largeBg: "bg-foreground/10",
      largeShadow: "hover:shadow-lg hover:shadow-foreground/25"
    },
    "[#0077b5]": {
      default: "hover:text-[#0077b5]",
      large: "text-[#0077b5] group-hover:brightness-110",
      largeBorder: "border-[#0077b5]/20 hover:border-[#0077b5]",
      largeHover: "hover:bg-[#0077b5]/20",
      largeBg: "bg-[#0077b5]/10",
      largeShadow: "hover:shadow-lg hover:shadow-[#0077b5]/25"
    },
    green: {
      default: "hover:text-green-600",
      large: "group-hover:text-green-600 dark:group-hover:text-green-400",
      largeBorder: "hover:border-green-500",
      largeHover: "hover:bg-green-500/20",
      largeBg: "bg-green-500/10",
      largeShadow: "hover:shadow-lg hover:shadow-green-500/25"
    },
    fuchsia: {
      default: "hover:text-fuchsia-600",
      large: "group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400",
      largeBorder: "hover:border-fuchsia-500",
      largeHover: "hover:bg-fuchsia-500/20",
      largeBg: "bg-fuchsia-500/10",
      largeShadow: "hover:shadow-lg hover:shadow-fuchsia-500/25"
    },
    zinc: {
      default: "hover:text-zinc-700 dark:hover:text-zinc-400",
      large: "group-hover:text-zinc-700 dark:group-hover:text-zinc-400",
      largeBorder: "hover:border-zinc-700 dark:hover:border-zinc-400",
      largeHover: "hover:bg-zinc-700/20 dark:hover:bg-zinc-400/20",
      largeBg: "bg-zinc-700/10 dark:bg-zinc-400/10",
      largeShadow: "hover:shadow-lg hover:shadow-zinc-700/25 dark:hover:shadow-zinc-400/25"
    },
    indigo: {
      default: "hover:text-indigo-600",
      large: "text-indigo-600 dark:text-indigo-400 group-hover:brightness-110",
      largeBorder: "border-indigo-600/20 hover:border-indigo-600",
      largeHover: "hover:bg-indigo-600/20",
      largeBg: "bg-indigo-600/10",
      largeShadow: "hover:shadow-lg hover:shadow-indigo-600/25"
    },
    "blue-500": {
      default: "hover:text-blue-500",
      large: "text-blue-500 dark:text-blue-400 group-hover:brightness-110",
      largeBorder: "border-blue-500/20 hover:border-blue-500",
      largeHover: "hover:bg-blue-500/20",
      largeBg: "bg-blue-500/10",
      largeShadow: "hover:shadow-lg hover:shadow-blue-500/25"
    },
    "yellow-600": {
      default: "hover:text-yellow-600",
      large: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400",
      largeBorder: "hover:border-yellow-600",
      largeHover: "hover:bg-yellow-600/20",
      largeBg: "bg-yellow-600/10",
      largeShadow: "hover:shadow-lg hover:shadow-yellow-600/25"
    },
    blue: {
      default: "hover:text-blue-500",
      large: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
      largeBorder: "hover:border-blue-500",
      largeHover: "hover:bg-blue-500/20",
      largeBg: "bg-blue-500/10",
      largeShadow: "hover:shadow-lg hover:shadow-blue-500/25"
    },
    yellow: {
      default: "hover:text-yellow-500",
      large: "group-hover:text-yellow-500 dark:group-hover:text-yellow-400",
      largeBorder: "hover:border-yellow-500",
      largeHover: "hover:bg-yellow-500/20",
      largeBg: "bg-yellow-500/10",
      largeShadow: "hover:shadow-lg hover:shadow-yellow-500/25"
    }
  };

  const iconData = getIconPath(icon);
  const classes = colorClasses[color] || colorClasses.foreground;
  
  if (variant === "large") {
    return (
      <a 
        href={url}
        target={url.startsWith("http") ? "_blank" : undefined}
        rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`group p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 ${classes.largeBg} ${classes.largeBorder} ${classes.largeHover} ${classes.largeShadow}`}
        title={name}
      >
        <svg 
          className={`w-6 h-6 transition-colors ${classes.large}`}
          fill={iconData.fill ? "currentColor" : "none"} 
          stroke={iconData.fill ? undefined : "currentColor"} 
          viewBox="0 0 24 24"
        >
          {iconData.fill ? (
            <path d={iconData.path} />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconData.path} />
          )}
        </svg>
      </a>
    );
  }

  return (
    <a 
      href={url}
      target={url.startsWith("http") ? "_blank" : undefined}
      rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`text-foreground/60 transition-colors hover:scale-110 ${classes.default}`}
      title={name}
    >
      <svg 
        className="w-6 h-6"
        fill={iconData.fill ? "currentColor" : "none"} 
        stroke={iconData.fill ? undefined : "currentColor"} 
        viewBox="0 0 24 24"
      >
        {iconData.fill ? (
          <path d={iconData.path} />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconData.path} />
        )}
      </svg>
    </a>
  );
}
