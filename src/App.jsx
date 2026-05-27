import "./App.css";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      {/* BACKGROUND GLOW */}
      <div className="background-glow"></div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">GUELLY B</h1>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          MENU
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#music">Music</a>
          <a href="#updates">Updates</a>
          <a href="#socials">Socials</a>
        </div>
      )}

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">
          <p className="mini-title">BIG GEE SEASON</p>

          <h1>
            SUPER FLY,
            <br />
            REAL MOTION
          </h1>

          <p className="hero-text">
            Motion, fresh drops, visuals and real energy.
            Welcome to the official GUELLY B experience.
          </p>

          <div className="hero-buttons">
            <a
              href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS"
              target="_blank"
              rel="noreferrer"
              className="main-btn"
            >
              STREAM NOW
            </a>

            <a
              href="https://www.youtube.com/@guellyb"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              WATCH VISUALS
            </a>
          </div>
        </div>

      </section>

      {/* UPDATES */}
      <section className="fan-updates-section" id="updates">

        <div className="updates-container">

          <div className="update-card">
            <span className="update-dot"></span>
            <p>BIG GEE rollout officially active.</p>
          </div>

          <div className="update-card">
            <span className="update-dot"></span>
            <p>New visuals and snippets dropping soon.</p>
          </div>

          <div className="update-card">
            <span className="update-dot"></span>
            <p>Exclusive merch loading.</p>
          </div>

          {/* EMAIL FORM */}
          <form
            className="email-form"
            action="https://formspree.io/f/xojbpkoa"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email for updates"
              required
            />

            <button type="submit">
              Stay Ready
            </button>
          </form>

        </div>

      </section>

      {/* SOCIALS */}
      <section className="social-section" id="socials">

        <h2>CONNECT</h2>

        <div className="social-grid">

          <a
            href="https://instagram.com/therealguellyb"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@guellyb"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>

          <a
            href="https://music.apple.com/us/artist/guelly-b"
            target="_blank"
            rel="noreferrer"
          >
            Apple Music
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

      {/* FOOTER */}
      <footer className="footer">
        <p>guellyb.com</p>
      </footer>

    </div>
  );
}

export default App;
