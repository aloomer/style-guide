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