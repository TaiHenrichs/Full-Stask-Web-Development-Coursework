import React from 'react'

const Input = ({filterName, formVal, eventHandler}) => {
    return (
        <p>
            {filterName} <input value = {formVal} onChange = {eventHandler}/>
        </p>
    )
}

export default Input