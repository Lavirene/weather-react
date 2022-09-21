import React, { useState } from "react";
import axios from "axios";

import "./Weather.css"
import WeatherData from "./WeatherData";

export default function Weather(props) {

  const [weather, setWeather] = useState({ loaded: false })
  const [city, setCity] = useState(props.city)

  function displayWeather(response) {
    setWeather({
      loaded: true,
      temp: Math.round(response.data.main.temp),
      desc: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humid: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      city: response.data.name
    });
  }

  function search() {
    let apiKey = `82d623942976c17e87d20abb94fc530f`
    let units = "metric"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

    axios.get(url).then(displayWeather)
  }

  function handleInputChange(event) {
    event.preventDefault()
    setCity(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  if ( weather.loaded ) {
    return (
      <div className="wrapper">
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-9">
            <input type="search" placeholder="Enter a city" className="form-control" onChange={handleInputChange} />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>
        <WeatherData data={weather} />
      </div>
    )
  } else {

    search()

    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  }
}
