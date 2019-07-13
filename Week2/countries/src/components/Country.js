import FullInfo from './FullInfo'
import ViewToggle from './ViewToggle'
import React from 'react'

const Country = ({country, singleCountry}) => {
    if (singleCountry) {
        return (
            <div>
                <FullInfo country = {country}/>
            </div>
        )
    }

    return (
        <div>
            <ViewToggle country = {country}/>
        </div>
    )
}

export default Country