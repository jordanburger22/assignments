import { useState } from 'react'
import './App.css'
import friends from './data'
import Friend from './Friend'



function FriendList() {
  
  const friendData = friends.map(data =>{
    return(
        <Friend
        data = {data}
        />
    
      )
 
  })

  return (
    
    <div className="app">
        {friendData}
    </div>
  )
}

export default FriendList
