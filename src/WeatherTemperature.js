import React  from "react"

export default function WeatherTemperature(props) {
    return (
      <h4>
        <span className="temperature-number">{props.celcius} <span className="active">C°</span></span>
      </h4>
    )


}
