let cv, cx, ps = [], run = false;
const COLORS = ["#ff4d6d", "#ff8fb1", "#9d6bff", "#f5c97a", "#fff"];
function init() {
  if (cv) return;
  cv = document.createElement("canvas"); cv.id = "cf"; document.body.appendChild(cv);
  cx = cv.getContext("2d");
  const fit = () => { cv.width = innerWidth; cv.height = innerHeight; };
  fit(); addEventListener("resize", fit);
}
function tick() {
  cx.clearRect(0, 0, cv.width, cv.height);
  ps = ps.filter(p => p.l > 0);
  ps.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.vy += .35; p.vx *= .99; p.r += .2; p.l--;
    cx.save(); cx.globalAlpha = Math.min(1, p.l / 60); cx.translate(p.x, p.y); cx.rotate(p.r);
    cx.fillStyle = p.c; cx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6); cx.restore();
  });
  if (ps.length) requestAnimationFrame(tick); else { run = false; cx.clearRect(0, 0, cv.width, cv.height); }
}
export function confetti(n = 140) {
  init();
  for (let i = 0; i < n; i++) ps.push({ x: innerWidth / 2, y: innerHeight * .6, vx: (Math.random() - .5) * 14, vy: -Math.random() * 15 - 4, s: 4 + Math.random() * 6, c: COLORS[i % 5], r: Math.random() * 6, l: 200 });
  if (!run) { run = true; tick(); }
}
