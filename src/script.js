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
function handleSearchSubmit (event){
  event.preventDefault()
  let searchInput = document.querySelector("#search-form-input");
  let cityElemment = document.querySelector("#weather-app-city");
  cityElemment.innerHTML = searchInput.value


  console.log(searchInput.value)
}
let searchFormElemment = document.querySelector("#search-form");

searchFormElemment.addEventListener("submit", handleSearchSubmit)

