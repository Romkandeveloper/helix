$(document).ready(function(){
    $(".benefits").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        appendDots: $('.benefits__links'),
        
        slidesToShow: 1,
    });
});

window.onload = function(){
    const slides = document.querySelectorAll('.benefits__wrapper');
    const buts = document.querySelectorAll('.benefits__links button');

    for (let i = 0; i < buts.length; i++){
        buts[i].textContent = slides[i].getAttribute('data-name');
    }
};