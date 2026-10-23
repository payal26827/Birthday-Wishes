import { useState } from "react";
import { Heart } from "lucide-react";
import { CONFIG } from "../data";
import Reveal from "./Reveal";
export default function Reasons({ onSecret }) {
  const [on, setOn] = useState({});
  return (
    <section id="reasons">
      <Reveal as="h2">A Few Reasons Why You Are So Special To Me ❤️</Reveal>
      <div className="rs">
        {CONFIG.reasons.map((r, i) => (
          <Reveal as="button" key={i} className={"glass rc" + (on[i] ? " on" : "")} whileHover={{ y: -4 }} onClick={() => setOn((o) => ({ ...o, [i]: true }))}>
            {on[i] ? (
              <div><b style={{ fontWeight: 500 }}>{r.title}</b>
                <p style={{ margin: ".6rem 0 0", font: "300 .88rem Poppins,sans-serif", color: "var(--mute)", lineHeight: 1.7 }}>{r.text}</p></div>
            ) : <span className="h">❤️</span>}
          </Reveal>
        ))}
      </div>
      <button id="secret" aria-label="A little secret" onClick={onSecret}><Heart size={18} fill="currentColor" /></button>
    </section>
  );
}
