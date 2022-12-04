import { useState } from 'react'
import './App.css'
import Square from './Square';

function App() {

  const [colors, setColors] = useState(() => ["white", "white", "white", "white"])

  function smallEventHandler(){
    setColors(prevState => prevState[0] === "white" ? ["black", "black", "black", "black"] : ["white", "white", "white", "white"])
  }

  function partyEventHandler(){
    setColors(prevState => ["purple", "purple", prevState[2], prevState[3]])
  
  }

  function leftEventHandler(){
    setColors(prevState => [prevState[0], prevState[1], "blue", prevState[3]])
    console.log(colors)
  }

  function rightEventHandler(){
    setColors(prevState => [prevState[0], prevState[1], prevState[2], "blue"])
  }

  function box1EventHandler(){
    setColors(prevState =>["red", prevState[1], prevState[2], prevState[3]])
  }

  function box2EventHandler(){
    setColors(prevState =>[prevState[0], "magenta", prevState[2], prevState[3]])
  }

  function box3EventHandler(){
    setColors(prevState =>[prevState[0], prevState[1], "violet", prevState[3]])
  }

  function box4EventHandler(){
    setColors(prevState =>[prevState[0], prevState[1], prevState[2], "brown"])
  }

  function railynnEventHandler(){
    setColors(prevState =>["skyblue", "salmon", "beige", "wheat"])
  }


  return (
    <div className="App">

        <div className='square-1'>
        <Square color={colors[0]}/>
        </div>

        <div className='square-2'>
        <Square color={colors[1]}/>
        </div>

        <div className='square-3'>
        <Square color={colors[2]}/>
        </div>

        <div className='square-4'>
        <Square color={colors[3]}/>
        </div>

        <button onClick={smallEventHandler} className='small-time'>Small Time DJ</button>
        <button onClick={partyEventHandler}>Party DJ</button>
        <button onClick={leftEventHandler}>To The Left</button>
        <button onClick={rightEventHandler}>To The Right</button>
        <button onClick={box1EventHandler}>Box 1</button>
        <button onClick={box2EventHandler}>Box 2</button>
        <button onClick={box3EventHandler}>Box 3</button>
        <button onClick={box4EventHandler}>Box 4</button>
        <button onClick={railynnEventHandler}>Railynns Button</button>
    </div>
  )
}

export default App
