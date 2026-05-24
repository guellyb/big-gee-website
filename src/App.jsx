import "./App.css";
const links = [
  { name: "YouTube", url: "https://www.youtube.com/@guellyb" },
  { name: "Spotify", url: "https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" },
  { name: "Apple Music", url: "https://music.apple.com/artist/guelly-b" },
  { name: "Instagram", url: "https://www.instagram.com/therealguellyb/" },
  { name: "TikTok", url: "https://www.tiktok.com/@guellyb" },
  { name: "Audiomack", url: "https://audiomack.com/guellyb-69de7ebc" },
];
const tracks = [
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
  return (
    <main className="site">
      <section className="hero">
        <div className="smoke smoke1"></div>
        <div className="smoke smoke2"></div>

        <p className="tag">Guelly B Presents</p>
        <h1>BIG GEE</h1>
        <h2>Super Fly, Real Motion</h2>

        <p className="date">Mixtape drops June 5</p>

        <div className="buttons">
          <a href="https://www.youtube.com/@guellyb" target="_blank" rel="noreferrer">
            Watch Videos
          </a>
          <a href="https://open.spotify.com/artist/0WdypKNxCbHK0vLNgujumS" target="_blank" rel="noreferrer">
            Stream Music
          </a>
        </div>
      </section>

      <section className="video-section">
        <h2>Featured Video</h2>
        <div className="video-box">
          <iframe
            src="https://www.youtube.com/embed/brsxymjwT_0"
            title="Guelly B Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>
     <section className="tracklist">
        <h2>Tracklist</h2>
        <div className="tracks">
          {tracks.map((track, index) => (
            <div className="track" key={track}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{track}</p>
            </div>
          ))}
        </div>
      </section>
  <section className="links">
       <h2>Follow Guelly B</h2>
        <div className="link-grid">
          {links.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
export default App;
