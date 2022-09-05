
import React, { useState } from "react";
import axios from "axios";

import "./Weather.css"


export default function Weather() {

  const [loaded, setLoaded] = useState(false)
  const [city, setCity] = useState('Kyiv')
  const [weather, setWeather] = useState({})

  function celsius(event) {
    event.preventDefault();
    return weather.temp;
  }
  function fahrenheit(event) {
    event.preventDefault()
    let fhrn = Math.round( (weather.temp * 9/5) + 32)
    return fhrn;
  }


  function displayWeather(response) {
      setLoaded(true)

      setWeather({
        temp: Math.round(response.data.main.temp),
        desc: response.data.weather[0].description,
        humid: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: response.data.weather[0].icon
      });

  }

  if ( loaded ) {
    return (
      <div className="wrapper">

        <form className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city" className="form-control" />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>

        <h1 className="text-left">{city}</h1>
        <ul>
          <li>Mon 5 07:47</li>
          <li className="text-capitalize">{weather.desc}</li>
        </ul>

        <div className="row">

          <div className="col-6">

            <div className="row">
              <div className="col-6">
                <img src="" alt="weather icon" />
              </div>
              <div className="col-6">
                <h4>{weather.temp}
                <a href="/" onClick={celsius}>C°</a> | <a href="/" onClick={fahrenheit}>F°</a> </h4>
              </div>
            </div>

          </div>
          <div className="col-6">
          <ul>
            <li>{weather.humid}%</li>
            <li>{weather.wind} km/h</li>
          </ul>
          </div>
        </div>
      </div>
    )

  } else {

    console.log(loaded)
    let apiKey = `82d623942976c17e87d20abb94fc530f`;
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);

    return (
      <div>
        <h1>Loading {loaded} </h1>
      </div>
    )
  }
}
