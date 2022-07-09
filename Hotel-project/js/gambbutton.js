const hambutton = document.querySelector('.primarynav');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);