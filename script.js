const navbarMin = document.querySelector(".navbar-min");
const navbarNav = document.querySelector(".navbar-nav");
const navbarClose = document.querySelector(".navbar-close");

let isNavbarMinClicked = false;

navbarMin.addEventListener("click", () => {
  navbarNav.style.display = "flex";
  navbarClose.style.display = "flex";
  navbarMin.style.display = "none";
  isNavbarMinClicked = true;
});

navbarClose.addEventListener("click", () => {
  navbarNav.style.display = "none";
  navbarClose.style.display = "none";
  navbarMin.style.display = "";
  isNavbarMinClicked = false;
});

window.addEventListener("resize", () => {
  if (isNavbarMinClicked) {
    if (window.innerWidth >= 768) {
      navbarNav.style.display = "flex";
      navbarMin.style.display = "none";
      navbarClose.style.display = "none";
    } else {
      navbarNav.style.display = "flex";
      navbarMin.style.display = "none";
      navbarClose.style.display = "flex";
    }
  } else {
    if (window.innerWidth >= 768) {
      navbarNav.style.display = "flex";
      navbarMin.style.display = "none";
      navbarClose.style.display = "none";
    } else {
      navbarNav.style.display = "none";
      navbarMin.style.display = "flex";
      navbarClose.style.display = "none";
    }
  }
});

if (window.innerWidth >= 768) {
  navbarNav.style.display = "flex";
  navbarMin.style.display = "none";
  navbarClose.style.display = "none";
} else {
  navbarNav.style.display = "none";
  navbarMin.style.display = "flex";
  navbarClose.style.display = "none";
}
