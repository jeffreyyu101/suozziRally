(function($) {
  "use strict"; // Start of use strict

  // No JS

})(jQuery); // End of use strict

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var items = document.querySelectorAll(".timeline li");
 
// code for the isElementInViewport function
 
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

timeline ul li::after {
  background: #fff;
  transition: background .5s ease-in-out;
}
 
.timeline ul li.in-view::after {
  background: #F45B69;
}
 
.timeline ul li div {
  visibility: hidden;
  opacity: 0;
  transition: all .5s ease-in-out;
}
 
.timeline ul li:nth-child(odd) div {
  transform: translate3d(200px,0,0);
}
 
.timeline ul li:nth-child(even) div {
  transform: translate3d(-200px,0,0);
}
 
.timeline ul li.in-view div {
  transform: none;
  visibility: visible;
  opacity: