$(document).ready(function(){
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


let mediaM1 = document.getElementById('mediaM1');
let mediaM2 = document.getElementById('mediaM2');
let mediaM3 = document.getElementById('mediaM3');

// media query event handler
if (matchMedia) {
    const mq = window.matchMedia("(max-width: 600px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}
	
// media query change
function WidthChange(mq) {
	if (mq.matches) {
        mediaM1.classList.remove("ml-5");
        mediaM1.classList.remove("mt-5");
        mediaM2.classList.remove("ml-5");
        mediaM3.classList.remove("ml-5");
        

	} else {
        mediaM1.classList.add("ml-5");
        mediaM1.classList.add("mt-5");
        mediaM2.classList.add("ml-5");
        mediaM3.classList.add("ml-5");        
	}	
}