export default function Meme(){
    return(
        <div className="meme-container">
            <form className="form-container">
                <input className="meme-input" placeholder="Top Text"/>
                <input className="meme-input" placeholder="Bottom Text"/>
                <button className="meme-button">Get a new meme image  🖼</button>
            </form>
        </div>
    )
}