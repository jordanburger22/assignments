import trollFace from "./assets/troll-face.png"

export default function Header (){
    return (
        <div className="header-container"> 
            <img src={trollFace} className="header-image"/>
            <h1 className="header-h1">Meme Generator</h1>
            <h3 className="header-h3">React Course - Project 3</h3>
        </div>
    )
}