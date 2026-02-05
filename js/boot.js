const bootLines = [
  "Initializing system...",
  "Checking system files... [OK]",
  "Loading user profile... [OK]",
  "Mounting animations... [OK]",
  "Access Granted",
  "Welcome, Masum Vai"
];

let i = 0;
const bootText = document.getElementById("bootText");

function boot() {
  if (i < bootLines.length) {
    bootText.textContent += bootLines[i] + "\n";
    i++;
    setTimeout(boot, 600);
  } else {
    setTimeout(() => {
      document.getElementById("boot").style.display = "none";
      document.getElementById("site").classList.remove("hidden");
    }, 1000);
  }
}
boot();
