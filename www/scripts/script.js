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




})
