import { useState } from 'react'

function Navbar(){
    return(
        <nav className='header'>
            <h1>Start Bootstrap</h1>
            <div className='header--nav'>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Sample Post</h1>
                <h1>Contact Us</h1>
            </div>
        </nav>
    )
}

export default Navbar