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
  const [searchTerm, setSearchTerm] = useState("");
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

  const jumpToFirstSearchMatch = () => {
    if (!searchTerm.trim()) {
      return;
    }

    window.setTimeout(() => {
      const firstMatch = document.querySelector(".search-match");

      if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 0);
  };

  return (
    <div className="app-shell">
      <Navbar
        theme={theme}
        onThemeToggle={cycleTheme}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearchSubmit={jumpToFirstSearchMatch}
      />
      <main>
        <Hero />
        <About searchTerm={searchTerm} />
        <Skills searchTerm={searchTerm} />
        <Projects searchTerm={searchTerm} />
        <Gallery />
        <MusicPlayer />
        <Contact />
      </main>
    </div>
  );
}
