import wretch from "wretch"
import { ecosystem } from "../ecosystem.config"
import { ApiResponse } from "../interfaces/cityData";
import { WeatherData } from "../interfaces/weatherData";

/**
 * The weather api request options
 */
const weatherApiOptions = {
    mode: "cors",
    headers: {
        'retry-after': 1,
        'X-RapidAPI-Key': ecosystem.apis.cities.key,
        'X-RapidAPI-Host': ecosystem.apis.cities.host
    }
};

/**
 * The http request handler for the rapid city api
 */
export const CityApi = wretch(ecosystem.apis.cities.url, weatherApiOptions)
    .errorType("json")
    .resolve(r => r.json<ApiResponse>());

/**
 * The http request handler for open weather api
 */
export const WeatherApi = wretch(ecosystem.apis.weather.url)
    .errorType("json")
    .resolve(r => r.json<WeatherData>());