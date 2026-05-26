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
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
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
        <a href="#music">Music</a>
        <a href="#video">Video</a>
        <a href="#tracklist">Tracklist</a>
      </nav>

      <header className="hero">
        <p className="tag">GUELLY B PRESENTS</p>

        <h1>BIG GEE</h1>

        <h2>Super Fly, Real Motion</h2>

        <p className="date">Mixtape Out June 5th</p>

        <div className="countdown">
          <div className="timeBox">
            <span>{timeLeft.days}</span>
            <p>DAYS</p>
          </div>

          <div className="timeBox">
            <span>{timeLeft.hours}</span>
            <p>HOURS</p>
          </div>

          <div className="timeBox">
            <span>{timeLeft.minutes}</span>
            <p>MIN</p>
          </div>

          <div className="timeBox">
            <span>{timeLeft.seconds}</span>
            <p>SEC</p>
          </div>
        </div>

        <div className="buttons">
          <a
            href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS"
            target="_blank"
          >
            Spotify
          </a>

          <a
            href="https://music.apple.com/us/artist/guelly-b/1811052340"
            target="_blank"
          >
            Apple Music
          </a>

          <a href="https://www.youtube.com/@guellyb" target="_blank">
            YouTube
          </a>

          <a href="https://audiomack.com/guellyb-69de7ebc" target="_blank">
            Audiomack
          </a>
        </div>

        <div className="scrollText">↓ ENTER THE BIG GEE ERA ↓</div>
      </header>

      <section className="cinematicSection" id="music">
        <div className="glassCard">
          <p className="smallTitle">THE PROJECT</p>

          <h2>BIG GEE</h2>

          <p>
            Cinematic pain music mixed with pressure, hunger, lifestyle, and
            real motion.
          </p>

          <p>
            Dark visuals. Real stories. Superstar energy. Built for the fans
            who understand the grind.
          </p>
        </div>
      </section>

      <section className="statsSection">
        <div className="stat">
          <h3>8</h3>
          <p>Tracks</p>
        </div>

        <div className="stat">
          <h3>06.05</h3>
          <p>Release Date</p>
        </div>

        <div className="stat">
          <h3>BIG</h3>
          <p>Energy</p>
        </div>
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

      <section className="promoSection">
        <div className="promoCard">
          <h2>Stream BIG GEE Everywhere</h2>

          <p>
            Follow Guelly B now so you are locked in when the project drops.
          </p>

          <div className="buttons">
            <a
              href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS"
              target="_blank"
            >
              Follow On Spotify
            </a>

            <a href="https://www.youtube.com/@guellyb" target="_blank">
              Subscribe On YouTube
            </a>
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
