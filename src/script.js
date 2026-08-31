const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = seconds * 6;
  const minuteDegrees = minutes * 6;
  const hourDegrees = hours * 30 + minutes * 0.5;

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setClock();

setInterval(setClock, 1000);
function updateWeather(response) {
  let temperatureElemment = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElemment = document.querySelector("#weather-app-city");
  let descriptionElemment = document.querySelector("#description");
  let humidityElemment = document.querySelector("#humidity");
  let windElemment = document.querySelector("#wind");
  let timeElemment = document.querySelector("#time");
  let data = new Date(response.data.time * 1000);



  cityElemment.innerHTML = response.data.city;
  temperatureElemment.innerHTML = Math.round(temperature);
  descriptionElemment.innerHTML = response.data.condition.description;
  humidityElemment.innerHTML = `${response.data.temperature.humidity}%`;
  windElemment.innerHTML = `${response.data.wind.speed}km/h`;
  timeElemment.innerHTML = formatDate(data);
}

function formatDate(data) {
  let minutes = data.getMinutes();
  let houers = data.getHours();
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[data.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${houers}:${minutes}`;
}
function searchCity(city) {
  let apiKey = "7561c89f6et45b832o8e3c5fcade60b0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(updateWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}
let searchFormElemment = document.querySelector("#search-form");

searchFormElemment.addEventListener("submit", handleSearchSubmit);
searchCity("Kyiv");
