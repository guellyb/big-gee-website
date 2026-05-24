import "./style.css";
import { useEffect, useState } from "react";

export default function App() {
  const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});
  const [loading, setLoading] = useState(true);

  const links = {
    spotify: "https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS",
    apple: "https://music.apple.com/us/artist/guelly-b",
    instagram: "https://instagram.com/therealguellyb",
    tiktok: "https://www.tiktok.com/@guellyb",
    youtube: "https://www.youtube.com/@guellyb",
    audiomack: "https://audiomack.com/guellyb-69de7ebc63e6a",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = releaseDate - now;

      setTimeLeft({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(
          0,
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ),
        mins: Math.max(
          0,
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ),
        secs: Math.max(0, Math.floor((distance % (1000 * 60)) / 1000)),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [releaseDate]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");

    const moveGlow = (e) => {
      if (!glow) return;
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="site">
      {loading && (
        <div className="loader">
          <h1>BIG GEE</h1>
          <p>GUELLY B</p>
        </div>
      )}

      <div className="cursor-glow"></div>

      <div className="announcement">🚨 BIG GEE OUT JUNE 5TH 🚨</div>

      <div className="floating-socials">
        <a href={links.instagram} target="_blank" rel="noreferrer">IG</a>
        <a href={links.tiktok} target="_blank" rel="noreferrer">TT</a>
        <a href={links.youtube} target="_blank" rel="noreferrer">YT</a>
      </div>

     <div className="cinematic-smoke">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>      </div>

      <section className="hero">
        <div className="smoke"></div>
        <div className="overlay"></div>

        <div className="particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="nav">
          <h3>GUELLY B</h3>

          <div>
            <a href="#visual">WATCH</a>
            <a href="#listen">LISTEN</a>
            <a href="#tracks">TRACKLIST</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="tag">OFFICIAL MIXTAPE</p>

          <h1>BIG GEE</h1>

          <p className="subtitle">Super Fly, Real Motion. June 5th.</p>

          <div className="buttons">
            <a href="#visual" className="btn primary">Watch Preview</a>
            <a href="#listen" className="btn secondary">Stream Guelly B</a>
          </div>
        </div>

        <div className="trailer-visual">
          <div className="trailer-light"></div>

          <div className="trailer-title">
            <span>BIG</span>
            <span>GEE</span>
          </div>
        </div>
      </section>

      <section id="visual" className="visual-section reveal">
        <p className="tag red">FEATURED VISUAL</p>

        <h2>Ballin Like VJ</h2>

        <p className="section-text">Official BIG GEE visual experience.</p>

        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Ballin Like VJ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section id="listen" className="listen-section reveal">
        <p className="tag red">STREAM NOW</p>

        <h2>Platforms</h2>

        <div className="stream-grid">
          <a href={links.spotify} target="_blank" rel="noreferrer" className="stream-card">Spotify</a>
          <a href={links.apple} target="_blank" rel="noreferrer" className="stream-card">Apple Music</a>
          <a href={links.audiomack} target="_blank" rel="noreferrer" className="stream-card">Audiomack</a>
          <a href={links.youtube} target="_blank" rel="noreferrer" className="stream-card">YouTube</a>
        </div>
      </section>

      <section className="spotify-section reveal">
        <p className="tag red">OFFICIAL ARTIST PAGE</p>

        <iframe
          className="spotify-player"
          src="https://open.spotify.com/embed/artist/0WdypKNxCbHK0vLNgujumS"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </section>

      <section id="tracks" className="tracklist reveal">
        <p className="tag red">TRACKLIST</p>

        <h2>BIG GEE</h2>

        <ol>
          <li>Motion Only</li>
          <li>Spike Lee</li>
          <li>Start Over</li>
          <li>Ballin Like VJ</li>
          <li>Loose Screws</li>
          <li>Cheese Talk</li>
          <li>Bad B*tches</li>
          <li>Therapy Notes</li>
        </ol>
      </section>

      <section className="countdown-section reveal">
        <p className="tag red">COUNTDOWN</p>

        <h2>BIG GEE DROPS IN</h2>

        <div className="countdown-grid">
          <div className="count-box">
            <span>{timeLeft.days ?? "00"}</span>
            <p>DAYS</p>
          </div>

          <div className="count-box">
            <span>{timeLeft.hours ?? "00"}</span>
            <p>HOURS</p>
          </div>

          <div className="count-box">
            <span>{timeLeft.mins ?? "00"}</span>
            <p>MINS</p>
          </div>

          <div className="count-box">
            <span>{timeLeft.secs ?? "00"}</span>
            <p>SECS</p>
          </div>
        </div>
      </section>

      <footer>
        <h3>GUELLY B</h3>

        <p>BIG GEE — OUT JUNE 5TH</p>

        <div className="socials">
          <a href={links.instagram}>Instagram</a>
          <a href={links.tiktok}>TikTok</a>
          <a href={links.youtube}>YouTube</a>
        </div>
      </footer>
    </main>
  );
}
