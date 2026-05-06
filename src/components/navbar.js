import { useEffect, useState } from "react";
import { Menu, MoonStar, Palette, Search, SunMedium, X } from "lucide-react";
import { navLinks } from "../data/portfolio";

const themeIcons = {
  light: SunMedium,
  dark: MoonStar,
  forest: Palette,
};

export default function Navbar({
  theme,
  onThemeToggle,
  searchTerm,
  onSearchChange,
  onSearchSubmit,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const ThemeIcon = themeIcons[theme] || SunMedium;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="navbar">
          <a className="brand-mark" href="#top">
            Nick Phillips
          </a>

          <div className="navbar-links desktop-only">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar-actions">
            <form
              className="site-search"
              onSubmit={(event) => {
                event.preventDefault();
                onSearchSubmit();
              }}
            >
              <Search size={16} aria-hidden="true" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search"
                aria-label="Search portfolio"
              />
            </form>

            <button
              type="button"
              className="icon-button"
              onClick={onThemeToggle}
              aria-label={`Switch theme. Current theme: ${theme}`}
              title={`Theme: ${theme}`}
            >
              <ThemeIcon size={18} />
            </button>

            <button
              type="button"
              className="icon-button mobile-only"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`mobile-menu-backdrop ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <aside className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-header">
          <span className="brand-mark">Navigate</span>
          <button
            type="button"
            className="icon-button"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
