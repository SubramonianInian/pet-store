import { ListItem } from "../interfaces/weatherForecast";
import WeatherTile from "./WeatherTile";

interface Props {
    weatherForecast: ListItem[];
}

const WeatherForecastTile = ({ weatherForecast }: Props) => {

    return (<div style={{display: "flex"}}>
        {weatherForecast.map(day => <WeatherTile currentWeather={day} />)}
    </div>);
}

export default WeatherForecastTile;