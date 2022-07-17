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

let weatherConditions = 
["Clear", "Clouds", "Rain", "Drizzle", 
"Thunderstorm", "Snow", "Mist", "Smoke", "Haze", "Dust", 
"Fog", "Sand", "Ash", "Squall", "Tornado"]

// <i class="fa-solid fa-cloud fa-7x"></i>
//         <!-- <i class="fa-solid fa-sun"></i> -->
//         <!-- <i class="fa-solid fa-cloud-rain"></i> -->
//         <!-- <i class="fa-solid fa-cloud-snow"></i>  -->
//         <!-- <i class="fa-solid fa-cloud-bolt"></i> -->

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
        console.log(data)
    })
    .catch(console.error())

weatherButton.addEventListener("click", function(){

})

