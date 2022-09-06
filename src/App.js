import './App.css';
import hotBg from "./assets/yellow.png"
import coldBg from "./assets/blue.jpg"
import iconimg from "./assets/w-icon.png"
import Description from './components/Description';
import {useEffect, useState} from "react";
import {getFormattedWeatherData} from "./WeatherService";


function App() {
  const [City, setCity] = useState ("paris");
  const [Weather, SetWeather] = useState(null);
  const [Units , SetUnits] = useState("metric");
  const [bg, setbg] = useState(hotBg);



  useEffect(() => {
  const fetchWeatherData = async () => {
  const data = await getFormattedWeatherData(City , Units);
  SetWeather(data);

  //dynamic bg
  const mesure = Units === "metric" ? 30 : 86;
  if (data.temp <= mesure ) setbg(coldBg);
  else setbg (hotBg);
  SetWeather(data);

  



}


  fetchWeatherData();
  }, [Units,City]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnits = button.innerText.slice(1);
    const isCelsius = currentUnits === "C" ;
    button.innerText = isCelsius ? "°F" : "°C";
    SetUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13){
      setCity(e.currentTarget.value)
      e.currentTarget.blur();
    }
  };
  
  return (
  <div className="app" style={{backgroundImage: `url(${bg})`}}>
    <div className="overlay">
      { Weather && (
        <div className="container">
          <div className="section section__input">
            <input onKeyDown={enterKeyPressed} 
            type="text" name="city" placeholder="Enter city ..." />
            <button onClick={(e) => handleUnitsClick(e)}>°F</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${Weather.name}, ${Weather.country}`}</h3>
              <img src={Weather.iconURL} alt="WeatherIcon" />
              <h3>{Weather.Description}</h3>
            </div>
            <div className="temperature">
              <h1>{`${Weather.temp.toFixed()} °${Units === "metric" ? "C" : "F"}`}</h1>
            </div>
          </div>


          {/* bottom description */}
          <Description Weather={Weather} Units={Units}/>
        </div>
      

      )}
    </div>
 
    </div>
  );
}

export default App;
