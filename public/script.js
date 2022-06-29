const hamburgerIcon = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobilemenu")

hamburgerIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")

  mobileMenu.classList.contains("active")
    ? hamburgerIcon.setAttribute("src", "images/icon-close.svg")
    : hamburgerIcon.setAttribute("src", "images/icon-hamburger.svg")
})
