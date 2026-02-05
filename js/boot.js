document.addEventListener("DOMContentLoaded", () => {
    const lines = [
        "Initializing system...",
        "Loading profile...",
        "Ready."
    ];

    const terminalLines = document.getElementById("terminal-lines");
    const bootScreen = document.getElementById("boot-screen");
    const mainContent = document.querySelector("main");
    
    let lineIndex = 0;

    function addLine() {
        if (lineIndex < lines.length) {
            const p = document.createElement("p");
            p.textContent = `> ${lines[lineIndex]}`;
            p.style.marginBottom = "5px";
            terminalLines.appendChild(p);
            lineIndex++;
            
            // Random typing delay
            setTimeout(addLine, 400); 
        } else {
            // Finished
            setTimeout(() => {
                bootScreen.style.opacity = "0";
                bootScreen.style.transition = "opacity 0.5s ease";
                
                mainContent.classList.remove("hidden");
                // Trigger reflow
                void mainContent.offsetWidth; 
                mainContent.classList.add("visible");

                setTimeout(() => {
                    bootScreen.style.display = "none";
                }, 500);
            }, 800);
        }
    }

    // Start boot sequence
    setTimeout(addLine, 500);
});
