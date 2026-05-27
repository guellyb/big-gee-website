import "./App.css";
import { useEffect, useState } from "react";

const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

function App() {
  return (
    <main className="site">
      <div className="intro">
        <div className="introSmoke"></div>

        <h1>BIG GEE</h1>
        <p>Motion Loading...</p>
      </div>

      <div className="smoke"></div>
      <div className="grain"></div>

      <nav className="nav">
        <h2>GUELLY B</h2>

        <div>
          <a href="#music">Music</a>
          <a href="#era">Era</a>
          <a href="#gallery">Gallery</a>
          <a href="#updates">Updates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroGlow"></div>

        <p className="tag">Guelly B Presents</p>

        <h1>BIG GEE</h1>

        <h3>Super Fly, Real Motion</h3>

        <p className="date">Mixtape Out June 5th</p>

        <Countdown />

        <div className="heroBtns">
          <a
            href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS"
            target="_blank"
          >
            Spotify
          </a>

          <a
            href="https://music.apple.com/search?term=Guelly%20B"
            target="_blank"
          >
            Apple Music
          </a>

          <a
            href="https://www.youtube.com/@guellyb"
            target="_blank"
          >
            YouTube
          </a>
        </div>
      </section>

      <section className="videoSection" id="music">
        <h2>Latest Visual</h2>

        <div className="videoBox">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0?autoplay=1&mute=1&loop=1&playlist=brsxymjwT_0"
            title="BIG GEE"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="streaming">
        <h2>Streaming Platforms</h2>

        <div className="cards">
          <a
            href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS"
            target="_blank"
          >
            Spotify
          </a>

          <a
            href="https://music.apple.com/search?term=Guelly%20B"
            target="_blank"
          >
            Apple Music
          </a>

          <a
            href="https://www.youtube.com/@guellyb"
            target="_blank"
          >
            YouTube
          </a>

          <a
            href="https://audiomack.com/guellyb-69de7ebc"
            target="_blank"
          >
            Audiomack
          </a>

          <a
            href="https://www.instagram.com/therealguellyb"
            target="_blank"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@guellyb"
            target="_blank"
          >
            TikTok
          </a>
        </div>
      </section>

      <section className="era" id="era">
        <div className="eraOverlay"></div>

        <p>ENTER THE</p>

        <h2>BIG GEE ERA</h2>

        <span>
          Luxury motion. Street pressure. Cinematic energy.
        </span>
      </section>

      <section className="gallery" id="gallery">
        <h2>Visual Gallery</h2>

        <div className="photoGrid">
          <img src="/artist1.jpg" alt="" />
          <img src="/artist2.jpg" alt="" />
          <img src="/cover.jpg" alt="" />
        </div>
      </section>

      <section className="updates" id="updates">
        <h2>Fan Updates</h2>

        <div className="updateList">
          <div>
            <b>BIG GEE rollout active</b>

            <p>
              Official rollout has started for the mixtape release.
            </p>
          </div>

          <div>
            <b>New visuals loading</b>

            <p>
              More music videos and snippets dropping soon.
            </p>
          </div>

          <div>
            <b>Merch in production</b>

            <p>
              Official BIG GEE merchandise coming soon.
            </p>
          </div>
        </div>
      </section>

      <section className="merch">
        <div className="merchGlow"></div>

        <h2>Merch</h2>

        <p>Official BIG GEE collection coming soon.</p>

        <button>COMING SOON</button>
      </section>

      <section className="contact" id="contact">
        <h2>Join The Motion</h2>

        <form
          action="https://formspree.io/f/xojbpkoa"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <button type="submit">
            Stay Updated
          </button>
        </form>
      </section>

      <footer>
        <div className="ticker">
          <span>
            GUELLY B • BIG GEE • MIXTAPE OUT JUNE 5TH •
            SUPER FLY REAL MOTION •
          </span>
        </div>

        <div className="footerLinks">
          <a
            href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS"
            target="_blank"
          >
            Spotify
          </a>

          <a
            href="https://music.apple.com/search?term=Guelly%20B"
            target="_blank"
          >
            Apple Music
          </a>

          <a
            href="https://www.youtube.com/@guellyb"
            target="_blank"
          >
            YouTube
          </a>

          <a
            href="https://www.instagram.com/therealguellyb"
            target="_blank"
          >
            Instagram
          </a>
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
        days: Math.max(
          0,
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ),

        hours: Math.max(
          0,
          Math.floor(
            (distance / (1000 * 60 * 60)) % 24
          )
        ),

        minutes: Math.max(
          0,
          Math.floor((distance / (1000 * 60)) % 60)
        ),

        seconds: Math.max(
          0,
          Math.floor((distance / 1000) % 60)
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div>
        <strong>{time.days}</strong>
        <span>Days</span>
      </div>

      <div>
        <strong>{time.hours}</strong>
        <span>Hours</span>
      </div>

      <div>
        <strong>{time.minutes}</strong>
        <span>Minutes</span>
      </div>

      <div>
        <strong>{time.seconds}</strong>
        <span>Seconds</span>
      </div>
    </div>
  );
}

export default App;
