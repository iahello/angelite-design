//Slider
$('#slider').parallax({imageSrc: '../../assets/slider.jpg'});
//End of Slider
$('#display-image').parallax({imageSrc: '../../assets/latest.jpg'});
//Fixed Nav
var mafix = $('.fixed').offset().top;

$(window).scroll(function(){
  var sticky = $('.fixed'),
      scroll = $(window).scrollTop();
    
  if (scroll >= mafix) sticky.addClass('fixed-style');
  else sticky.removeClass('fixed-style');
});
//End of Fixed Nav
