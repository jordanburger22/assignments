import { useState } from 'react'
import './App.css'
import Die from './die'



function App() {

  const [numbers, setNumbers] = useState(() => [1, 2, 3, 4, 5])

  let randomNumbers = [];

  for(let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 6) + 1);
  }

  function rollDice(){
    setNumbers(prevState => [...randomNumbers])
  }


 
  return (
    <div>

      <div className="App">
        < Die number={numbers[0]} />
        < Die number={numbers[1]} />
        < Die number={numbers[2]} />
        < Die number={numbers[3]} />
        < Die number={numbers[4]} />
      </div>

      <div>
        <button onClick={rollDice}>Roll Dice</button>
      </div>
    </div>
  )
}

export default App
