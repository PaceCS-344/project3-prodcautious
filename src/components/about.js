export default function About() {
  return (
    <section id="about" style={styles.section}>
      <p style={styles.label}>About</p>
      <div style={styles.content}>
        <p style={styles.bio}>
          I’m currently studying at Pace University, focusing on web applications and game development/design. 
          During my time at Pace, I’ve grown to love game and web development, mainly because I’m able to build my own systems and designs. 
        </p>
        <p style={styles.bio}>
          Outside of programming, I program some more! 
          My current project is a Godot side scroller called “Gone Fishing,” where you follow the story of a lost fisherman. 
          As the sole developer, I find myself picking up many hobbies, such as music production, pixel art, UI design.
        </p>
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
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '560px',
  },
  bio: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.8',
  },
};