const apiKey = "812dc4f60479d80e3d2dacb6bb66aaf7";


const select = document.getElementById("citySelect");

const box = document.getElementById("weatherBox");
const iconImg = document.getElementById("weatherIcon");
const tempText = document.getElementById("tempText");
const descText = document.getElementById("descText");
const errorText = document.getElementById("errorTex");


async function loadTemperature() {
    const city = select.value;

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}&lang=de`;


   

    const response = await fetch(url);


    if(!response.ok) {
        //const err = await response.json().catch(()=>({message:"Kommunikationsfehler"}));
        throw new Error();
    }
    const data = await response.json();

    box.classList.add("show");

    console.log(data.main.temp)
    console.log(data.weather[0].main)
    descText.innerHTML=data.weather[0].main
    tempText.innerHTML =data.main.temp
    iconImg.src= data.weather[0].icon
     

    //const temp = data.main.temp;
   // const desc = data.wather[0].description;
    //const icon = data.weather[0].icon;


    //iconImg.src = `http:oprnweather.org/img/wn/${icon}@2x.png`;
   // iconImg.alt = desc || "weather";

    //tempText.textContent = Math.round(temp) + "°C";
   // descText.textContent = desc || "";


    //box.style.display = "block";


   
        
   



}

loadTemperature();