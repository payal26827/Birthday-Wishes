import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CONFIG } from "../data";
import Reveal from "./Reveal";
const toks = CONFIG.letter.split(/(\s+)/);
export default function Letter() {
  const [open, setOpen] = useState(false);
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    const t = setInterval(() => setN((x) => (x >= toks.length ? (clearInterval(t), x) : x + 2)), 55);
    return () => clearInterval(t);
  }, [open]);
  return (
    <section id="letter">
      <Reveal as="h2">A Letter For You 💌</Reveal>
      {!open ? (
        <Reveal className="glass seal">
          <div className="big">💌</div><p>Only for the Birthday Boy ❤️</p>
          <button className="btn" onClick={() => setOpen(true)}>Open My Letter</button>
        </Reveal>
      ) : (
        <motion.div ref={ref} className="glass paper show" initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9 }}>
          {toks.map((w, i) => /^\s+$/.test(w) ? w : <span key={i} className={i < n ? "v" : ""}>{w}</span>)}
        </motion.div>
      )}
    </section>
  );
}
