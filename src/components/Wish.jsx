import { useState } from "react";
import { Sparkles } from "lucide-react";
import { CONFIG } from "../data";
import { confetti } from "../confetti";
import Reveal from "./Reveal";
function Candles({ y, fy }) {
  return <g>{[45, 75, 105].map((x) => (
    <g key={x}><rect x={x - 3} y={y} width="6" height="26" rx="2" fill="#fff" /><ellipse className="fl" cx={x} cy={fy} rx="5" ry="9" fill="#f5c97a" /></g>
  ))}</g>;
}
export default function Wish() {
  const [ph, setPh] = useState(0); // 0 idle, 1 dim, 2 candles out, 3 message
  const go = () => { setPh(1); setTimeout(() => setPh(2), 2800); setTimeout(() => { confetti(220); setPh(3); }, 3600); };
  return (
    <section id="wish">
      <Reveal as="h2">My Wish For You 🎂</Reveal>
      <svg className="cake" viewBox="0 0 150 140" aria-hidden="true">
        <Candles y={44} fy={36} />
        <rect x="20" y="70" width="110" height="26" rx="6" fill="#ff8fb1" />
        <rect x="10" y="96" width="130" height="34" rx="8" fill="#9d6bff" />
        <path d="M20 82q10 10 18 0t18 0 18 0 18 0 18 0" fill="none" stroke="#fff" strokeWidth="4" opacity=".7" />
      </svg>
      <p className="t">{CONFIG.wish}</p>
      <button className="btn" onClick={go}>Make a Wish <Sparkles size={16} style={{ verticalAlign: "-2px" }} /></button>
      <div id="dim" className={ph ? "on" : ""} onClick={() => ph === 3 && setPh(0)}>
        <svg id="dcake" className={ph >= 2 ? "out" : ""} viewBox="0 0 150 80" width="170">
          <Candles y={24} fy={16} /><rect x="20" y="50" width="110" height="26" rx="6" fill="#ff8fb1" />
        </svg>
        <div className={"msg" + (ph === 3 ? " show" : "")}>I hope everything you wished for finds its way to you. ❤️</div>
      </div>
    </section>
  );
}
