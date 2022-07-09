const URL = 'https://david24748.github.io/wdd230/Chamber/js/data.json';
const cards = document.querySelector('.infocards');

fetch(URL)
.then(function (response){
  return response.json();
})
.then( function (jsonObject){
  const companies = jsonObject["chamberinfo"];
  console.table(jsonObject);
  companies.forEach(displaycompanies);
})

function displaycompanies(chamberinfo){
  let card = document.createElement("section");
  let name = document.createElement("h2");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("a");
  let member = document.createElement("p");
  let logo = document.createElement("img");
  

  name.textContent = `${chamberinfo.company}`;
  address.textContent = `${chamberinfo.address}`;
  phone.textContent = `${chamberinfo.phone}`;
  website.textContent = `details`;
  website.href= `${chamberinfo.sitio}`;
  member.textContent = `${chamberinfo.member}`;
  logo.setAttribute('src', chamberinfo.img);
  logo.setAttribute('alt', chamberinfo.company)

  card.setAttribute('class', 'grid');


  card.appendChild(name)
  card.appendChild(address)
  card.appendChild(phone)
  card.appendChild(website)
  card.appendChild(member)
  card.appendChild(logo)
  cards.appendChild(card)
}
displaycompanies()