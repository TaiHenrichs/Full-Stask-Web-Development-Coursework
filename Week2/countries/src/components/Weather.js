import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Weather = ({capital}) => {
    const [ weather, setWeather] = useState({
        main: {
            temp: 273,
            humidity: 0
        },
        weather: {
            description: 'Awaiting API Call Completion'
        },
        wind: {
            speed: 0,
            deg: 0
        }
    })

    useEffect(() => {
        console.log('effect')
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=3f514f850cf6c3783998fe7bf8af8778`)
            .then(response => {
              console.log('promise fulfilled')
              setWeather(response.data)
            })
    }, [])
    
    return (
        <div>
            <h2>{`Weather in ${capital}`}</h2>
            <h3>Temperature:</h3> 
            {weather.main.temp - 273} Celsius
            <h3>Humidity: </h3>
            {weather.main.humidity}
            <h3>Wind: </h3> {weather.wind.speed} meters/sec heading {weather.wind.deg} meteorological degrees
        </div>
    )
}

export default Weather

