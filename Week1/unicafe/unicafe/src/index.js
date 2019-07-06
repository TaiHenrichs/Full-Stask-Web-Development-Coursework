import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //Label Variables
  const g = 'Good'
  const n = 'Neutral'
  const b = 'Bad'
  
  return (
    <div>
      <Display disp = 'Give Feedback'/>
      <Button onClick = {() => setGood(good + 1)} text = {g}/>
      <Button onClick = {() => setNeutral(neutral + 1)} text = {n}/>
      <Button onClick = {() => setBad(bad + 1)} text = {b}/>
      <Display disp = 'Statistics'/>
      <Display disp = {g} msg = {good}/>
      <Display disp = {n} msg = {neutral}/>
      <Display disp = {b} msg = {bad}/>
    </div>
  )
}
//Event Handler Components


//Rendering Components
const Button = ({onClick, text}) => {
    return (
        <button onClick = {onClick}>
            {text}
        </button>
    )
}

const Display = (props) => {
    return (
        <p>
            {props.disp} {props.msg}
        </p>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)