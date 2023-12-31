import { useState } from 'react'
import './search.css'
import { CityData, Coordinates } from '../../interfaces/cityData'
import { GetCities } from '../../services/cities.api'
import { AsyncPaginate } from 'react-select-async-paginate'

/**
 * The prop interface
 */
interface Props {
    onCitySelected: (coordinates: Coordinates) => void
}

/**
 * The search component
 * @param param
 * @returns
 */
const Search = ({ onCitySelected }: Props) => {
    const PLACEHOLDER = 'Locate a city...'
    const DEBOUNCE_TIMEOUT_IN_MILLI_SECONDS = 6000

    const [search, setSearch] = useState<string>()

    /**
     * Method the handle the on change event
     * @param selectedValue
     */
    const handleOnChange = (selectedValue: unknown) => {
        setSearch(search)
        const [lat, lon] = (
            selectedValue as { label: string; value: string }
        ).value.split('|')
        onCitySelected({ latitude: lat, longitude: lon })
    }

    /**
     * Method to load the availble cities based on search
     * @param search
     * @returns
     */
    async function loadOptions(search: string) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let possibleCities: any

        if (search) {
            const cities = await GetCities(search)
            possibleCities = {
                options: cities.data.map((item: CityData) => ({
                    value: `${item.latitude}|${item.longitude}`,
                    label: item.name,
                })),
            }
        }
        return possibleCities
    }

    return (
        <AsyncPaginate
            className="search-bar"
            debounceTimeout={DEBOUNCE_TIMEOUT_IN_MILLI_SECONDS}
            placeholder={PLACEHOLDER}
            value={search}
            loadOptions={loadOptions}
            onChange={handleOnChange}
        />
    )
}

export default Search
