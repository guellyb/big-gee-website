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
      <div className="loader">
        <h1>BIG GEE</h1>
        <p>GUELLY B</p>
      </div>

      <div className="announcement">🚨 BIG GEE DROPS JUNE 5TH 🚨</div>

      <section className="hero">
        <div className="smoke"></div>
        <div className="overlay"></div>

        <nav className="nav">
          <h3>GUELLY B</h3>
          <div>
            <a href="#visual">WATCH</a>
            <a href="#listen">LISTEN</a>
            <a href="#fanclub">FAN CLUB</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="tag">OFFICIAL MIXTAPE</p>
          <h1>BIG GEE</h1>
          <p className="subtitle">New music. Real motion. June 5th.</p>

          <div className="buttons">
            <a href="#visual" className="btn primary">Watch Preview</a>
            <a href="#listen" className="btn secondary">Listen Now</a>
          </div>
        </div>
      </section>

      <section id="visual" className="visual-section reveal">
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

      <section id="listen" className="listen-section reveal">
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

      <section className="spotify-section reveal">
        <p className="tag red">OFFICIAL ARTIST PAGE</p>
        <h2>Tap In</h2>

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

      <section className="merch-section reveal">
        <p className="tag red">COMING SOON</p>
        <h2>BIG GEE Merch</h2>
        <p className="section-text">Limited drops, exclusive pieces, and official rollout merch.</p>
        <a href={links.instagram} target="_blank" className="btn primary">Follow For Drops</a>
      </section>

      <section id="fanclub" className="fan-section reveal">
        <p className="tag red">STAY LOCKED IN</p>
        <h2>Join The Motion</h2>
        <p className="section-text">Get updates, drops, visuals, and exclusive BIG GEE news.</p>

        <form className="fan-form">
          <input type="email" placeholder="Enter your email" />
          <button type="button">Notify Me</button>
        </form>
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
