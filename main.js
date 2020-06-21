//Navbar fade in and out
var oldScrollPos = window.pageYOffset;
window.onscroll = function() {
    currScrollPos = window.pageYOffset;
    let navbar = document.getElementById("navbar");
    if (currScrollPos > this.oldScrollPos) {
        navbar.style.opacity = 0;
        navbar.style.transition = "opacity 0.5s ease";
    } else {
        navbar.style.opacity = 1;
        navbar.style.transition = "opacity 0.5s ease";
    }
    this.oldScrollPos = currScrollPos;
}