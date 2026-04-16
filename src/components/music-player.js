import { useRef, useState } from "react";

export default function MusicPlayer() {
  const tracks = [
    {
      title: "Balance",
      subtitle: "Ambient",
      src: "/balance.mp3",
    },
    {
      title: "Boss Theme",
      subtitle: "Groovy",
      src: "/boss-theme.wav",
    },
    {
      title: "Day Theme",
      subtitle: "Ambient",
      src: "/day-theme.mp3",
    },
  ];

  const audioRef = useRef(null);

  const [currentTrack, setCurrentTrack] = useState(0);
  const [playing, setPlaying] = useState(false);

  const track = tracks[currentTrack];

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }

    setPlaying(!playing);
  };

  const changeTrack = (index) => {
    const audio = audioRef.current;

    setCurrentTrack(index);
    setPlaying(false);

    if (audio) {
      audio.pause();
      audio.load();
    }
  };

  return (
    <section style={styles.section}>
      <p style={styles.label}>Music</p>

      <audio ref={audioRef} src={track.src} />

      <div style={styles.player}>
        <button onClick={togglePlay} style={styles.button}>
          {playing ? "Pause" : "Play"}
        </button>

        <div style={styles.info}>
          <p style={styles.title}>{track.title}</p>
          <p style={styles.subtitle}>{track.subtitle}</p>
        </div>
      </div>

      {/* TRACK LIST */}
      <div style={styles.list}>
        {tracks.map((t, i) => (
          <button
            key={i}
            onClick={() => changeTrack(i)}
            style={{
              ...styles.track,
              opacity: i === currentTrack ? 1 : 0.5,
              fontWeight: i === currentTrack ? "600" : "400",
            }}
          >
            {t.title}
          </button>
        ))}
      </div>
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

  player: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    border: "1px solid #e5e5e5",
    borderRadius: "12px",
    marginBottom: "16px",
  },

  button: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    background: "#111",
    color: "#fff",
    cursor: "pointer",
  },

  info: {
    display: "flex",
    flexDirection: "column",
  },

  title: {
    fontSize: "14px",
    margin: 0,
  },

  subtitle: {
    fontSize: "12px",
    color: "#777",
    margin: 0,
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  track: {
    textAlign: "left",
    padding: "8px 10px",
    border: "1px solid #eee",
    borderRadius: "8px",
    background: "transparent",
    cursor: "pointer",
    fontSize: "13px",
  },
};