var t= document.getElementById("temp").textContent;
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