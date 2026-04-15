const skills = [
  'Java',
  'React',
  'HTML',
  'CSS',
  'Node.js',
  'Python',
  'Git & GitHub',
  'SQL',
  'Unity',
  'Godot',
  'FL Studio',
  'Aseprite',
];

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <p style={styles.label}>Skills</p>
      <div style={styles.grid}>
        {skills.map((skill) => (
          <div key={skill} style={styles.pill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '4rem 2rem',
    borderTop: '1px solid #e5e5e5',
  },
  label: {
    fontSize: '11px',
    fontWeight: '500',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#aaa',
    marginBottom: '1.5rem',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  pill: {
    fontSize: '13px',
    color: '#444',
    backgroundColor: '#f5f5f5',
    border: '1px solid #e5e5e5',
    borderRadius: '6px',
    padding: '6px 14px',
  },
};