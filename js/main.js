


myID = document.getElementById("customID");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 860) {
    myID.className = "cta show"
  } else {
    myID.className = "cta hide"
  }
};
myID2 = document.getElementById("logo");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 860) {
    myID2.className = "cta2 show"
  } else {
    myID2.className = "cta2 hide"
  }
};

window.addEventListener("scroll", myScrollFunc);


$(document).scroll(function () {
  //stick nav to top of page
  var y = $(this).scrollTop();
  var navWrap = $('#navWrap').offset().top;
  if (y > navWrap) {
      $('nav').addClass('sticked');
  } else {
      $('nav').removeClass('sticked');
  }
});

$(document).scroll(function () {
  //stick sidebar to top of page
  var y = $(this).scrollTop();
  var sidebar = $('#sidebar').offset().top;
  if (y > sidebar) {
      $('aside').addClass('stickyaside');
  } else {
      $('aside').removeClass('stickyaside');
  }
});


(function($) {

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $(".serviceMain").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});

var win = $(window);
var allMods = $(".service");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

