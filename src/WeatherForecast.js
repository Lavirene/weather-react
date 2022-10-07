import React, { useState, useEffect } from 'react'
import WeatherForecastDay from './WeatherForecastDay'
import './WeatherForecast.css';
import axios from 'axios';


export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false)
  let [forecast, setForecast] = useState(null)

  useEffect( () => {
    setLoaded(false)
  }, [props.coord])

  function handleResponse(response) {
    setForecast(response.data.daily)
    setLoaded(true)
  }


  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index) {
            if (index < 6 ) {
              return (
                <div className="col text-center" key={index}>
                  <WeatherForecastDay data={forecast[index]} />
                </div>)
              }
              return null;
            })
          }
        </div>
      </div>
    );
  } else {
    let lat = props.coord.lat
    let lon = props.coord.lon
    let units = 'metric'
    const apiKey = '82d623942976c17e87d20abb94fc530f';
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`

    axios.get(apiUrl).then(handleResponse)
    return null;
  }
}
