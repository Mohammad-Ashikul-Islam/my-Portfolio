import { education } from "../data/portfolio-data";
import { SectionTitle } from "../ui/section-title";
import { EducationCard } from "../ui/education-card";

export function EducationSection() {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <SectionTitle>Education</SectionTitle>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                degree={edu.degree}
                institution={edu.institution}
                graduation={edu.graduation}
                color={edu.color}
                icon={edu.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
