var menuButton = document.querySelector(".js-menu-control");
var menu = document.querySelector(".menu");
var menuCloseButton = document.querySelector(".menu-close");

function handleClick () {
  if (menu.classList.contains("menu-hidden")) {
    menu.classList.remove("menu-hidden");
  } else {
    menu.classList.add("menu-hidden");
  }
}

menuButton.addEventListener('click', handleClick)
menuCloseButton.addEventListener('click', handleClick)


