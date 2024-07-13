
var init = false;
var swiper;
function swiperCard() {
    if (window.innerWidth >= 448 && window.innerWidth <= 673) {
        if (!init) {
            init = true;
            swiper = new Swiper(".swiper", {
                direction: "horizontal",
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 32,
                loop: true,
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                    pageUpDown: true,
                },
                mousewheel:{
                  sensitivity: 1,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else if (window.innerWidth > 673) {
        if (!init) {
            init = true;
            swiper = new Swiper(".swiper", {
                direction: "horizontal",
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 32,
                loop: true,
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                    pageUpDown: true,
                },
                mousewheel:{
                    sensitivity: 1,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else if (window.innerWidth <= 448) {
        if (!init) {
            init = true;
            swiper = new Swiper(".swiper", {
                direction: "horizontal",
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 170,
                loop: true,
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                    pageUpDown: true,
                },
                mousewheel:{
                    sensitivity: 1,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);
$(function(){
    $("#open1").click(function(){
        $("#portfolio").toggleClass('active')
    });
});