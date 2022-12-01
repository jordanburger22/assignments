import { useState } from 'react'


function Pet(props){

    return(
        <div className='pet-container'>
            <div className='pet-name'>
                <h1 className='pet'>pet name</h1>
                <h1>{props.info.name}</h1>
            </div>
            <div className='pet-breed'>
                <h1 className='pet'>pet breed</h1>
                <h1>{props.info.breed}</h1>
            </div>
        </div>
    )
}



export default Pet