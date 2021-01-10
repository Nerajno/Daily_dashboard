import React, { useEffect, useState } from "react";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "0e9298136c7c17273ccec159a274dc0f";
let city = "Atlanta, USA";

function Weather() {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        let api = `${apiUrl}?q=${city}&appid=${apiKey}&units=imperial`;
        fetch(api)
        .then(response => response.json())
        .then(data => {setWeather(data);})
    }, []);


    return (
        <h2>The current weather is {weather && weather.main.temp} in  {city}.</h2>
    );
}

export default Weather;