const audio = document.getElementById("audio");
const btn = document.getElementById("playBtn");
let play = false;

btn.onclick = () => {
  if (!play) {
    audio.play();
    btn.textContent = "⏸";
  } else {
    audio.pause();
    btn.textContent = "▶";
  }
  play = !play;
};
