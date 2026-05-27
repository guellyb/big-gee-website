import "./App.css";

const links = [
  ["Spotify", "https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS"],
  ["Apple Music", "https://music.apple.com/artist/guelly-b"],
  ["YouTube", "https://www.youtube.com/@guellyb"],
  ["Instagram", "https://www.instagram.com/therealguellyb"],
  ["TikTok", "https://www.tiktok.com/@guellyb"],
];

export default function App() {
  return (
    <>
      <div className="intro">
        <h1>Big Gee</h1>
        <p>Motion Loading</p>
      </div>

      <main className="site">
        <div className="bgMotion"></div>

        <header className="nav">
          <div>GUELLY B</div>
          <button>MENU</button>
        </header>

        <section className="hero">
          <p className="present">Guelly B Presents</p>
          <h1>BIG GEE</h1>
          <h2>Super Fly, Real Motion</h2>
          <p className="date">Mixtape Out June 5th</p>

          <div className="countdown">
            <div><strong>00</strong><span>Days</span></div>
            <div><strong>00</strong><span>Hours</span></div>
            <div><strong>00</strong><span>Minutes</span></div>
            <div><strong>00</strong><span>Seconds</span></div>
          </div>
        </section>

        <section className="streaming">
          <h3>Stream Guelly B</h3>
          <div className="linkGrid">
            {links.map(([name, url]) => (
              <a key={name} href={url} target="_blank">{name}</a>
            ))}
          </div>
        </section>

        <section className="era">
          <h2>Enter Big Gee Era</h2>
          <p>No noise. No fake motion. Just BIG GEE energy.</p>
        </section>

        <section className="photos">
          <h2>Visuals</h2>
          <img src="/photo1.jpg" alt="Guelly B" />
          <img src="/photo2.jpg" alt="Guelly B" />
          <img src="/photo3.jpg" alt="Guelly B" />
        </section>

        <section className="updates">
          <h2>Fan Updates</h2>

          <div className="updateBox"><span></span>BIG GEE rollout officially active.</div>
          <div className="updateBox"><span></span>New visuals and snippets dropping soon.</div>
          <div className="updateBox"><span></span>Exclusive merch loading.</div>

          <form action="https://formspree.io/f/xojbpkoa" method="POST">
            <input type="email" name="email" placeholder="Enter your email for updates" required />
            <button type="submit">Stay Ready</button>
          </form>
        </section>

        <section className="merch">
          <h2>Merch</h2>
          <p>BIG GEE merch loading soon.</p>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <a href="mailto:theonlyguellyb@gmail.com">theonlyguellyb@gmail.com</a>
        </section>

        <footer>
          <h3>Guelly B, Big Gee</h3>
          <p>Mixtape Out June 5th</p>
          <div className="footerLinks">
            {links.map(([name, url]) => (
              <a key={name} href={url} target="_blank">{name}</a>
            ))}
          </div>
        </footer>
      </main>
    </>
  );
}
