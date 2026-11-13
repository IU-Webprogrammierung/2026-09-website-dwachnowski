const skillCards = document.querySelectorAll(
            ".skills-track .skill-card"
        );

        const prevButton = document.querySelector(
            ".carousel-prev"
        );

        const nextButton = document.querySelector(
            ".carousel-next"
        );

        let currentSkill = 2;

        function updateSkillsCarousel() {
            skillCards.forEach((card, index) => {
                card.classList.remove(
                    "active",
                    "previous",
                    "next"
                );

                if (index === currentSkill) {
                    card.classList.add("active");
                }

                if (
                    index ===
                    (currentSkill - 1 + skillCards.length) %
                    skillCards.length
                ) {
                    card.classList.add("previous");
                }

                if (
                    index ===
                    (currentSkill + 1) %
                    skillCards.length
                ) {
                    card.classList.add("next");
                }
            });
        }
if (skillCards.length > 0 && prevButton && nextButton) {
        nextButton.addEventListener("click", () => {
            currentSkill =
                (currentSkill + 1) %
                skillCards.length;

            updateSkillsCarousel();
        });

        prevButton.addEventListener("click", () => {
            currentSkill =
                (currentSkill - 1 + skillCards.length) %
                skillCards.length;

            updateSkillsCarousel();
        });

        updateSkillsCarousel();
        }

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuToggle.classList.toggle("open", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", 
            isOpen ? "Navigation schließen" : "Navigation öffnen");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Navigation öffnen");
        });
    });
}
    

const timelineItems = document.querySelectorAll(
    ".timeline-item"
);
function animateTimelineItems() {
    const viewportCenter = window.innerHeight / 2;

    timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();

        const itemCenter = rect.top + rect.height / 2;

        const distanceFromCenter = Math.abs(
            viewportCenter - itemCenter
        );

        const range = window.innerHeight * 0.28;

        let progress = 1 - distanceFromCenter / range;
        
        progress = Math.max(0, Math.min(1, progress));

        progress =
            progress * progress * (3 -2 * progress);

        item.style.setProperty(
            "--progress",
            progress.toFixed(3)
        );
    });

    requestAnimationFrame(animateTimelineItems);
}

requestAnimationFrame(animateTimelineItems);