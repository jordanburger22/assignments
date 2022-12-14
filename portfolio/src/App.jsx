import { useState } from 'react'
import Header from './Header'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import './App.css'

function App() {


  return (
    <div className="App">
      <Header />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
