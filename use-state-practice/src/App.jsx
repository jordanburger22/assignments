import { useState } from 'react'

import './App.css'



function App() {



  return (
    <div className="App">
      <h1>color</h1>
    </div>
  )
}

export default App


// const [color, setColor] = useState("pink")

// setColor("red")


// const [color, setColor] = useState("pink")

// setColor(prev => {
//   if (prev === "pink"){
//     prev = "blue"
//   } else if (prev === "blue"){
//     prev = "pink"
//   }
// })

const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

setPeople(//code here)