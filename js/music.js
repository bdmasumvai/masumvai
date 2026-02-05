document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.getElementById("play-btn");
    const audio = document.getElementById("audio-source");
    const icon = playBtn.querySelector("i");
    const statusText = document.querySelector(".music-status");

    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().then(() => {
                icon.classList.remove("fa-play");
                icon.classList.add("fa-pause");
                statusText.textContent = "Playing...";
            }).catch(error => {
                console.error("Playback failed:", error);
                statusText.textContent = "Error loading";
            });
        } else {
            audio.pause();
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
            statusText.textContent = "Paused";
        }
    });

    // Reset when audio finishes
    audio.addEventListener("ended", () => {
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        statusText.textContent = "Peace of Mind";
        audio.currentTime = 0;
    });
});
