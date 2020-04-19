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
    const sliderParagraphs = document.querySelectorAll(".slider__paragraph");
    const sliderButtonsHeader = document.querySelectorAll(".slider__btn-header");
    const sliderButton = document.querySelector(".slider__btn");

    for (let i = 0; i < sliderButtonsHeader.length; i++) {
        sliderButtonsHeader[i].addEventListener("click", function() {
            this.classList.add("slider__btn-header--active");
        })
    }

    // sliderButton.addEventListener("click", function() {
    //     console.log("hello")
    // })


}

function useParallax() {
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

    document.addEventListener("mousemove", parallax);
}

const init = function() {
    changeTitle();
    showHamburgerMenu();
    // changeSlide();
    // useParallax();
};

document.addEventListener("DOMContentLoaded", init);
