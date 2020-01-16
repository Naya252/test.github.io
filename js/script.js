$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });
});


let media1 = document.getElementById('media1');
let media2 = document.getElementById('media2');
let media3 = document.getElementById('media3');
// let btn_order = document.getElementById('btn_order');

// media query event handler
if (matchMedia) {
    const mq = window.matchMedia("(max-width: 430px)");
    mq.addListener(WidthChange);
    WidthChange(mq);

}


// media query change
function WidthChange(mq) {
    if (mq.matches) {
        media1.classList.add("mt-5");
    } else {
        media1.classList.remove("mt-5");
    }
}

