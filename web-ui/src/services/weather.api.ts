import { WeatherApi } from "./api.base";
import { ecosystem } from "../ecosystem.config";
import { WeatherData } from "../interfaces/weatherData";
import { WeatherForecast } from "../interfaces/weatherForecast";

/**
 * Request the current weather details
 * @param lat 
 * @param lon 
 * @returns The current weather
 */
export const GetWeather = async (lat: string, lon: string): Promise<WeatherData> => {
     return await WeatherApi<WeatherData>().get(`/weather?lat=${lat}&lon=${lon}&appid=${ecosystem.apis.weather.key}&units=${ecosystem.apis.weather.unit}`)
};

/**
 * Request the forecasted weather details
 * @param lat 
 * @param lon 
 * @returns The weather forecast
 */
export const GetWeatherForeacast = async (lat: string, lon: string): Promise<WeatherForecast> => { 
    return await WeatherApi<WeatherForecast>().get(`/forecast?lat=${lat}&lon=${lon}&appid=${ecosystem.apis.weather.key}&units=${ecosystem.apis.weather.unit}`)
};