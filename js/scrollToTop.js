// Show or hide the link based on the scroll position
  window.addEventListener('scroll', function() {
    var scrollToTopLink = document.getElementById("scrolltop");
    var scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition >= document.body.offsetHeight) {
      scrollToTopLink.style.display = "block";
    } else {
      scrollToTopLink.style.display = "none";
    }
  });

  // Scroll to the top of the page when the link is clicked
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }