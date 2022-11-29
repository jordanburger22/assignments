import { useState } from 'react'
import vacationSpots from './data'
import Vaca from './Vaca'

const summer = {
    backgroundColor: "blue"
}
const spring = {
    backgroundColor: "red"
}

const winter = {
    backgroundColor: "green"
}

function Cards (){
    let card = vacationSpots.map(spots => {
        
        return(
            <Vaca
            spots = {spots}
            />
        )
        
    })

    return(
        <div className='card-container'>
            <span style={winter}>{card}</span>
        </div>
    )
}




export default Cards