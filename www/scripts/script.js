$(document).ready(function () {

  $('.j-burger').on('click' , function() {

    $('.j-menu').slideToggle();
  })



  let prevBtn;

  $('.j-accordeon-btn').on('click' , function () {
    if(prevBtn === this){
      $(this).next().slideToggle();
      return;
    }

    $('.j-accordeon-btn').next().slideUp();
    $(this).next().slideDown();
    prevBtn = this;

  })


   //tabs

   $('.j-tabs-link').on('click' , function (event){
    event.preventDefault();

    let index = $(this).index('.j-tabs-link');


    $('.j-tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.j-contact-item').removeClass('active');
    $('.j-contact-item').eq(index).addClass('active');


  });

  //works filter
  $('.j-nav-link').on('click' , function (e) {
    e.preventDefault();

    let dataFilter = $(this).data('filter');

    $('.j-nav-link').removeClass('active');
    $(this).addClass('active');

    if (dataFilter === 'all') {
      $('.j-works-item').show();
      return;
    }

    console.log(dataFilter);


    $('.j-works-item').each(function() {

      let dataType = $(this).data('type');

      if (dataType === dataFilter) {
        $(this).show();
      } else {
        $(this).hide();
      }

    });

  });

  //slicker
  $('.j-carousel').slick();

})
