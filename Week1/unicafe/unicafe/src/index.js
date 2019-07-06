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

  let total = sum(good, neutral, bad)
  let avg = sum(good, bad * -1) / total
  
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
      <Display disp = "Total Reviews" msg = {total}/>
      <Display disp = "Average" msg = {avg}/>
      <Display disp = "Percent Positive" msg = {good / total}/>
    </div>
  )
}

const sum = (...vals) => {
  let sum = 0
  for (let i = 0; i < vals.length; ++i) {
    sum += vals[i]
  }
  return sum
}

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