import { useEffect, useState } from "react";
import "./App.css";

const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

export default function App() {
  const [time, setTime] = useState({ days: "00", hours: "00", min: "00", sec: "00" });

  useEffect(() => {
    const tick = setInterval(() => {
      const now = Date.now();
      const distance = releaseDate - now;

      if (distance <= 0) {
        setTime({ days: "00", hours: "00", min: "00", sec: "00" });
        return;
      }

      setTime({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        min: String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0"),
        sec: String(Math.floor((distance / 1000) % 60)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  return (
    <main>
      <div className="intro">
        <h1>BIG GEE</h1>
        <p>Motion Loading</p>
      </div>

      <div className="bg">
        <span className="orb orb1"></span>
        <span className="orb orb2"></span>
        <span className="orb orb3"></span>
        <span className="orb orb4"></span>
        <span className="smoke smoke1"></span>
        <span className="smoke smoke2"></span>
      </div>

      <nav className="nav">
        <a href="#home" className="logo">GUELLY B</a>
        <a href="#music" className="menuBtn">MENU</a>
      </nav>

      <section id="home" className="hero reveal">
        <p className="smallTitle">GUELLY B PRESENTS</p>
        <h1>BIG GEE</h1>
        <h2>Super Fly, Real Motion</h2>
        <h3>Mixtape Out June 5th</h3>

        <div className="countdown">
          <div><b>{time.days}</b><span>DAYS</span></div>
          <div><b>{time.hours}</b><span>HOURS</span></div>
          <div><b>{time.min}</b><span>MIN</span></div>
          <div><b>{time.sec}</b><span>SEC</span></div>
        </div>

        <div className="musicIcon">
          <div className="play">▶</div>
          <div className="bars">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
        </div>

        <div className="streamLinks">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/us/artist/guelly-b" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
          <a href="https://www.instagram.com/therealguellyb" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
        </div>

        <p className="enter">↓ ENTER THE BIG GEE ERA ↓</p>
      </section>

      <section className="project reveal">
        <p className="smallTitle">OFFICIAL MIXTAPE</p>
        <h2>BIG GEE</h2>
        <p>
          A cinematic project from Guelly B built on pain, pressure, confidence,
          survival, and real motion.
        </p>
        <img src="/cover.jpg" alt="BIG GEE cover" />
      </section>

      <section id="music" className="preview reveal">
        <p className="smallTitle">STREAM GUELLY B</p>
        <h2>Music Preview</h2>

        <div className="spotifyCard">
          <div className="topCard">
            <img src="/IMG_6750.png" alt="Guelly B" />
            <div>
              <h3>Guelly B</h3>
              <p>Top tracks</p>
              <button>Follow</button>
            </div>
            <span className="spotifyLogo">●</span>
          </div>

          <div className="playerRow">
            <span>Preview</span>
            <b>◀</b>
            <b>▶</b>
            <b>•••</b>
            <button>▶</button>
          </div>

          <div className="track"><span>1</span><b>White Tee</b><em>02:44</em></div>
          <div className="track"><span>2</span><b>Bad Habit</b><em>02:08</em></div>
          <div className="track"><span>3</span><b>Where The Love At</b><em>02:24</em></div>
        </div>
      </section>

      <section className="videoSection reveal">
        <p className="smallTitle">OFFICIAL VIDEO</p>
        <h2>Watch The Motion</h2>
        <div className="videoBox">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Guelly B Music Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="gallery reveal">
        <p className="smallTitle">VISUAL WORLD</p>
        <h2>Gallery</h2>
        <img src="/cover.jpg" alt="cover" />
        <img src="/gallery1.jpg" alt="gallery" />
        <img src="/gallery2.jpg" alt="gallery" />
        <img src="/hero2.jpg" alt="hero" />
        <img src="/IMG_6567.jpg" alt="gallery" />
      </section>

      <section className="fan card reveal">
        <p className="smallTitle">STAY READY</p>
        <h2>Fan Updates</h2>
        <p>Get updates on music, visuals, behind-the-scenes moments, and BIG GEE drops.</p>

        <form action="https://formspree.io/f/xojbpkoa" method="POST">
          <input name="email" type="email" placeholder="Enter your email for updates" required />
          <button type="submit">Join The Vault</button>
        </form>
      </section>

      <section className="story card reveal">
        <p className="smallTitle">WHO IS GUELLY B</p>
        <h2>The Story</h2>
        <p>
          Guelly B, born and raised in Nassau, Bahamas, is a rapper and songwriter
          known for energetic and heartfelt lyrics that speak volume about his
          personal experiences, ambition, and real motion.
        </p>
      </section>

      <section className="merch reveal">
        <p className="smallTitle">BIG GEE STORE</p>
        <h2>Merch</h2>

        <div className="merchCard">
          <div className="mock">BIG GEE</div>
          <h3>BIG GEE Tee</h3>
          <p>Coming Soon</p>
        </div>

        <div className="merchCard">
          <div className="mock">GB</div>
          <h3>Motion Hoodie</h3>
          <p>Coming Soon</p>
        </div>
      </section>

      <section className="contact card reveal">
        <p className="smallTitle">BOOKINGS / FEATURES / PRESS</p>
        <h2>Contact Guelly B</h2>
        <a href="mailto:guellybmusic@gmail.com">guellybmusic@gmail.com</a>
      </section>

      <footer>
        <h2>GUELLY B</h2>
        <p>BIG GEE — Mixtape Out June 5th</p>
        <div>
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/us/artist/guelly-b" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
          <a href="https://www.instagram.com/therealguellyb" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
          <a href="https://audiomack.com/guellyb-69de7ebc" target="_blank">Audiomack</a>
        </div>
        <small>© 2026 GUELLY B — BIG GEE</small>
      </footer>
    </main>
  );
}
