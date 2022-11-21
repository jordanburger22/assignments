import React from 'react'
import ReactDOM from "react-dom"
import {Photo, Info, TopButtons} from "./info"
import {About} from "./about"
import {Footer} from "./footer"



ReactDOM.render(
    <nav>
        <Photo />
        <Info />
        <TopButtons />
        <About />
        <Footer />
    </nav>,
        
    document.getElementById("root")
)