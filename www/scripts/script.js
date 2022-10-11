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

});
