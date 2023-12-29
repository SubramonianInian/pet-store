import { CityApi } from "./api.base";
import { ApiResponse } from "../interfaces/CityData"; 

export const GetCities = async (search: string): Promise<ApiResponse> => { return await CityApi.get(`?namePrefix=${search}`) };