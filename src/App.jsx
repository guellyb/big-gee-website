import "./App.css";

const links = [
  { name: "Spotify", url: "https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" },
  { name: "Apple Music", url: "https://music.apple.com/artist/guelly-b" },
  { name: "YouTube", url: "https://www.youtube.com/@guellyb" },
  { name: "Instagram", url: "https://www.instagram.com/therealguellyb" },
  { name: "TikTok", url: "https://www.tiktok.com/@guellyb" },
  { name: "Audiomack", url: "https://audiomack.com/guellyb-69de7ebc" },
];

const updates = [
  "BIG GEE mixtape drops June 5th.",
  "New visuals and snippets coming soon.",
  "Join the motion before the world catches up.",
];

const photos = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
];

function App() {
  return (
    <main className="site">
      <div className="intro">
        <h1>Big Gee</h1>
        <p>Motion Loading</p>
      </div>

      <div className="smoke smoke1"></div>
      <div className="smoke smoke2"></div>
      <div className="grain"></div>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Guelly B Presents</p>
          <h1>BIG GEE</h1>
          <h2>Super Fly, Real Motion</h2>
          <p className="date">Mixtape Out June 5th</p>

          <div className="countdown">
            <div><strong>00</strong><span>Days</span></div>
            <div><strong>00</strong><span>Hours</span></div>
            <div><strong>00</strong><span>Mins</span></div>
            <div><strong>00</strong><span>Secs</span></div>
          </div>

          <a className="mainBtn" href="#links">Stream Guelly B</a>
        </div>
      </section>

      <section id="links" className="section">
        <p className="eyebrow">Tap In</p>
        <h2>Streaming Links</h2>
        <div className="linkGrid">
          {links.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          ))}
        </div>
      </section>

      <section className="era">
        <p className="eyebrow">Enter</p>
        <h2>The Big Gee Era</h2>
        <p>
          This is more than a mixtape. This is the motion, the pressure, the
          story, and the world of Guelly B.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Motion Archives</p>
        <h2>Photos</h2>
        <div className="photoGrid">
          {photos.map((photo, index) => (
            <img src={photo} alt={`Guelly B ${index + 1}`} key={photo} />
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">For The Fans</p>
        <h2>Fan Updates</h2>
        <div className="updates">
          {updates.map((update) => (
            <div className="updateCard" key={update}>{update}</div>
          ))}
        </div>
      </section>

      <section className="section merch">
        <p className="eyebrow">Coming Soon</p>
        <h2>BIG GEE Merch</h2>
        <p>Limited drops. Street luxury. Real motion only.</p>
        <button>Merch Coming Soon</button>
      </section>

      <section className="section join">
        <p className="eyebrow">Join The Motion</p>
        <h2>Get Fan Alerts</h2>
        <form action="https://formspree.io/f/xojbpkoa" method="POST">
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Join</button>
        </form>
      </section>

      <footer>
        <h2>Guelly B</h2>
        <p>BIG GEE — Mixtape Out June 5th</p>
        <div className="footerLinks">
          {links.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}

export default App;
