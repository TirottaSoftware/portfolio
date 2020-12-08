const navbar = document.querySelector(".navbar");
const bannerHeight = document.querySelector(".hero").clientHeight;

window.addEventListener("scroll", () => {
    if (window.scrollY >= bannerHeight / 2) {
        navbar.classList.add("scrolled");
    }
    else {
        navbar.classList.remove("scrolled");
    }
})