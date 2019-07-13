import React from 'react'
import ServerCommunication from './ServerCommunication'

const DeleteButton = ({entry, localUpdate}) => {
    const entryId = entry.id
    
    const handleDeletion = () => {
        if (window.confirm(`Delete ${entry.name} ?`))
              ServerCommunication.eliminateEntry(entryId)
              .then(() => localUpdate(entryId))
      }

    return(
        <button onClick = {handleDeletion}>
            Delete
        </button>
    )
}

export default DeleteButton