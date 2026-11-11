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