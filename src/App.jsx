import { useEffect, useState } from "react";
import "./App.css";

const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

function App() {
  return (
    <main className="site">
      <div className="intro">
        <img src="/logo.png" alt="Guelly B Logo" className="introLogo" />
        <h1>BIG GEE</h1>
        <p>Motion Loading...</p>
      </div>

      <div className="smoke"></div>
      <div className="grain"></div>

      <nav className="nav">
        <img src="/logo.png" alt="Guelly B Logo" className="logo" />
        <div>
          <a href="#music">Music</a>
          <a href="#gallery">Gallery</a>
          <a href="#updates">Updates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero card">
        <p className="eyebrow">Guelly B Presents</p>
        <h1>BIG GEE</h1>
        <h2>Super Fly, Real Motion</h2>
        <p className="release">Mixtape Out June 5th</p>
        <Countdown />

        <div className="buttons">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/search?term=Guelly%20B" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
        </div>
      </section>

      <section className="card video" id="music">
        <p className="eyebrow">Official Visual</p>
        <h2>Latest Motion</h2>
        <div className="videoBox">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0?autoplay=1&mute=1&loop=1&playlist=brsxymjwT_0"
            title="Guelly B Music Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="card">
        <p className="eyebrow">Tap In</p>
        <h2>Streaming Platforms</h2>
        <div className="grid">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/search?term=Guelly%20B" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
          <a href="https://audiomack.com/guellyb-69de7ebc" target="_blank">Audiomack</a>
          <a href="https://www.instagram.com/therealguellyb" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
        </div>
      </section>

      <section className="era card">
        <p className="eyebrow">Enter The</p>
        <h2>BIG GEE ERA</h2>
        <p>Luxury motion. Street pressure. Official rollout energy.</p>
      </section>

      <section className="card" id="gallery">
        <p className="eyebrow">The Look</p>
        <h2>Visual Gallery</h2>
        <div className="photos">
          <img src="/artist1.jpg" alt="Guelly B" />
          <img src="/artist2.jpg" alt="Guelly B" />
          <img src="/cover.jpg" alt="BIG GEE Cover" />
        </div>
      </section>

      <section className="card" id="updates">
        <p className="eyebrow">Stay Ready</p>
        <h2>Fan Updates</h2>
        <div className="updates">
          <div>
            <b>BIG GEE rollout active</b>
            <p>Official mixtape rollout has started.</p>
          </div>
          <div>
            <b>New visuals loading</b>
            <p>More music videos, snippets, and behind-the-scenes content coming soon.</p>
          </div>
          <div>
            <b>Merch coming soon</b>
            <p>Official BIG GEE pieces are being prepared.</p>
          </div>
        </div>
      </section>

      <section className="card merch">
        <p className="eyebrow">Official Drop</p>
        <h2>Merch</h2>
        <p>Official BIG GEE collection coming soon.</p>
        <button>Coming Soon</button>
      </section>

      <section className="card contact" id="contact">
        <p className="eyebrow">Fan Vault</p>
        <h2>Join The Motion</h2>
        <form action="https://formspree.io/f/xojbpkoa" method="POST">
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Stay Updated</button>
        </form>
      </section>

      <div className="floatingPlayer">
        <span>BIG GEE</span>
        <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Listen Now</a>
      </div>

      <footer>
        <div className="ticker">
          <span>GUELLY B • BIG GEE • MIXTAPE OUT JUNE 5TH • SUPER FLY REAL MOTION • </span>
        </div>
        <p>© 2026 Guelly B — BIG GEE</p>
      </footer>
    </main>
  );
}

function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const distance = releaseDate - new Date().getTime();

      setTime({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((distance / (1000 * 60)) % 60)),
        seconds: Math.max(0, Math.floor((distance / 1000) % 60)),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div><strong>{time.days}</strong><span>Days</span></div>
      <div><strong>{time.hours}</strong><span>Hours</span></div>
      <div><strong>{time.minutes}</strong><span>Minutes</span></div>
      <div><strong>{time.seconds}</strong><span>Seconds</span></div>
    </div>
  );
}

export default App;
