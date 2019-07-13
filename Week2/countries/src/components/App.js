import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Input from './Input'
import FilteredCountries from './FilteredCountries'

function App() {
  const [countries, setCountries] = useState()
  const [newCountry, setNewCountry] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
        .get('https://restcountries.eu/rest/v2/all?fields=name;population;languages;flag;cioc;capital;alpha3Code')
        .then(response => {
          console.log('promise fulfilled')
          setCountries(response.data)
        })
  }, [])

  const handleNewCountry = (event) => {
    setNewCountry(event.target.value)
    console.log(newCountry)
  }
  
  return (
    <div>
      <Input filterName = 'Find Countries: '
        formVal = {newCountry}
        eventHandler = {handleNewCountry}/>
      <FilteredCountries countries = {countries} search = {newCountry}/>
    </div>
  )
}

export default App
