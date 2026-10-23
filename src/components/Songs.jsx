import { Music } from "lucide-react";
import { CONFIG } from "../data";
import Reveal from "./Reveal";
export default function Songs() {
  return (
    <section id="songs">
      <Reveal as="h2">Songs That Remind Me of You 🎵</Reveal>
      <div className="songs">
        {CONFIG.songs.map((s, i) => (
          <Reveal key={i} className="glass sg">
            <div className="n"><Music size={30} color="#ff8fb1" /></div>
            <h3>{s.title}</h3><p>{s.artist}</p>
            {s.url && <a className="btn" href={s.url} target="_blank" rel="noopener noreferrer">Listen</a>}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
