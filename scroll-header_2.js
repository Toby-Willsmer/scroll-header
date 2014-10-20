// This one shrinks and hides the header
(function(){
  var shrink      = 300, // height from the top of the page to shrink
      hide_shrink = 800; // height from the top of the page to hide

  $(window).scroll(function() {
    var scroll      = getCurrentScroll(),
        $topBar     = $('.top-header'),
        shrinkClass = ['small-header', 'hide-small-header'];

    if(scroll >= shrink) {
      $topBar.addClass(shrinkClass[0]);
      if(scroll >= hide_shrink) {
        $topBar.removeClass(shrinkClass[0]).addClass(shrinkClass[1]);
      } else {
        $topBar.removeClass(shrinkClass[1]);
      }
    } else {
      $topBar.removeClass(shrinkClass[0]);
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset;
  }
})();