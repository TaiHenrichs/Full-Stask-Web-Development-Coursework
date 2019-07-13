import React from 'react'
import RenderList from './RenderList'
import Weather from './Weather'

const FullInfo = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <h2> Languages: </h2>
                <RenderList list = 
                    {country.languages.map(
                        language => language.name
                    )}/>
                <img src={country.flag} alt = {`The flag of ${country}`}/>
                <Weather capital = {country.capital}/>
        </div>
    )
}

export default FullInfo