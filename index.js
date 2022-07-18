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

let skiesValue = document.querySelector(".skies-value")
let humidityValue = document.querySelector(".humidity-value")


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

// Weather 

let mainWeather = 
["clear", "clouds", "rain", "drizzle", 
"thunderstorm", "snow", "fog"]

let alternateWeather = 
["smoke", "haze", "dust", 
"mist", "sand", "ash", "squall", "tornado"]

// Check if Weather Data Matches Weather Conditions

function checkWeather(data){
    let weatherMain = data.weather[0].main.toLowerCase()
    for (let i = 0; i < mainWeather.length; i++){
        if (mainWeather[i] === (weatherMain)){
            weatherIcon.src = mainWeather[i] + ".png"
        }
    } 
}

// Weather for "smoke", "haze", "dust".. etc

function altWeather(data){
    let weatherMain = data.weather[0].main.toLowerCase()
    for (let i = 0; i < alternateWeather.length; i++){
        if (alternateWeather[i] == (weatherMain)){
            weatherIcon.src = "fog.png"
        }
    } 
}

function changeWeather(data){
    checkWeather(data)
    altWeather(data)
}


// Time Conversion

function convertTime(unix){
    let options = {
        hour: 'numeric',
        minute: 'numeric',
    },
    intlDate = new Intl.DateTimeFormat(undefined, options);
    
    let timeStamp = unix;
    let time = intlDate.format( new Date( 1000 * timeStamp));
    return time
}


// Fetch Request

fetch("https://api.openweathermap.org/data/2.5/weather?q=San Jose&appid=e79ab9c18b89145630220d4377fa6219&units=imperial")
    .then(response => response.json())
    .then(data => {
        day.textContent = today;
        let celsius = toCelsius(data.main.temp);
        temperature.textContent = data.main.temp.toFixed(1) + "°F" + " or " + celsius + "°C";
        place.textContent = data.name
        skiesValue.textContent = data.weather[0].main
        humidityValue.textContent = data.main.humidity + "%"
        sunrise.textContent = convertTime(data.sys.sunrise)
        sunset.textContent = convertTime(data.sys.sunset)
        changeWeather(data)
    })
    .catch(console.error())

weatherButton.addEventListener("click", function(){
    let city = cityInput.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e79ab9c18b89145630220d4377fa6219&units=imperial`)
        .then(response => response.json())
        .then(data => {
            let celsius = toCelsius(data.main.temp);
                temperature.textContent = data.main.temp.toFixed(1) + "°F" + " or " + celsius + "°C";
                place.textContent = data.name;
                skiesValue.textContent = data.weather[0].main;
                humidityValue.textContent = data.main.humidity + "%";
                // sunrise.textContent = convertTime(data.sys.sunrise);
                sunset.textContent = convertTime(data.sys.sunset)
                changeWeather(data);
                blink(data)
        })
        .catch(console.error)
})


// Enter Submit for Button
cityInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    weatherButton.click();
  }
});

// Animation for Icon

// Animation for Temp

// Animation for Location

// Animation for Skies

// Animation for Humidity

// Animation for Sunrise

function blink(data){
    sunrise.classList.add("changeOpacity")
    setTimeout(() =>{ 
        sunrise.classList.remove("changeOpacity")
        sunrise.classList.add("originalOpacity")
}, 250)
    sunrise.classList.remove("originalOpacity")
    sunrise.textContent = convertTime(data.sys.sunrise)
}

// Animation for Sunset


