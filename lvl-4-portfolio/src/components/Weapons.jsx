

function Weapons(props){
    return(
        <div className="weapons-list-container">
            <img 
                src={props.data.displayIcon}
                className= "weapons-list-img"
            />
            <h1 className="weapons-list-name">{props.data.displayName}</h1>
        </div>
    )
}

export default Weapons