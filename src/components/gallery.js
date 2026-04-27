import { useState } from "react";
import { galleryImages as images } from "../data/portfolio";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="section-shell">
      <p className="section-label">Gallery</p>
      <div className="section-heading">
        <h2 className="section-title">Pixel art compilation</h2>
        <p className="section-copy compact-copy">
          A small collection of scenes, environment work, and tileset pieces.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((img) => (
          <button
            key={img.src}
            type="button"
            className={`gallery-tile ${img.size || "square"}`}
            onClick={() => setLightbox(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="gallery-image"
              style={{ objectPosition: img.position || "center" }}
            />
            <span className="gallery-meta">
              <span className="gallery-title">{img.title}</span>
              <span className="gallery-medium">{img.medium}</span>
            </span>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightbox-image"
          />
        </div>
      )}
    </section>
  );
}
