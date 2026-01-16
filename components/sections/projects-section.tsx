import { projects } from "../data/portfolio-data";
import { SectionTitle } from "../ui/section-title";
import { ProjectCard } from "../ui/project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          <SectionTitle>Projects</SectionTitle>
          
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                url={project.url}
                features={project.features}
                techStack={project.techStack}
                color={project.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
