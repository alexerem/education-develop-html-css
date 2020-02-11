$(function () {

  $('.header-slider-jq').slick({
    arrows: false,
    autoplay: 4000,
    dotsClass: 'header-dots',
    dots: true
  });

  $('.main-menu__btn').on('click', function () {
    $('.main-menu__list').slideToggle();
  });

  $(window).resize(function () {
    if ($(window).width() < 810) {
      $('.news-item').not('.slick-initialized').slick({
        arrows: false,
        autoplay: 1500,
      });
      $('.news__title').hide();
    } else {
      $('.news-item').filter('.slick-initialized').slick('unslick');
      $('.news__title').show();
    };
  });

  if ($(window).width() < 810) {
    $('.news-item').slick({
      arrows: false,
      autoplay: 1500,
    });
    $('.news__title').hide();
  } else {
    $('.news-item').filter('.slick-initialized').slick('unslick');
    $('.news__title').show();
  };

});