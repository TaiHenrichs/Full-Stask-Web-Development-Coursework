import React, { useState, useEffect } from 'react'
import DisplayTable from './DisplayTable'
import FilterForm from './FilterForm'
import Entry from './Entry'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', num: '999-999-9999'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  const handleNewName = (event) => 
    setNewName(event.target.value)
  

  const handleSubmission = (event) => {
    event.preventDefault()
    
    if (isNew(newName)) {
      const nameObj = {
        name: newName,
        num: newNumber
      }
      setPersons(persons.concat(nameObj))
    } else {
      window.alert(`${newName} is already in the phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  useEffect(() => {
    console.log('effect')
    axios
        .get('http://localhost:3001/notes').then(response => {
          console.log('promise fulfilled')
          setPersons(response.data)
        })
  }, [])

  const FilteredEntries = () => 
      persons.filter(entry => 
          entry.name.toLowerCase().includes(
            newFilter.toLowerCase())).map(
              entry => <Entry entry = {entry}/>)
  

  const handleNewNumber = (event) => 
    setNewNumber(event.target.value)

  const handleFilterUpd = (event) =>
    setNewFilter(event.target.value)

  const isNew = (name) => 
    !persons.some(person => 
      person.name === name)

  return (
    <div>
      <h2>Phonebook</h2>
        <FilterForm handleFilterUpd = {handleFilterUpd} newFilter = {newFilter}/>

      <h2>Add a New Entry</h2>
      <form onSubmit = {handleSubmission}>
        <div>
          name: <input value = {newName} onChange = {handleNewName}/>
        </div>
        <div>
          phone number: <input value = {newNumber} onChange = {handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Phonebook Entries</h2>
        <div>
          <DisplayTable entries = {FilteredEntries(persons, newFilter)}/>
        </div>
    </div>
  )
}

export default App