import "./App.css";

function App() {
  return (
    <main className="page">
      <nav className="nav">
        <h1>GUELLY B</h1>
        <div>
          <a href="#music">Music</a>
          <a href="#updates">Updates</a>
          <a href="#signup">Sign Up</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="tag">BIG GEE — JUNE 5TH</p>
          <h2>Super Fly, Real Motion</h2>
          <p>
            New music, visuals, updates, and everything Guelly B in one place.
          </p>
          <a className="btn" href="#signup">Stay Ready</a>
        </div>
      </section>

      <section id="music" className="section">
        <h2>Music</h2>
        <div className="links">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/us/artist/guelly-b" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
          <a href="https://audiomack.com/guellyb-69de7ebc" target="_blank">Audiomack</a>
          <a href="https://www.instagram.com/therealguellyb" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
        </div>
      </section>

      <section className="section gallery">
        <h2>Photos</h2>
        <div className="photoGrid">
          <img src="/photo1.jpg" alt="Guelly B" />
          <img src="/photo2.jpg" alt="Guelly B" />
          <img src="/photo3.jpg" alt="Guelly B" />
        </div>
      </section>

      <section id="updates" className="section updates">
        <h2>Fan Updates</h2>
        <div className="updateBox">
          <h3>BIG GEE coming June 5th</h3>
          <p>Stay locked in for music, videos, drops, and exclusive updates.</p>
        </div>
        <div className="updateBox">
          <h3>New visuals loading</h3>
          <p>More motion, more content, more connection with the fans.</p>
        </div>
      </section>

      <section id="signup" className="section signup">
        <h2>Join The Motion</h2>
        <p>Sign up for drops, updates, and exclusive Guelly B news.</p>

        <form action="https://formspree.io/f/xojbpkoa" method="POST">
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Sign Up</button>
        </form>
      </section>

      <footer>
        <p>© 2026 Guelly B. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

export default App;
