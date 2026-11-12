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
    