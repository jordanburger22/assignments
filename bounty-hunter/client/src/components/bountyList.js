import NewBounty from "./NewBounty"
import { useState } from "react"

function BountyList(props){
    
    const {firstName, lastName, isLiving, bounty, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    function toggle(){
        setEditToggle(false)
    }
    

    return(
        <div className="bountyList-container">
            {!editToggle && 
            <>
                <h1 className="bounty-name">{firstName} {lastName} <span className="bounty-type">{type}</span></h1>
                {isLiving === "true" && <p className="bounty-status">Alive: Yes</p>}
                {isLiving === "false" && <p className="bounty-status">Alive: No</p>}
                <p className="bounty-cost">Bounty: {bounty} credits</p>
                <button onClick={() => props.deleteBounty(_id)}>Delete</button>
                <button onClick={() => setEditToggle(true)}>Edit</button>
            </>}
            {editToggle && 
            <>
                <NewBounty 
                    btnTxt= 'Update Bounty'
                    firstName={firstName}
                    lastName= {lastName}
                    isLiving= {isLiving}
                    bounty= {bounty}
                    type= {type}
                    submit= {props.editBounty}
                    _id= {_id}
                    toggle= {toggle}
                    />
                <button onClick={() => setEditToggle(false)}>Close</button>
            </>}
        </div>
    )
}

export default BountyList