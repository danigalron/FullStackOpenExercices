import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const Display = ({ text, stat }) => (
  <p>
    {text} {stat}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = good/all
  
  return (
    <div>
      <h2>Statistics</h2>
      <Display text="Good" stat={good} />
      <Display text="Neutral" stat={neutral} />
      <Display text="Bad" stat={bad} />
      <Display text="All" stat={all} />
      <Display text="Average" stat={average} />
      <Display text="Positive" stat={positive} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickGood = () => {
    setGood(good + 1);
  };

  const clickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const clickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={clickGood} text="Good" />
      <Button handleClick={clickNeutral} text="Neutral" />
      <Button handleClick={clickBad} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
