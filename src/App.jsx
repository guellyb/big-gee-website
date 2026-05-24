
import "./style.css";

export default function App() {
  return (
    <main className="site">
      <section className="hero">
        <div className="overlay"></div>

        <nav className="nav">
          <h3>GUELLY B</h3>
          <a href="#visual">WATCH</a>
        </nav>

        <div className="hero-content">
          <p className="tag">OFFICIAL MIXTAPE</p>
          <h1>BIG GEE</h1>
          <p className="subtitle">New music. Real motion. June 5th.</p>

          <div className="buttons">
            <a href="#visual" className="btn primary">Watch Preview</a>
            <a href="#tracks" className="btn secondary">Tracklist</a>
          </div>
        </div>
      </section>

      <section id="visual" className="visual-section">
        <p className="tag red">FEATURED VISUAL</p>
        <h2>Ballin Like VJ</h2>
        <p className="section-text">Official BIG GEE preview by Guelly B.</p>

        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Ballin Like VJ - BIG GEE Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section id="tracks" className="tracklist">
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

      <footer>
        <h3>GUELLY B</h3>
        <p>BIG GEE — OUT JUNE 5TH</p>
      </footer>
    </main>
  );
}
