'use strict';

let arrayOfSlides = Array.from(document.querySelectorAll('div.slider__item'));
let lengthOfArrayOfSlides = arrayOfSlides.length - 1;
let arrayOfDots = Array.from(document.querySelectorAll('div.slider__dot'));
let currentSlide = 0;
let slideArrows = Array.from(document.querySelectorAll('div.slider__arrow'));

function setSlidesDotsInactive(slidesArray, dotsArray, index) {
    slidesArray[index].classList.remove('slider__item_active');
    dotsArray[index].classList.remove('slider__dot_active');
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
        currentSlide = arrayOfSlides.findIndex(isSlide);
        setSlidesDotsInactive(arrayOfSlides, arrayOfDots, currentSlide);
        let nextSlide = setNextSlide(prevPage, nextPage, lengthOfArrayOfSlides, currentSlide);
        setCurrentSlideAndDot(arrayOfSlides, arrayOfDots, nextSlide)
    };
});

for (let dot in arrayOfDots) {
    arrayOfDots[dot].onclick = function () {
        currentSlide = arrayOfSlides.findIndex(isSlide);
        setSlidesDotsInactive(arrayOfSlides, arrayOfDots, currentSlide);
        setCurrentSlideAndDot(arrayOfSlides, arrayOfDots, parseInt(dot));
    };
};
