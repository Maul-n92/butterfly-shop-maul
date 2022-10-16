$(document).ready(function(){



  $('.js-header-burger').on('click', function() {

    $('.js-menu').slideToggle();
  });


  // Аккордеоны - часто задаваемые вопросы
  let prevAccordionBtn;

  $('.js-accordion-btn').on('click', function() {
    if (prevAccordionBtn === this) {
      $(this).next().slideToggle();
    } else {
      $('.js-accordion-btn').next().slideUp();
      $(this).next().slideDown();
      prevAccordionBtn = this;
    }
  });

  // Табы в контактах
  $('.js-tabs-link').on('click', function(event){
    event.preventDefault();

    $('.js-tabs-link').removeClass('active');
    $(this).addClass('active');

    const index = $(this).index('.js-tabs-link');

    $('.js-tabs-content').removeClass('active');
    $('.js-tabs-content').eq(index).addClass('active');
  });

   // Слик слайдер
   $('.js-reviews-carousel').slick({
    autoplay: false,
    infinite: false,
    dots: true
  });



});
