'use strict'

let arrayOfSlides = Array.from(document.querySelectorAll('div.slider__item'));
let lengthOfArrayOfSlides = arrayOfSlides.length - 1;
let arrayOfDots = Array.from(document.querySelectorAll('div.slider__dot'));
let currentSlide = 0;
let slideArrows = Array.from(document.querySelectorAll('div.slider__arrow'));

function allSlidesDotsInactive(slidesArray, dotsArray) {
    slidesArray.forEach(function (slide) {
        slide.className = 'slider__item';
    });
    dotsArray.forEach(function (dot) {
        dot.className = 'slider__dot';
    });
};


function getCurrentSlide(prevPage=false, nextPage=false, lengthOfArrayOfSlides, currentSlide) {
    if (nextPage) {
        currentSlide === lengthOfArrayOfSlides ? currentSlide = 0 : currentSlide += 1;
        return currentSlide;
    } else if (prevPage) {
        currentSlide === 0 ? currentSlide = lengthOfArrayOfSlides : currentSlide -= 1;
        return currentSlide;
    };
};

function setCurrentSlideAndDot(arrayOfSlides, arrayOfDots, currentSlide) {
    arrayOfSlides[currentSlide].className = 'slider__item slider__item_active';
    arrayOfDots[currentSlide].className = 'slider__dot slider__dot_active';
};

slideArrows.forEach(function (arrow) {
    arrow.onclick = function () {
        let nextPage = arrow.classList.contains('slider__arrow_next')
        let prevPage = arrow.classList.contains('slider__arrow_prev')
        allSlidesDotsInactive(arrayOfSlides, arrayOfDots);
        currentSlide = getCurrentSlide(prevPage, nextPage, lengthOfArrayOfSlides, currentSlide);
        setCurrentSlideAndDot(arrayOfSlides, arrayOfDots, currentSlide)
    };
});

for (let dot in arrayOfDots) {
    arrayOfDots[dot].onclick = function () {
        allSlidesDotsInactive(arrayOfSlides, arrayOfDots);
        setCurrentSlideAndDot(arrayOfSlides, arrayOfDots, dot)
    };
};
