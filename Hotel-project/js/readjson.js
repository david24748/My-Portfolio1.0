const URL = 'https://david24748.github.io/wdd230/Hotel-project/js/data.json';
const cards = document.querySelector('.infocards');

fetch(URL)
.then(function (response){
  return response.json();
})
.then( function (jsonObject){
  const Temples = jsonObject["Templesinfo"];
  console.table(jsonObject);
  Temples.forEach(displaytemples);
  console.log(displaytemples)
})

function displaytemples(Templesinfo){
  let card = document.createElement("section");
  let name = document.createElement("h2");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("a");
  let services = document.createElement("p");
  let picture = document.createElement("img");
  let email = document.createElement("p")
  let ordinances = document.createElement("p")
  let closures = document.createElement("p")
  

  name.textContent = `${Templesinfo.temple}`;
  address.textContent = `${Templesinfo.address}`;
  phone.textContent = `${Templesinfo.phone}`;
  services.textContent = `${Templesinfo.services}`
  closures.textContent = `${Templesinfo.closures}`
  ordinances.textContent = `${Templesinfo.ordinances}`
  email.textContent = `${Templesinfo.email}`
  website.textContent = `Click here to learn the history!`;
  website.href= `${Templesinfo.history}`;
  picture.setAttribute('src', Templesinfo.img);
  picture.setAttribute('alt', Templesinfo.temple)

  card.setAttribute('class', 'grid' );


  card.appendChild(name)
  card.appendChild(picture)
  card.appendChild(phone)
  card.appendChild(address)
  card.appendChild(email)
  card.appendChild(website)
  card.appendChild(services)
  card.appendChild(ordinances)
  card.appendChild(closures)
  cards.appendChild(card)
}
