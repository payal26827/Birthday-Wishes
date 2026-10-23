import { useState } from "react";
import { CONFIG } from "../data";
import Reveal from "./Reveal";
import Modal from "./Modal";
export default function OpenWhen() {
  const [opening, setOpening] = useState(null);
  const [sel, setSel] = useState(null);
  const click = (i) => { setOpening(i); setTimeout(() => { setSel(i); setOpening(null); }, 650); };
  const o = sel !== null ? CONFIG.openWhen[sel] : null;
  return (
    <section id="ow">
      <Reveal as="h2">Open When… 💌</Reveal>
      <div className="ow">
        {CONFIG.openWhen.map((x, i) => (
          <Reveal as="button" key={i} className={"glass env" + (opening === i ? " op" : "")} whileHover={{ y: -4 }} onClick={() => click(i)}>
            <span>💌 {x.label}</span>
          </Reveal>
        ))}
      </div>
      <Modal open={!!o} onClose={() => setSel(null)}>
        {o && <><h3 style={{ marginBottom: "1rem" }}>💌 {o.label}</h3>{o.msg}</>}
      </Modal>
    </section>
  );
}
