import "./App.css";

function App() {
  return (
    <div className="site">

      <div className="overlay"></div>

      <div className="smoke smoke1"></div>
      <div className="smoke smoke2"></div>
      <div className="smoke smoke3"></div>

      <header className="hero">

        <p className="tag">GUELLY B PRESENTS</p>

        <h1>BIG GEE</h1>

        <h2>Super Fly, Real Motion</h2>

        <p className="date">Mixtape Out June 5th</p>

<div className="countdown">
  <div>
    <span>00</span>
    <p>DAYS</p>
  </div>
  <div>
    <span>00</span>
    <p>HOURS</p>
  </div>
  <div>
    <span>00</span>
    <p>MIN</p>
  </div>
</div>

        <div className="buttons">
          <a
            href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS"
            target="_blank"
          >
            Spotify
          </a>

          <a
            href="https://www.youtube.com/@guellyb"
            target="_blank"
          >
            YouTube
          </a>

          <a
            href="https://audiomack.com/guellyb-69de7ebc"
            target="_blank"
          >
            Audiomack
          </a>
        </div>

        <div className="scrollText">
          ↓ ENTER THE BIG GEE ERA ↓
        </div>

      </header>

      <section className="cinematicSection">
        <div className="glassCard">
          <h2>BIG GEE</h2>

          <p>
            Cinematic pain music mixed with motion, pressure,
            hunger and lifestyle.
          </p>

          <p>
            This project brings the real story behind Guelly B
            with dark visuals, energy and raw confidence.
          </p>
        </div>
      </section>

      <section className="videoSection">

        <h2>Official Visual</h2>

        <div className="videoBox">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Guelly B"
            allowFullScreen
          ></iframe>
        </div>

      </section>

      <section className="tracklist">

        <h2>Tracklist</h2>

        <div className="tracks">

          <div className="track">01 — Motion Only</div>
          <div className="track">02 — Spike Lee</div>
          <div className="track">03 — Start Over</div>
          <div className="track">04 — Ballin Like VJ</div>
          <div className="track">05 — Loose Screws</div>
          <div className="track">06 — Cheese Talk</div>
          <div className="track">07 — Bad B*tches</div>
          <div className="track">08 — Therapy Notes</div>

        </div>

      </section>

      <footer>
        <p>© 2026 GUELLY B — BIG GEE</p>
      </footer>

    </div>
  );
}

export default App;
