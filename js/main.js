// * AOS
AOS.init({
    duration: 600,
    easing: "ease-out",
    once: true
});

// * Scroll to top
let scrollButton = document.getElementById("scroll-top");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        scrollButton.style.opacity = "100";
        scrollButton.style.cursor = "pointer";
    } else {
        scrollButton.style.opacity = "0";
        scrollButton.style.cursor = "default";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
