import { useState } from "react";
import AccordionItem from "./ui/accordion";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [openProject, setOpenProject] = useState(projects[0]?.id || null);

  return (
    <section id="projects" className="section-shell">
      <p className="section-label">Projects</p>

      <div className="accordion-list">
        {projects.map((project) => (
          <AccordionItem
            key={project.id}
            title={project.name}
            subtitle={project.description}
            tags={project.tags}
            details={project.details}
            skillsUsed={project.skillsUsed}
            link={project.link}
            isOpen={openProject === project.id}
            onToggle={() =>
              setOpenProject((current) =>
                current === project.id ? null : project.id
              )
            }
          />
        ))}
      </div>
    </section>
  );
}
