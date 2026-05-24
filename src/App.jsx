import "./style.css";

const tracks = [
  "Motion Only",
  "Spike Lee",
  "Start Over",
  "Ballin Like VJ",
  "Loose Screws",
  "Cheese Talk",
  "Bad B*tches",
  "Therapy Notes",
];

export default function App() {
  return (
    <main className="site">
      <div className="noise"></div>

      <div className="smoke smoke1"></div>
      <div className="smoke smoke2"></div>
      <div className="smoke smoke3"></div>

      <div className="top-banner">
        🚨 BIG GEE OUT JUNE 5TH 🚨
      </div>

      <nav className="nav">
        <div className="logo">GUELLY B</div>

        <div className="nav-links">
          <a href="#watch">WATCH</a>
          <a href="#listen">LISTEN</a>
          <a href="#tracklist">TRACKLIST</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">OFFICIAL MIXTAPE</p>

          <h1>
            BIG
            <br />
            GEE
          </h1>

          <p className="tagline">
            Super Fly. Real Motion. June 5th.
          </p>

          <div className="hero-buttons">
            <a href="#watch" className="btn primary">
              Watch Preview
            </a>

            <a
              href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              Stream Guelly B
            </a>
          </div>

          <div className="countdown">
            <div>
              <strong>12</strong>
              <span>DAYS</span>
            </div>

            <div>
              <strong>00</strong>
              <span>HRS</span>
            </div>

            <div>
              <strong>00</strong>
              <span>MIN</span>
            </div>
          </div>
        </div>

        <div className="cover-card">
          <div className="cover-glow"></div>

          <div className="cover-art">
            <p>BIG</p>
            <p>GEE</p>
          </div>
        </div>
      </section>

      <section id="watch" className="section">
        <p className="eyebrow">WATCH THE VIDEO</p>

        <h2>Ballin Like VJ</h2>

        <div className="trailer-box">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Ballin Like VJ"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section id="listen" className="section">
        <p className="eyebrow">STREAM NOW</p>

        <h2>Listen Everywhere</h2>

        <div className="platforms">
          <a
            href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS"
            target="_blank"
            rel="noreferrer"
          >
            Spotify
          </a>

          <a
            href="https://music.apple.com/artist/guelly-b"
            target="_blank"
            rel="noreferrer"
          >
            Apple Music
          </a>

          <a
            href="https://www.youtube.com/@guellyb"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>

          <a
            href="https://audiomack.com/guellyb-69de7ebc"
            target="_blank"
            rel="noreferrer"
          >
            Audiomack
          </a>
        </div>
      </section>

      <section id="tracklist" className="section">
        <p className="eyebrow">TRACKLIST</p>

        <h2>BIG GEE</h2>

        <div className="tracklist">
          {tracks.map((track, index) => (
            <div className="track" key={track}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{track}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="socials">
        <a
          href="https://instagram.com/therealguellyb"
          target="_blank"
          rel="noreferrer"
        >
          IG
        </a>

        <a
          href="https://tiktok.com/@guellyb"
          target="_blank"
          rel="noreferrer"
        >
          TT
        </a>

        <a
          href="https://youtube.com/@guellyb"
          target="_blank"
          rel="noreferrer"
        >
          YT
        </a>
      </div>

      <footer>
        © GUELLY B — BIG GEE
      </footer>
    </main>
  );
}
