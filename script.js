// Time & Date
function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let dayIndex = date.getDay();
    let days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    let day = days[dayIndex];

    return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#tidIdag");
let currentTime = new Date();

dateElement.innerHTML = formatDate(currentTime);

// Search Engine
function showTemperature(response) {
    let temperatureElement = document.querySelector("#currentTemp");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${response.data.name}`;
}

function searching(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#wSearch");
    let apiKey = "f0609f63f731d925b48ee6c1654f8169";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${searchInput.value}`;
    axios.get(apiUrl).then(showTemperature);
}

let button = document.querySelector("#mainButton");
button.addEventListener("click", searching);

// Temperature F / C
function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#currentTemp");
    temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#currentTemp");
    temperatureElement.innerHTML = 19;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#theCelsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

// Geolocation
function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "f0609f63f731d925b48ee6c1654f8169";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
}

let locButton = document.querySelector("#locationButton");
locButton.addEventListener("click", getCurrentLocation);
