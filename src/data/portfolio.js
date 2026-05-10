const assetPath = (path) => `${process.env.PUBLIC_URL}${path}`;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#music", label: "Music" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  "Java",
  "React",
  "HTML",
  "CSS",
  "Node.js",
  "Python",
  "GDScript",
  "Git & GitHub",
  "SQL",
  "Unity",
  "Godot",
  "FL Studio",
  "Aseprite",
];

export const projects = [
  {
    id: "gone-fishing",
    name: "Gone Fishing",
    description:
      "A story-driven fishing side scroller built in Godot, focused on atmosphere, exploration, and original art.",
    tags: ["Godot", "Game Dev", "Narrative"],
    skillsUsed: ["Godot", "GDScript", "Aseprite", "FL Studio", "UI Design"],
    details:
      "I've been working on Gone Fishing in different iterations since late 2024, refining gameplay mechanics and visual aesthetics. Follow the development journey on Bluesky, where I share regular updates and sneak peeks.",
    link: "https://github.com/prodcautious/GoneFishingSideScroller",
  },
];

export const galleryImages = [
  {
    src: assetPath("/image-1.png"),
    alt: "Planet Greava",
    title: "Planet Greava",
    medium: "Parallax",
    position: "center",
    size: "wide",
  },
  {
    src: assetPath("/image-2.png"),
    alt: "Pond-side Fishing",
    title: "Pond-side Fishing",
    medium: "Scene",
    position: "center 42%",
    size: "tall",
  },
  {
    src: assetPath("/image-3.png"),
    alt: "Greava Tileset",
    title: "Greava Tileset",
    medium: "Level Design Study",
    position: "center",
    size: "square",
  },
];

export const tracks = [
  {
    title: "Balance",
    subtitle: "Ambient",
    src: assetPath("/balance.mp3"),
  },
  {
    title: "Boss Theme",
    subtitle: "Groovy",
    src: assetPath("/boss-theme.wav"),
  },
  {
    title: "Day Theme",
    subtitle: "Ambient",
    src: assetPath("/day_theme.mp3"),
  },
];

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:blueorigin628@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nick-phillips-3695a0398/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/prodcautious",
    icon: "github",
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/blueohg.bsky.social",
    icon: "bluesky",
  },
];
