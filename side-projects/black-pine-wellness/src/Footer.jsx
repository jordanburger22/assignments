import { useState } from 'react'
import './App.css'

function Footer (){
    return(
        <div className='footer-container'>
            <p>©2022 by Black Pine Wellness.</p>
            <div className='footer-socials'>
                <button><i className="fa-brands fa-facebook-f" ></i></button>
                <br></br>
                <button><i className="fa-brands fa-instagram" ></i></button>
            </div>    
        </div>
)
}

export default Footer