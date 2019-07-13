import React from 'react'

const Entry = ({entry}) => 
    <tr key = {entry.name + entry.number}> 
        <td key = {entry.name}>
            {entry.name}
        </td>
        <td key = {entry.number}>
            {entry.number}
        </td>
    </tr>

export default Entry