function changeTitle() {
    const message = "Wróć na stronę";
    let original;

    window.addEventListener("focus", function() {
        if (original) {
            document.title = original;
        }
    })

    window.addEventListener("blur", function() {
        const title = document.title;
        if (title != message) {
            original = title;
        }
        document.title = message;
    })
}

function showHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".navigation");

    const handleClick = function() {
        hamburger.classList.toggle("hamburger--active");
        hamburger.setAttribute("aria-expanded", hamburger.classList.contains("hamburger--active"));
        nav.classList.toggle("navigation--active");
    }

    hamburger.addEventListener("click", handleClick);
}

function useParallax() {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");

    function parallax(e) {
        const width = window.innerWidth / 2;
        const height = window.innerHeight / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const depth1 = "".concat(50 - (mouseX - width) * 0.01, "% ").concat(50 - (mouseY - height) * 0.01, "%");
        const depth2 = "".concat(50 - (mouseX - width) * 0.02, "% ").concat(50 - (mouseY - height) * 0.02, "%");
        const x = "".concat(depth2, ", ").concat(depth1);
        elem.style.backgroundPosition = x;
    }
}

const init = function() {
    changeTitle();
    showHamburgerMenu();
    // useParallax();
};

document.addEventListener("DOMContentLoaded", init);
