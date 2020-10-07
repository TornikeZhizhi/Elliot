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
          break;
        case 1:
          $(".home__nav").removeClass().addClass("home__nav nav_section1");
          $(".copyright").removeClass("copyright_section3");
          break;
        case 2:
          $(".home__nav").removeClass().addClass("home__nav nav_section2");
          $(".copyright").removeClass("copyright_section3");
          break;
        case 3:
          $(".copyright").addClass("copyright_section3");
          $(".home__nav").removeClass().addClass("home__nav nav_section3");
          break;
        case 4:
          $(".home__nav").removeClass().addClass("home__nav nav_section4");
          $(".copyright").removeClass("copyright_section3");
          break;
        case 5:
          $(".home__nav").removeClass().addClass("home__nav nav_section5");
          $(".copyright").removeClass("copyright_section3");
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
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    speed: 1000,
    infinite: true,
  });

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

$(".about__top--slider").slick({
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "100px",
  arrows: true,
  prevArrow: " .top_dots .dots_left",
  nextArrow: ".top_dots .dots_right",
});

$(".about_bottom_slider").slick({
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 7,
  slidesToScroll: 1,
  centerPadding: "100px",
  arrows: true,
  prevArrow: ".about_bottom_dots .dots_left",
  nextArrow: ".about_bottom_dots .dots_right",
});
