// * AOS
AOS.init({
    duration: 600,
    easing: "ease-out",
    once: true
});

// * Scroll to top
let scrollButton = document.getElementById("scroll-top");
let navbar = document.getElementById("navbar");

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        scrollButton.style.opacity = "100";
        scrollButton.style.cursor = "pointer";
        navbar.classList.add("shadow");
    } else {
        scrollButton.style.opacity = "0";
        scrollButton.style.cursor = "default";
        navbar.classList.remove("shadow");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// * Responsive navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  scrollFunction();
  responsiveNav();
}

function responsiveNav() {
    var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}