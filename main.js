//Navbar fades in on page load
if (location.href.split("/").slice(-1) == "index.html") {
    var opac = 0;
    
    function fadeInNav() {
        if (opac < 1) {
            document.getElementById("navbar").style.opacity = opac;
            opac += 0.01;
            setInterval(fadeInNav, 10);
            clearInterval(fadeInNav);
        }
    }
    setTimeout(fadeInNav, 1000);
}

//Navbar fades in when scrolling up and out when scrolling down
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