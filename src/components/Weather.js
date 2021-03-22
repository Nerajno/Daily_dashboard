import React, { useEffect, useState } from "react";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = process.env.REACT_APP_WEATHER_API_KEY;
let city = "Atlanta";

function Weather() {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        let api = `${apiUrl}?q=${city}&appid=${apiKey}&units=imperial`;
        console.log(api);
        fetch(api)
        .then(response => response.json())
        .then(data => {setWeather(data);})
    }, []);


    return (
        <div>
            <h2>The current weather is {weather && weather.main.temp}  in  {city}.</h2>
        </div>
        
    );
}

export default Weather;