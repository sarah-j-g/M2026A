const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(255,255,255,.97)";
        navbar.style.backdropFilter = "blur(12px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.background = "#fff";
        navbar.style.boxShadow = "0 2px 12px rgba(0,0,0,.05)";

    }

});