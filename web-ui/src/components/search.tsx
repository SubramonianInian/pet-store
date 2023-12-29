import { useState } from "react";
import { CityData, Coordinates } from "../interfaces/CityData";
import { GetCities } from "../services/cities.api";
import { AsyncPaginate } from "react-select-async-paginate";

interface Props{
  onCitySelected: (coordinates: Coordinates) => void;
}

const Search = ({onCitySelected}: Props) => {
  const PLACEHOLDER = "Find a city";
  const DEBOUNCE_TIMEOUT_IN_MILLI_SECONDS = 6000;

  const [search, setSearch] = useState<string>();

  const handleOnChange = (selectedValue: unknown) => {
   const [lat, lon] = (selectedValue as {label: string, value: string}).value.split('|');
   onCitySelected({latitude: lat, longitude: lon});
  }

  async function loadOptions(search: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let possibleCities: any;

    if (search) {
      setSearch(search);
      const cities = await GetCities(search);
      possibleCities = {
        options: cities.data.map((item: CityData) => (
          {
            value: `${item.latitude}|${item.longitude}`,
            label: item.name
          }))
      };
    }
    return possibleCities;
  }

  return (<AsyncPaginate
    debounceTimeout={DEBOUNCE_TIMEOUT_IN_MILLI_SECONDS}
    placeholder={PLACEHOLDER}
    value={search}
    loadOptions={loadOptions}
    onChange={handleOnChange}
  />);
}

export default Search; 