// Input field
const cardBody = document.querySelector("#card-body");
const searchCity = document.querySelector("#city");
const renderCityName = document.querySelector("#card-title");
const searchBtn = document.querySelector("#search-btn");
const weatherCards = document.querySelector("#weather-cards");

const API_KEY = ``;

async function fetchFiveDayWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
  try {
    if (!url) {
      throw new Error("Invalid URL");
    }
    const result = await fetch(url);
    if (!result.ok) {
      throw new Error("City not found");
    }
    const data = await result.json();
    console.log(data);
    displayWeather(data);
  } catch (error) {
    console.error("Something went wrong:: ", error.message);
    renderCityName.textContent = error.message;
  }
}

// DOM

searchBtn.addEventListener("click", () => {
  const createErrorElement = document.createElement("p");
  //   e.preventDefault();
  const city = searchCity.value.trim();

  if (city) {
    fetchFiveDayWeather(city);
  } else {
    createErrorElement.textContent = `Enter Valid City Name`;
    createErrorElement.classList.add("errorMessage");
    cardBody.appendChild(createErrorElement);
  }
});

// To display the result on DOM

function displayWeather(data) {
  const { city, list } = data;
  renderCityName.textContent = city.name;

  // clearing existing cards:
  weatherCards.innerHTML = "";

  // Loop through every 8th data point for a 5-day forecast
  for (let i = 0; i < 5; i++) {
    const { dt, weather, main } = list[i * 8];
    const date = new Date(dt * 1000).toDateString();
    const description = weather[0].description;
    const humidity = main.humidity;
    const temp = Math.round(main.temp - 273.15);
    const icon = weather[0].icon;

    const card = document.createElement("li");
    card.className = "weather-card";
    card.innerHTML = `
      <p>${date}</p>
      <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${description}">
      <p>Condition: ${description}</p>
      <p>Humidity: ${humidity}%</p>
      <p>Temp: ${temp}°C</p>
    `;
    weatherCards.appendChild(card);
  }
}
