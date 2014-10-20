// This one is all singing all dancing!
(function(){
  var lastScrollTop = 0,
      delta         = 5; // mouse wheel

  $(window).scroll(function() {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var scroll        = getCurrentScroll(),
        shrink        = 300, // height from the top of the page to shrink
        hide_shrink   = 800, // height from the top of the page to hide
        shrinkClass   = ['small-header', 'hide-small-header'],
        $topBar       = $('.top-header'),
        $topBarHeight = $topBar.outerHeight(),
        $scTop        = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - $scTop) <= delta)
        return;
  
    // Scroll down
    if ($scTop > lastScrollTop && $scTop > $topBarHeight){
      if (scroll >= shrink) {
        $topBar.addClass(shrinkClass[0]);
        if(scroll >= hide_shrink) {
          $topBar.removeClass(shrinkClass[0]).addClass(shrinkClass[1]);
        } else {
          $topBar.removeClass(shrinkClass[1]);
        }
      } else if(scroll > shrink) {
        $topBar.removeClass(shrinkClass[0]).addClass(shrinkClass[1]);
      } else {
        $topBar.removeClass(shrinkClass[0]);
      }
    } else {
    // Scroll Up
      if($scTop + $(window).height() < $(document).height()) {
        $topBar.removeClass(shrinkClass[1]).addClass(shrinkClass[0]);
        if (scroll <= shrink) {
          $topBar.removeClass(shrinkClass[0]);
        }
      }
    }
    
    lastScrollTop = $scTop;
    function getCurrentScroll() {
      return window.pageYOffset;
    }
  }
})();