# React Weather App

Welcome to the React Weather App! This is a simple web application built using React (Typescript) that allows users to check the weather forecast for a specific location. This project was inspired by a [tutorial](https://www.youtube.com/watch?v=Reny0cTTv24&t=2833s) done by free code camp.

## Features

- **Current Weather:** Get the current weather conditions, including temperature, humidity, wind speed, and more.
  
- **Forecast:** View a 5-day weather forecast to plan ahead.

- **Search by Location:** Enter the name of a city or location to get the weather details for that area.

## Getting Started

Follow these steps to run the React Weather App locally on your machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/SubramonianInian/react-weather-app.git
   cd react-weather-app
   npm install
   
2. **Update API keys in ecosystem.config.ts file**
   
   The application uses the below 3rd party APIs
   - [OpenWeatherMap API](https://openweathermap.org) - to retrieve the weather data
   - [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities/) - to retrieve the list of countries based on search input
  
     Sign up to get the API access tokens and update the it in ecosystem.config.ts
