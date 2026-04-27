import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <p className="section-label">Skills</p>
      <div className="skill-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-pill">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
