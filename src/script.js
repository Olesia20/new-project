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
  cityElemment.innerHTML = response.data.city;
  temperatureElemment.innerHTML = Math.round(temperature);
  console.log(response.data.temperature.current);
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
