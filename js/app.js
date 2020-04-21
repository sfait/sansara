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

function changeSlide() {
    // wersja robocza, do poprawy
    const paragraphMission = document.querySelector(".slider__paragraph--mission");
    const paragraphVision = document.querySelector(".slider__paragraph--vision");
    const btnMission = document.querySelector(".slider__btn-header--mission");
    const btnVision = document.querySelector(".slider__btn-header--vision");
    const sliderBtn = document.querySelector(".slider__btn");

    btnMission.addEventListener("click", function() {
        this.classList.add("slider__btn-header--active");
        paragraphMission.classList.add("slider__paragraph--active");
        btnVision.classList.remove("slider__btn-header--active");
        paragraphVision.classList.remove("slider__paragraph--active");
    })

    btnVision.addEventListener("click", function() {
        this.classList.add("slider__btn-header--active");
        paragraphVision.classList.add("slider__paragraph--active");
        btnMission.classList.remove("slider__btn-header--active");
        paragraphMission.classList.remove("slider__paragraph--active");
    })

    sliderBtn.addEventListener("click", function() {
        if (paragraphMission.classList.contains("slider__paragraph--active")) {
            btnVision.classList.add("slider__btn-header--active");
            paragraphVision.classList.add("slider__paragraph--active");
            btnMission.classList.remove("slider__btn-header--active");
            paragraphMission.classList.remove("slider__paragraph--active");
        } else {
            btnMission.classList.add("slider__btn-header--active");
            paragraphMission.classList.add("slider__paragraph--active");
            btnVision.classList.remove("slider__btn-header--active");
            paragraphVision.classList.remove("slider__paragraph--active");
        }
    })
}

function useScrollReveal() {
    const slideLeft = {
        distance: "150%",
        origin: "left",
        delay: "250",
        opacity: null
    };

    const slideRight = {
        distance: "150%",
        origin: "right",
        delay: "250",
        opacity: null
    }

    ScrollReveal().reveal(".animation-show", { delay: 500 });
    ScrollReveal().reveal(".animation-show--fast", { delay: 300 });
    ScrollReveal().reveal(".animation-show--slow", { delay: 700 });
    ScrollReveal().reveal(".animation-slide-left", slideLeft);
    ScrollReveal().reveal(".animation-slide-right", slideRight);
}


function showAnimations() {
    const mobile = window.matchMedia("screen and (min-width: 900px)");

    if (mobile.matches) {
        useScrollReveal();
    }

    mobile.addListener( function(mobile) {
        if (mobile.matches) {
            useScrollReveal();
        }
    });
};

function useParallax() {
    const elem = document.querySelector(".parallax");

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

    document.addEventListener("mousemove", parallax);
}

const init = function() {
    changeTitle();
    showHamburgerMenu();
    changeSlide();
    useScrollReveal();
    // showAnimations();
    // useParallax();
};

document.addEventListener("DOMContentLoaded", init);
