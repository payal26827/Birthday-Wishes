import { useState } from "react";
import { CONFIG } from "../data";
import { placeholder } from "../placeholder";
import Reveal from "./Reveal";
import Modal from "./Modal";
export default function Gallery() {
  const [sel, setSel] = useState(null);
  const p = sel !== null ? CONFIG.photos[sel] : null;
  return (
    <section id="photos">
      <Reveal as="h2">Some of My Favourite Us Moments 📸</Reveal>
      <div className="grid">
        {CONFIG.photos.map((x, i) => (
          <Reveal as="button" key={i} className="glass ph" whileHover={{ y: -6, rotate: -1 }} whileTap={{ scale: 0.97 }} onClick={() => setSel(i)}>
            <img loading="lazy" alt="" src={x.src || placeholder(i)} />
            <span><b style={{ color: "var(--ink)", fontWeight: 500 }}>{x.title}</b><br />{x.caption}</span>
          </Reveal>
        ))}
      </div>
      <Modal open={!!p} onClose={() => setSel(null)}>
        {p && <><img alt="" src={p.src || placeholder(sel)} /><h3 style={{ margin: ".9rem 0 .3rem" }}>{p.title}</h3><p style={{ margin: 0 }}>{p.caption}</p></>}
      </Modal>
    </section>
  );
}
