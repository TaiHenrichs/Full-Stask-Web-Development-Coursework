import React from 'react'

const Entry = ({entry}) => 
    <tr key = {entry.name + entry.num}> 
        <td key = {entry.name}>
            {entry.name}
        </td>
        <td key = {entry.num}>
            {entry.num}
        </td>
        </tr>

export default Entry