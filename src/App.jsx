import { useEffect, useState } from "react";
import { CONFIG } from "./data";
import { confetti } from "./confetti";
import Hearts from "./components/Hearts";
import Reveal from "./components/Reveal";
import Modal from "./components/Modal";
import Countdown from "./components/Countdown";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Reasons from "./components/Reasons";
import OpenWhen from "./components/OpenWhen";
import Letter from "./components/Letter";
import Songs from "./components/Songs";
import Wish from "./components/Wish";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [secret, setSecret] = useState(false);
  useEffect(() => { document.body.classList.toggle("lock", !opened); }, [opened]);
  const found = () => { setSecret(true); confetti(120); };
  return (
    <>
      <Hearts />
      <div id="open" className={opened ? "gone" : ""}>
        <h1>Hey ❤️<br />I made something special for you…</h1>
        <button className="btn" onClick={() => { setOpened(true); window.scrollTo(0, 0); }}>Open Your Surprise 🎁</button>
      </div>
      <main>
        <section id="hero">
          {CONFIG.name && <div className="date">For {CONFIG.name}</div>}
          <h1>Happy Birthday,<br />My Love ❤️</h1>
          <div className="date">28 October — the day my favourite person was born.</div>
          <p>You make ordinary days feel special, so today I wanted to make your special day a little more unforgettable.</p>
          <Countdown />
          <a className="btn" href="#story">Start Our Story ❤️</a>
        </section>
        <Timeline />
        <Gallery />
        <Reasons onSecret={found} />
        <OpenWhen />
        <Letter />
        <Songs />
        <Wish />
        <section id="final">
          <Reveal as="h2">Happy Birthday Once Again ❤️</Reveal>
          <Reveal as="p">Thank you for being one of the most beautiful parts of my life.</Reveal>
          <Reveal as="p">Here’s to you, to us, and to many more memories. 🥂❤️</Reveal>
          <Reveal className="sm">Made with lots of love, just for you ❤️</Reveal>
        </section>
      </main>
      <Modal open={secret} onClose={() => setSecret(false)}>
        <h3 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>You found the secret! ❤️</h3>
        Out of everything this website contains, my favourite part is still you.
      </Modal>
    </>
  );
}
