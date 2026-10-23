import { useMemo } from "react";
const E = ["❤️", "💗", "💜", "✨", "💖"];
export default function Hearts() {
  const items = useMemo(() => Array.from({ length: 16 }, (_, i) => ({
    e: E[i % 5], left: Math.random() * 100, size: 10 + Math.random() * 16,
    dur: 10 + Math.random() * 12, delay: -Math.random() * 16,
  })), []);
  return (
    <div id="hearts">
      {items.map((h, i) => (
        <span key={i} style={{ left: `${h.left}%`, fontSize: h.size, animationDuration: `${h.dur}s`, animationDelay: `${h.delay}s` }}>{h.e}</span>
      ))}
    </div>
  );
}
