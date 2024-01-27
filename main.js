var slides = document.querySelectorAll(`.slide`);
var buttons = document.querySelectorAll(`.slider-btn`)
let currentSlide = 1;

var manualNav = function(manual) {
    slides.forEach(function(slide) {
        slide.classList.remove(`active`);

        buttons.forEach((btn) => {
            btn.classList.remove(`active`);
        });
    });

    slides[manual].classList.add(`active`);
    buttons[manual].classList.add(`active`);
}
buttons.forEach(function(btn, i) {
    btn.addEventListener(`click`, function() {
        manualNav(i);
        currentSlide = i;
    })
})

var repeat = function(activeClass) {
    let active = document.getElementsByClassName(`active`);
    let i = 1;
    var repeater = function() {
        setTimeout(function() {
            [...active].forEach(function(activeSlide) {
                activeSlide.classList.remove(`active`)
            });
            slides[i].classList.add(`active`);
            buttons[i].classList.add(`active`);
            i++
            if (slides.length == i) {
                i = 0;
            } if (i >= slides.length) {
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();

var blogs = document.querySelectorAll(`.blog`);
blogs.forEach( (p, i) => {
    p.dataset.aos = `fade-down`;
    p.dataset.aosDuration = 1300;
    // p.dataset.aosDelay = i * 200;
});

var category = document.querySelectorAll(`.category`);
category.forEach( (p, i) => {
    p.dataset.aos = `fade-up`;
    p.dataset.aosDuration = 1300;
    p.dataset.aosDelay = i * 300;
});

var video = document.querySelectorAll(`.video-content`);
video.forEach(p => {
    p.dataset.aos = `fade-up`;
    p.dataset.aosDuration = 1200;
});

var form = document.querySelectorAll(`.form-container`);
form.forEach(p => {
    p.dataset.aos = `flip-up`;
    p.dataset.aosDuration = 500;
})

var about = document.querySelectorAll(`.about-description`);
about.forEach(p => {
    p.dataset.aos = `fade-up`;
    p.dataset.aosDuration = 1000;
})

var about = document.querySelectorAll(`.asset-item`);
about.forEach(p => {
    p.dataset.aos = `fade-up-left`;
    p.dataset.aosDuration = 1000;
})

AOS.init();