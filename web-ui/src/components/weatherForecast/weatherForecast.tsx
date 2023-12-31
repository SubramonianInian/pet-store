import { ListItem } from '../../interfaces/weatherForecast'
import WeatherTile from '../weatherTile/WeatherTile'
import './weatherForecast.css'
interface Props {
    weatherForecast: ListItem[]
}

const WeatherForecastTile = ({ weatherForecast }: Props) => {
    return (
        <div className="forecast-container">
            <h3 className="main-header">A Glimpse of the Next Five Days...</h3>
            <div style={{ display: 'flex' }}>
                {weatherForecast.map((day) => (
                    <WeatherTile currentWeather={day} />
                ))}
            </div>
        </div>
    )
}

export default WeatherForecastTile
