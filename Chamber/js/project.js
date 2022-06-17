//directory page
const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets() {
    let response = await fetch(URL);
    if (response.ok) {
        let data = await response.json();
        buildProphetCards(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildinfoCards(data) {
    let nonBogota = data.chamberinfo.filter(p => p.address !== 'Bogota');
    console.log(nonBogota)
    nonBogota.forEach(chambein => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');

        let fullName = `${chambein.name} ${chambein.lastname}`;

        h2.innerHTML = `${chambein.company}`;
        p.innerHTML = `address: <strong>${chambein.address}</strong> <br> Phone: <strong>${chambein.phone}</strong> <br> Web page: <strong>${chambein.sitio}</strong> <br> membership level: <strong>${chambein.member}</strong>`;
        img.setAttribute('src', chambein.img);
        img.setAttribute('alt', `Picture of company ${company}`);
        img.setAttribute('loading', 'lazy');

        card.setAttribute('class', chambein.company);


        card.append(h2);
        card.append(p);
        card.append(img)

        cards.append(card);
        
    });
}
getinfo();



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

/* Join banner */
const bannerjoin = document.getElementById("bannerjoin"); 
if (d === 1 || d === 2 || d === 3 || d === 4 || d === 5 || d === 6 || d === 7) {
	bannerjoin.style.display = "block";
}
const closee = document.querySelector("#closee");
close.addEventListener("click", () => {
	bannerjoin.style.display = "none";
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

  //Join js
function myFunction() {

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  document.getElementById("btnSubmit").value = dateTime;
    
  }







