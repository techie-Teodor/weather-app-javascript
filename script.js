const weatherAPIkey = "ef7f4e1a977c4e7d851131614232009";
const baseURL = "http://api.weatherapi.com/v1/current.json";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(`${baseURL}?key=${weatherAPIkey}&q=${city}&aqi=no`);

    if(!response.ok) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
    
        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";

        // Adjust these conditions to correctly match the weather description
        switch (data.current.condition.text) {
            case "Patchy light rain":
                weatherIcon.src = "./images/drizzle-icon.png";
                break;
            case "Partly cloudy":
                    weatherIcon.src = "./images/mist-icon.png";
                break;
            case "Clear":
                    weatherIcon.src = "./images/clear-icon.png";
                break;
            case "Snow":
                weatherIcon.src = "./images/snow-icon.png";
                break;
            case "Mist":
                weatherIcon.src = "./images/mist-icon.png";
                break;
            case "Sunny":
                weatherIcon.src = "./images/clear-icon.png";
                break;
            case "Light rain":
                weatherIcon.src = "./images/rain-icon.png";
                break;
            // ... plus other conditions as needed
        }
        console.log(data);
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
};

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});