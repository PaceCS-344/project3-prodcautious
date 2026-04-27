import { ChevronDown } from "lucide-react";

export default function AccordionItem({
  title,
  subtitle,
  tags,
  details,
  skillsUsed,
  link,
  isOpen,
  onToggle,
}) {
  return (
    <article className={`accordion-item ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="accordion-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="accordion-heading">
          <div>
            <h3 className="project-title">{title}</h3>
            <p className="project-copy">{subtitle}</p>
          </div>

          <div className="project-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <ChevronDown className="accordion-icon" size={18} />
      </button>

      <div className={`accordion-panel ${isOpen ? "is-open" : ""}`}>
        <div className="accordion-content">
          <p className="section-copy compact-copy">{details}</p>
          <div className="skills-inline">
            {skillsUsed.map((skill) => (
              <span key={skill} className="skill-pill subtle">
                {skill}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="button button-secondary inline-button"
          >
            View Project
          </a>
        </div>
      </div>
    </article>
  );
}
