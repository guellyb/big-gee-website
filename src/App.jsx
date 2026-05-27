import "./App.css";

const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

function App() {
  return (
    <main className="site">
      <div className="intro">
        <h1>BIG GEE</h1>
        <p>Motion Loading...</p>
      </div>

      <div className="smoke"></div>
      <div className="grain"></div>

      <nav className="nav">
        <h2>GUELLY B</h2>
        <div>
          <a href="#music">Music</a>
          <a href="#era">Era</a>
          <a href="#updates">Updates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="tag">Guelly B Presents</p>
        <h1>BIG GEE</h1>
        <h3>Super Fly, Real Motion</h3>
        <p className="date">Mixtape Out June 5th</p>

        <Countdown />

        <div className="heroBtns">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
        </div>
      </section>

      <section className="video" id="music">
        <h2>Latest Visual</h2>
        <div className="videoBox">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Guelly B Music Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="streaming">
        <h2>Stream Guelly B</h2>
        <div className="cards">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/search?term=Guelly%20B" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
          <a href="https://audiomack.com/guellyb-69de7ebc" target="_blank">Audiomack</a>
          <a href="https://www.instagram.com/therealguellyb" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
        </div>
      </section>

      <section className="era" id="era">
        <p>Enter The</p>
        <h2>BIG GEE ERA</h2>
        <span>Luxury motion. Street pressure. Official rollout.</span>
      </section>

      <section className="gallery">
        <h2>Visuals</h2>
        <div className="photoGrid">
          <img src="/artist1.jpg" alt="Guelly B" />
          <img src="/artist2.jpg" alt="Guelly B" />
          <img src="/cover.jpg" alt="BIG GEE Cover" />
        </div>
      </section>

      <section className="updates" id="updates">
        <h2>Fan Updates</h2>
        <div className="updateList">
          <div>
            <b>BIG GEE rollout active</b>
            <p>Mixtape loading for June 5th.</p>
          </div>
          <div>
            <b>New visuals coming</b>
            <p>More music videos and snippets on the way.</p>
          </div>
          <div>
            <b>Merch coming soon</b>
            <p>Official BIG GEE pieces are being prepared.</p>
          </div>
        </div>
      </section>

      <section className="merch">
        <h2>Merch</h2>
        <p>Official BIG GEE merch coming soon.</p>
        <button>Coming Soon</button>
      </section>

      <section className="contact" id="contact">
        <h2>Join The Motion</h2>
        <form action="https://formspree.io/f/xojbpkoa" method="POST">
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Stay Updated</button>
        </form>
      </section>

      <footer>
        <div className="ticker">
          <span>GUELLY B • BIG GEE • MIXTAPE OUT JUNE 5TH • SUPER FLY REAL MOTION • </span>
        </div>
        <p>© 2026 Guelly B. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

function Countdown() {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((distance / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((distance / 1000) % 60));

  return (
    <div className="countdown">
      <div><strong>{days}</strong><span>Days</span></div>
      <div><strong>{hours}</strong><span>Hours</span></div>
      <div><strong>{minutes}</strong><span>Minutes</span></div>
      <div><strong>{seconds}</strong><span>Seconds</span></div>
    </div>
  );
}

export default App;
