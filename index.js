const navigation = document.querySelector("#menu");
const hamburgerMenu = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".links")

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navigation.classList.toggle("active");

})

  navLinks.forEach(navList => navList.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navigation.classList.remove("active");
  }));
