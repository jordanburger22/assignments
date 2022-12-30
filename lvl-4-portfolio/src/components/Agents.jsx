

function Agents(props){
    
    const color = props.data.backgroundGradientColors

    const backgroundColor = color.map(colorData => '#' + colorData)
    
    const setBackground = {
        background: `linear-gradient(50deg, ${backgroundColor})`
    }

    return(
        <div className="agent-list-container" style={setBackground}>
            <img 
                src={props.data.displayIcon}
                className="agent-list-img"
            />
            <h1 className="agent-list-name">{props.data.displayName}</h1>
        </div>
    )
}

export default Agents