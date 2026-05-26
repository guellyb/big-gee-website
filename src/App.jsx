import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
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
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [releaseDate]);

  return (
    <div className="site">
      <div className="overlay"></div>
      <div className="smoke smoke1"></div>
      <div className="smoke smoke2"></div>

      <nav className="nav">
        <span>GUELLY B</span>
        <a href="#cover">Cover</a>
        <a href="#video">Video</a>
        <a href="#tracklist">Tracklist</a>
        <a href="#contact">Contact</a>
      </nav>

      <header className="hero">
        <p className="tag">GUELLY B PRESENTS</p>
        <h1>BIG GEE</h1>
        <h2>Super Fly, Real Motion</h2>
        <p className="date">Mixtape Out June 5th</p>

        <div className="countdown">
          <div><span>{timeLeft.days}</span><p>DAYS</p></div>
          <div><span>{timeLeft.hours}</span><p>HOURS</p></div>
          <div><span>{timeLeft.minutes}</span><p>MIN</p></div>
          <div><span>{timeLeft.seconds}</span><p>SEC</p></div>
        </div>

        <div className="buttons">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/us/artist/guelly-b/1811052340" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
          <a href="https://www.instagram.com/therealguellyb/" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
        </div>
      </header>

      <section className="coverSection" id="cover">
        <div className="coverText">
          <p className="smallTitle">OFFICIAL COVER ART</p>
          <h2>BIG GEE</h2>
          <p>
            A cinematic project from Guelly B built on pressure, pain,
            confidence, and real motion.
          </p>
        </div>

        <img src="/cover.jpg" alt="BIG GEE cover art" className="coverArt" />
      </section>

      <section className="videoSection" id="video">
        <p className="smallTitle">OFFICIAL VISUAL</p>
        <h2>Watch The Motion</h2>

        <div className="videoBox">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Guelly B Official Visual"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="tracklist" id="tracklist">
        <p className="smallTitle">BIG GEE</p>
        <h2>Tracklist</h2>

        <div className="tracks">
          <div className="track">01 — Motion Only</div>
          <div className="track">02 — Spike Lee</div>
          <div className="track">03 — Start Over</div>
          <div className="track">04 — Ballin Like VJ</div>
          <div className="track">05 — Loose Screws</div>
          <div className="track">06 — Cheese Talk</div>
          <div className="track">07 — Bad B*tches</div>
          <div className="track">08 — Therapy Notes</div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactCard">
          <p className="smallTitle">BOOKINGS / FEATURES / PRESS</p>
          <h2>Contact Guelly B</h2>
          <a href="mailto:guellybmusic@gmail.com" className="emailBtn">
            guellybmusic@gmail.com
          </a>

          <div className="buttons">
            <a href="https://www.instagram.com/therealguellyb/" target="_blank">Instagram</a>
            <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
            <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 GUELLY B — BIG GEE</p>
      </footer>
    </div>
  );
}

export default App;
