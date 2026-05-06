const aboutText = [
  "Pace University web applications game development design",
  "Godot side scroller Gone Fishing music production pixel art UI design",
];

export default function About({ searchTerm = "" }) {
  const query = searchTerm.trim().toLowerCase();
  const isMatch =
    query && aboutText.some((text) => text.toLowerCase().includes(query));

  return (
    <section
      id="about"
      className={`section-shell ${isMatch ? "search-match" : ""}`}
    >
      <p className="section-label">About</p>
      <div className="stack-copy">
        <p className="section-copy">
          I&apos;m currently studying at Pace University, focusing on web
          applications and game development and design. During my time there,
          I&apos;ve grown to love both game and web development because they provide
          a sandbox to build systems, design, and learn by doing.
        </p>
        <p className="section-copy">
          Outside of coursework, I&apos;m usually docking hours in another personal project.
          My current project is a Godot side scroller called &quot;Gone
          Fishing,&quot; and working on it solo has pushed me to work in 
          other creative fields, like music production, pixel art, and UI design.
        </p>
      </div>
    </section>
  );
}
