import React from "react";
import CustomDate from "./CustomDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherData(props) {
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
              <WeatherIcon data={props.data.icon} size={60} />
            </div>
            <div className="col-6">
              <WeatherTemperature celcius={props.data.temp} />
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
