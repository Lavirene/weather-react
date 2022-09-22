import React, { useState }  from "react"

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function celsius(event) {
    setUnit("celcius")
    event.preventDefault();
  }
  function fahrenheit(event) {
    event.preventDefault()
    setUnit("fahrenheit")
  }
  if ( unit === "celcius" ) {
    return (
      <h4>
        <span className="temperature-number">{props.celcius}</span>
        <a className="active" href="/" onClick={celsius}>C°</a> | <a className="passive" href="/" onClick={fahrenheit}>F°</a>
      </h4>
    )
  } else {
    let fhrn = Math.round( (props.celcius * 9/5) + 32)
    return (
      <h4>
        <span className="temperature-number">{fhrn}</span>
        <a className="passive" href="/" onClick={celsius}>C°</a> | <a className="active" href="/" onClick={fahrenheit}>F°</a>
      </h4>
    )
  }

}
