// This one shrinks the header
(function(){
  var shrink = 300; // height from the top of the page to shrink

  $(window).scroll(function() {
    var scroll       = getCurrentScroll(),
        $topBar      = $('.top-header'),
        shrinkClass  = 'small-header';
  
    if(scroll >= shrink) {
      $topBar.addClass(shrinkClass);
    } else {
      $topBar.removeClass(shrinkClass);
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset;
  }
})();