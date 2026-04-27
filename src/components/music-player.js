import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { tracks } from "../data/portfolio";

export default function MusicPlayer() {
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
    <section id="music" className="section-shell">
      <p className="section-label">Music</p>

      <audio ref={audioRef} src={track.src} />

      <div className="music-player-card">
        <button onClick={togglePlay} className="play-button" aria-label="Play or pause track">
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <div className="music-info">
          <p className="music-title">{track.title}</p>
          <p className="music-subtitle">{track.subtitle}</p>
        </div>
      </div>

      <div className="track-list">
        {tracks.map((item, i) => (
          <button
            key={item.title}
            onClick={() => changeTrack(i)}
            className={`track-button ${i === currentTrack ? "is-active" : ""}`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </section>
  );
}
