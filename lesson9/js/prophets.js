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

function buildProphetCards(data) {
    let nonUtah = data.prophets.filter(p => p.birthplace !== 'Utah');
    console.log(nonUtah)
    nonUtah.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let ptwo = document.createElement('p1');
        let img = document.createElement('img');

        let fullName = `${prophet.name} ${prophet.lastname}`;

        h2.innerHTML = `${prophet.name} <span class="highlight">${prophet.lastname}</span>`;
        p.innerHTML = `location of Birth: <strong>${prophet.birthplace}</strong> <br> Birthdate: <strong>${prophet.birthdate}</strong>`;
        img.setAttribute('src', prophet.imageurl);
        img.setAttribute('alt', `Picture of president ${fullName}`);
        img.setAttribute('loading', 'lazy');

        card.setAttribute('class', prophet.name);


        card.append(h2);
        card.append(p);
        card.append(ptwo);
        card.append(img)

        cards.append(card);
        
    });
}
getProphets();
