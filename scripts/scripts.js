jQuery(document).ready(function($){

  // Dynamically set bottom margin of body for sticky footer
  stickyFooter();

  // Set height of YouTube iframes
  keepRatio();

  // Add target="_blank" to all external links
  $("a[href^='http://']").attr("target","_blank");
  $("a[href^='https://']").attr("target","_blank");

  // Unless it's because of Github pages
  $("a[href^='http://fluxphysics.github.io/']").attr("target","_self");
  $("a[href^='https://fluxphysics.github.io/']").attr("target","_self");

  // Lazy load iFrames (thanks to https://css-tricks.com/the-complete-guide-to-lazy-loading-images/)
  var lazyload;

  if ("IntersectionObserver" in window) {
    lazyload = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });
    lazyload.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyload = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyload.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyload.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }

  // Dynamically number footnotes
  $(".footnote-ref").each(function(i){
    var $footnotelink = $(this).attr("data-footnote-link");
    var $footnotetitle = $(this).attr("data-footnote-title");
    var $footnotecontent = $(this).attr("data-footnote-content");
    var $footnoteref = i+1;
    $(this).html("[" + $footnoteref + "]" );
    // Create list of footnotes
    $("#footnote-list").append(
      '<li>'+ $footnotetitle +': <a target="_blank" href="'+ $footnotelink +'">'+ $footnotecontent +'</a></li>'
    );
  });

  // Number your figures
  $(".figure-number").each(function(i){
    var $fignum = i+1;
    $(this).html($fignum);
  });

});

// Smoooooth scrolling
$('.smooth-scroll').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});

// Trigger sizing functions on window resize
$( window ).resize(function() {
  stickyFooter();
  keepRatio();
});

// Dynamically set bottom margin of body for sticky footer
function stickyFooter() {
  var bodyBottomMargin = $("footer").outerHeight();
  $("body").css("margin-bottom", bodyBottomMargin);
}

// Get absolute width of iFrame and set height using known ratio (for Youtube it's 0.5625)
function keepRatio() {
  $(".youtube").each(function(){
    var iframeWidth = $(this).width();
    $(this).height(iframeWidth * 0.5625);
  });
}
