import { FiMail } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

const links = [
  { id: 1, label: 'Email',    href: 'mailto:you@email.com',              icon: <FiMail size={16} /> },
  { id: 2, label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle', icon: <FiLinkedin size={16} /> },
  { id: 3, label: 'GitHub',   href: 'https://github.com/yourhandle',      icon: <FiGithub size={16} /> },
];

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <p style={styles.label}>Contact</p>
      <p style={styles.intro}>
        Feel free to reach out — whether it's an opportunity, a question, or just to say hi.
      </p>
      <div style={styles.grid}>
        {links.map((item) => (
          <a key={item.id} href={item.href} target="_blank" rel="noreferrer" style={styles.btn}>
            {item.icon}
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '4rem 2rem 6rem',
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
  intro: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.7',
    marginBottom: '2rem',
    maxWidth: '480px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    fontSize: '14px',
    color: '#111',
    textDecoration: 'none',
    border: '1px solid #e5e5e5',
    borderRadius: '6px',
    backgroundColor: '#fff',
  },
};