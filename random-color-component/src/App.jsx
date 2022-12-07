import React from 'react'
import './App.css'

function App() {

  const [colors, setColors] = React.useState(() => ([]))

  const [colorChange, setColorChange] = React.useState(()=> true)

  React.useEffect(()=> {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(response => setColors(response.data.new_color))
  }, [colorChange])

  console.log(colors)

  const background = {
    backgroundColor: `#${colors}`
  }

  function colorHandler(){
    setColorChange(prevState => !prevState)
  }

  return (
    <div className="App">
      <div onClick={colorHandler} className='test' style={background}>
        
      </div>
    </div>
  )
}

export default App
