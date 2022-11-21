import React from "react"

export function Photo() {
    return(
         <div className = "top">   
            <img className= "main-photo" src = "https://media-exp1.licdn.com/dms/image/C5603AQGGMZE-Siu_-g/profile-displayphoto-shrink_200_200/0/1667960771497?e=1674086400&v=beta&t=pmXBbGzWz5Iz7D8WNchik2GdwOigk18wkqoI67M2JLs" />
        </div>
    )
}
export function Info(){
    return(
        <div className = "name-info">
            <h1 className = "name">Jordan Burger</h1>
            <h3 className = "job-title">JS Developer</h3>
            <p className = "link">jordanburger.website</p>
        </div>
    )
}

export function TopButtons(){
    return(
        <div className = "top-buttons">
            <button className = "email"><i id= "mail" className="fa-solid fa-envelope"></i>Email</button>
            <button className = "linked-in"><i id="linkedin" className="fa-brands fa-linkedin"></i>LinkedIn</button>
        </div>
    )
}

