import { useEffect, useState } from "react";
import "./App.css";

const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

const links = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/artist/guelly-b",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@guellyb",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/therealguellyb",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@guellyb",
  },
];

const tracklist = [
  "Motion Only",
  "Spike Lee",
  "Start Over",
  "Ballin Like VJ",
  "Loose Screws",
  "Cheese Talk",
  "Bad B*tches",
  "Therapy Notes",
];

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = releaseDate - now;

      if (distance < 0) return;

      setTimeLeft({
        days: String(
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ).padStart(2, "0"),

        hours: String(
          Math.floor((distance / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),

        mins: String(
          Math.floor((distance / 1000 / 60) % 60)
        ).padStart(2, "0"),

        secs: String(
          Math.floor((distance / 1000) % 60)
        ).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="site">

      <div className="animatedBg"></div>
      <div className="smoke smoke1"></div>
      <div className="smoke smoke2"></div>
      <div className="grain"></div>

      <section className="hero">
        <div className="overlay"></div>

        <img src="/cover.jpg" className="heroImage" alt="BIG GEE" />

        <div className="heroContent">
          <p className="topText">GUELLY B PRESENTS</p>

          <h1>BIG GEE</h1>

          <h2>SUPER FLY, REAL MOTION</h2>

          <p className="release">
            MIXTAPE OUT JUNE 5TH
          </p>

          <div className="countdown">
            <div>
              <strong>{timeLeft.days}</strong>
              <span>DAYS</span>
            </div>

            <div>
              <strong>{timeLeft.hours}</strong>
              <span>HOURS</span>
            </div>

            <div>
              <strong>{timeLeft.mins}</strong>
              <span>MINS</span>
            </div>

            <div>
              <strong>{timeLeft.secs}</strong>
              <span>SECS</span>
            </div>
          </div>

          <div className="buttons">
            <a href="#music" className="mainBtn">
              ENTER BIG GEE ERA
            </a>

            <a href="#links" className="ghostBtn">
              STREAM NOW
            </a>
          </div>
        </div>
      </section>

      <section id="music" className="section">
        <p className="eyebrow">NOW PLAYING</p>

        <h2>BIG GEE PREVIEW</h2>

        <audio controls className="audioPlayer">
          <source src="/preview.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="section">
        <p className="eyebrow">THE WORLD OF BIG GEE</p>

        <h2>REAL MOTION ONLY</h2>

        <p className="bio">
          Guelly B blends cinematic energy, real emotion,
          pressure, ambition and lifestyle into the BIG GEE era.
          This is more than music. This is motion.
        </p>
      </section>

      <section className="gallerySection">
        <div className="gallery">
          <img src="/gallery1.jpg" alt="" />
          <img src="/gallery2.jpg" alt="" />
          <img src="/hero2.jpg" alt="" />
          <img src="/IMG_6567.jpg" alt="" />
          <img src="/IMG_6750.png" alt="" />
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">TRACKLIST</p>

        <h2>BIG GEE</h2>

        <div className="trackGrid">
          {tracklist.map((track, index) => (
            <div className="trackCard" key={track}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{track}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="links" className="section">
        <p className="eyebrow">STREAMING</p>

        <h2>LISTEN EVERYWHERE</h2>

        <div className="links">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>

      <section className="section merch">
        <p className="eyebrow">OFFICIAL MERCH</p>

        <h2>COMING SOON</h2>

        <p className="bio">
          Limited BIG GEE pieces, hoodies,
          tees and exclusive drops coming soon.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">JOIN THE MOTION</p>

        <h2>FAN ALERTS</h2>

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
            JOIN
          </button>
        </form>
      </section>

      <section className="section contact">
        <p className="eyebrow">BOOKING / BUSINESS</p>

        <h2>CONTACT</h2>

        <a href="mailto:theonlyguellyb@gmail.com">
          theonlyguellyb@gmail.com
        </a>
      </section>

      <footer>
        <h2>GUELLY B</h2>

        <p>
          BIG GEE — MIXTAPE OUT JUNE 5TH
        </p>

        <div className="footerLinks">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}

export default App;
