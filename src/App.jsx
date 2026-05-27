import "./App.css";

const photos = [
  "/photos/photo1.jpg",
  "/photos/photo2.jpg",
  "/photos/photo3.jpg",
];

const socials = [
  { name: "Spotify", url: "https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/guelly-b" },
  { name: "YouTube", url: "https://www.youtube.com/@guellyb" },
  { name: "Instagram", url: "https://www.instagram.com/therealguellyb" },
  { name: "TikTok", url: "https://www.tiktok.com/@guellyb" },
  { name: "Audiomack", url: "https://audiomack.com/guellyb-69de7ebc" },
];

function App() {
  return (
    <main className="site">
      <div className="intro">
        <h1>Big Gee</h1>
        <p>Motion Loading</p>
      </div>

      <div className="bg">
        <div className="smoke smoke1"></div>
        <div className="smoke smoke2"></div>
        <div className="glow"></div>
        <div className="grain"></div>
      </div>

      <section className="hero">
        <p className="eyebrow">Guelly B Presents</p>
        <h1>BIG GEE</h1>
        <h2>Super Fly, Real Motion</h2>
        <p className="date">Mixtape Out June 5th</p>
        <a className="mainBtn" href="#music">Enter Big Gee Era</a>
      </section>

      <section className="countdown">
        <h3>BIG GEE Countdown</h3>
        <div className="countGrid">
          <div><span>00</span><p>Days</p></div>
          <div><span>00</span><p>Hours</p></div>
          <div><span>00</span><p>Minutes</p></div>
          <div><span>00</span><p>Seconds</p></div>
        </div>
      </section>

      <section id="music" className="section">
        <p className="eyebrow">Official Video</p>
        <h2>Watch The Motion</h2>
        <div className="videoBox">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Guelly B Music Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Listen Now</p>
        <h2>Streaming Links</h2>
        <div className="linkGrid">
          {socials.map((item) => (
            <a key={item.name} href={item.url} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          ))}
        </div>
      </section>

      <section className="section era">
        <p className="eyebrow">Enter The Era</p>
        <h2>Motion Only</h2>
        <p>
          BIG GEE is more than a mixtape. It’s the sound, the look, and the motion.
          From Nassau to the world.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Gallery</p>
        <h2>Big Gee Visuals</h2>
        <div className="photoGrid">
          {photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Guelly B ${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="section updates">
        <p className="eyebrow">For The Fans</p>
        <h2>Fan Updates</h2>
        <div className="updateCards">
          <div>
            <h3>Mixtape Rollout</h3>
            <p>BIG GEE drops June 5th. Stay locked in for previews, visuals, and updates.</p>
          </div>
          <div>
            <h3>Behind The Motion</h3>
            <p>Exclusive photos, video clips, and studio moments coming soon.</p>
          </div>
          <div>
            <h3>Early Access</h3>
            <p>Join the vault for unreleased music, first looks, and real fan updates.</p>
          </div>
        </div>
      </section>

      <section className="section merch">
        <p className="eyebrow">Big Gee Store</p>
        <h2>Merch Coming Soon</h2>
        <p>Hoodies, tees, posters, and exclusive BIG GEE drops loading.</p>
      </section>

      <section className="section contact">
        <p className="eyebrow">Join The Vault</p>
        <h2>Get Fan Updates</h2>
        <form action="https://formspree.io/f/xojbpkoa" method="POST">
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Join Now</button>
        </form>
      </section>

      <footer>
        <h2>Guelly B</h2>
        <p>BIG GEE — Mixtape Out June 5th</p>
        <div className="footerLinks">
          {socials.map((item) => (
            <a key={item.name} href={item.url} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}

export default App;
