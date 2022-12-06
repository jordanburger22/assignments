import React from 'react'
import './App.css'

function App() {

  const [colors, setColors] = React.useState(() => ([]))

  React.useEffect(()=> {
    axios.get('https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}')
      .then(response => setColors(response.data.new_color))
  }, [])

  console.log(colors)

  const background = {
    backgroundColor: `#${colors}`
  }

  return (
    <div className="App">
      <div className='test' style={background}>
        
      </div>
    </div>
  )
}

export default App
