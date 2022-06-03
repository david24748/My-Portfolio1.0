// last modified
let text = document.lastModified;
document.querySelector("#time").textContent = text;

let current_date = new Date();
let year = current_date.getFullYear();
document.getElementById("year").textContent = year;
document.getElementById("datetime").textContent = current_date;
const datefieldUK = document.querySelector(".date"); 
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

//ham button

const hambutton = document.querySelector('.primarynav');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);

// images
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove("responsive")};

let d = new Date().getDate();

const banner = document.getElementById("banner");
if (d === 1 || d === 2) {
	banner.style.display = "block";
}

const close = document.querySelector("#close");

close.addEventListener("click", () => {
	banner.style.display = "none";
});

// local storage
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);

todayDisplay.textContent = Date.now();

// lazy images

let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px" 
}

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }