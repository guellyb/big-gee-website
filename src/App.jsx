import { useEffect, useState } from "react";
import "./App.css";

const releaseDate = new Date("June 5, 2026 00:00:00").getTime();

const links = [
  { name: "Spotify", url: "https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" },
  { name: "Apple Music", url: "https://music.apple.com/artist/guelly-b" },
  { name: "YouTube", url: "https://www.youtube.com/@guellyb" },
  { name: "Instagram", url: "https://www.instagram.com/therealguellyb" },
  { name: "TikTok", url: "https://www.tiktok.com/@guellyb" },
  { name: "Audiomack", url: "https://audiomack.com/guellyb-69de7ebc" },
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

const updates = [
  "BIG GEE mixtape drops June 5th.",
  "New snippets, visuals, and behind-the-scenes content coming soon.",
  "Join the motion and stay locked in with Guelly B.",
];

const photos = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg"];

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

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", mins: "00", secs: "00" });
        return;
      }

      setTimeLeft({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        mins: String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0"),
        secs: String(Math.floor((distance / 1000) % 60)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="site">
      <div className="intro">
        <h1>Big Gee</h1>
        <p>Motion Loading</p>
      </div>

      <div className="grain"></div>
      <div className="smoke smoke1"></div>
      <div className="smoke smoke2"></div>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Guelly B Presents</p>
          <h1>BIG GEE</h1>
          <h2>Super Fly, Real Motion</h2>
          <p className="date">Mixtape Out June 5th</p>

          <div className="countdown">
            <div><strong>{timeLeft.days}</strong><span>Days</span></div>
            <div><strong>{timeLeft.hours}</strong><span>Hours</span></div>
            <div><strong>{timeLeft.mins}</strong><span>Mins</span></div>
            <div><strong>{timeLeft.secs}</strong><span>Secs</span></div>
          </div>

          <div className="heroBtns">
            <a className="mainBtn" href="#music">Preview Music</a>
            <a className="ghostBtn" href="#links">Stream Now</a>
          </div>
        </div>
      </section>

      <section id="music" className="section musicPlayer">
        <p className="eyebrow">Now Playing</p>
        <h2>BIG GEE Preview</h2>
        <p>Press play and step into the motion.</p>

        <audio controls>
          <source src="/preview.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="videoSection">
        <video src="/trailer.mp4" autoPlay muted loop playsInline></video>
        <div className="videoOverlay">
          <p className="eyebrow">Official Trailer</p>
          <h2>Enter The Big Gee Era</h2>
          <p>Dark visuals. Real motion. June 5th.</p>
        </div>
      </section>

      <section id="links" className="section">
        <p className="eyebrow">Tap In</p>
        <h2>Streaming Links</h2>
        <div className="linkGrid">
          {links.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          ))}
        </div>
      </section>

      <section className="section bio">
        <p className="eyebrow">The Story</p>
        <h2>Who Is Guelly B?</h2>
        <p>
          Guelly B is bringing raw motion, cinematic energy, and a street-luxury
          sound into the BIG GEE era. From Nassau to worldwide, this is pressure,
          pain, ambition, and real lifestyle music.
        </p>
      </section>

      <section className="section tracklist">
        <p className="eyebrow">Mixtape</p>
        <h2>BIG GEE Tracklist</h2>

        <div className="tracks">
          {tracklist.map((song, index) => (
            <div className="track" key={song}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{song}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Motion Archives</p>
        <h2>Photos</h2>
        <div className="photoGrid">
          {photos.map((photo, index) => (
            <img src={photo} alt={`Guelly B ${index + 1}`} key={photo} />
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">For The Fans</p>
        <h2>Fan Updates</h2>
        <div className="updates">
          {updates.map((update) => (
            <div className="updateCard" key={update}>{update}</div>
          ))}
        </div>
      </section>

      <section className="section merch">
        <p className="eyebrow">Coming Soon</p>
        <h2>BIG GEE Merch</h2>
        <div className="merchGrid">
          <div className="merchCard">
            <img src="/merch1.jpg" alt="BIG GEE Hoodie" />
            <h3>BIG GEE Hoodie</h3>
          </div>
          <div className="merchCard">
            <img src="/merch2.jpg" alt="Motion Tee" />
            <h3>Motion Tee</h3>
          </div>
        </div>
      </section>

      <section className="section join">
        <p className="eyebrow">Join The Motion</p>
        <h2>Get Fan Alerts</h2>

        <form action="https://formspree.io/f/xojbpkoa" method="POST">
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Join</button>
        </form>
      </section>

      <section className="section contact">
        <p className="eyebrow">Business</p>
        <h2>Booking / Contact</h2>
        <p>For bookings, features, visuals, or business inquiries:</p>
        <a href="mailto:theonlyguellyb@gmail.com">theonlyguellyb@gmail.com</a>
      </section>

      <footer>
        <h2>Guelly B</h2>
        <p>BIG GEE — Mixtape Out June 5th</p>
        <div className="footerLinks">
          {links.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}

export default App;
