import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Gallery from "./components/gallery";
import MusicPlayer from "./components/music-player";

const themes = ["light", "dark"];

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return window.localStorage.getItem("portfolio-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <div className="app-shell">
      <Navbar theme={theme} onThemeToggle={cycleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <MusicPlayer />
        <Contact />
      </main>
    </div>
  );
}
