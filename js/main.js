


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

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
      modal.classList.add('show'); // Show the modal
      // Add an event listener to close the modal when clicking outside the image
      modal.addEventListener('click', (event) => {
          if (event.target === modal) {
              closeModal(modalId);
          }
      });
  } else {
      console.error(`Modal with ID "${modalId}" not found.`);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
      modal.classList.remove('show'); // Hide the modal
  } else {
      console.error(`Modal with ID "${modalId}" not found.`);
  }
}

document.querySelectorAll('#menu li a').forEach(link => {
  link.addEventListener('click', () => {
      const toggleInput = document.getElementById('toggle');
      setTimeout(() => {
          toggleInput.checked = false;
      }, 300);
  });
});