$(document).ready(function(){
  smoothScroll();
  testimonialsPics();
});

function smoothScroll(duration) {
  $('a[href^="#"]').on('click',function(event){
    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top}, duration);
    }
  });
}

function testimonialsPics() {
  $('.testimonial-pics a img').on('click',function(event){
    event.preventDefault();
    var href = $(this).attr('src');
    $(this).parent().siblings().children().removeClass('active');
    $(this).addClass('active');
    $('.picture').css({
      'background':'url('+ href +')',
      'background-repeat':'no-repeat',
      'background-size':'cover'
    });
  });
}
