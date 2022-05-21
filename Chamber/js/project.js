let text = document.lastModified;
document.querySelector("#time").textContent = text;

let current_date = new Date();
let year = current_date.getFullYear();
document.getElementById("year").textContent = year;

const datefieldUK = document.querySelector(".date"); 
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const hambutton = document.querySelector('.primarynav');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);

// To solve the mid resizing issue with responsive class on
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