import { CityApi } from "./api.base";
import { ApiResponse } from "../interfaces/cityData"; 

export const GetCities = async (search: string): Promise<ApiResponse> => { return await CityApi.get(`?namePrefix=${search}`) };