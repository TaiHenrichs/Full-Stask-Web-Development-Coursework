import React, { useState, useEffect } from 'react'
import DisplayTable from './DisplayTable'
import FilterForm from './FilterForm'
import Entry from './Entry'
import ServerCommunication from './ServerCommunication'

const App = () => {
  //Initial value is unused - it ensures that persons is an array with objects formed 
  //in the manner used by the remainder of the application, avoiding various errors
  const [ persons, setPersons] = useState([{
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": "-1"
  }]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  const handleNewName = (event) => 
    setNewName(event.target.value)

  const localUpdate = (entryId) => {
    console.log('Id being deleted', entryId)
    setPersons(persons.filter(i => i.id !== entryId))
  }
    

  const handleSubmission = (event) => {
    event.preventDefault()
    
    if (isNew(newName)) {
      const nameObj = {
        name: newName,
        number: newNumber
      }
      ServerCommunication
        .create(nameObj)
          .then(returnedObj => 
            setPersons(persons.concat(returnedObj)))

    } else {
      window.alert(`${newName} is already in the phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  useEffect(() => {
    console.log('effect')
    ServerCommunication
      .getAll()
        .then(initPhonebook => setPersons(initPhonebook))
  }, [])

  const FilteredEntries = () => 
      persons.filter(entry => 
        entry.name.toLowerCase().includes(
          newFilter.toLowerCase())).map(
            entry => <Entry entry = {entry} localUpdate = {localUpdate}/>)

      
  

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