import { Mail } from "lucide-react";
import { contactLinks } from "../data/portfolio";

function BrandIcon({ children, viewBox = "0 0 24 24" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      width="16"
      height="16"
      fill="currentColor"
    >
      {children}
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <BrandIcon>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5ZM.5 8h4V24h-4Z" />
      <path d="M8 8h3.83v2.19h.06c.53-1.01 1.84-2.19 3.79-2.19 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.85c0-1.87-.03-4.27-2.6-4.27-2.6 0-3 2.03-3 4.14V24H8Z" />
    </BrandIcon>
  );
}

function GitHubIcon() {
  return (
    <BrandIcon>
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.79.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.32c1.02 0 2.05.14 3.01.41 2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.23 0 4.61-2.8 5.62-5.48 5.92.43.38.82 1.11.82 2.24v3.32c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
    </BrandIcon>
  );
}

function BlueskyIcon() {
  return (
    <BrandIcon>
      <path d="M5.7 3.7c2.5 1.86 5.18 5.64 6.3 7.95 1.12-2.31 3.8-6.09 6.3-7.95 1.8-1.34 4.72-2.38 4.72.95 0 .67-.38 5.66-.6 6.46-.78 2.8-3.61 3.52-6.12 3.1 4.39.75 5.5 3.24 3.09 5.73-4.58 4.74-6.58-1.19-7.09-2.71-.09-.28-.13-.41-.3-.41s-.21.13-.3.41c-.51 1.52-2.51 7.45-7.09 2.71-2.41-2.49-1.3-4.98 3.09-5.73-2.51.42-5.34-.3-6.12-3.1-.22-.8-.6-5.79-.6-6.46 0-3.33 2.92-2.29 4.72-.95Z" />
    </BrandIcon>
  );
}

const icons = {
  mail: Mail,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  bluesky: BlueskyIcon,
};

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <p className="section-label">Contact</p>
      <p className="section-copy compact-copy">Feel free to reach out!</p>
      <div className="contact-grid">
        {contactLinks.map((item) => {
          const Icon = icons[item.icon];

          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="contact-button"
            >
              <Icon size={16} />
              {item.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
