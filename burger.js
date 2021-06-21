$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header .menu-list').toggleClass('active');
    });
});