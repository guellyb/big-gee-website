import { useEffect, useState } from "react";
import "./App.css";

const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

function App() {
  return (
    <main className="site">
      <div className="intro">
        <h1>BIG GEE</h1>
        <p>Motion Loading</p>
      </div>

      <div className="dots"></div>
      <div className="smoke"></div>

      <nav className="nav">
        <span>GUELLY B</span>
        <a href="#music">MENU</a>
      </nav>

      <section className="hero">
        <p className="overline">GUELLY B PRESENTS</p>
        <h1>BIG GEE</h1>
        <h2>Super Fly, Real Motion</h2>
        <p className="date">Mixtape Out June 5th</p>

        <Countdown />

        <div className="audioBars">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span>
        </div>

        <div className="links" id="music">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/search?term=Guelly%20B" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
          <a href="https://www.instagram.com/therealguellyb" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
        </div>

        <p className="enter">↓ ENTER THE BIG GEE ERA ↓</p>
      </section>

      <section className="mixtape card">
        <p className="overline">OFFICIAL MIXTAPE</p>
        <h2>BIG GEE</h2>
        <img src="/cover.jpg" alt="BIG GEE Cover" />
      </section>

      <section className="preview">
        <p className="overline">STREAM GUELLY B</p>
        <h2>Music Preview</h2>
        <div className="spotifyBox">
          <img src="/artist1.jpg" alt="Guelly B" />
          <div>
            <h3>Guelly B</h3>
            <p>Top tracks</p>
            <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Follow</a>
          </div>
          <b>●</b>
        </div>
      </section>

      <section className="gallery">
        <p className="overline">VISUAL WORLD</p>
        <h2>Gallery</h2>
        <img src="/artist1.jpg" alt="Guelly B" />
        <img src="/artist2.jpg" alt="Guelly B" />
        <img src="/cover.jpg" alt="BIG GEE Cover" />
      </section>

      <section className="story card">
        <p className="overline">WHO IS GUELLY B</p>
        <h2>The Story</h2>
        <p>
          Guelly B, born and raised in Nassau, Bahamas, is a rapper and songwriter
          known for energetic and heartfelt lyrics that speak volume about his
          personal experiences and creative thinking growing up.
        </p>
        <p>
          His first record was released in 2020 and the rest was history.
        </p>
      </section>

      <section className="drop card">
        <h2>Bahamas Drop</h2>
        <p>Coming Soon</p>
      </section>

      <section className="contact card">
        <p className="overline">BOOKINGS / FEATURES / PRESS</p>
        <h2>Contact Guelly B</h2>
        <a href="mailto:guellybmusic@gmail.com">guellybmusic@gmail.com</a>
      </section>

      <footer>
        <p>GUELLY B • BIG GEE • MIXTAPE OUT JUNE 5TH</p>
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
      <div><strong>{time.days}</strong><span>DAYS</span></div>
      <div><strong>{time.hours}</strong><span>HOURS</span></div>
      <div><strong>{time.minutes}</strong><span>MIN</span></div>
      <div><strong>{time.seconds}</strong><span>SEC</span></div>
    </div>
  );
}

export default App;
