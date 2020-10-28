// Home slider
var $slider = $("#main_slider");
$slider
  .on("init reInit beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    setTimeout(function () {
      switch (nextSlide) {
        case 0:
          $(".home__nav").removeClass().addClass("home__nav nav_section0");
          $(".copyright").removeClass("copyright_section3");
          $(".home_randomize").removeClass("home_randomize3");
          break;
        case 1:
          $(".home__nav").removeClass().addClass("home__nav nav_section1");
          $(".copyright").removeClass("copyright_section3");
          $(".home_randomize").removeClass("home_randomize3");
          break;
        case 2:
          $(".home__nav").removeClass().addClass("home__nav nav_section2");
          $(".copyright").removeClass("copyright_section3");
          $(".home_randomize").removeClass("home_randomize3");
          break;
        case 3:
          $(".home__nav").removeClass().addClass("home__nav nav_section3");
          $(".copyright").addClass("copyright_section3");
          $(".home_randomize").addClass("home_randomize3");
          break;
        case 4:
          $(".home__nav").removeClass().addClass("home__nav nav_section4");
          $(".copyright").removeClass("copyright_section3");
          $(".home_randomize").removeClass("home_randomize3");
          break;
        case 5:
          $(".home__nav").removeClass().addClass("home__nav nav_section5");
          $(".copyright").removeClass("copyright_section3");
          $(".home_randomize").removeClass("home_randomize3");
          break;
      }
    }, 200);

    mouseWheel($slider);
  })
  .slick({
    dots: false,
    fade: true,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    speed: 1000,
    infinite: true,
  });


  $(".home_randomize").click(function(){
   var rand = Math.floor( Math.random() * $(".homeSlider__structure").length );
   var activesliderIndex2 = $(".member_slider .slick-active").attr("data-slick-index")

   if(rand == activesliderIndex2){
    while(rand == activesliderIndex2){
      var rand = Math.floor( Math.random() * $(".homeSlider__structure").length );
      $("#main_slider").slick('slickGoTo', rand);
    }
   }else {


     $("#main_slider").slick('slickGoTo', rand);
   }
  })

  $(".member_slider").slick({
    dots: false,
    fade: true,
    cssEase: "linear",
    prevArrow: ".members_dots .dots_left",
    nextArrow: ".members_dots .dots_right",
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    speed: 1000,
    infinite: true,
  });
  $(".member_randomize").click(function(){
    var rand = Math.floor( Math.random() * $(".members_slider_item").length );
    var activesliderIndex = $(".member_slider .slick-active").attr("data-slick-index")

      if(rand == activesliderIndex){

        while(rand == activesliderIndex){

          var rand = Math.floor( Math.random() * $(".members_slider_item").length );
          $(".member_slider").slick('slickGoTo', rand);
        }
      }else {
        $(".member_slider").slick('slickGoTo', rand);

      }

    
   })
  
function mouseWheel($slider) {
  if ($(window).width() > 992) {
    $(window).on("wheel", { $slider: $slider }, mouseWheelHandler);
  }
}
function mouseWheelHandler(event) {
  var $slider = event.data.$slider;
  var delta = event.originalEvent.deltaY;
  if (delta > 0) {
    $slider.slick("slickNext");
  } else {
    $slider.slick("slickPrev");
  }
}

var x = true;
$(".menu__hamburger div").click(function () {
  if (x) {
    $(".menu__hamburger div").addClass("cross");
    $(".menu").addClass("shrink");
    $(".menu__hamburger__wrapper").addClass("hide");
    x = false;
  } else {
    $(".menu__hamburger div").removeClass("cross");
    $(".menu").removeClass("shrink");
    setTimeout(function () {
      $(".menu__hamburger__wrapper").removeClass("hide");
    }, 300);
    x = true;
  }
});

// Portfolio slider

var $sliderPortfolio = $(".portfolio__slider");
$sliderPortfolio
  .on("init reInit beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    mouseWheel($sliderPortfolio);
  })
  .slick({
    // dots: true,
    fade: false,
    cssEase: "linear",
    arrows: true,
    prevArrow: "#portfolio_left",
    nextArrow: "#portfolio_right",
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    speed: 1500,
    infinite: true,
  });

function mouseWheelPortfolio($sliderPortfolio) {
  if ($(window).width() > 992) {
    $(window).on(
      "wheel",
      { $sliderPortfolio: $sliderPortfolio },
      mouseWheelHandlerPortfolio
    );
  }
}
function mouseWheelHandlerPortfolio(event) {
  var $sliderPortfolio = event.data.$sliderPortfolio;
  var delta = event.originalEvent.deltaY;
  if (delta > 0) {
    $sliderPortfolio.slick("slickNext");
  } else {
    $sliderPortfolio.slick("slickPrev");
  }
}

// services slider
var $sliderServices = $(".services__slider");
$sliderServices
  .on("init reInit beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    mouseWheel($sliderServices);
  })
  .slick({
    // dots: true,
    fade: true,
    cssEase: "linear",
    arrows: true,
    prevArrow: "#Services_left",
    nextArrow: "#Services_right",
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    speed: 500,
    infinite: true,
  });

function mouseWheelServices($sliderServices) {
  if ($(window).width() > 992) {
    $(window).on(
      "wheel",
      { $sliderServices: $sliderServices },
      mouseWheelHandlerServices
    );
  }
}
function mouseWheelHandlerServices(event) {
  var $sliderServices = event.data.$sliderServices;
  var delta = event.originalEvent.deltaY;
  if (delta > 0) {
    $sliderServices.slick("slickNext");
  } else {
    $sliderServices.slick("slickPrev");
  }
}

// about slider
setTimeout(function(){
  $(".about__top--slider").slick({
      dots: true,
      infinite: false,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: "10px",
      arrows: true,
      prevArrow: " .top_dots .dots_left",
      nextArrow: ".top_dots .dots_right",
    });

    $(".about_bottom_slider").slick({
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 6,
      slidesToScroll: 1,
      centerPadding: "10px",
      arrows: true,
      prevArrow: ".about_bottom_dots .dots_left",
      nextArrow: ".about_bottom_dots .dots_right",
    });

    if($(".grid").length>0){
    $(".grid").isotope({
      itemSelector: ".grid-item",
       percentPosition: !0,
        masonry: 
        { columnWidth: 0,
          horizontalOrder: !0, 
          gutter: 14.7 } })
        }
  },1000)




$(".day_night_box").click(function(){

$(this).toggleClass("night")
$(".portfolioInner").toggleClass("night")

})



$(".b-white").click(function(){

  $("#carousel .mCSB_container").css("left","0")
  $("#carousel .mCSB_dragger").css("left","20px")
  $(".portfolio_inner_left_content").removeClass("shrink1")
  $(".portfolio_inner_left_content").removeClass("shrink2")
  $(".mCSB_scrollTools").removeClass("pos")

})
