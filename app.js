const apiKey = "gFN6HJy9Tsj9SXzVf6txrIZ2YAe8N8hNdRC9PykI";

const url = "https://api.api-ninjas.com/v1/weather?city=";
const options = {
  headers: { "X-Api-Key": apiKey },
};

async function getWeather(city) {
  const data = await fetch(url + city, options);
  const result = await data.json();
  console.log(result);
  search(result);
}

function search(city) {
  document.querySelector(".container").innerHTML = `
<div class="box">
<!-- location-details -->
<div class="location-details">
    <h1 class="location">WEATHER</h1>
    <h1 class="temp">${city.temp} C</h1>
    <div class="icon">
    </div>
</div>

<!-- Weather Details -->
<div class="weather-details">
    <ul>
        <li>Relative Humidity : <span>${city.humidity}</span></li>
        <li>Max-Temperature : <span>${city.max_temp} C</span></li>
        <li>Min-Temperature : <span>${city.min_temp} C</span></li>
        <li>Feels Like : <span>${city.feels_like} C</span></li>
        <li>Wind-Speed : <span>${city.wind_speed} MPH</span></li>
    </ul>
</div>
</div>
`;
}

document.querySelector(".submit").addEventListener("submit", (e) => {
  const inputEl = document.getElementById("input");
  const cityName = inputEl.value;

  if (cityName) {
    getWeather(cityName);
  }

  e.preventDefault();
});
