import "./App.css";

function App() {
  return (
    <div className="site">
      <div className="smoke smoke1"></div>
      <div className="smoke smoke2"></div>
      <div className="smoke smoke3"></div>

      <header className="hero">
        <p className="tag">GUELLY B PRESENTS</p>
        <h1>BIG GEE</h1>
        <h2>Super Fly, Real Motion</h2>
        <p className="date">Mixtape Out June 5th</p>

        <div className="buttons">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">
            Spotify
          </a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">
            YouTube
          </a>
          <a href="https://audiomack.com/guellyb-69de7ebc" target="_blank">
            Audiomack
          </a>
        </div>
      </header>

      <section className="section">
        <h2>New Era. Same Motion.</h2>
        <p>
          BIG GEE is built on hunger, pain, confidence, and real-life motion.
          Guelly B brings pressure with every track.
        </p>
      </section>

      <section className="videoSection">
        <h2>Watch</h2>
        <div className="videoBox">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Guelly B Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="tracklist">
        <h2>Tracklist</h2>
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

      <footer>
        <p>© 2026 Guelly B / BIG GEE</p>
      </footer>
    </div>
  );
}

export default App;
