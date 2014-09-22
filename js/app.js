

$(document).ready(function(){
$(function() {
// var headerHeight = $("#header").height();

//var scrollToPostion = $(target).offset().top - headerHeight;

  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $caption = $("<p></p>");

  $overlay.append($image);

  $overlay.append($caption)

  $("body").append($overlay);

  $("#flexiselDemo1 li img").click(function(e) {
    e.preventDefault();
    console.log("clicked");

    var imageLocation = $(this).attr("src");
    console.log(imageLocation);

    $image.attr("src", imageLocation);
    $overlay.show();
    var captionText = $(this).next(".caption").text();
    $caption.text(captionText);

  });
  // $("#graphicgallery a").click(function (event) {
  //   event.preventDefault();
  //   var imageLocation = $(this).attr("href");

  //   $image.attr("src", imageLocation);

  //   $overlay.show();

  //   var captionText = $(this).children(".caption").text();
  //   $caption.text(captionText);
  // });

  $overlay.click(function () {
    $(this).hide();
  });
  
  $('nav a[href*=#]:not([href=#])').click(function() {
    var current = $("nav").find(".nav-active");
    console.log(current);
    console.log(this);
    if($(this) !== current)
    {
       current.removeClass("nav-active");
       $(this).addClass("nav-active");
    }
    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      console.log(target);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 250
        }, 2000);
        return false;
      }
    }
  });
});
});