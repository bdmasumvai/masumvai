const lines = [
  "Initializing system...",
  "Checking files... [OK]",
  "Loading profile... [OK]",
  "Starting interface... [OK]",
  "Welcome, Masum Vai"
];

const bootText = document.getElementById("bootText");
let index = 0;

function runBoot() {
  if (index < lines.length) {
    bootText.textContent += lines[index] + "\n";
    index++;
    setTimeout(runBoot, 500);
  } else {
    setTimeout(() => {
      document.getElementById("boot").style.display = "none";
      document.getElementById("app").classList.remove("hidden");
    }, 800);
  }
}

runBoot();
