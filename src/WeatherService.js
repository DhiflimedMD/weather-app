//API call : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const API_KEY = "0b2f38a5ed6919097a8eff3d0af8347c";
const makeiconURL = (iconID) => `https://openweathermap.org/img/wn/${iconID}@2x.png`


const getFormattedWeatherData = async (city , units = "metric") => {

  const URl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`


  const data = await fetch(URl)
  .then((res)  => res.json())
  .then((data) => data);

  
  const {
    weather,
    main: {temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind : {speed},
    sys:{country},
    name, 
  } = data;

  const {description, icon } = weather[0];
  return {
    description,
    iconURL:makeiconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
  
};

export { getFormattedWeatherData };



