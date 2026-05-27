import { useEffect, useState } from "react";
import "./App.css";

const FORM_ENDPOINT = "https://formspree.io/f/xojbpkoa";
const RELEASE_DATE = new Date("June 5, 2026 00:00:00").getTime();

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = RELEASE_DATE - now;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      setTimeLeft({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((distance / 1000) % 60)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(item => observer.observe(item));
    return () => items.forEach(item => observer.unobserve(item));
  }, []);

  useEffect(() => {
    const glow = document.querySelector(".cursorGlow");

    const moveGlow = e => {
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <main className="site">
      <div className="intro">
        <div className="introFlash"></div>
        <h1>BIG GEE</h1>
        <p>Motion Loading</p>
      </div>

      <div className="cursorGlow"></div>
      <div className="grain"></div>
      <div className="smoke smoke1"></div>
      <div className="smoke smoke2"></div>
      <div className="embers"></div>

      <video className="bgVideo" autoPlay muted loop playsInline>
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      <div className="ticker">
        <div>
          BIG GEE OUT JUNE 5TH • SUPER FLY REAL MOTION • GUELLY B PRESENTS • ENTER THE BIG GEE ERA •
          BIG GEE OUT JUNE 5TH • SUPER FLY REAL MOTION •
        </div>
      </div>

      <section className="hero">
        <p className="eyebrow reveal">Guelly B Presents</p>
        <h1 className="reveal">BIG GEE</h1>
        <h2 className="reveal">Super Fly, Real Motion</h2>
        <p className="date reveal">Mixtape Out June 5th</p>

        <div className="coverWrap reveal">
          <img src="/biggee-cover.jpg" alt="BIG GEE cover" className="cover" />
          <div className="redGlow"></div>
          <div className="lensFlare"></div>
        </div>

        <div className="countdown reveal">
          <div><span>{timeLeft.days}</span><small>Days</small></div>
          <div><span>{timeLeft.hours}</span><small>Hours</small></div>
          <div><span>{timeLeft.minutes}</span><small>Minutes</small></div>
          <div><span>{timeLeft.seconds}</span><small>Seconds</small></div>
        </div>
      </section>

      <section className="section links reveal">
        <h2>Stream Guelly B</h2>
        <div className="linkGrid">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank">Spotify</a>
          <a href="https://music.apple.com/us/artist/guelly-b" target="_blank">Apple Music</a>
          <a href="https://www.youtube.com/@guellyb" target="_blank">YouTube</a>
          <a href="https://audiomack.com/guellyb-69de7ebc" target="_blank">Audiomack</a>
          <a href="https://www.instagram.com/therealguellyb" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb" target="_blank">TikTok</a>
        </div>
      </section>

      <section className="section era reveal">
        <p className="eyebrow">Enter</p>
        <h2>BIG GEE ERA</h2>
        <p>
          Built on motion, pressure, hunger, and real presence. This is the official home
          for music, visuals, updates, and everything coming from Guelly B.
        </p>
      </section>

      <section className="section gallery reveal">
        <h2>Motion Visuals</h2>
        <div className="photoGrid">
          <img src="/photo1.jpg" alt="Guelly B visual 1" />
          <img src="/photo2.jpg" alt="Guelly B visual 2" />
          <img src="/photo3.jpg" alt="Guelly B visual 3" />
        </div>
      </section>

      <section className="section music reveal">
        <h2>Now Playing</h2>
        <div className="playerCard tilt">
          <div className="bars">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <div>
            <h3>Ballin Like VJ</h3>
            <p>Official BIG GEE rollout energy.</p>
          </div>
        </div>

        <div className="videoBox">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Guelly B Music Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="section updates reveal">
        <h2>Motion Updates</h2>
        <div className="updateGrid">
          <div className="tilt">
            <span>05.27</span>
            <h3>Rollout Mode</h3>
            <p>BIG GEE is on the way. Stay locked in for visuals, snippets, and official drops.</p>
          </div>
          <div className="tilt">
            <span>Studio</span>
            <h3>Currently Working On</h3>
            <p>More videos, rollout content, studio clips, and exclusive fan moments.</p>
          </div>
          <div className="tilt">
            <span>Fans</span>
            <h3>Message To Fans</h3>
            <p>Appreciate everybody supporting the motion. This is only the beginning.</p>
          </div>
        </div>
      </section>

      <section className="section merch reveal">
        <h2>Merch</h2>
        <p>Official BIG GEE merch coming soon.</p>
      </section>

      <section className="section contact reveal">
        <h2>Stay Updated</h2>
        <form action={FORM_ENDPOINT} method="POST">
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Join The Motion</button>
        </form>
      </section>

      <footer>
        <h2>Guelly B</h2>
        <p>BIG GEE — Mixtape Out June 5th</p>
        <div className="footerLinks">
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS">Spotify</a>
          <a href="https://www.youtube.com/@guellyb">YouTube</a>
          <a href="https://www.instagram.com/therealguellyb">Instagram</a>
          <a href="https://www.tiktok.com/@guellyb">TikTok</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
