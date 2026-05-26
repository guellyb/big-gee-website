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
      <div className="grain"></div>
      <div className="smoke smoke1"></div>
      <div className="smoke smoke2"></div>
      <div className="smoke smoke3"></div>

      <nav className="nav">
        <span>GUELLY B</span>
        <a href="#cover">Cover</a>
        <a href="#video">Video</a>
        <a href="#bio">Bio</a>
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

        <p className="scrollText">↓ ENTER THE BIG GEE ERA ↓</p>
      </header>

      <section className="coverSection" id="cover">
        <div className="coverText">
          <p className="smallTitle">OFFICIAL MIXTAPE</p>
          <h2>BIG GEE</h2>
          <p>
            A cinematic project from Guelly B built on pain, pressure,
            confidence, survival, and real motion.
          </p>
          <div className="miniStats">
            <div><strong>8</strong><span>Tracks</span></div>
            <div><strong>06.05</strong><span>Release</span></div>
            <div><strong>2026</strong><span>Era</span></div>
          </div>
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

      <section className="bioSection" id="bio">
        <div className="bioCard">
          <p className="smallTitle">WHO IS GUELLY B</p>
          <h2>The Story</h2>
          <p>
            Guelly B, born and raised in Nassau, Bahamas, is a rapper and
            songwriter known for energetic and heartfelt lyrics that speak
            volumes about his personal experiences and creative thinking
            growing up.
          </p>
          <p>
            His first record was released in 2020 — and the rest was history.
          </p>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactCard">
          <p className="smallTitle">BOOKINGS / FEATURES / PRESS</p>
          <h2>Contact Guelly B</h2>
          <p>For bookings, features, press, and business inquiries.</p>

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
        <h3>GUELLY B</h3>
        <p>BIG GEE — Mixtape Out June 5th</p>

        <div className="footerLinks">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/us/artist/guelly-b/1811052340" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
          <a href="https://www.instagram.com/therealguellyb/" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
          <a href="https://audiomack.com/guellyb-69de7ebc" target="_blank">Audiomack</a>
        </div>

        <p className="copy">© 2026 GUELLY B — BIG GEE</p>
      </footer>
    </div>
  );
}

export default App;
