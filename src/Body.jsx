import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Login from './Login'
import StudentReg from './StudentReg'
import RecuiterReg from './RecuiterReg'
import RecruiterDashboard from './RecruiterDashboard'

const Body = () => {
  return (
    <>
        
            <NavBar />
            
            <Outlet />   // for child routes
            {/* <Login /> */}
            {/* <StudentReg /> */}
            {/* <RecuiterReg /> */}
            {/* <RecruiterDashboard /> */}


            
    </>
  )
}

export default Body