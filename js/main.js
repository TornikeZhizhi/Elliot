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
    autoplay: false,
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
var leftIndex = true;
var rightIndex = true;
function mouseWheelHandler(event) {

  var $slider = event.data.$slider;
  var delta = event.originalEvent.deltaY;
  if (delta > 0) {

    if(leftIndex) {
      $slider.slick("slickNext");
      leftIndex = false

      setTimeout(function(){
        leftIndex = true
      },1500)
    }
  
  } else {
    if(rightIndex) {
      $slider.slick("slickPrev");
      rightIndex = false

      setTimeout(function(){
        rightIndex = true
      },1500)
    }

  
  }
}

$(window).on('load resize', function () {
  if($(window).width() > 992) {
 
    var x = true;
    $(".menu__hamburger div").click(function () {
      if (x) {
        $(".menu__hamburger div").addClass("cross");
        $(".section_translate").addClass("active");
        $(".menu").addClass("shrink");
        $(".menu__hamburger__wrapper").addClass("hide");
        x = false;
      } else {
        $(".menu__hamburger div").removeClass("cross");
        $(".menu").removeClass("shrink");
        $(".section_translate").removeClass("active");
        setTimeout(function () {
          $(".menu__hamburger__wrapper").removeClass("hide");
        }, 300);
        x = true;
      }
    });
    
  
  var delayMenu = true
  
  $(".menu").mouseenter(function(){
  
    if(delayMenu){
      $(".menu__hamburger div").addClass("cross");
      $(".menu").addClass("shrink");
      $(".section_translate").addClass("active");
      $(".menu__hamburger__wrapper").addClass("hide");
      delayMenu = false
    }
    
  
  })
  
  $(".menu").mouseleave(function(){
    
    $(".menu__hamburger div").removeClass("cross");
      $(".menu").removeClass("shrink");
      $(".section_translate").removeClass("active");
      setTimeout(function () {
        $(".menu__hamburger__wrapper").removeClass("hide");
      }, 300);
      setTimeout(function () {
        delayMenu = true
      }, 500);
  
      
  })
  }else {
    var x = true;
    $(".menu__hamburger div").click(function () {
      if (x) {
        $(".menu__hamburger div").addClass("cross");
        $(".menu__commonTabs").addClass("active")
        $(".menu__hamburger__wrapper").addClass("hide");
        $("body").css("overflow","hidden")
        x = false;
      } else {
        $(".menu__hamburger div").removeClass("cross");

        $(".menu__commonTabs").removeClass("active")
        setTimeout(function () {
          $(".menu__hamburger__wrapper").removeClass("hide");
        }, 300);
        x = true;
      }
    });
  
  
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
    console.log(currentSlide)
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
    responsive: [
      {
          breakpoint: 992,
          settings: "unslick"
      }
  ]
  });

 
  var leftIndexp = true;
  var rightIndexp = true;

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

    if(leftIndexp) {
      $sliderPortfolio.slick("slickNext");
      leftIndexp = false

      setTimeout(function(){
        leftIndexp = true
      },2500)
    }
    
  } else {
    
    if(rightIndexp) {
      $sliderPortfolio.slick("slickPrev");
      rightIndexp = false

      setTimeout(function(){
        rightIndexp = true
      },2500)
    }
    
  }
}

// services js

$(".services_tabs li a").each(function(index){

  $(this).click(function(e){
    e.preventDefault()
    $(".services_text_wrapper").fadeOut(0)
    $(".services_tabs_text").fadeOut(0)
    $(".services_tabs_text").eq(index).fadeIn(300)
    $(".services_tabs li a").removeClass("active")
    $(this).addClass("active")
  })

})


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
      responsive: [

        {
          breakpoint: 780,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
      
    ]
    });

    $(".about_bottom_slider").slick({
      dots: true,
      infinite: false,
      speed: 600,
      slidesToShow: 6,
      slidesToScroll: 1,
      centerPadding: "10px",
      arrows: true,
      prevArrow: ".about_bottom_dots .dots_left",
      nextArrow: ".about_bottom_dots .dots_right",
      responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
      
        {
          breakpoint: 576,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      }
      
    ]
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


var track = $(".portfolio_masorny").attr("data-track")
var thumb = $(".portfolio_masorny").attr("data-thumb")
// var barbg = $(".portfolio_masorny").attr("data-barbg")
var portfDiv = $(".portfolio_masorny")
var styleElement = document.createElement("style");
styleElement.appendChild(document.createTextNode
  ("div.portfolio_masorny::-webkit-scrollbar-track {background:"+track+"}div.portfolio_masorny::-webkit-scrollbar-thumb {background-color:"+
  thumb+"}div.portfolio_masorny{--scrollbarBG:"+ track+"}"));
document.getElementsByTagName("head")[0].appendChild(styleElement);



var wordLength = $(".changed_words span").length

var wordIndex = 1;
$(".changed_text").text($(".changed_words span").eq(wordIndex).text())


var k ;
 k = setInterval(function() {
  if(wordIndex == wordLength){
    wordIndex =0;
  }

  $(".changed_words span").fadeOut(0)
  $(".changed_words span").eq(wordIndex).fadeIn(550)

  wordIndex++;
 
},2000);


document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {

    k = setInterval(function() {
      if(wordIndex == wordLength){
        wordIndex =0;
      }
    
      $(".changed_words span").fadeOut(0)
      $(".changed_words span").eq(wordIndex).fadeIn(550)
    
      wordIndex++;
     
    },2000);
  
  } else {

    clearInterval(k)
   
  }
});

// ()


var container = document.querySelector (".member_randomize");
var starth = document.querySelector(".starth");
var middleh = document.querySelector(".middleh");
var lasth = document.querySelector(".lasth");
var forehead = document.querySelector(".forehead");
var eyes = document.querySelector(".eyes");
var nose = document.querySelector(".nose");
var lips = document.querySelector(".lips");
var chin = document.querySelector(".chin");
var length = document.querySelector (".face_contaiener").getAttribute("data-length");


container.addEventListener("click", function () {

  $('.face_contaiener img').css("display","none")
  $('.face_contaiener img').css("opacity","0")
  setTimeout(function() {
    
    $(".face_contaiener img").css("display","block")
    $('.face_contaiener img').css("opacity","1")
  },20)

var num1 = Math.floor(Math.random() * length) + 1;
starth.src = "images/faces/starth_" + num1 + ".png";

var num2 = Math.floor(Math.random() * length) + 1;
  middleh.src = "images/faces/middleh_" + num2 + ".png";

var num3 = Math.floor(Math.random() * length) + 1;
lasth.src = "images/faces/lasth_" + num3 + ".png";

var num4 = Math.floor(Math.random() * length) + 1;

forehead.src = "images/faces/forehead_" + num4 + ".png";

var num5 = Math.floor(Math.random() * length) + 1;

eyes.src = "images/faces/eyes_" + num5 + ".png";

var num6 = Math.floor(Math.random() * length) + 1;

nose.src = "images/faces/nose_" + num6 + ".png";

var num7 = Math.floor(Math.random() * length) + 1;
lips.src = "images/faces/lips_" + num7 + ".png";

var num8 = Math.floor(Math.random() * length) + 1;
chin.src = "images/faces/chin_" + num8 + ".png";

})




