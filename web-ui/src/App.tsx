import './App.css'
import { useState } from 'react'
import Search from './components/search/search'
import WeatherTile from './components/weatherTile/WeatherTile'
import { Coordinates } from './interfaces/cityData'
import { WeatherData } from './interfaces/weatherData'
import { ListItem, WeatherForecast } from './interfaces/weatherForecast'
import { GetWeather, GetWeatherForeacast } from './services/weather.api'
import WeatherForecastTile from './components/weatherForecast/weatherForecast'
import { format } from 'date-fns/format'
import groupBy from 'lodash/groupBy'
import mapValues from 'lodash/mapValues'

function App() {
    const [currentWeather, setCurrentWeather] = useState<WeatherData>()
    const [forecastedWeather, setForecastedWeather] = useState<ListItem[]>()

    const getFormattedDate = (unixDateTime: number) => {
        const date = new Date(unixDateTime * 1000)
        const formattedDate = format(date, 'MMM d eeee')

        return formattedDate
    }

    const onCitySelected = async ({ longitude, latitude }: Coordinates) => {
        const [currentWeather, weatherForecast] = await Promise.all([
            GetWeather(latitude, longitude),
            GetWeatherForeacast(latitude, longitude),
        ])

        const data: WeatherForecast = {
            ...weatherForecast,
            list: weatherForecast.list.map((forecast) => {
                return {
                    ...forecast,
                    dt_internal: getFormattedDate(forecast.dt),
                }
            }),
        }
        const groupedWeather = mapValues(
            groupBy(data.list, 'dt_internal'),
            (group) => group[0]
        )
        setCurrentWeather(currentWeather)
        setForecastedWeather(Object.values(groupedWeather))
    }
    return (
        <>
            <div className="main-container">
                <h1 className="main-header">What's the Weather Like Today?</h1>
                <Search onCitySelected={onCitySelected} />{' '}
                {currentWeather && (
                    <>
                        <h3 className="weather-summary-main-header">
                            Today's typical weather conditions....
                        </h3>
                        <WeatherTile
                            currentWeather={currentWeather}
                            isSummary={true}
                        />
                    </>
                )}
                {forecastedWeather && (
                    <WeatherForecastTile weatherForecast={forecastedWeather} />
                )}
                <div className="sub-header">
                    <span className="copyleft">&copy;</span> 2023 Weather App.
                    All wrongs reserved.
                </div>
            </div>
        </>
    )
}

export default App
