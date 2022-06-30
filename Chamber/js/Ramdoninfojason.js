const URL = 'https://david24748.github.io/wdd230/Chamber/js/data.json';
const cards = document.querySelector('.spocards');

fetch(URL)
.then(function (response){
  return response.json();
})
.then( function (jsonObject){
  const companies = jsonObject["chamberinfo"];
  console.table(jsonObject);

  const newarray = companies.filter(checkmembership)
  
  let gold = getRandomItem(newarray)
  gold.forEach(displaycompanies);
    
})
function checkmembership(company){
    return company.member != 'bronze'
}


function displaycompanies(chamberinfo){
  let x;
  let card = document.createElement("section");
  let name = document.createElement("h4");
  let phone = document.createElement("p");
  let member = document.createElement("p");
  let logo = document.createElement("img");
  console.log(x)
  card.classList.add("card-" + x)
  name.textContent = `${chamberinfo.company}`;
  phone.textContent = `${chamberinfo.phone}`;
  member.textContent = `${chamberinfo.member}`;
  logo.setAttribute('src', chamberinfo.img);
  logo.setAttribute('alt', chamberinfo.company)

  card.setAttribute('class', 'gridindex');


  card.appendChild(name)
  card.appendChild(phone)
  card.appendChild(member)
  card.appendChild(logo)
  cards.appendChild(card)
  x++;
}

function getRandomItem(arr) {
    const gold = [];
    let i = 0;
    while (i <3) {
          // get random index value
          const randomIndex = Math.floor(Math.random() * arr.length);
          // get random item
          let item = arr[randomIndex];
          i++;
          gold.push(item)
          }
          console.log(gold)
          return gold
      }
