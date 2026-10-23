import { useEffect, useRef, useState } from "react";
import { CONFIG } from "../data";
import { confetti } from "../confetti";
import Reveal from "./Reveal";

function target(now) {
  const { month: m, day: d } = CONFIG.birthday;
  const end = new Date(now.getFullYear(), m - 1, d + 1);
  return now >= end ? new Date(now.getFullYear() + 1, m - 1, d) : new Date(now.getFullYear(), m - 1, d);
}
export default function Countdown() {
  const [now, setNow] = useState(new Date());
  const fired = useRef(false);
  const { month: m, day: d } = CONFIG.birthday;
  const today = now.getMonth() === m - 1 && now.getDate() === d;
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);
  useEffect(() => {
    if (today && !fired.current) { fired.current = true; setTimeout(() => confetti(200), 600); }
  }, [today]);
  if (today) return <Reveal id="cdwrap"><h3>It’s Your Day! 🎉<br />Happy Birthday, My Love ❤️</h3></Reveal>;
  const s = Math.floor((target(now) - now) / 1000);
  const v = [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60];
  const l = ["Days", "Hours", "Mins", "Secs"];
  return (
    <Reveal id="cdwrap">
      <h3>Until Your Special Day 🎂</h3>
      <div className="cd">
        {v.map((x, i) => <div className="glass" key={l[i]}><b>{String(x).padStart(2, "0")}</b><small>{l[i]}</small></div>)}
      </div>
    </Reveal>
  );
}
