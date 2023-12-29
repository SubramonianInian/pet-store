import { WeatherData } from '../interfaces/weatherData';
import './WeatherTile.css';

interface Props{
    currentWeather: WeatherData;
}
const WeatherTile = ({currentWeather}: Props) => {

    return (<div className="tile-wrapper">
        <img className='weather-icon' src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`} alt=""></img>
        <div className="temperature">{currentWeather.weather[0].description}</div>
        <div className="temperature">
        <div className='temp-value'>{Math.round(currentWeather.main.temp)}</div>
        <sup className='temp-unit'>°C</sup>
        </div>
        <div className="weather-parameters">
            <div className="param">
                <div className="param-name">Feels Like: </div>
                <div className="param-value">{currentWeather.main.feels_like} </div>

            </div>
            <div className="param">
                <div className="param-name">Humidity: </div>
                <div className="param-value">{currentWeather.main.humidity}</div>
            </div>
            <div className="param">
                <div className="param-name">Wind: </div>
                <div className="param-value">{currentWeather.wind.speed}</div>
            </div>
        </div>
    </div>);
}

export default WeatherTile;