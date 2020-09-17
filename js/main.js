
// $(document).ready(function(){
// $('.your-element').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//   console.log(nextSlide);
// });

var $slider = $("#main_slider");
$slider.
on('init reInit beforeChange', function(event, slick, currentSlide, nextSlide) {


  setTimeout(function(){
    switch (nextSlide) {
    case 0:
        $(".home_nav").removeClass().addClass('home_nav nav_section0')
        $(".copyright").removeClass("copyright_section3");
      break;
    case 1:
     $(".home_nav").removeClass().addClass('home_nav nav_section1')
        $(".copyright").removeClass("copyright_section3");
      break;
    case 2:
       $(".home_nav").removeClass().addClass('home_nav nav_section2')
          $(".copyright").removeClass("copyright_section3");
      break;
    case 3:

     $(".copyright").addClass("copyright_section3");
     $(".home_nav").removeClass().addClass('home_nav nav_section3')
      break;
    case 4:
     $(".home_nav").removeClass().addClass('home_nav nav_section4')
        $(".copyright").removeClass("copyright_section3");
      break;
      case 5:
     $(".home_nav").removeClass().addClass('home_nav nav_section5')
        $(".copyright").removeClass("copyright_section3");
      break;
    }
  },200)


  mouseWheel($slider);
}).
slick({
  dots: false,
  fade: true,
  cssEase: 'linear',
  prevArrow: false,
    nextArrow: false,
    autoplay: false,
  autoplaySpeed: 5000,
    speed: 1000,
  infinite: true });

$slider.on('swipe', function(event, slick, direction){
  console.log(direction,event,slick);

  // left
});

function mouseWheel($slider) {

  if ($(window).width()>992) {

  $(window).on('wheel', { $slider: $slider }, mouseWheelHandler);
  }  
}
function mouseWheelHandler(event) {
  // event.preventDefault();
  var $slider = event.data.$slider;
  var delta = event.originalEvent.deltaY;
  if (delta > 0) {
    $slider.slick('slickNext');
  } else
  {
    $slider.slick('slickPrev',);
  }
}




// }/


// CONTACT SCROLL
