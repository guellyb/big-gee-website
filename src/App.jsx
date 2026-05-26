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
    const loadTimer = setTimeout(() => setLoading(false), 2200);
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

  const closeMenu = () => setMenuOpen(false);

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
          <a href="#video">Video</a>
          <a href="#gallery">Gallery</a>
          <a href="#merch">Merch</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="menuBtn" onClick={() => setMenuOpen(true)}>
          MENU
        </button>
      </nav>

      <div className={menuOpen ? "mobileMenu active" : "mobileMenu"}>
        <button className="closeBtn" onClick={closeMenu}>×</button>
        <a onClick={closeMenu} href="#cover">Cover</a>
        <a onClick={closeMenu} href="#music">Music</a>
        <a onClick={closeMenu} href="#video">Video</a>
        <a onClick={closeMenu} href="#gallery">Gallery</a>
        <a onClick={closeMenu} href="#merch">Merch</a>
        <a onClick={closeMenu} href="#contact">Contact</a>
      </div>

      <header className="hero sectionReveal">
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

      <section className="coverSection sectionReveal" id="cover">
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
            <div><strong>242</strong><span>Bahamas</span></div>
          </div>
        </div>

        <img src="/cover.jpg" alt="BIG GEE Cover" className="coverArt" />
      </section>

      <section className="musicSection sectionReveal" id="music">
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

          <p>Follow Guelly B now and be ready when BIG GEE drops.</p>

          <div className="buttons">
            <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Open Spotify</a>
            <a href="https://audiomack.com/guellyb-69de7ebc" target="_blank">Audiomack</a>
          </div>
        </div>
      </section>

      <section className="videoSection sectionReveal" id="video">
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

      <section className="tracklist sectionReveal" id="tracklist">
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

      <section className="gallerySection sectionReveal" id="gallery">
        <p className="smallTitle">VISUAL WORLD</p>
        <h2>Gallery</h2>

        <div className="galleryGrid">
          <img src="/cover.jpg" alt="Gallery One" />
          <img src="/gallery1.jpg" alt="Gallery Two" />
          <img src="/gallery2.jpg" alt="Gallery Three" />
        </div>

        <p className="note">
          Upload extra images as public/gallery1.jpg and public/gallery2.jpg.
        </p>
      </section>

      <section className="merchSection sectionReveal" id="merch">
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

      <section className="statsSection sectionReveal">
        <p className="smallTitle">THE MOTION</p>
        <h2>Artist Rollout</h2>

        <div className="statsGrid">
          <div><strong>2020</strong><span>First Record</span></div>
          <div><strong>Nassau</strong><span>Born & Raised</span></div>
          <div><strong>BIG GEE</strong><span>New Era</span></div>
        </div>
      </section>

      <section className="eventsSection sectionReveal">
        <p className="smallTitle">LIVE MOTION</p>
        <h2>Upcoming Events</h2>

        <div className="eventCard">
          <h3>Nassau, Bahamas</h3>
          <p>More dates coming soon.</p>
        </div>
      </section>

      <section className="bioSection sectionReveal" id="bio">
        <div className="bioCard">
          <p className="smallTitle">WHO IS GUELLY B</p>
          <h2>The Story</h2>

          <p>
            Guelly B, born and raised in Nassau, Bahamas, is a rapper and
            songwriter known for energetic and heartfelt lyrics that speak
            volume about his personal experiences and creative thinking growing up.
          </p>

          <p>His first record was released in 2020 and the rest was history.</p>
        </div>
      </section>

      <section className="newsletterSection sectionReveal">
        <div className="newsletterCard">
          <p className="smallTitle">JOIN THE MOTION</p>
          <h2>Fan Signup</h2>
          <p>Get updates for drops, visuals, merch, and BIG GEE news.</p>

          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Notify Me</button>
          </form>

          <p className="note">This is a front-end form. Connect Formspree later to collect emails.</p>
        </div>
      </section>

      <section className="contactSection sectionReveal" id="contact">
        <div className="contactCard">
          <p className="smallTitle">BOOKINGS / FEATURES / PRESS</p>
          <h2>Contact Guelly B</h2>
          <p>For bookings, features, press, and business inquiries.</p>

          <a href="mailto:guellybmusic@gmail.com" className="emailBtn">
            guellybmusic@gmail.com
          </a>
        </div>
      </section>

      <div className="stickyPlayer">
        <span>BIG GEE</span>
        <div className="miniBars"><i></i><i></i><i></i><i></i></div>
        <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">
          Listen
        </a>
      </div>

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
