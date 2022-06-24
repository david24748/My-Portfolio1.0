const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=8840315173792de057a1c478bbb00ba4`;

apiFetch(url);

async function apiFetch(apiURL) {
    const response = await fetch(apiURL);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } else{
        throw Error(await response.text());
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(1);

    const imgsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src',imgsrc);
    weatherIcon.setAttribute('alt',desc);
    captionDesc.innerHTML = desc;
}