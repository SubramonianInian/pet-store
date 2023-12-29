import './App.css'
import { useState } from 'react'
import Search from './components/search'
import { Coordinates } from './interfaces/CityData'
import { WeatherData } from './interfaces/weatherData'
import { GetWeather, GetWeatherForeacast } from './services/weather.api'

function App() {

  const [currentWeather, setCurrentWeather] = useState<WeatherData>();
  const [forecastedWeather, setForecastedWeather] = useState<WeatherData>();

  const onCitySelected = async ({ longitude, latitude }: Coordinates) => {
    const [currentWeather, weatherForecast] = await Promise.all([
      GetWeather(latitude, longitude),
      GetWeatherForeacast(latitude, longitude),
    ]);

    setCurrentWeather(currentWeather);
    setForecastedWeather(weatherForecast);
  }
  return (
    <>
      <div className='main-container'>
        <Search onCitySelected={onCitySelected} />
      </div>

    </>
  )
}

export default App
