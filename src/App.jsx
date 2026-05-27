import { useEffect, useState } from "react";
import "./App.css";

const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

function App() {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = releaseDate - now;

      if (distance <= 0) {
        setTime({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      setTime({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((distance / 1000) % 60)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="site">
      <div className="intro">
        <h1>Big Gee</h1>
        <p>Motion Loading</p>
      </div>

      <div className="luxuryBg">
        <div className="smoke one"></div>
        <div className="smoke two"></div>
        <div className="smoke three"></div>
      </div>

      <section className="hero">
        <img src="/cover.jpg" className="cover" alt="BIG GEE cover" />

        <div className="heroText">
          <p>Guelly B Presents</p>
          <h1>BIG GEE</h1>
          <h2>Super Fly, Real Motion</h2>
          <h3>Mixtape Out June 5th</h3>
          <a href="#music">Enter Big Gee Era</a>
        </div>
      </section>

      <section className="countdown">
        <p>Official Countdown</p>
        <h2>BIG GEE Drops In</h2>

        <div className="clock">
          <div><span>{time.days}</span><small>Days</small></div>
          <div><span>{time.hours}</span><small>Hours</small></div>
          <div><span>{time.minutes}</span><small>Minutes</small></div>
          <div><span>{time.seconds}</span><small>Seconds</small></div>
        </div>
      </section>

      <section id="music" className="section">
        <p>Official Video</p>
        <h2>Watch The Motion</h2>

        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Guelly B Music Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="section">
        <p>Gallery</p>
        <h2>Big Gee Visuals</h2>

        <div className="gallery">
          <img src="/hero2.jpg" alt="Guelly B" />
          <img src="/gallery1.jpg" alt="Guelly B" />
          <img src="/gallery2.jpg" alt="Guelly B" />
          <img src="/IMG_6567.jpg" alt="Guelly B" />
          <img src="/IMG_6750.png" alt="Guelly B" />
        </div>
      </section>

      <section className="section links">
        <p>Listen / Follow</p>
        <h2>Streaming Links</h2>

        <div className="linkGrid">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS">Spotify</a>
          <a href="https://music.apple.com/us/artist/guelly-b">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb">YouTube</a>
          <a href="https://www.instagram.com/therealguellyb">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb">TikTok</a>
          <a href="https://audiomack.com/guellyb-69de7ebc">Audiomack</a>
        </div>
      </section>

      <section className="section fan">
        <p>For The Fans</p>
        <h2>Join The Vault</h2>

        <form action="https://formspree.io/f/xojbpkoa" method="POST">
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Join Now</button>
        </form>
      </section>

      <section className="section merch">
        <p>Big Gee Store</p>
        <h2>Merch Coming Soon</h2>
        <h4>Luxury drops loading...</h4>
      </section>

      <footer>
        <h2>Guelly B</h2>
        <p>BIG GEE — Mixtape Out June 5th</p>
      </footer>
    </main>
  );
}

export default App;
