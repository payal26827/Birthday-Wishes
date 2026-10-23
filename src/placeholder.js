export const placeholder = (i) => {
  const c = [["#ff4d6d", "#9d6bff"], ["#9d6bff", "#f5c97a"], ["#ff8fb1", "#7a2cff"]][i % 3];
  return "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[1]}"/></linearGradient></defs><rect width="400" height="500" fill="url(#g)" opacity=".55"/><text x="200" y="280" font-size="90" text-anchor="middle">❤️</text></svg>`);
};
