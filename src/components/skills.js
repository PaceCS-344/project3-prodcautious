import { skills } from "../data/portfolio";

export default function Skills({ searchTerm = "" }) {
  const query = searchTerm.trim().toLowerCase();

  return (
    <section id="skills" className="section-shell">
      <p className="section-label">Skills</p>
      <div className="skill-grid">
        {skills.map((skill) => (
          <div
            key={skill}
            className={`skill-pill ${
              query && skill.toLowerCase().includes(query) ? "search-match" : ""
            }`}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
