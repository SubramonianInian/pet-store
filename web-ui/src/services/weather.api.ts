import { WeatherApi } from "./api.base";
import { ecosystem } from "../ecosystem.config";
import { WeatherData } from "../interfaces/weatherData";

/**
 * Request the current weather details
 * @param lat 
 * @param lon 
 * @returns The current weather
 */
export const GetWeather = async (lat: string, lon: string): Promise<WeatherData> => {
     return await WeatherApi.get(`/weather?lat=${lat}&lon=${lon}&appid=${ecosystem.apis.weather.key}&units=${ecosystem.apis.weather.unit}`)
};

/**
 * Request the forecasted weather details
 * @param lat 
 * @param lon 
 * @returns The weather forecast
 */
export const GetWeatherForeacast = async (lat: string, lon: string): Promise<WeatherData> => { 
    return await WeatherApi.get(`/forecast?lat=${lat}&lon=${lon}&appid=${ecosystem.apis.weather.key}&units=${ecosystem.apis.weather.unit}`)
};