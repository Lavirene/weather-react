import React from 'react';
import WeatherIcon from './WeatherIcon'

export default function WeatherForecastDay(props) {
  function formatDay() {
    let date = new Date(props.data.dt * 1000)
    let day = date.getDay()
     let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return days[day];
  }

  return (
    <div>
      <div className="WF-day">{formatDay()}</div>
      <WeatherIcon data={props.data.weather[0].icon} size={36} />
      <div className="WF-temps">
        <span className="WF-temp-max">{Math.round(props.data.temp.max)}°</span>
        <span className="WF-temp-min ms-2">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
