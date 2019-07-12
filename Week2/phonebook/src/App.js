import React, { useState } from 'react'

const App = () => {
  //I read the note that said we could use names for 
  //the key attribute; however, that would fail 
  //if people in the phonebook shared names
  const [ currentId, setNewId ] = useState(1)
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', id: currentId }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNewInput = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleSubmission = (event) => {
    setNewId(currentId + 1)
    event.preventDefault()
    const nameObj = {
      name: newName,
      id: currentId
    }
    setPersons(persons.concat(nameObj))
    setNewName("")
  }

  const displayedItems = () => 
    persons.map(person => <p>{person.name}</p>)

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
        <div>
          {displayedItems()}
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}

export default App