import { contactLinks } from "../data/portfolio-data";
import { SectionTitle } from "../ui/section-title";
import { SocialIcon } from "../ui/social-icon";

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <SectionTitle>Get In Touch</SectionTitle>
          
          <div className="flex gap-4 flex-wrap justify-center">
            {contactLinks.map((contact) => (
              <SocialIcon
                key={contact.name}
                name={contact.name}
                url={contact.url}
                icon={contact.icon}
                color={contact.color}
                variant="large"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
