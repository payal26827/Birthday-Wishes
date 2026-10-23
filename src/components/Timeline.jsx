import { CONFIG } from "../data";
import Reveal from "./Reveal";
export default function Timeline() {
  return (
    <section id="story">
      <Reveal as="h2">Our Little Story ❤️</Reveal>
      <div className="tl">
        {CONFIG.timeline.map((t, i) => (
          <Reveal as="article" key={i} className="glass">
            <small>{t.date}</small><h3>{t.icon} {t.title}</h3><p>{t.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
