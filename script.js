const search_box = document.querySelector("aside.sidebar .search-wrapper .search-box");
const search_city = document.querySelector("aside.sidebar .search-wrapper .search-city");
const sidebar_history = document.querySelector("aside.sidebar .history");
const sidebar_searchmessage = document.querySelector("aside.sidebar .search-wrapper .search--message");

search_box.addEventListener("keydown", ({ key, currentTarget }) => {
    if (key === "Enter") searchCity();
});

search_city.addEventListener("click", () => searchCity());
sidebar_history.addEventListener("click", citiesWrapperClickHandler);

const apiKey = "242ac63bb227a6e15c4c2da3af2251d5";

const date = new Date().getTime();
const formatDate = (day) => {
    const addedDayInSecond = 86400 * day;
    return new Date(date + addedDayInSecond).toLocaleDateString();
};

const weatherJSONString = localStorage.getItem("weather") || "{}";
let weatherobject = JSON.parse(weatherJSONString);

let cityCurWeather, cityCurName, citySearchInput;

async function searchCity(city_name = search_box.value, limit = 5, api_key = apiKey) {
    const result = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=${limit}&appid=${api_key}`
    ).then((response) => response.json());
    const city = result[0];
    if (city) {
        cityCurName = city.name;
        DOM.citynameupdated();
        const history = weatherobject.history || [];
        history.push(city);
        console.log(city, history, history.slice(-8));

        fetchWeather(city.lat, city.lon);

        weatherobject = { ...weatherobject, history: history.slice(-8) };
        DOM.weatherupdated();
        console.log(JSON.stringify(weatherobject));
        localStorage.setItem("weather", JSON.stringify(weatherobject));
    } else {
        sidebar_searchmessage.textContent = "No city found";
        setTimeout(() => (sidebar_searchmessage.textContent = ""), 1500);
    }
}
async function fetchWeather(lat, lon, api_key = apiKey) {
    const result = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`
    ).then((response) => response.json());
    cityCurWeather = result.current;
    DOM.citycurrentweatherupdated();
    weatherobject = { ...weatherobject, dailyForecast: result.daily };
    DOM.weatherupdated();
    localStorage.setItem("weather", JSON.stringify(weatherobject));
}
function citiesWrapperClickHandler({ target }) {
    if (target === this) return;
    weather_forecast.textContent = "";
    cityCurName = target.textContent;
    DOM.citynameupdated();
    const lat = target.dataset.lat;
    const lon = target.dataset.lon;
    fetchWeather(lat, lon);
}
function uviIndex(uvi) {
    // uvi = uvi * 10;
    const inrange = (num, low, high) => {
        return low <= num && num <= high;
    };
    if (inrange(uvi, 1, 2)) return "low";
    if (inrange(uvi, 3, 5)) return "moderate";
    if (inrange(uvi, 6, 7)) return "high";
    if (inrange(uvi, 8, 10)) return "veryhigh";
    if (inrange(uvi, 11, Infinity)) return "extreme";
}

const weather_header = document.querySelector(".display .weather-info h1");
const current_weather = document.querySelector(".display .weather-info .currentweather");
const weather_forecast = document.querySelector(".display .forecast");

class DOM {
    static weatherupdated() {
        const placeholder = `<button data-lat="30.2711286" data-lon="-97.7436995">Austin</button>
        <button data-lat="41.8755616" data-lon="-87.6244212">Chicago</button>
        <button data-lat="40.7127281" data-lon="-74.0060152">New York</button>
        <button data-lat="28.5421109" data-lon="-81.3790304">Orlando</button>
        <button data-lat="37.7790262" data-lon="-122.419906">San Francisco</button>
        <button data-lat="38.8879957" data-lon="-76.8987649">Seat Pleasant</button>
        <button data-lat="39.7392364" data-lon="-104.9848623">Denver</button>
        <button data-lat="33.7489924" data-lon="-84.3902644">Atlanta</button>`;

        const historybuttons =
            weatherobject.history &&
            [...weatherobject.history].reduceRight((previousValue, currentValue) => {
                return (
                    previousValue +
                    `<button data-lat=${currentValue.lat} data-lon=${currentValue.lon}>${currentValue.name}</button>`
                );
            }, "");

        sidebar_history.textContent = "";
        sidebar_history.insertAdjacentHTML("beforeend", historybuttons ?? placeholder);
        DOM.dailyforecastupdated();
    }
    static citynameupdated() {
        weather_header.textContent = cityCurName || weatherobject.history?.pop().name || "";
    }
    static citycurrentweatherupdated() {
        if (!cityCurWeather) return (current_weather.textContent = "");
        const { temp, humidity, uvi, wind_speed } = cityCurWeather;
        current_weather.innerHTML = `
        <p>Temp: ${temp} °F</p>
        <p>Wind: ${wind_speed} MPH</p>
        <p>Humidity: ${humidity}%</p>
        <p>UV Index: <span class="uv-index ${uviIndex(uvi)}">${uvi}</span></p>`;
    }
    static dailyforecastupdated() {
        if (!weatherobject.dailyForecast) return (weather_forecast.textContent = "");

        const { dailyForecast } = weatherobject;

        let reduceIndex = 0;
        const length = 5;

        weather_forecast.innerHTML = `
        <h1 class="forecast-title">${length}-Day Forecast:</h1>
        <div class="forecast-days">${dailyForecast
            .splice(0, length)
            .reduce((previousValue, { temp, humidity, uvi, wind_speed, weather }) => {
                const tempValues = Object.values(temp);
                const average_temp = tempValues.reduce((a, b) => a + b) / tempValues.length;
                reduceIndex++;

                return (
                    previousValue +
                    `<div class="forcast-item">
                        <div class="date">${formatDate(reduceIndex + 1)}</div>
                        <img
                            class="weather-icon"
                            src=${`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                            alt=""
                        />
                        <div class="temperature">Temp: ${average_temp.toFixed(1)} °F</div>
                        <div class="wind_speed">Wind: ${wind_speed} MPH</div>
                        <div class="Humidity">Humidity: ${humidity}%</div>
                    </div>`
                );
            }, "")}</div>`;
    }
}

function updateDOM() {
    DOM.weatherupdated();
    DOM.citynameupdated();
    DOM.dailyforecastupdated();
    DOM.citycurrentweatherupdated();
}

updateDOM();
