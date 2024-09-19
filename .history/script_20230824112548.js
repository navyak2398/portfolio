const header = document.querySelector(".navbar")

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add("navbar-active")
        header.classList.add("navbarDark")
    } else {
        header.classList.add("navbar-active")
        header.classList.remove("navbarDark");
    }
    }