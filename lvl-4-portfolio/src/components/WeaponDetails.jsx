import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react"
import dataContext from "./dataContext"

function WeaponDetails(){
    const navigate = useNavigate()

    const data = useContext(dataContext)
    const weapons = data.weapons

    const {weaponId} = useParams()
    const foundWeapon = weapons.find(weapon => weapon.uuid === weaponId) 

    return(
        <div>
            <h1>{foundWeapon.displayName}</h1>
        </div>
    )

}

export default WeaponDetails