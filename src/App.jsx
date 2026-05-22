import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Play, Lock, Mail, Instagram, Youtube, Music, ArrowRight, Star, Disc3 } from "lucide-react";

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

const videos = [
  { title: "Ballin Like VJ", type: "Music Video", url: "https://youtu.be/brsxymjwT_0" },
  { title: "Bad B*tches", type: "Audio", url: "https://youtu.be/UbnnHutbeD4" },
  { title: "Behind The Era", type: "Vlog", url: "https://youtu.be/3wgTlDyISCg" },
];

function Countdown() {
  const releaseDate = useMemo(() => new Date("2026-06-05T00:00:00"), []);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, releaseDate.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [releaseDate]);

  return (
    <div className="grid grid-cols-4 gap-3 max-w-3xl mx-auto">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center shadow-2xl backdrop-blur">
          <div className="text-3xl md:text-5xl font-black tracking-tighter text-white">{String(value).padStart(2, "0")}</div>
          <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.3em] text-zinc-400">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default function BigGeeHomepage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(120,120,120,0.13),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-5 py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-6xl mx-auto text-center">
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs uppercase tracking-[0.35em] text-zinc-300">
            <Star size={14} /> Guelly B Presents
          </div>

          <h1 className="text-7xl md:text-[150px] font-black tracking-tighter leading-none">
            BIG <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-700">GEE</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-xl text-zinc-300 leading-relaxed">
            The official cinematic hub for the BIG GEE era — music, visuals, vault access, videos, and exclusive drops.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#vault" className="group rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-black shadow-2xl hover:bg-zinc-200 transition">
              Enter The Era <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition" size={16} />
            </a>
            <a href="#videos" className="rounded-full border border-white/15 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white hover:bg-white/10 transition">
              <Play className="inline mr-2" size={16} /> Watch Visuals
            </a>
          </div>
        </motion.div>
      </section>

      <section className="relative px-5 py-20 border-y border-white/10 bg-white/[0.025]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-zinc-500">Countdown To Release</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tighter">June 5th, 2026</h2>
          <div className="mt-10"><Countdown /></div>
        </div>
      </section>

      <section className="relative px-5 py-24" id="tracklist">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-zinc-500">Official Tracklist</p>
              <h2 className="mt-3 text-4xl md:text-7xl font-black tracking-tighter">8 Tracks</h2>
            </div>
            <Disc3 className="hidden md:block text-zinc-500" size={54} />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {tracks.map((track, index) => (
              <motion.div key={track} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 hover:bg-white/[0.08] transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-zinc-500 font-black">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight">{track}</h3>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-white/40 group-hover:bg-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-24 bg-zinc-950" id="videos">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.5em] text-zinc-500">Visuals</p>
          <h2 className="mt-3 text-4xl md:text-7xl font-black tracking-tighter">Watch The Era</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {videos.map((video) => (
              <a key={video.title} href={video.url} target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-black p-6 min-h-[230px] flex flex-col justify-between hover:bg-white/[0.06] transition">
                <div className="h-14 w-14 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-105 transition"><Play size={22} /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">{video.type}</p>
                  <h3 className="mt-2 text-2xl font-black">{video.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-24" id="vault">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-14 text-center shadow-2xl">
          <Lock className="mx-auto text-zinc-400" size={42} />
          <h2 className="mt-6 text-4xl md:text-7xl font-black tracking-tighter">Fan Vault</h2>
          <p className="mt-4 text-zinc-300 max-w-xl mx-auto">Join the private list for early drops, unreleased clips, merch alerts, and BIG GEE updates.</p>
          <form className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3">
            <input type="email" placeholder="Enter your email" className="rounded-full bg-black/70 border border-white/10 px-6 py-4 text-white outline-none focus:border-white/40" />
            <button type="button" className="rounded-full bg-white px-7 py-4 text-black font-black uppercase tracking-[0.2em] hover:bg-zinc-200 transition"><Mail className="inline mr-2" size={16} /> Join</button>
          </form>
        </div>
      </section>

      <footer className="relative border-t border-white/10 px-5 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-black tracking-tighter">GUELLY B</h3>
            <p className="text-sm text-zinc-500">BIG GEE era. Nassau, Bahamas.</p>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#" className="hover:text-white"><Instagram /></a>
            <a href="https://youtu.be/brsxymjwT_0" target="_blank" rel="noreferrer" className="hover:text-white"><Youtube /></a>
            <a href="#" className="hover:text-white"><Music /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
