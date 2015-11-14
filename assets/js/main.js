$(document).ready(function(){
  $('.pic:first-child').addClass('active');
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
  $('.pic').on('click',function(event){
    event.preventDefault();

    var bg = $(this).data('background');
    var title = $(this).data('title');
    var position = $(this).data('position');
    var description = $(this).data('description');

    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.test-title').html(title);
    $('.test-description').html(description);
    $('.picture').css({
      'background':'url(assets/img/'+ bg +'.jpg)',
      'background-position':''+ position +'',
      'background-repeat':'no-repeat',
      'background-size':'cover'
    });
  });
}
