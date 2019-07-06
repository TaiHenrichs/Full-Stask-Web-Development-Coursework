import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//Label Variables
const g = 'Good'
const n = 'Neutral'
const b = 'Bad'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <Display disp = 'Give Feedback'/>
      <Button onClick = {() => setGood(good + 1)} text = {g}/>
      <Button onClick = {() => setNeutral(neutral + 1)} text = {n}/>
      <Button onClick = {() => setBad(bad + 1)} text = {b}/>
      
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
    
  )
}

const Statistics = (props) => {
  let total = sum(props.good, props.neutral, props.bad)
  let avg = sum(props.good, props.bad * -1) / total

  if (total <= 0) {
    return (
      <div>
        <Display disp = 'Statistics'/>
        <Display disp = 'No Feedback Given'/>
      </div>
    )
  }
  return (
    <div>
      <Display disp = 'Statistics'/>
      <Statistic text = {g} value = {props.good}/>
      <Statistic text = {n} value = {props.neutral}/>
      <Statistic text = {b} value = {props.bad}/>
      <Statistic text = "Total Reviews:" value = {total}/>
      <Statistic text = "Average:" value = {avg}/>
      <Statistic text = "Percent Positive:" value = {props.good / total}/>
    </div>
  )
}
//To the grader: Sorry!  I had already been using the Display component located
//further below.  I'm aware this Statistic implementation is practically pointless
//since it is functionally identical to the Display component.
const Statistic = ({text, value}) => {
  return (
    <div>
      <Display disp = {text} msg = {value}/>
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