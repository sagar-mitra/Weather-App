const apiKey = "bf001d43adaa223bff598f5b34b366aa";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#right-nav-elem1 input");
const btn = document.querySelector("#searchBtn");
const weatherIcon = document.querySelector("#weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    alert("City not found, please enter again")
  }
  else {
    let data = await response.json(); //all the api data are stored in this "data" variable

  /* Adding city name */
  const cityName = document.querySelector(".city-name");

  cityName.innerHTML = data.name + ", " + data.sys.country;

  /* Adding temparature */
  const temparature = document.querySelector("#temp");
  temparature.innerHTML = Math.round(data.main.temp) + "°C";

  /* Adding temparature feels like */
  const tempFeelsLike = document.querySelector("#temp-feel");
  tempFeelsLike.innerHTML =
    "Feels like " + Math.round(data.main.feels_like) + "°C";

  /* Adding humidity */
  document.querySelector("#humi").innerHTML = data.main.humidity + "%";

  /* Adding windSpeed */
  document.querySelector("#wSpeed").innerHTML =
    Math.round(data.wind.speed) + " km/h";

  /* Adding coordinate */
  document.querySelector("#coordi").innerHTML =
    data.coord.lat + "° N, " + data.coord.lon + "° E";

  /* Adding pressure */
  document.querySelector("#pressure").innerHTML = data.main.pressure + " mbar";

  /* Adding date & time */
  document.querySelector("#date-time").innerHTML = allTogether;

  /* Adding weather type */
  document.querySelector("#weather-type").innerHTML = data.weather[0].main;

  /* Weather icon changing */
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "Images/cloudy.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "Images/sunny.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "Images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "Images/drizzle.png";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "Images/haze.png";
  }
  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "Images/mist.png";
  }
  else if (data.weather[0].main == "Thunderstorm") {
    weatherIcon.src = "Images/thumderstorm.png";
  }
  }


  
}

btn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});


let currentdate = new Date();

let day = currentdate.getDay()

if(day == "0"){
    day = "Sunday"
}
else if(day == "1"){
    day = "Monday"
}
else if(day == "2"){
    day = "Tuesday"
}
else if(day == "3"){
    day = "Wednesday"
}
else if(day == "4"){
    day = "Thursday"
}
else if(day == "5"){
    day = "Friday"
}
else if(day == "6"){
    day = "Saturday"
}


let finalDay = day
let cdate = currentdate.getDate()
let month = currentdate.toLocaleString('default', { month: 'long' });
let hours = currentdate.getHours()
if(hours == "0" || hours == "1" || hours == "2" || hours == "3"|| hours == "4" || hours == "5" || hours == "6" || hours == "7" || hours == "8" || hours == "9") {
  hours = "0" + currentdate.getHours();
}
else {
  hours = currentdate.getHours();
}

let finalHours = hours;

let minutes = currentdate.getMinutes()
if(minutes == "0" || minutes == "1" || minutes == "2" || minutes == "3"|| minutes == "4" || minutes == "5" || minutes == "6" || minutes == "7" || minutes == "8" || minutes == "9") {
  minutes = "0" + currentdate.getMinutes();
}
else {
  minutes = currentdate.getMinutes();
}

let finalMinutes = minutes;

let allTogether = finalDay + ", " + cdate + " " + month + " " + finalHours + ":" + finalMinutes



/* Magnetic effect on menu button */

// let menubtn = document.querySelector("#menu-btn");

// menubtn.addEventListener("mousemove", (e) => {
//   console.log(e);
  
//   let x = e.offsetX;
//   let y = e.offsetY;

//   let BoxWidth = menubtn.clientWidth;
//   let BoxHeight = menubtn.clientHeight;

//   let moveX = (x - BoxWidth/2);
//   let moveY = (y - BoxHeight/2);

//   menubtn.style.transform = `translateX(${moveX}px) tranalateY(${moveY}px)`;
  
// })

// menubtn.addEventListener("mouseout", (e) => {
//   menubtn.style.transform = ``;
// })


//menu button
let sideBar = document.querySelector("#sidebar");
let menuButton = document.querySelector("#menu-btn")
let closeSide = document.querySelector(".closeSidebar")

menuButton.addEventListener("click", (e) => {
  // console.log(e);
  sideBar.style.display = "block";
  
})

closeSide.addEventListener("click", (e) => {
  // console.log(e);
  sideBar.style.display = "none";
  
})




