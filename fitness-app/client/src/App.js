import Login from './components/Login';
import Navbar from './components/Navbar';
import './App.css';
import { useContext, useEffect } from 'react';
import { userContext } from './UserContext/UserProvider';
import { Route, Routes, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import WorkoutLog from './components/WorkoutLog';
import LogWorkout from './components/LogWorkout';
import AllExercises from './components/AllExercises';
import WorkoutDetails from './components/WorkoutDetails';

function App() {

  const {
    token, 
    getBaseExercises,
    baseExercises,
    filterExercises,
    getWorkouts,
    workouts,
    logout,
    getUserExercises,
    userExercises
  } = useContext(userContext)

  useEffect(() => {
    getBaseExercises()
  }, [])

  return (
    <div className="App">

      {token && <Navbar logout={logout} getWorkouts= {getWorkouts} />}
      
      <Routes>

        <Route path='/' element= { token ? <Navigate to='/home'/> : <Login /> } />


        <Route path='/home' element={
          <ProtectedRoute token={token}>
            <Home getBaseExercises={getBaseExercises} getWorkouts= {getWorkouts}/>
          </ProtectedRoute>} 
        />

        <Route path='/log' element={
          <ProtectedRoute token={token}>
            <LogWorkout baseExercises={baseExercises}/>
          </ProtectedRoute>}
        />

        <Route path='/pastworkouts' element={
          <ProtectedRoute token={token}>
            <WorkoutLog 
              workouts={workouts}
            />
          </ProtectedRoute>}
        />

        <Route path='/allexercises' element={
          <ProtectedRoute token={token}>
            <AllExercises 
            baseExercises={baseExercises} 
            filterExercises = {filterExercises}
            
            />
          </ProtectedRoute>}
        />

        <Route path='/pastworkouts/:workoutId' element={
          <ProtectedRoute token={token}>
            <WorkoutDetails getUserExercises={getUserExercises} userExercises = {userExercises}/>
          </ProtectedRoute>}
        />


      </Routes>
    </div>
  );
}

export default App;
