interface Link {
    rel: string
    href: string
}

export interface CityData {
    id: number
    wikiDataId: string
    type: string
    city: string
    name: string
    country: string
    countryCode: string
    region: string | null
    regionCode: string | null
    regionWdId: string | null
    latitude: number
    longitude: number
    population: number
    distance: null
    placeType: string
}

interface Metadata {
    currentOffset: number
    totalCount: number
}

export interface ApiResponse {
    links: Link[]
    data: CityData[]
    metadata: Metadata
}

export interface Coordinates {
    latitude: string
    longitude: string
}
