import { useState } from 'react'
import './App.css'
import logo from "./assets/logo-black.jpg"

function Header() {
    console.log(logo)
    return( 
        <div className="header">
            <img src={logo} className="header-logo"/>
            <h1 className='header-title'>A Natural Approach to Healing</h1>
            <div className='socials'>
                <button><i className="fa-brands fa-facebook-f" id='header-social'></i></button>
                <br></br>
                <button id='header-social'><i className="fa-brands fa-instagram" ></i></button>
            </div>   
           
        </div>
    )
}

export default Header