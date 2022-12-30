import { useState, useEffect } from 'react'
import Home from './Home'
import Agents from './Agents'
import Weapons from './Weapons'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'

function App() {

  const [agents, setAgents] = useState([])

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/agents')
      .then(res=> setAgents(res.data.data))
  }, [])

  const [weapons, setWeapons] = useState([])

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/weapons')
      .then(res => setWeapons(res.data.data))
  }, [])

  console.log(weapons)

  const agentsList = agents.map(data => (
    data.isPlayableCharacter &&
     <Agents 
        data= {data}
        key={data.uuid}
      />
  ))

  const weaponList = weapons.map(data => (
    <Weapons 
      data = {data}
      key={data.uuid}
    />
  ))


 

  return (
    <div className="App">
      <Router>

          <nav className='nav-bar'>
            <Link to="/" className='nav-link'
            >Home</Link>
            <Link to="/agents" className='nav-link'
            >Agents</Link>
            <Link to="/weapons" className='nav-link'
            >Weapons</Link>
          </nav>

          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/agents' element={<div className='agent-list'>
              <h1 className='agent-header'>Agents</h1>
              {agentsList}
              </div>}/> 
            <Route path='/weapons' element={<div className='weapon-list'>
              <h1 className='weapons-header'>Weapons</h1>
              {weaponList}
              </div>}/>   
          </Routes>    

          <footer className='footer'>
            <h5 className='footer-header'>ValorantData</h5>
          </footer>
      </Router>
    </div>
  )
}

export default App
