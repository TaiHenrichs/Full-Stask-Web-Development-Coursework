import React, {useState} from 'react'
import FullInfo from './FullInfo'

const ViewToggle = ({country}) => {
    const [full, setFull] = useState(false)

    const handleShow = () => {
        setFull(!full)
    }

    return (
        <div>
            {full ? <FullInfo country = {country}/> : <p>{country.name}</p>}
            <button key = {country.name + "ViewToggle"} onClick = {handleShow}>
            {full ? "Hide" : "Show"}
            </button>
        </div>
    )
}

export default ViewToggle