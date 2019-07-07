import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(anecRand())
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const setNewAnec = () => {
    const rand = anecRand()
    setSelected(rand)
  }

  const recordVote = () => {
    let copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Button onClick = {setNewAnec} text = 'Get New Anecdote'/>
      <Button onClick = {recordVote} text = 'Vote'/>
      <Display disp = "Current Anecdote: " msg = {anecdotes[selected]}/>
      <Display disp = "Votes for this Anecdote: " msg = {votes[selected]}/>
      <h1>Anecdote with the most votes</h1>
      <Display disp = {"\"" + anecdotes[anecMostVotes(votes)] + "\""} 
                msg = {"has " + votes[anecMostVotes(votes)] + " votes."}/>
    </div>
  )
}

const anecMostVotes = (votes) => {
  let mostVotesIndex = 0
  for (let i = 1; i < anecdotes.length; ++i) {
    if (votes[i] > votes[mostVotesIndex]) {
      mostVotesIndex = i
    }
  }
  return mostVotesIndex
}

//Generates random number in the range 0 to anecdotes.length minus 1
const anecRand = () => {
  return Math.floor(Math.random() * anecdotes.length)
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

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

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)