document.addEventListener("DOMContentLoaded", () => {
    // Set dynamic year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    console.log("%c Masum Vai Profile Loaded ", "background: #3b82f6; color: #fff; border-radius: 4px; padding: 4px;");
});
