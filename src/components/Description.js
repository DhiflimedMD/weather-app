import React from 'react'
import "./Description.css"


import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Description = ({ Weather, Units }) => {
  const tempUnit = Units === "metric" ? "°C" : "°F";
  const windUnit = Units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: Weather.temp_min.toFixed(),
      Unit: tempUnit,

    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: Weather.temp_max.toFixed(),
      Unit: tempUnit,

    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: Weather.feels_like.toFixed(),
      Unit: tempUnit,

    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: Weather.pressure,
      Unit: "hPa",

    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: Weather.humidity,
      Unit: "%",

    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: Weather.speed.toFixed(),
      Unit: windUnit,

    },


  ];
  return (
    <div className="section section__descriptions">
      {cards.map(({id, icon, title, data, Unit }) => (
        <div key={id} className="card">
        <div className="description__card-icon">
          {icon}
          <small>{title}</small>
        </div>
        <h2>{`${data} ${Unit}`}</h2>
      </div>
      ))}
      
    </div>
  )
}

export default Description