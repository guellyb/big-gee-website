import "./style.css";

export default function App() {
  return (
    <div className="app">

      {/* BACKGROUND */}
      <div className="background-image"></div>
      <div className="overlay"></div>
      <div className="red-glow"></div>
      <div className="smoke"></div>

      {/* NAVBAR */}
      <nav className="nav">

        <span className="logo">
          GUELLY B
        </span>

        <div className="nav-links">
          <a href="#music">Music</a>
          <a href="#tracklist">Tracklist</a>
          <a href="#vault">Vault</a>
        </div>

      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <p className="artist">
            GUELLY B PRESENTS
          </p>

          <h1>BIG GEE</h1>

          <p className="release">
            OFFICIAL MIXTAPE • JUNE 5TH 2026
          </p>

          <div className="buttons">

            <a href="#" className="btn">
              LISTEN SOON
            </a>

            <a href="#" className="btn btn-outline">
              FAN VAULT
            </a>

          </div>

        </div>

      </section>

      {/* PLAYER */}
      <section className="player" id="music">

        <p>NOW PREVIEWING</p>

        <h2>BIG GEE ERA</h2>

        <div className="player-box">

          <div className="play-btn">
            ▶
          </div>

          <div>
            <h3>Ballin Like VJ</h3>
            <p>Official Visual Out Now</p>
          </div>

        </div>

      </section>

      {/* TRACKLIST */}
      <section className="tracklist" id="tracklist">

        <h2>TRACKLIST</h2>

        <div className="tracks">

          <p>01 • Motion Only</p>
          <p>02 • Spike Lee</p>
          <p>03 • Start Over</p>
          <p>04 • Ballin Like VJ</p>
          <p>05 • Loose Screws</p>
          <p>06 • Cheese Talk</p>
          <p>07 • Bad B*tches</p>
          <p>08 • Therapy Notes</p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer" id="vault">

        <h3>BIG GEE WORLD</h3>

        <p>
          GUELLY B OFFICIAL CINEMATIC EXPERIENCE
        </p>

      </footer>

    </div>
  );
}
