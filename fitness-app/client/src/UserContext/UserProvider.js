import axios from 'axios'
import { createContext, useState } from 'react'

export const userContext = createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){

    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "",
        workouts: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

    const [baseExercises, setBaseExercises] = useState([])

    const [userExercises, setUserExercises] = useState([])

    function handleAuthErr(errMsg){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ''
        })
        )
    }

    function signup(cred){
        axios.post('/auth/signup', cred)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user, 
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(cred){
        axios.post('/auth/login', cred)
            .then(res => {
                console.log(res)
                const {user, token} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user, 
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: '',
            workouts: []
        })
    }

    function getBaseExercises(){
        userAxios.get('/profile/allExercises')
            .then(res => setBaseExercises(res.data))
            .catch(err => console.dir(err.response.data.errMsg))
    }

    function filterExercises(e){
        if(e.target.value === "All"){
            getBaseExercises()
        } else{
            userAxios.get(`/profile/allExercises/muscleWorked?muscleWorked=${e.target.value}`)
                .then(res => setBaseExercises(res.data))
                .catch(err => console.dir(err.response.data.errMsg))
        }
    }

    function getWorkouts(){
        userAxios.get("/profile/workouts")
            .then(res => setUserState(prevUserState => ({
                ...prevUserState,
                workouts: [...res.data]
            })))
            .catch(err => console.dir(err.response.data.errMsg))
    }

    function getUserExercises(workoutId){
        userAxios.get(`/profile/exercises/${workoutId}`)
            .then(res => setUserExercises(res.data))
            .catch(err => console.dir(err.response.data.errMsg))
    }

    return(
        <userContext.Provider 
            value={{
                ...userState,
                signup,
                login,
                logout,
                resetAuthErr,
                getBaseExercises,
                baseExercises,
                filterExercises,
                getWorkouts,
                getUserExercises,
                userExercises
            }}
        >
            {props.children}
        </userContext.Provider>
    )
}