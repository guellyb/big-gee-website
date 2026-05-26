import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    released: false,
  });

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = releaseDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          released: true,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
        released: false,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [releaseDate]);

  return (
    <div className="site">
      {loading && (
        <div className="loader">
          <h1>BIG GEE</h1>
          <p>LOADING THE MOTION...</p>
        </div>
      )}

      <div className="overlay"></div>
      <div className="grain"></div>
      <div className="cursorGlow"></div>

      <div className="smoke smoke1"></div>
      <div className="smoke smoke2"></div>
      <div className="smoke smoke3"></div>

      <div className="redLight light1"></div>
      <div className="redLight light2"></div>
      <div className="redLight light3"></div>

      <nav className="nav">
        <span>GUELLY B</span>

        <div className="desktopLinks">
          <a href="#cover">Cover</a>
          <a href="#music">Music</a>
          <a href="#gallery">Gallery</a>
          <a href="#updates">Updates</a>
          <a href="#bio">Bio</a>
          <a href="#merch">Merch</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="menuBtn" onClick={() => setMenuOpen(true)}>
          MENU
        </button>
      </nav>

      <div className={menuOpen ? "mobileMenu active" : "mobileMenu"}>
        <button className="closeBtn" onClick={() => setMenuOpen(false)}>
          ×
        </button>

        <a href="#cover" onClick={() => setMenuOpen(false)}>Cover</a>
        <a href="#music" onClick={() => setMenuOpen(false)}>Music</a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a href="#updates" onClick={() => setMenuOpen(false)}>Updates</a>
        <a href="#bio" onClick={() => setMenuOpen(false)}>Bio</a>
        <a href="#merch" onClick={() => setMenuOpen(false)}>Merch</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <header className="hero">
        <video className="heroVideo" autoPlay muted loop playsInline>
          <source src="/trailer.mp4" type="video/mp4" />
        </video>

        <div className="heroContent">
          <p className="tag">GUELLY B PRESENTS</p>

          <h1>BIG GEE</h1>

          <h2>Super Fly, Real Motion</h2>

          <p className="date">
            {timeLeft.released ? "BIG GEE Out Now" : "Mixtape Out June 5th"}
          </p>

          {!timeLeft.released && (
            <div className="countdown">
              <div><span>{timeLeft.days}</span><p>DAYS</p></div>
              <div><span>{timeLeft.hours}</span><p>HOURS</p></div>
              <div><span>{timeLeft.minutes}</span><p>MIN</p></div>
              <div><span>{timeLeft.seconds}</span><p>SEC</p></div>
            </div>
          )}

          <div className="visualizer">
            <span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span><span></span>
          </div>

          <div className="buttons">
            <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
            <a href="https://music.apple.com/us/artist/guelly-b/1811052340" target="_blank">Apple Music</a>
            <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
            <a href="https://www.instagram.com/therealguellyb/" target="_blank">Instagram</a>
            <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
          </div>

          <p className="scrollText">↓ ENTER THE BIG GEE ERA ↓</p>
        </div>
      </header>

      <section className="coverSection" id="cover">
        <div className="coverText">
          <p className="smallTitle">OFFICIAL MIXTAPE</p>

          <h2>BIG GEE</h2>

          <p>
            A cinematic project from Guelly B built on pain, pressure,
            confidence, survival, and real motion.
          </p>
        </div>

        <img src="/cover.jpg" alt="BIG GEE Cover" className="coverArt" />
      </section>

      <section className="musicSection" id="music">
        <p className="smallTitle">STREAM GUELLY B</p>

        <h2>Music Preview</h2>

        <div className="musicCard">
          <iframe
            className="spotifyEmbed"
            src="https://open.spotify.com/embed/artist/0WdypKNxCbHK0vLNgujumS?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"
          ></iframe>
        </div>
      </section>

      <section className="gallerySection" id="gallery">
        <p className="smallTitle">VISUAL WORLD</p>

        <h2>Gallery</h2>

        <div className="galleryGrid">
          <div className="galleryItem">
            <img src="/cover.jpg" alt="BIG GEE Cover" />
          </div>

          <div className="galleryItem">
            <img src="/gallery1.jpg" alt="Gallery One" />
          </div>

          <div className="galleryItem">
            <img src="/gallery2.jpg" alt="Gallery Two" />
          </div>
        </div>
      </section>

      <section className="updatesSection" id="updates">
        <div className="updatesCard">
          <p className="smallTitle">STAY READY</p>

          <h2>Fan Updates</h2>

          <p>
            Tap in with Guelly B for new music, visuals, merch drops,
            behind-the-scenes updates, and exclusive BIG GEE news.
          </p>

          <div className="updateList">
            <div className="updateItem">
              <span>●</span>
              <p>BIG GEE rollout officially active.</p>
            </div>

            <div className="updateItem">
              <span>●</span>
              <p>New visuals and snippets dropping soon.</p>
            </div>

            <div className="updateItem">
              <span>●</span>
              <p>Exclusive merch loading.</p>
            </div>
          </div>

          <form
            className="fanForm"
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email for updates"
              required
            />

            <button type="submit">Stay Ready</button>
          </form>

          <p className="formNote">
            Replace YOUR_FORM_ID with your Formspree link when ready.
          </p>
        </div>
      </section>

      <section className="bioSection" id="bio">
        <div className="bioCard">
          <p className="smallTitle">WHO IS GUELLY B</p>

          <h2>The Story</h2>

          <p>
            Guelly B, born and raised in Nassau, Bahamas, is a rapper and
            songwriter known for energetic and heartfelt lyrics that speak
            volume about his personal experiences and creative thinking
            growing up.
          </p>

          <p>
            His first record was released in 2020 and the rest was history.
          </p>
        </div>
      </section>

      <section className="merchSection" id="merch">
        <p className="smallTitle">GUELLY B MERCH</p>

        <h2>Official Gear</h2>

        <div className="merchGrid">
          <div className="merchItem">
            <div className="merchImage">BIG GEE</div>
            <h3>BIG GEE Tee</h3>
            <p>Coming Soon</p>
          </div>

          <div className="merchItem">
            <div className="merchImage">GB</div>
            <h3>Motion Hoodie</h3>
            <p>Coming Soon</p>
          </div>

          <div className="merchItem">
            <div className="merchImage">242</div>
            <h3>Bahamas Drop</h3>
            <p>Coming Soon</p>
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactCard">
          <p className="smallTitle">BOOKINGS / FEATURES / PRESS</p>

          <h2>Contact Guelly B</h2>

          <a href="mailto:guellybmusic@gmail.com" className="emailBtn">
            guellybmusic@gmail.com
          </a>
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
