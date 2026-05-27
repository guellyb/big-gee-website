import { useEffect, useState } from "react";
import "./App.css";

const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

function App() {
  return (
    <main className="site">
      <div className="intro">
        <img src="/logo.png" alt="Guelly B Logo" />
        <h1>BIG GEE</h1>
        <p>Motion Loading...</p>
      </div>

      <div className="bgSmoke"></div>
      <div className="grain"></div>

      <nav className="topNav">
        <img src="/logo.png" alt="Guelly B Logo" />
        <a href="#music">Listen</a>
      </nav>

      <section className="hero redCard">
        <p className="label">Guelly B Presents</p>
        <h1>BIG GEE</h1>
        <h2>Super Fly, Real Motion</h2>
        <p className="release">Mixtape Out June 5th</p>

        <Countdown />

        <div className="mainButtons">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/search?term=Guelly%20B" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
        </div>
      </section>

      <section className="redCard" id="music">
        <p className="label">Tap In</p>
        <h2>Stream Guelly B</h2>

        <div className="streamGrid">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/search?term=Guelly%20B" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
          <a href="https://audiomack.com/guellyb-69de7ebc" target="_blank">Audiomack</a>
          <a href="https://www.instagram.com/therealguellyb" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
        </div>
      </section>

      <section className="redCard videoCard">
        <p className="label">Latest Motion</p>
        <h2>Official Visual</h2>

        <div className="videoBox">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Guelly B Music Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="redCard eraCard">
        <p className="label">Enter The</p>
        <h2>BIG GEE ERA</h2>
        <p>Luxury motion. Street pressure. Official rollout energy.</p>
      </section>

      <section className="redCard">
        <p className="label">Visuals</p>
        <h2>The Look</h2>

        <div className="photoStack">
          <img src="/artist1.jpg" alt="Guelly B" />
          <img src="/artist2.jpg" alt="Guelly B" />
          <img src="/cover.jpg" alt="BIG GEE Cover" />
        </div>
      </section>

      <section className="redCard">
        <p className="label">Stay Ready</p>
        <h2>Fan Updates</h2>

        <div className="updates">
          <div>
            <b>BIG GEE rollout active</b>
            <p>Official mixtape rollout has started.</p>
          </div>

          <div>
            <b>New visuals loading</b>
            <p>More snippets and behind-the-scenes content coming soon.</p>
          </div>

          <div>
            <b>Merch coming soon</b>
            <p>Official BIG GEE pieces are being prepared.</p>
          </div>
        </div>
      </section>

      <section className="redCard contact">
        <p className="label">Fan Vault</p>
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
        <p>© 2026 Guelly B — BIG GEE</p>
      </footer>
    </main>
  );
}

function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
