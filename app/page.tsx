import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ActivitiesSection } from "@/components/sections/activities-section";
import { EducationSection } from "@/components/sections/education-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ActivitiesSection />
        <EducationSection />
        <ContactSection />
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohammad Ashikul Islam. No rights reserved! Want the source code?{" "}
            <a 
              href="https://github.com/Mohammad-Ashikul-Islam/my-portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Get from here!
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
