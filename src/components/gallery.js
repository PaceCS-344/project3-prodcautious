import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  const images = [
    { src: "/image-1.png", alt: "A Bite in Time" },
    { src: "/image-2.png", alt: "Grasslands" },
    { src: "/image-3.png", alt: "Outdoor Tileset" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const carouselRef = useRef();

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let index = 0;
    let userInteracting = false;

    const pause = () => (userInteracting = true);
    const resume = () => (userInteracting = false);

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause);
    el.addEventListener("touchend", resume);

    const interval = setInterval(() => {
      if (userInteracting) return;

      index = (index + 1) % images.length;

      el.scrollTo({
        left: index * el.clientWidth,
        behavior: "smooth",
      });

      setActiveIndex(index);
    }, 4000);

    return () => {
      clearInterval(interval);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section id="gallery"style={styles.section}>
      <p style={styles.label}>Gallery</p>

      <div
        ref={carouselRef}
        style={styles.carousel}
        onScroll={() => {
          const el = carouselRef.current;
          const index = Math.round(el.scrollLeft / el.clientWidth);
          setActiveIndex(index);
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="carousel-item"
            style={styles.slide}
            onClick={() => setLightbox(img)}
          >
            <img src={img.src} alt={img.alt} style={styles.img} />
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div style={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = carouselRef.current;
              el.scrollTo({
                left: i * el.clientWidth,
                behavior: "smooth",
              });
              setActiveIndex(i);
            }}
            style={{
              ...styles.dot,
              opacity: activeIndex === i ? 1 : 0.3,
              transform: activeIndex === i ? "scale(1.2)" : "scale(1)",
            }}
          />
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div style={styles.lightbox} onClick={() => setLightbox(null)}>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            style={styles.lightboxImg}
          />
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "4rem 2rem",
  },

  label: {
    fontSize: "11px",
    fontWeight: "500",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#aaa",
    marginBottom: "1.5rem",
  },

  carousel: {
    display: "flex",
    gap: "16px",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    paddingBottom: "10px",
    scrollbarWidth: "none",
  },

  slide: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },

  img: {
    width: "90%",
    maxWidth: "520px",
    height: "340px",
    objectFit: "cover",
    borderRadius: "12px",
  },

  dots: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginTop: "12px",
  },

  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#111",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  lightbox: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    cursor: "zoom-out",
  },

  lightboxImg: {
    maxWidth: "90vw",
    maxHeight: "90vh",
    objectFit: "contain",
    borderRadius: "10px",
  },
};