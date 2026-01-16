import { personalInfo, skills } from "../data/portfolio-data";
import { SectionTitle } from "../ui/section-title";
import { SkillCard } from "../ui/skill-card";

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <SectionTitle>About Me</SectionTitle>
          
          {/* About Content */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="p-8 border rounded-xl bg-card text-card-foreground shadow-sm">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {personalInfo.bio.split('Mohammad Ashikul Islam').map((part, index) => (
                  index === 0 ? (
                    <span key={index}>
                      {part}<span className="font-semibold text-foreground">Mohammad Ashikul Islam</span>
                    </span>
                  ) : (
                    <span key={index}>{part}</span>
                  )
                ))}
              </p>
            </div>
            
            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-muted-foreground text-center">Skills & Technologies</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    category={skill.category}
                    color={skill.color}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
