const navButton = document.querySelector(".nav__button");
const navList = document.querySelector(".nav__list");
const navMenu = document.querySelector(".nav__menu");
const navLinkItem = document.querySelectorAll(".nav__link")

navButton.addEventListener("click", () => {
  navList.classList.toggle("nav__list--active");

  if (navList.classList.contains("nav__list--active")){
    navButton.setAttribute("src", "./../img/icon-close.png");
  }
  else{
    navButton.setAttribute("src", "./../img/icon-hamburger.png");
  }
});

navMenu.addEventListener("click", () => {
  navList.classList.remove("nav__list--active");
  navButton.setAttribute("src", "./../img/icon-hamburger.png");
})

const removeActiveElements = (selector) => {
  const elementsActive = document.querySelectorAll(`.${selector}`);
  if (elementsActive){
    elementsActive.forEach(elementActive => {
      elementActive.classList.remove(selector);
    })
  }
}

navLinkItem.forEach(navLink => {
  navLink.addEventListener("click", () => {
    if(!navLink.classList.contains("nav__link--active")){
      removeActiveElements("nav__link--active");
      navLink.classList.add("nav__link--active");
    }
  })
})