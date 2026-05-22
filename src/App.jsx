import React, { useEffect, useState } from "react";

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

export default function App() {
  const releaseDate = new Date("2026-06-05T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = releaseDate - now;

      setTimeLeft({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24)),
        mins: Math.max(0, Math.floor((distance / (1000 * 60)) % 60)),
        secs: Math.max(0, Math.floor((distance / 1000) % 60)),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      <section className="min-h-screen flex items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_35%)]"></div>

        <div className="relative z-10 max-w-5xl">
          <p className="tracking-[0.5em] text-sm text-gray-400 mb-6">GUELLY B PRESENTS</p>

          <h1 className="text-7xl md:text-[150px] font-black tracking-tight leading-none">
            BIG <span className="text-gray-400">GEE</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-300">
            The official cinematic home for the BIG GEE era.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#vault" className="bg-white text-black px-8 py-4 rounded-full font-bold tracking-widest">
              ENTER THE ERA
            </a>
            <a href="#videos" className="border border-white/30 px-8 py-4 rounded-full font-bold tracking-widest">
              WATCH VISUALS
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-y border-white/10 text-center">
        <p className="tracking-[0.5em] text-sm text-gray-500 mb-4">COUNTDOWN TO RELEASE</p>
        <h2 className="text-4xl md:text-6xl font-black mb-10">JUNE 5TH, 2026</h2>

        <div className="grid grid-cols-4 gap-3 max-w-3xl mx-auto">
          {[
            ["DAYS", timeLeft.days],
            ["HRS", timeLeft.hours],
            ["MIN", timeLeft.mins],
            ["SEC", timeLeft.secs],
          ].map(([label, value]) => (
            <div key={label} className="border border-white/10 bg-white/5 rounded-2xl p-5">
              <h3 className="text-3xl md:text-5xl font-black">{value}</h3>
              <p className="text-xs tracking-widest text-gray-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6" id="tracklist">
        <div className="max-w-6xl mx-auto">
          <p className="tracking-[0.5em] text-sm text-gray-500">OFFICIAL TRACKLIST</p>
          <h2 className="text-5xl md:text-7xl font-black mt-4 mb-10">8 TRACKS</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {tracks.map((track, index) => (
              <div key={track} className="border border-white/10 bg-white/5 rounded-2xl p-5 hover:bg-white/10 transition">
                <span className="text-gray-500 font-black mr-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl font-bold">{track}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-950" id="videos">
        <div className="max-w-6xl mx-auto">
          <p className="tracking-[0.5em] text-sm text-gray-500">VISUALS</p>
          <h2 className="text-5xl md:text-7xl font-black mt-4 mb-10">WATCH THE ERA</h2>

          <div className="grid md:grid-cols-3 gap-5">
            <a className="border border-white/10 rounded-3xl p-8 bg-black hover:bg-white/10 transition" href="https://youtu.be/brsxymjwT_0" target="_blank">
              <p className="text-gray-500 tracking-widest text-sm">MUSIC VIDEO</p>
              <h3 className="text-3xl font-black mt-4">Ballin Like VJ</h3>
            </a>

            <a className="border border-white/10 rounded-3xl p-8 bg-black hover:bg-white/10 transition" href="https://youtu.be/UbnnHutbeD4" target="_blank">
              <p className="text-gray-500 tracking-widest text-sm">AUDIO</p>
              <h3 className="text-3xl font-black mt-4">Bad B*tches</h3>
            </a>

            <a className="border border-white/10 rounded-3xl p-8 bg-black hover:bg-white/10 transition" href="https://youtu.be/3wgTlDyISCg" target="_blank">
              <p className="text-gray-500 tracking-widest text-sm">VLOG</p>
              <h3 className="text-3xl font-black mt-4">Behind The Era</h3>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" id="vault">
        <div className="max-w-4xl mx-auto text-center border border-white/10 bg-white/5 rounded-[2rem] p-10">
          <p className="tracking-[0.5em] text-sm text-gray-500">PRIVATE ACCESS</p>
          <h2 className="text-5xl md:text-7xl font-black mt-4">FAN VAULT</h2>
          <p className="text-gray-300 mt-5">
            Join for early drops, unreleased clips, merch alerts, and exclusive BIG GEE updates.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              placeholder="Enter your email"
              className="flex-1 bg-black border border-white/20 rounded-full px-6 py-4 text-white"
            />
            <button className="bg-white text-black rounded-full px-8 py-4 font-black tracking-widest">
              JOIN VAULT
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-500">
        <h3 className="text-white text-2xl font-black">GUELLY B</h3>
        <p>BIG GEE ERA · NASSAU, BAHAMAS</p>
      </footer>
    </main>
  );
}
