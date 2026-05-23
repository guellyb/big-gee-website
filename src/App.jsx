import "./style.css";

export default function App() {
  return (
    <div className="app">

      <div className="overlay"></div>

      <section className="hero">
        <img src="/src/IMG_6750.png" alt="BIG GEE" className="hero-image" />

        <div className="hero-content">
          <p className="artist">GUELLY B PRESENTS</p>

          <h1>BIG GEE</h1>

          <p className="release">
            OFFICIAL MIXTAPE • JUNE 5TH 2026
          </p>

          <div className="buttons">
            <a href="#" className="btn">LISTEN SOON</a>
            <a href="#" className="btn btn-outline">FAN VAULT</a>
          </div>
        </div>
      </section>

      <section className="tracklist">
        <h2>TRACKLIST</h2>

        <div className="tracks">
          <p>01 • Motion Only</p>
          <p>02 • Spike Lee</p>
          <p>03 • Start Over</p>
          <p>04 • Ballin Like VJ</p>
          <p>05 • Loose Screws</p>
          <p>06 • Cheese Talk</p>
          <p>07 • Bad B*tches</p>
          <p>08 • Therapy Notes</p>
        </div>
      </section>

    </div>
  );
}
