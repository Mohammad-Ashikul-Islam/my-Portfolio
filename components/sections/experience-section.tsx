import { experiences } from "../data/portfolio-data";
import { SectionTitle } from "../ui/section-title";
import { ExperienceCard } from "../ui/experience-card";

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center bg-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <SectionTitle>Experience</SectionTitle>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  title={experience.title}
                  company={experience.company}
                  period={experience.period}
                  responsibilities={experience.responsibilities}
                  color={experience.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
