var AI = (function () {
  function initializer() {
    AI.carousel.init();
  }
  function destroy() {
    AI.carousel.destroy();
  }
  return { init: initializer, destroy: destroy };
})(window);

AI.carousel = (function () {
  var scrollPos;
  function initializer() {
    $("#carousel").imagesLoaded(initScroller);
  }
  function initScroller() {
    var wrapper = $("#carousel"),
      $ul = wrapper.find("> ul"),
      imgWidth = $ul.find("img:eq(0)").width(),
      qtty = $ul.find("li").length;
    $ul.css({ width: imgWidth * qtty });
    $ul.find("li").find("img").addClass("visible");
    handleScroller();
    $(".mCSB_dragger").hide();
  }

  var ww = $(window).width();

  function handleScroller() {
    var wrapper = $("#carousel"),
      qtty = wrapper.find("li").length,
      imgWidth = wrapper.find("img").width(),
      elPos,
      rest;
    wrapper.mCustomScrollbar({
      horizontalScroll: true,
      autoHideScrollbar: true,
      contentTouchScroll: true,
      mouseWheelPixels: 150,
      callbacks: {
        whileScrolling: function () {
          var leftPositionLength = $(".mCSB_dragger").css("left").length - 2;

          if (leftPositionLength == "2") {
            var leftPosition = $(".mCSB_dragger")
              .css("left")
              .split("")
              .splice(0, 2)
              .join("");
          } else {
            var leftPosition = $(".mCSB_dragger")
              .css("left")
              .split("")
              .splice(0, 3)
              .join("");
          }

          var result = (Number(leftPosition) / ww) * 100;
        
          if (result > 15) {
            $(".portfolio_inner_left_content").addClass("shrink1");
            $(".mCSB_dragger_bar").addClass("pos");
            $(".mCSB_scrollTools").addClass("pos");
          }
          if (result > 25) {
            $(".portfolio_inner_left_content").addClass("shrink2");
          }

          if (result < 25 && result > 15) {
            $(".portfolio_inner_left_content").removeClass("shrink2");
          }
          if (result < 15) {
            $(".mCSB_dragger_bar").removeClass("pos")
            $(".mCSB_scrollTools").removeClass("pos")
            $(".portfolio_inner_left_content").removeClass("shrink1");
          }

          // if(result > )
        },
      },
    });

    if (!Modernizr.touch)
      wrapper.find("figure").each(function () {
        $(this).hoverdir();
      });

    // handle keyboard
    $("body").keydown(function (e) {
      rest = wrapper.find(".mCSB_container").width() - $(window).width();
      if (e.which == 37) {
        // previous
        if (scrollPos > 0) scrollPos = scrollPos - 100;
        else return false;
        elPos = wrapper.find("li:eq(" + scrollPos + ")").position().left;
      }
      if (e.which == 39) {
        // next
        elPos = wrapper.find("li:eq(" + (scrollPos + 1) + ")").position().left;
        if (elPos > rest + imgWidth) return false;
        if (scrollPos < qtty) scrollPos++;
        else return false;
      }
    });

    // prevent img dragging
    $("#carousel img, #carousel a").on("mousedown", function (e) {
      e.preventDefault();
    });
  }

  function destroy() {
    $("#carousel").off("imagesLoaded");
    $("#carousel img, #carousel a").off("mousedown");
    $("body").off("keydown");
  }

  return { init: initializer, destroy: destroy };
})();
