import React from 'react'
import RenderList from './RenderList'

const Country = ({country, singleCountry}) => {
    if (singleCountry) {
        let flagUrl = country.flag

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
                <img src={flagUrl} alt = {`The flag of ${country}`}/>
            </div>
        )
    }

    return (
        <p>
            {country.name}
        </p>
    )
    
}

export default Country