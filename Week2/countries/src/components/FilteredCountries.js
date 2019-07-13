import React from 'react'
import Country from './Country'

const FilteredCountries = ({countries, search}) => {
    if (Array.isArray(countries)) {
        const filtered = countries.filter(country =>
            country.name.toLowerCase().includes(search.toLowerCase()))
            
        if (filtered.length <= 10) {
            return (
                filtered.map(
                    country => 
                    <Country country = {country}
                        singleCountry = {filtered.length === 1 
                                        ? true : false}
                        key = {"Country" + country.name}
                    />
                )
            )
        }
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
    console.log('You need an array!')
    return (<div>Something broke!</div>)
} 

export default FilteredCountries