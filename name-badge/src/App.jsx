import { useState } from 'react'
import './App.css'
import NameBadge from './NameBadge'


function App() {

  const [formData, setFormData] = useState(()=>({
    firstName: "",
    lastName: "",
    email: "",
    birthPlace: "",
    phone: "",
    favoriteFood: "",
    descriptionBox: ""
  }))

  const [nameBadges, setNameBadges] = useState(()=>[])

  function formHandler(event){
    const {name, value} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
    console.log("working")
    setNameBadges(prevState => ([
      ...prevState,
      formData
    ]))
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favoriteFood: "",
      descriptionBox: ""
    })
  }

  const nameList = nameBadges.map(info =>(
    <NameBadge
      key = {info.email}
      info = {info}
    />  
    )
  )

  console.log(formData)

  return (
    <div className="form-box">
      <form className='form' onSubmit={handleSubmit}>
          <input className='inputField'
              placeholder='First Name'
              name='firstName'
              value={formData.firstName}
              type="text"
              onChange={formHandler}
          />

          <input className='inputField'
              placeholder='Last Name'
              name='lastName'
              value={formData.lastName}
              type="text"
              onChange={formHandler}
          />

          <input className='inputField'
              placeholder='Email'
              name='email'
              value={formData.email}
              type="email"
              onChange={formHandler}
          />

          <input className='inputField'
              placeholder='Place of Birth'
              name='birthPlace'
              value={formData.birthPlace}
              type="text"
              onChange={formHandler}
          />

          <input className='inputField'
              placeholder='Phone'
              name='phone'
              value={formData.phone}
              type="phone"
              onChange={formHandler}
          />

          <input className='inputField'
              placeholder='Favorite Food'
              name='favoriteFood'
              value={formData.favoriteFood}
              type="text"
              onChange={formHandler}
          />

          <textarea className='textField' rows='8'
              placeholder='Tell us about yourself'
              name='descriptionBox'
              value={formData.descriptionBox}
              onChange={formHandler}
          />
          <button className='submitBtn'>Submit</button>
      </form>
      {nameList}
    </div>
  )
}

export default App
