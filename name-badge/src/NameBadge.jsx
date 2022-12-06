

function NameBadge(props){
    return(
        <div className="badge-container">
            <header className="badge-header"><h2 className="header-text">Badge:</h2></header>
            
            <div className="name-badge">
                <h3 className="badge-info">{`Name: ${props.info.firstName} ${props.info.lastName}`} </h3>
                <h3 className="badge-info">Phone: {props.info.phone}</h3>
                <h3 className="badge-info">Place of Birth: {props.info.birthPlace}</h3>
                <h3 className="badge-info">Email: {props.info.email}</h3>
                <h3 className="badge-info">Favorite Food: {props.info.favoriteFood}</h3>
                <textarea className="badge-textarea" rows="8" value={props.info.descriptionBox}/>
            </div>
        </div>
    )
}

export default NameBadge