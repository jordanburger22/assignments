import { useState } from 'react'
import './App.css'

function App() {
  const [names, setNames] = useState(()=> ["John", "Henry"])

  const [formData, setFormData] = useState(()=>({
      name: ""
  }))

  function formHandle(event){
    const {name, value} = event.target
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
  }

  const listItem = names.map(function(name){
    return(
      <li>{name}</li>
    )
  })


  function handleSubmit(event){
    event.preventDefault()
    setNames(prevState => [...prevState, formData.name])
    setFormData( ({
      name:""
    }))
  }

  return (
    <div className="App">
      <h1>Whats Your Name?</h1>
      <h1>{formData.name}</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='Name'
          onChange={formHandle}
          name="name"
          value={formData.name}
        />
        <button>Submit Name</button>
      </form>
      <ul>
        {listItem}
      </ul>
    </div>
  )
}

export default App
