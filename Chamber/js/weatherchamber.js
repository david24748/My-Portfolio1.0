const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const Windspeed = document.querySelector('#windSpeed');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Medellin&units=Imperial&appid=8840315173792de057a1c478bbb00ba4`;

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
    console.log(weatherData)
    currentTemp.innerHTML = weatherData.main.temp.toFixed(1);
    Windspeed.innerHTML = weatherData.wind.speed.toFixed(1);

    const imgsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src',imgsrc);
    weatherIcon.setAttribute('alt',desc);
    captionDesc.innerHTML = desc;
}

var t= document.getElementById("current-temp").textContent;
var s= document.getElementById("windSpeed").textContent;

function windChill(t,s) {
  if((t<= 50) && (s>=3)){
    var output = Math.round((35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s,0.16))) + (0.4275 * (t*(Math.pow(s,0.16))))) + "F";
  } else{
    var output = "N/A";
  }
  return output;
}

document.getElementById("windChill").textContent = windChill(t,s);