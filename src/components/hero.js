export default function Hero() {
  return (
    <section style={styles.section}>
      <p style={styles.greeting}>Hi, I'm</p>
      <h1 style={styles.name}>Nick Phillips</h1>
      <p style={styles.tagline}>
        Developer based in New York. I make games in Godot and Unity.
      </p>
      <div style={styles.buttons}>
        <a href="#projects" style={styles.primary}>My Work</a>
        <a href="#contact" style={styles.secondary}>Contact Me</a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '6rem 2rem 5rem',
  },
  greeting: {
    fontSize: '16px',
    color: '#888',
    marginBottom: '0.5rem',
  },
  name: {
    fontSize: '48px',
    fontWeight: '600',
    lineHeight: '1.1',
    marginBottom: '1.25rem',
  },
  tagline: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.7',
    maxWidth: '520px',
    marginBottom: '2rem',
  },
  buttons: {
    display: 'flex',
    gap: '12px',
  },
  primary: {
    fontSize: '14px',
    color: '#fff',
    backgroundColor: '#111',
    padding: '10px 20px',
    borderRadius: '6px',
    textDecoration: 'none',
  },
  secondary: {
    fontSize: '14px',
    color: '#111',
    backgroundColor: 'transparent',
    padding: '10px 20px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    textDecoration: 'none',
  },
};