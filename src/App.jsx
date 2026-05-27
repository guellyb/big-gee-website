import "./App.css";

function App() {
  return (
    <main className="site">
      <section className="card">
        <nav className="nav">
          <h1>GUELLY B</h1>
          <button>MENU</button>
        </nav>

        <section className="hero">
          <p className="eyebrow">BIG GEE</p>
          <h2>Super Fly, Real Motion</h2>
          <p className="sub">
            Music, visuals, updates, and real motion from Guelly B.
          </p>
        </section>

        <section className="updates">
          <div className="update">
            <span></span>
            <p>BIG GEE rollout officially active.</p>
          </div>

          <div className="update">
            <span></span>
            <p>New visuals and snippets dropping soon.</p>
          </div>

          <div className="update">
            <span></span>
            <p>Exclusive merch loading.</p>
          </div>

          <form action="https://formspree.io/f/xojbpkoa" method="POST">
            <input
              type="email"
              name="email"
              placeholder="Enter your email for updates"
              required
            />
            <button type="submit">Stay Ready</button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default App;
