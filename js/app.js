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

function changeSlideItem(firstHeader, firstParagraph, secondHeader, secondParagraph) {
    firstHeader.classList.add("slider__btn-header--active");
    firstParagraph.classList.add("slider__paragraph--active");
    secondHeader.classList.remove("slider__btn-header--active");
    secondParagraph.classList.remove("slider__paragraph--active");
}

function changeSlide() {
    const paragraphMission = document.querySelector(".slider__paragraph--mission");
    const paragraphVision = document.querySelector(".slider__paragraph--vision");
    const btnMission = document.querySelector(".slider__btn-header--mission");
    const btnVision = document.querySelector(".slider__btn-header--vision");
    const sliderBtn = document.querySelector(".slider__btn");

    btnMission.addEventListener("click", function() {
        changeSlideItem(btnMission, paragraphMission, btnVision, paragraphVision);
    })

    btnVision.addEventListener("click", function() {
        changeSlideItem(btnVision, paragraphVision, btnMission, paragraphMission);
    })

    sliderBtn.addEventListener("click", function() {
        if (paragraphMission.classList.contains("slider__paragraph--active")) {
            changeSlideItem(btnVision, paragraphVision, btnMission, paragraphMission);
        } else {
            changeSlideItem(btnMission, paragraphMission, btnVision, paragraphVision);
        }
    })
}

function useScrollReveal() {
    const slideUp = {
        duration: 2200,
        delay: 200,
        easing: "ease-out",
        scale: 1,
        distance: "12rem"
    };

    const slideUpSlow = {
        duration: 2700,
        delay: 75,
        easing: "ease-out",
        scale: 1,
        distance: "8rem"
    };

    const slideUpFast = {
        duration: 2050,
        delay: 75,
        easing: "ease-out",
        scale: 1,
        distance: "10rem"
    };

    const slideUpLittleDistance = {
        duration: 1300,
        delay: 75,
        easing: "ease-out",
        scale: 1,
        distance: "1.5rem"
    };

    ScrollReveal().reveal(".animation", {delay: 100});
    ScrollReveal().reveal(".animation-show", slideUp);
    ScrollReveal().reveal(".animation-show--slow", slideUpSlow);
    ScrollReveal().reveal(".animation-show--fast", slideUpFast);
    ScrollReveal().reveal(".animation-show--little-distance", slideUpLittleDistance);
}

// function showAnimation() {
//     window.addEventListener("load", function() {
//         useScrollReveal();
//     })
// }

const init = function() {
    changeTitle();
    showHamburgerMenu();
    changeSlide();
    useScrollReveal();
    // showAnimation();
};

document.addEventListener("DOMContentLoaded", init);
