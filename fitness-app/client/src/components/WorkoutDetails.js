import { useEffect } from "react"
import { useParams } from "react-router-dom"

function WorkoutDetails(props){

    const {getUserExercises, userExercises} = props
    const {workoutId} = useParams()

    const userExerciseList = userExercises.map(exercise => (
        <div className="detailed-exercise">
            <h1>{exercise.name}</h1>

            {exercise.weightLifted && 
            <p>Weight: {exercise.weightLifted}</p>}

            {exercise.reps && 
            <p>Reps: {exercise.reps}</p>}

            {exercise.sets && 
            <p>Sets: {exercise.sets}</p>}

            {exercise.distance && 
            <p>Distance: {exercise.distance}</p>}

            {exercise.time && 
            <p>Time: {exercise.time}</p>}
        </div>
    ))

    useEffect(() => {
        getUserExercises(workoutId)
    }, [])

    return(
        <div className="workout-details-container">
            <h1>Workout Details</h1>
            {userExerciseList}
        </div>
    )
}

export default WorkoutDetails