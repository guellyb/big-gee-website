import "./App.css";

function App() {
  return (
    <div className="site">
      <section className="hero">
        <div className="smoke smoke1"></div>
        <div className="smoke smoke2"></div>

        <div className="hero-content">
          <p className="tag">GUELLY B PRESENTS</p>
          <h1>BIG GEE</h1>
          <h2>Super Fly, Real Motion</h2>

          <p className="desc">
            New mixtape dropping June 5th. Real music, real motion, no fake energy.
          </p>

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

      <section className="links">
        <h2>Follow Guelly B</h2>
        <div className="socials">
          <a href="https://www.instagram.com/therealguellyb" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
          <a href="https://music.apple.com/artist/guelly-b" target="_blank">Apple Music</a>
        </div>
      </section>
    </div>
  );
}

export default App;
