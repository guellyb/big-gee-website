import "./App.css";

const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

function App() {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((distance / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((distance / 1000) % 60));

  return (
    <main className="site">
      <div className="intro">
        <h1>Big Gee</h1>
        <p>Motion Loading</p>
      </div>

      <section className="hero">
        <div className="smoke"></div>
        <p className="eyebrow">Guelly B Presents</p>
        <h1>BIG GEE</h1>
        <h2>Super Fly, Real Motion</h2>
        <p className="date">Mixtape Out June 5th</p>

        <div className="countdown">
          <div><span>{days}</span><p>Days</p></div>
          <div><span>{hours}</span><p>Hours</p></div>
          <div><span>{minutes}</span><p>Minutes</p></div>
          <div><span>{seconds}</span><p>Seconds</p></div>
        </div>

        <a href="#stream" className="main-btn">Enter Big Gee Era</a>
      </section>

      <section id="stream" className="section">
        <h2>Stream Guelly B</h2>
        <div className="links">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/search?term=Guelly%20B" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
          <a href="https://www.instagram.com/therealguellyb" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
          <a href="https://audiomack.com/guellyb-69de7ebc" target="_blank">Audiomack</a>
        </div>
      </section>

      <section className="section photos">
        <h2>Big Gee Era</h2>
        <div className="photo-grid">
          <img src="/biggee-1.jpg" alt="Guelly B Big Gee photo 1" />
          <img src="/biggee-2.jpg" alt="Guelly B Big Gee photo 2" />
          <img src="/biggee-3.jpg" alt="Guelly B Big Gee photo 3" />
        </div>
      </section>

      <section className="section updates">
        <h2>Fan Updates</h2>
        <div className="cards">
          <div>
            <h3>BIG GEE Drops June 5th</h3>
            <p>The motion is loading. Stay ready for the full mixtape release.</p>
          </div>
          <div>
            <h3>New Visuals Coming</h3>
            <p>Behind-the-scenes, snippets, trailers, and exclusive updates coming soon.</p>
          </div>
          <div>
            <h3>Join The Vault</h3>
            <p>Sign up below to get updates first before everybody else.</p>
          </div>
        </div>
      </section>

      <section className="section merch">
        <h2>Merch</h2>
        <p>BIG GEE merch coming soon. Hoodies, tees, and limited drops for the real supporters.</p>
        <button>Coming Soon</button>
      </section>

      <section className="section signup">
        <h2>Join The Big Gee Vault</h2>
        <form action="https://formspree.io/f/xojbpkoa" method="POST">
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Join Now</button>
        </form>
      </section>

      <section className="section contact">
        <h2>Contact</h2>
        <p>Booking, features, business, and press inquiries.</p>
        <a href="mailto:theonlyguellyb@gmail.com">theonlyguellyb@gmail.com</a>
      </section>

      <footer>
        <h3>Guelly B — Big Gee</h3>
        <p>Mixtape out June 5th</p>
        <div className="footer-links">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS">Spotify</a>
          <a href="https://music.apple.com/search?term=Guelly%20B">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb">YouTube</a>
          <a href="https://www.instagram.com/therealguellyb">IG</a>
          <a href="https://www.tiktok.com/@guellyb">TikTok</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
