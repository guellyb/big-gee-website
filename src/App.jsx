import { useEffect, useState } from "react";
import "./App.css";

const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

function App() {
  useEffect(() => {
    document.title = "Guelly B — BIG GEE";
  }, []);

  return (
    <main className="site">
      <div className="intro">
        <h1>BIG GEE</h1>
        <p>Motion Loading</p>
      </div>

      <div className="dots"></div>
      <div className="smoke"></div>
      <div className="scanline"></div>

      <nav className="nav">
        <span>GUELLY B</span>
        <a href="#music">MENU</a>
      </nav>

      <section className="hero reveal">
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

      <section className="trailer card reveal">
        <p className="overline">CINEMATIC TRAILER</p>
        <h2>BIG GEE Visual</h2>

        <div className="videoBox">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Guelly B BIG GEE Visual"
            allowFullScreen
          ></iframe>
        </div>

        <div className="trailerText">
          <span>Official Motion</span>
          <p>Watch the energy before the mixtape lands.</p>
        </div>
      </section>

      <section className="mixtape card reveal">
        <p className="overline">OFFICIAL MIXTAPE</p>
        <h2>BIG GEE</h2>
        <img src="/cover.jpg" alt="BIG GEE Cover" />

        <div className="tracklist">
          <p>TRACKLIST</p>
          <ol>
            <li>Motion Only</li>
            <li>Spike Lee</li>
            <li>Start Over</li>
            <li>Ballin Like VJ</li>
            <li>Loose Screws</li>
            <li>Cheese Talk</li>
            <li>Bad B*tches</li>
            <li>Therapy Notes</li>
          </ol>
        </div>
      </section>

      <section className="stats reveal">
        <div>
          <b>Nassau</b>
          <span>Bahamas</span>
        </div>
        <div>
          <b>Rapper</b>
          <span>Songwriter</span>
        </div>
        <div>
          <b>Since</b>
          <span>2020</span>
        </div>
      </section>

      <section className="preview reveal">
        <p className="overline">STREAM GUELLY B</p>
        <h2>Music Preview</h2>

        <div className="spotifyBox">
          <img src="/artist1.jpg" alt="Guelly B" />
          <div>
            <h3>Guelly B</h3>
            <p>Top tracks • BIG GEE era loading</p>
            <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Follow</a>
          </div>
          <b>●</b>
        </div>
      </section>

      <section className="gallery reveal">
        <p className="overline">VISUAL WORLD</p>
        <h2>Gallery</h2>

        <div className="photoCard left">
          <img src="/artist1.jpg" alt="Guelly B" />
        </div>

        <div className="photoCard right">
          <img src="/artist2.jpg" alt="Guelly B" />
        </div>

        <div className="photoCard left">
          <img src="/cover.jpg" alt="BIG GEE Cover" />
        </div>
      </section>

      <section className="updates card reveal">
        <p className="overline">FAN UPDATES</p>
        <h2>Motion Feed</h2>

        <div className="updateFeed">
          <div>
            <span>01</span>
            <b>BIG GEE rollout active</b>
            <p>Official mixtape countdown is live.</p>
          </div>

          <div>
            <span>02</span>
            <b>Visual loading</b>
            <p>More cinematic music content is on the way.</p>
          </div>

          <div>
            <span>03</span>
            <b>Merch coming</b>
            <p>Official BIG GEE pieces are being prepared.</p>
          </div>

          <div>
            <span>04</span>
            <b>Fan vault open</b>
            <p>Join the email list for first updates.</p>
          </div>
        </div>
      </section>

      <section className="story card reveal">
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

      <section className="drop card reveal">
        <h2>Bahamas Drop</h2>
        <p>Coming Soon</p>
      </section>

      <section className="merch card reveal">
        <p className="overline">OFFICIAL DROP</p>
        <h2>Merch</h2>
        <p>BIG GEE merch coming soon.</p>
        <button>Coming Soon</button>
      </section>

      <section className="signup card reveal">
        <p className="overline">FAN VAULT</p>
        <h2>Join The Motion</h2>
        <p>Get updates first when BIG GEE drops.</p>

        <form action="https://formspree.io/f/xojbpkoa" method="POST">
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Stay Updated</button>
        </form>
      </section>

      <section className="contact card reveal">
        <p className="overline">BOOKINGS / FEATURES / PRESS</p>
        <h2>Contact Guelly B</h2>
        <a href="mailto:guellybmusic@gmail.com">guellybmusic@gmail.com</a>
      </section>

      <section className="outro reveal">
        <p>GUELLY B</p>
        <h2>BIG GEE</h2>
        <span>Mixtape Out June 5th</span>
      </section>

      <a
        className="floatingListen"
        href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS"
        target="_blank"
      >
        Listen Now
      </a>

      <footer>
        <div className="footerLinks">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/search?term=Guelly%20B" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
          <a href="https://www.instagram.com/therealguellyb" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
        </div>

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
