document.addEventListener("DOMContentLoaded", () => {
    // 1. Load Configurations from config.js
    initConfigurations();

    // 2. Typing Effect Configuration under profile
    initTypingEffect();

    // 3. Tab Toggling Engine (About, Services, Contact)
    initSectionTabs();

    // 4. Background Audio Player Controller Logic
    initAudioController();

    // 5. Drawer Modal Popup System
    initPopupSystem();
});

function initConfigurations() {
    // Bind Contact Card Fields
    const phoneLink = document.getElementById("ctx-phone");
    const tgLink = document.getElementById("ctx-g");
    
    if(phoneLink) {
        phoneLink.href = `tel:${CONFIG.contact.phone}`;
        phoneLink.textContent = CONFIG.contact.phone;
    }
    if(tgLink) {
        tgLink.href = CONFIG.contact.telegram;
    }

    // Bind Social Dynamic Link Options
    document.getElementById("pop-tg").href = CONFIG.socialPopupLinks.telegramChannel;
    document.getElementById("pop-yt").href = CONFIG.socialPopupLinks.youtubeChannel;
    document.getElementById("pop-fb").href = CONFIG.socialPopupLinks.facebookPage;
    document.getElementById("pop-wa").href = CONFIG.socialPopupLinks.whatsappCSB;
    document.getElementById("pop-ig").href = CONFIG.socialPopupLinks.instagram;
    document.getElementById("pop-tw").href = CONFIG.socialPopupLinks.twitterX;

    // Audio target declaration
    document.getElementById("bg-audio").src = CONFIG.musicPath;
}

function initTypingEffect() {
    const skills = ["PROGRAMMING.", "GRAPHIC DESIGN.", "WEB DESIGN.", "TECH.", "CYBER SOLUTIONS."];
    let skillIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const targetElement = document.getElementById("typing-text");

    function type() {
        const currentSkill = skills[skillIdx];
        if (isDeleting) {
            targetElement.textContent = currentSkill.substring(0, charIdx - 1);
            charIdx--;
        } else {
            targetElement.textContent = currentSkill.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIdx === currentSkill.length) {
            speed = 1800; // Wait duration at text peak
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            skillIdx = (skillIdx + 1) % skills.length;
            speed = 400; // Brief pause before shifting skills
        }

        setTimeout(type, speed);
    }
    type();
}

function initSectionTabs() {
    const tabs = document.querySelectorAll(".nav-btn[data-target]");
    const sections = document.querySelectorAll(".content-section");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.getAttribute("data-target");
            const targetSection = document.getElementById(target);

            if (targetSection.classList.contains("active")) {
                targetSection.classList.remove("active");
            } else {
                sections.forEach(s => s.classList.remove("active"));
                targetSection.classList.add("active");
                // Smooth viewing target alignment helper
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
}

function initAudioController() {
    const musicBtn = document.getElementById("music-btn");
    const audioObj = document.getElementById("bg-audio");

    musicBtn.addEventListener("click", () => {
        if (audioObj.paused) {
            audioObj.play().then(() => {
                musicBtn.classList.add("music-playing");
            }).catch(err => {
                console.log("Audio reproduction tracking deferred until physical manual interact sequence: ", err);
            });
        } else {
            audioObj.pause();
            musicBtn.classList.remove("music-playing");
        }
    });
}

function initPopupSystem() {
    const openTriggers = document.querySelectorAll(".social-trigger-btn");
    const backdrop = document.getElementById("popupBackdrop");
    const closeBtn = document.getElementById("closePopup");

    openTriggers.forEach(btn => {
        btn.addEventListener("click", () => {
            backdrop.classList.add("show");
        });
    });

    closeBtn.addEventListener("click", closePopup);
    backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closePopup();
    });

    function closePopup() {
        backdrop.classList.remove("show");
    }
}
