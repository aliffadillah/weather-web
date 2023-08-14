    const apiKey = "3471a01c849bb67925637c25198ec87a";
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiURL + city + `&appid=${apiKey}`);

        if(response.status == 404) {
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".error").style.display = "block";
            return;
        } else {
            document.querySelector(".error").style.display = "none";
        }
        var data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
    }



    searchBtn.addEventListener("click", () => {
        var city = searchBox.value;
        checkWeather(city);
    });

    checkWeather();
