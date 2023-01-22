import { useState } from "react"
import NewWorkoutForm from "./NewWorkoutForm"


function LogWorkout(props){



    return(
        <div className="log-workouts-container">
            <h1>Log Workout</h1>
            
                <form className="new-workout-form">
                    <h4>Add a Name For Easier Searching Later</h4>
                    <label htmlFor="name">Optional</label>
                    <input 
                        placeholder="Ex. Chest Day"
                        id="name"
                    />
                    <h4>Choose Date to Start Logging Your Workout</h4>
                    <label htmlFor="date-input">Date: </label>
                    <input 
                        type='date'
                        id="date-input"
                        name= "day"
                        />
                    <button>Start</button>
                </form>
            
        </div>
    )
}

export default LogWorkout