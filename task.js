'use strict';

let arrayOfSlides = Array.from(document.querySelectorAll('div.slider__item'));
let lengthOfArrayOfSlides = arrayOfSlides.length - 1;
let arrayOfDots = Array.from(document.querySelectorAll('div.slider__dot'));
let currentSlide = 0;
let slideArrows = Array.from(document.querySelectorAll('div.slider__arrow'));

function allSlidesDotsInactive(slidesArray, dotsArray) {
    slidesArray.forEach(function (slide) {
        slide.classList.remove('slider__item_active');
    });
    dotsArray.forEach(function (dot) {
        dot.classList.remove('slider__dot_active');
    });
};

function setNextSlide(prevPage=false, nextPage=false, lengthOfArrayOfSlides, currentSlide) {
    if (nextPage) {
        currentSlide === lengthOfArrayOfSlides ? currentSlide = 0 : currentSlide += 1;
        return currentSlide;
    } else if (prevPage) {
        currentSlide === 0 ? currentSlide = lengthOfArrayOfSlides : currentSlide -= 1;
        return currentSlide;
    };
};

function isSlide(element, index, array) {
    return element.classList.contains('slider__item_active');
};

function setCurrentSlideAndDot(arrayOfSlides, arrayOfDots, currentSlide) {
    arrayOfSlides[currentSlide].classList.add('slider__item_active');
    arrayOfDots[currentSlide].classList.add('slider__dot_active');
};

slideArrows.forEach(function (arrow, index) {
    arrow.onclick = function () {
        let nextPage = arrow.classList.contains('slider__arrow_next')
        let prevPage = arrow.classList.contains('slider__arrow_prev')
        allSlidesDotsInactive(arrayOfSlides, arrayOfDots);
        let nextSlide = setNextSlide(prevPage, nextPage, lengthOfArrayOfSlides, currentSlide);
        setCurrentSlideAndDot(arrayOfSlides, arrayOfDots, nextSlide)
        currentSlide = arrayOfSlides.findIndex(isSlide);
    };
});

for (let dot in arrayOfDots) {
    arrayOfDots[dot].onclick = function () {
        allSlidesDotsInactive(arrayOfSlides, arrayOfDots);
        setCurrentSlideAndDot(arrayOfSlides, arrayOfDots, parseInt(dot));
        currentSlide = arrayOfSlides.findIndex(isSlide);
    };
};
