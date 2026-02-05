const audio = document.getElementById("audio");
const btn = document.getElementById("musicBtn");
let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    audio.play();
    btn.textContent = "⏸";
  } else {
    audio.pause();
    btn.textContent = "▶";
  }
  playing = !playing;
});
