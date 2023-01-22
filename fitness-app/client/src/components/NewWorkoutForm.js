
function NewWorkoutForm(props){

    const {handleChange, exerciseInputs} = props

    return(
        
        <form className="exercise-inputs">
            <label htmlFor="exercise">Exercise: </label>
            <input 
                id="exercise"
                type='text'
                name="name"
                onChange={handleChange}
                value= {exerciseInputs.name}
                />

            <h1>Weight Lifting Logs</h1>
            <label htmlFor="weightLifted">Weight: </label>
            <input 
                id="weightLifted"
                type='text'
                name="weightLifted"
                onChange={handleChange}
                value={exerciseInputs.weightLifted}
                />

            <label htmlFor="reps">Reps: </label>
            <input 
                id="reps"
                type='text'
                name="reps"
                onChange={handleChange}
                value={exerciseInputs.reps}
                />
            
            <label htmlFor="sets">Sets: </label>
            <input 
                id="sets"
                type='text'
                name="sets"
                onChange={handleChange}
                value={exerciseInputs.sets}
                />
            
            <h1>Cardio Logs</h1>

            <label htmlFor="distance">Distance: </label>
            <input 
                id="distance"
                type='text'
                name="distance"
                onChange={handleChange}
                value={exerciseInputs.distance}
            />

            <label htmlFor="Time">Time: </label>
            <input 
                id="Time"
                type='text'
                name="time"
                onChange={handleChange}
                value={exerciseInputs.time}
            />

        </form>
    )
}

export default NewWorkoutForm
