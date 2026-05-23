import "./style.css";

export default function App() {
  return (
    <div className="app">

      <nav className="nav">
        <span>GUELLY B</span>

        <div>
          <a href="#music">Music</a>
          <a href="#tracklist">Tracklist</a>
          <a href="#vault">Vault</a>
          <a href="#socials">Socials</a>
        </div>
      </nav>

      <div className="loader">
        <h2>BIG GEE</h2>
      </div>

      <div className="overlay"></div>
      <div className="particles"></div>

      <section className="hero">
        <img src="/IMG_6750.png" alt="BIG GEE" className="hero-image" />

        <div className="hero-content">
          <p className="artist">GUELLY B PRESENTS</p>

          <h1>BIG GEE</h1>

          <p className="release">
            OFFICIAL MIXTAPE • JUNE 5TH 2026
          </p>

          <div className="buttons">
            <a href="#music" className="btn">
              LISTEN SOON
            </a>

            <a href="#vault" className="btn btn-outline">
              FAN VAULT
            </a>
          </div>
        </div>
      </section>

      <section className="player" id="music">
        <p>NOW PREVIEWING</p>

        <h2>BIG GEE ERA</h2>

        <a
          className="player-box"
          href="https://youtu.be/brsxymjwT_0"
          target="_blank"
        >
          <span>▶</span>

          <div>
            <h3>Ballin Like VJ</h3>
            <p>Official Visual Out Now</p>
          </div>
        </a>
      </section>

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

      <section className="socials" id="socials">
        <h2>FOLLOW THE ERA</h2>

        <div>
          <a href="https://youtube.com/@theonlyguellyb" target="_blank">
            YOUTUBE
          </a>

          <a href="https://instagram.com/theonlyguellyb" target="_blank">
            INSTAGRAM
          </a>

          <a href="https://tiktok.com/@theonlyguellyb" target="_blank">
            TIKTOK
          </a>
        </div>
      </section>

      <section className="vault" id="vault">
        <h2>FAN VAULT</h2>

        <p>
          Exclusive drops, unreleased clips, merch alerts, and BIG GEE updates
          coming soon.
        </p>

        <div className="vault-box">
          <input placeholder="Enter your email" />

          <button>JOIN VAULT</button>
        </div>
      </section>

    </div>
  );
}
