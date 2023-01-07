import axios from "axios"
import { useState } from "react"


function NewBounty(props){

    const [bountyinputs, setbountyinputs] = useState(
        {
            firstName: props.firstName || "",
            lastName: props.lastName || "",
            isLiving: props.isLiving || "",
            bounty: props.bounty || "",
            type: props.type || ""
            
            
        }
    )



    function handleChange(e) {
        const {name, value} = e.target
        setbountyinputs(prevBounty => ({
            ...prevBounty,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(bountyinputs, props._id)
        props.toggle && props.toggle()

        setbountyinputs(
            {
                firstName: props.firstName || "",
                lastName: props.lastName || "",
                isLiving: props.isLiving || "",
                bounty: props.bounty || "",
                type: props.type || ""
            })
    }
    
    
    console.log(bountyinputs)

    return(
        <form className="new-bounty-container" onSubmit={handleSubmit}>
            <input 
                type='text'
                name="firstName"
                value={bountyinputs.firstName}
                placeholder="First Name"
                onChange={handleChange}
                required
            />

            <input 
                type='text'
                name="lastName"
                value={bountyinputs.lastName}
                placeholder="Last Name"
                onChange={handleChange}
                required
            />

            <select 
                onChange={handleChange}
                value= {bountyinputs.type}
                name= "type"
                required
            >
                <option value="">Jedi/Sith?</option>
                <option>Jedi</option>
                <option>Sith</option>
            </select>

            <select
                name="isLiving"
                value={bountyinputs.isLiving}
                onChange={handleChange}
                required
            >
                <option value="">Living?</option>
                <option value= "true">Alive</option>
                <option value= "false">Dead</option>
            </select>
            <input 
                type='number'
                name="bounty"
                value={bountyinputs.bounty}  
                placeholder="Bounty Amount"
                onChange={handleChange}
                required
            />

            <button>{props.btnTxt}</button>
        </form>
    )
}

export default NewBounty