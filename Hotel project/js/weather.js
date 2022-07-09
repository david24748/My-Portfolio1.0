const currentTemp = document.querySelector('#current-temp');
const currentweatherIcon = document.querySelector('#currentweather-icon');
const currentcaptionDesc = document.querySelector('#figone');
const currentWindspeed = document.querySelector('#currentwindSpeed');
const currentdetails = document.querySelector('#currentdetails');
const currenthumidity = document.querySelector('#currenthumi');
//second day//
const nextTemp = document.querySelector('#next-temp');
const nextweatherIcon = document.querySelector('#nextweather-icon');
const nextcaptionDesc = document.querySelector('#figtwo');
const nextWindspeed = document.querySelector('#nextwindSpeed');
const nexttdetails = document.querySelector('#nextdetails');
const nextthumidity = document.querySelector('#nexthumi');
//third day//
const doubleTemp = document.querySelector('#double-temp');
const doubleweatherIcon = document.querySelector('#doubleweather-icon');
const doublecaptionDesc = document.querySelector('#figthree');
const doubleWindspeed = document.querySelector('#doublewindSpeed');
const doubledetails = document.querySelector('#doubledetails');
const doublehumidity = document.querySelector('#doublehumi');

const url = `http://api.openweathermap.org/data/2.5/forecast?q=Bethesda&appid=8840315173792de057a1c478bbb00ba4&units=Imperial`;

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
    currentTemp.innerHTML = weatherData.list[0].main.temp.toFixed(1);
    currentWindspeed.innerHTML = weatherData.list[0].wind.speed.toFixed(1);
    currentdetails.innerHTML = weatherData.list[0].main.feels_like.toFixed(2);
    currenthumidity.innerHTML = weatherData.list[0].main.humidity.toFixed(1);

    const imgsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;
    currentweatherIcon.setAttribute('src',imgsrc);
    currentweatherIcon.setAttribute('alt',desc);
    currentcaptionDesc.innerHTML = desc;

    //second day//

    nextTemp.innerHTML = weatherData.list[6].main.temp.toFixed(1);
    nextWindspeed.innerHTML = weatherData.list[6].wind.speed.toFixed(1);
    nexttdetails.innerHTML = weatherData.list[6].main.feels_like.toFixed(2);
    nextthumidity.innerHTML = weatherData.list[6].main.humidity.toFixed(1);

    const imgsrcnext = `https://openweathermap.org/img/w/${weatherData.list[1].weather[0].icon}.png`;
    const descnext = weatherData.list[6].weather[0].description;
    nextweatherIcon.setAttribute('src',imgsrcnext);
    nextweatherIcon.setAttribute('alt',descnext);s
    nextcaptionDesc.innerHTML = descnext;

    //third day//

    doubleTemp.innerHTML = weatherData.list[14].main.temp.toFixed(1);
    doubleWindspeed.innerHTML = weatherData.list[14].wind.speed.toFixed(1);
    doubledetails.innerHTML = weatherData.list[14].main.feels_like.toFixed(2);
    doublehumidity.innerHTML = weatherData.list[14].main.humidity.toFixed(1);

    const imgsrcdouble = `https://openweathermap.org/img/w/${weatherData.list[2].weather[0].icon}.png`;
    const descdouble = weatherData.list[14].weather[0].description;
    doubleweatherIcon.setAttribute('src',imgsrcdouble);
    doubleweatherIcon.setAttribute('alt',descdouble);
    doublecaptionDesc.innerHTML = descdouble;
}

var t= document.getElementById("current-temp").textContent;
var s= document.getElementById("currentwindChill").textContent;

function currentwindChill(t,s) {
  if((t<= 50) && (s>=3)){
    var output = Math.round((35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s,0.16))) + (0.4275 * (t*(Math.pow(s,0.16))))) + "F";
  } else{
    var output = "N/A";
  }
  return output;
}
document.getElementById("currentwindChill").textContent = currentwindChill(t,s);
  

//second day//

var t1= document.getElementById("next-temp").textContent;
var s1= document.getElementById("nextwindChill").textContent;

function currentwindChill(t,s) {
  if((t1<= 50) && (s1>=3)){
    var output = Math.round((35.74 + (0.6215 * t1)) - (35.75 * (Math.pow(s1,0.16))) + (0.4275 * (t1*(Math.pow(s1,0.16))))) + "F";
  } else{
    var output = "N/A";
  }
  return output;
}
document.getElementById("nextwindChill").textContent = currentwindChill(t1,s1);

 //third day//

 var t2= document.getElementById("double-temp").textContent;
 var s2= document.getElementById("doublewindChill").textContent;
 
 function currentwindChill(t,s) {
   if((t2<= 50) && (s2>=3)){
     var output = Math.round((35.74 + (0.6215 * t2)) - (35.75 * (Math.pow(s2,0.16))) + (0.4275 * (t2*(Math.pow(s2,0.16))))) + "F";
   } else{
     var output = "N/A";
   }
   return output;
 }
 document.getElementById("doublewindChill").textContent = currentwindChill(t2,s2);
