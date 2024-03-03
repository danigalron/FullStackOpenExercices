import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => (
  <p>{props.text} {props.clicks} </p>
)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState('Good')
  const [neutral, setNeutral] = useState('Neutral')
  const [bad, setBad] = useState('Bad')
  const [allGood, setAllGood] = useState(0)
  const [allNeutral, setAllNeutral] = useState(0)
  const [allBad, setAllBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const clickGood = () => {
    setGood('Good')
    setAllGood(allGood + 1)
    setAll(all + 1)
    setAverage(average + 1)
  }
  const clickNeutral = () => {
    setNeutral('Neutral')
    setAllNeutral(allNeutral + 1)
    setAll(all + 1)
  }
  const clickBad = () => {
    setBad('Bad')
    setAllBad(allBad + 1)
    setAll(all + 1)
    setAverage(average - 1)
  }
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick = {clickGood} text = 'Good'/>
      <Button handleClick = {clickNeutral} text = 'Neutral'/>
      <Button handleClick = {clickBad} text = 'Bad'/>
      <h2>Statistics</h2>
      <Display text = {good} clicks = {allGood}/>
      <Display text = {neutral} clicks = {allNeutral}/>
      <Display text = {bad} clicks = {allBad}/>
      <Display text = 'All' clicks = {all}/>
      <Display text = 'Average' clicks = {average/all}/>
      <Display text = 'Positive' clicks = {allGood/all}/>
    </div>
  )
}

export default App
