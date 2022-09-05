import React  from "react";

export default function CustomDate(props) {

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = props.currentDate.getHours() < 10 ? '0' + props.currentDate.getHours() : props.currentDate.getHours()
  let minutes = props.currentDate.getMinutes() < 10 ? '0' + props.currentDate.getMinutes() : props.currentDate.getMinutes()

  return <li>{days[props.currentDate.getDay()]} {hour}:{minutes} </li>;
}
