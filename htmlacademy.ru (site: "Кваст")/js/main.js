$(function(){

 $('.header-slider-jq').slick({
    arrows: false,
    autoplay: 2000,    
    dotsClass: 'header-dots',
    dots: true
  });

  $('.main-menu__btn').on('click', function () {
    $('.main-menu__list').slideToggle();
  });

});