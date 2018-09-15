// When the download link is clicked...
$(".download-link-flex-container").click(function() {
  // add .downloaded class to download button
  $(this)
    .children(".btn-download")
    .addClass("downloaded");

  // Wait 3 seconds...
  setTimeout(function() {
    // remove .downloaded class from download button
    $(".btn-download").removeClass("downloaded");
  }, 3000);
});

// When the page is scrolled, execute the function stickyNav
window.onscroll = function() {
  stickyNav();
};

// Get the navbar
var navbar = document.getElementById("site-navigation");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    // Add extra padding to the content below navbar for a smoother transition
    $("main").addClass("smooth-padding");
  } else {
    navbar.classList.remove("sticky");
    $("main").removeClass("smooth-padding");
  }
}


var clipboard = new ClipboardJS('.btn');

// Button ripple effect
$(function() {
    var ink, d, x, y;
    $(".ripple").click(function(e) {
        if ($(this).find(".ink").length === 0) {
            $(this).prepend("<span class='ink'></span>");
        }
        ink = $(this).find(".ink");
        ink.removeClass("animate");
        if (!ink.height() && !ink.width()) {
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({
                height: d,
                width: d
            });
        }
        x = e.pageX - $(this).offset().left - ink.width() / 2;
        y = e.pageY - $(this).offset().top - ink.height() / 2;
        ink.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animate");
    });
});