import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNewInput = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    
    if (isNew(newName)) {
      const nameObj = {
        name: newName
      }
      setPersons(persons.concat(nameObj))
    } else {
      window.alert(`${newName} is already in the phonebook`)
    }
    setNewName('')
  }

  const isNew = (name) => !persons.some(person => person.name === name)

  const displayedItems = () => 
    persons.map(person => 
    <p key ={person.name}> 
      {person.name}
    </p>)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {handleSubmission}>
        <div>
          name: <input value = {newName} onChange = {handleNewInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {displayedItems()}
        </div>
    </div>
  )
}

export default App