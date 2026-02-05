const text = "Hi, I'm Masum Vai";
let idx = 0;
const typing = document.getElementById("typing");

function type() {
  if (idx < text.length) {
    typing.textContent += text[idx];
    idx++;
    setTimeout(type, 120);
  }
}
type();
