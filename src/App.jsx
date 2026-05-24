import "./style.css";

export default function App() {
  const links = {
    spotify: "https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS",
    apple: "https://music.apple.com/us/artist/guelly-b",
    instagram: "https://instagram.com/therealguellyb",
    tiktok: "https://www.tiktok.com/@guellyb",
    youtube: "https://www.youtube.com/@guellyb",
    audiomack: "https://audiomack.com/guellyb-69de7ebc63e6a",
  };

  return (
    <main className="site">
      <div className="announcement">
  🚨 BIG GEE DROPS JUNE 5TH 🚨
</div>      <section className="hero">
        <div className="smoke"></div>
        <div className="overlay"></div>

        <nav className="nav">
          <h3>GUELLY B</h3>
          <div>
            <a href="#visual">WATCH</a>
            <a href="#listen">LISTEN</a>
          </div>
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

      <section id="listen" className="listen-section">
        <p className="tag red">STREAM GUELLY B</p>
        <h2>Listen Now</h2>
        <p className="section-text">Tap in before BIG GEE drops.</p>

        <div className="stream-grid">
          <a href={links.spotify} target="_blank" className="stream-card">Spotify</a>
          <a href={links.apple} target="_blank" className="stream-card">Apple Music</a>
          <a href={links.audiomack} target="_blank" className="stream-card">Audiomack</a>
          <a href={links.youtube} target="_blank" className="stream-card">YouTube</a>
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

        <div className="socials">
          <a href={links.instagram} target="_blank">Instagram</a>
          <a href={links.tiktok} target="_blank">TikTok</a>
          <a href={links.youtube} target="_blank">YouTube</a>
        </div>
      </footer>
    </main>
  );
}
