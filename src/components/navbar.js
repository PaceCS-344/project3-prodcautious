export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <span style={styles.name}>Nick Phillips</span>
      <div style={styles.links}>
        <a href="#about" style={styles.link}>About</a>
        <a href="#skills" style={styles.link}>Skills</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#gallery" style={styles.link}>Gallery</a>
        <a href="#contact" style={styles.contact}>Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 2rem',
    borderBottom: '1px solid #e5e5e5',
    position: 'sticky',
    top: 0,
    backgroundColor: '#fff',
    zIndex: 10,
  },

  name: {
    fontSize: '15px',
    fontWeight: '500',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  link: {
    fontSize: '14px',
    color: '#555',
    textDecoration: 'none',
  },
  contact: {
    fontSize: '14px',
    color: '#fff',
    backgroundColor: '#111',
    padding: '6px 14px',
    borderRadius: '6px',
    textDecoration: 'none',
  },
};