"use client";

import { useState, useEffect } from "react";
import { personalInfo, socialLinks } from "../data/portfolio-data";
import { SocialIcon } from "../ui/social-icon";

export function HeroSection() {
  const [displayedName, setDisplayedName] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullName = personalInfo.name;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.substring(0, i + 1));
      i++;
      if (i === fullName.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullName]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium tracking-wide">
              {personalInfo.greeting}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground pb-2 min-h-[3rem]">
              {displayedName}
              {isTyping && <span className="animate-pulse">|</span>}
            </h1>
          </div>
          
          {/* Roles */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-muted-foreground md:text-lg">
            {personalInfo.roles.map((role, index) => (
              <span key={index}>
                <span className="font-medium">{role}</span>
                {index < personalInfo.roles.length - 1 && <span className="text-primary ml-3">•</span>}
              </span>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 pt-4">
            {socialLinks.slice(0, 3).map((social) => (
              <SocialIcon
                key={social.name}
                name={social.name}
                url={social.url}
                icon={social.icon}
                color={social.hoverColor}
              />
            ))}
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex gap-4 justify-center flex-wrap pt-6">
            <a 
              href={personalInfo.resumeUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95"
            >
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-y-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-background px-8 py-4 text-base font-semibold text-foreground shadow-md transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95"
            >
              <svg 
                className="w-5 h-5 transition-transform group-hover:rotate-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
