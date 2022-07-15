// Time and Date
let time = document.querySelector(".time")
let day = document.querySelector(".day")

// Weather Icon, Temp, Location

let weatherIcon = document.querySelector(".weather-icon")
let temperature = document.querySelector(".temperature")
let place = document.querySelector(".location")

// Skies, Humidity, Precipitation

let skies = document.querySelector(".skies")
let humidity = document.querySelector(".humidity")
let precipitation = document.querySelector(".precipitation")

// Sunrise and Sunset Time

let sunrise = document.querySelector(".sunrise-time")
let sunset = document.querySelector(".sunset-time")

// User City Input

let cityInput = document.querySelector(".cityName")

// Weather Button

let weatherButton = document.querySelector("#weather-button")

// Today's Date

let today = new Date().toLocaleDateString()

// Weather Conversion

function toCelsius(fahren){
    return ((fahren - 32) * .5556).toFixed(1)
}


// Fetch Request

fetch("https://api.openweathermap.org/data/2.5/weather?q=San Jose&appid=e79ab9c18b89145630220d4377fa6219&units=imperial")
    .then(response => response.json())
    .then(data => {
        day.textContent = today;
        let celsius = toCelsius(data.main.temp);
        temperature.textContent = data.main.temp.toFixed(1) + "°F" + " or " + celsius + "°C";
        place.textContent = data.name
        // skies.textContent = "Skies " + data.weather[0].main
        // humidity.textContent = "Humidity " + data.main.humidity + "%"
        // precipitation.textContent = precipitation.value
        console.log(data.weather[0].main)
    })
    .catch(console.error())



// fetch("e79ab9c18b89145630220d4377fa6219", {
//     method: "GET",
//     body: JSON.stringify({
//         title: "Hello",
//         completed: true
//     }),
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(console.error)