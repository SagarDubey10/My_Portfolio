// Ensure current year is updated in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Hamburger menu for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Timeline Scroll Animation Logic
document.addEventListener("DOMContentLoaded", function () {
    const trunkLine = document.getElementById("trunk-line");
    const nodes = document.querySelectorAll(".tree-node");

    // Run once on load just in case elements are already visible
    handleScroll();

    // Run whenever the user scrolls
    window.addEventListener("scroll", handleScroll);

    function handleScroll() {
        let scrollPosition = window.scrollY;

        // 1. Grow the Trunk Line safely
        let journeySection = document.getElementById("journey");
        if (journeySection && trunkLine) {
            let sectionTop = journeySection.offsetTop - (window.innerHeight / 2);
            let sectionHeight = journeySection.clientHeight;

            if (scrollPosition > sectionTop) {
                let growAmount = ((scrollPosition - sectionTop) / sectionHeight) * 110;
                if (growAmount > 100) growAmount = 100;
                if (growAmount < 0) growAmount = 0;

                trunkLine.style.height = `${growAmount}%`;
            }
        }

        // 2. Fade in the Branches (Nodes) as you scroll to them
        nodes.forEach(node => {
            let nodePosition = node.getBoundingClientRect().top;
            let triggerPoint = window.innerHeight * 0.85; // Triggers when element is 85% down the screen

            if (nodePosition < triggerPoint) {
                node.classList.add("visible");
            }
        });
    }
});