import "./App.css";

function App() {
  return (
    <main className="site">
      <section className="hero">
        <div className="smoke"></div>

        <div className="content">
          <p className="tag">GUELLY B PRESENTS</p>
          <h1>BIG GEE</h1>
          <h2>Super Fly, Real Motion</h2>

          <p className="desc">
            New mixtape dropping June 5. Tap in for music, videos, and updates.
          </p>

          <div className="buttons">
            <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">
              Spotify
            </a>
            <a href="https://music.apple.com/artist/guelly-b" target="_blank">
              Apple Music
            </a>
            <a href="https://www.youtube.com/@guellyb" target="_blank">
              YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Latest Video</h2>
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Guelly B Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="section">
        <h2>Follow Guelly B</h2>
        <div className="socials">
          <a href="https://www.instagram.com/therealguellyb" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
          <a href="https://audiomack.com/guellyb-69de7ebc" target="_blank">Audiomack</a>
        </div>
      </section>
    </main>
  );
}

export default App;
