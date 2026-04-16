const projects = [
  {
    id: 1,
    name: 'Gone Fishing',
    description: 'A fishing side scroller made in Godot. Follow its development on Github!',
    tags: ['Godot', 'GDScript'],
    link: 'https://github.com/prodcautious/GoneFishingSideScroller',
  },
  {
    id: 2,
    name: 'Reclaim',
    description: 'A small-scale 2D RPG created in memory of some folks. Looking to revisit this soon.',
    tags: ['Godot', 'GDScript'],
    link: 'https://github.com/prodcautious/Reclaim_Beta',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <p style={styles.label}>Projects</p>

      <div style={styles.list}>
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            key={project.id}
            style={styles.card}
          >
            <div>
              {project.name && (
                <p style={styles.name}>{project.name}</p>
              )}

              <p style={styles.description}>{project.description}</p>
            </div>

            <div style={styles.tags}>
              {project.tags.map((tag, index) => (
                <span key={index} style={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
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
  list: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e5e5e5',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.25rem 1.5rem',
    borderBottom: '1px solid #e5e5e5',
    textDecoration: 'none',
    color: 'inherit',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: '15px',
    fontWeight: '500',
    marginBottom: '4px',
    color: '#111',
  },
  description: {
    fontSize: '13px',
    color: '#777',
    lineHeight: '1.6',
  },
  tags: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  tag: {
    fontSize: '11px',
    padding: '3px 10px',
    borderRadius: '999px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #e5e5e5',
    color: '#555',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
};