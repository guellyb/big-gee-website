import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const countDownDate = new Date("June 5, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
      );

      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="site">

      <div className="overlay"></div>

      <div className="smoke smoke1"></div>
      <div className="smoke smoke2"></div>
      <div className="smoke smoke3"></div>

      <header className="hero">

        <p className="tag">GUELLY B PRESENTS</p>

        <h1>BIG GEE</h1>

        <h2>Super Fly, Real Motion</h2>

        <p className="date">Mixtape Out June 5th</p>

        <div className="countdown">

          <div>
            <span>{timeLeft.days}</span>
            <p>DAYS</p>
          </div>

          <div>
            <span>{timeLeft.hours}</span>
            <p>HOURS</p>
          </div>

          <div>
            <span>{timeLeft.minutes}</span>
            <p>MIN</p>
          </div>

          <div>
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

        </div>

        <div className="scrollText">
          ↓ ENTER THE BIG GEE ERA ↓
        </div>

      </header>

    </div>
  );
}

export default App;
