import React from "react";
import CustomDate from "./CustomDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherData(props) {

  function celsius(event) {
    event.preventDefault();
    return props.data.temp;
  }
  function fahrenheit(event) {
    event.preventDefault()
    let fhrn = Math.round( (props.data.temp * 9/5) + 32)
    return fhrn;
  }

  return (
    <div className="WeatherData">

      <h1 className="text-left m-5">{props.data.city}</h1>

      <ul>
        <CustomDate currentDate={props.data.date} />
        <li className="text-capitalize">{props.data.desc}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">

            <WeatherIcon data={props.data.icon} />
            </div>
            <div className="col-6">
              <h4><span>{props.data.temp}</span>
              <a href="/" onClick={celsius}>C°</a> | <a href="/" onClick={fahrenheit}>F°</a> </h4>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humid}%</li>
            <li>Wind Speed: {props.data.wind} km/h</li>
          </ul>

        </div>
      </div>
    </div>

  )
}
