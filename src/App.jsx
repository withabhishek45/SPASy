import { useState } from 'react'


import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import NavBar from './NavBar'
import Body from './Body'
import Login from './Login'
import RecuiterReg from './RecuiterReg'
import StudentReg from './StudentReg'
import RecruiterDashboard from './RecruiterDashboard'


function App() {
  return(
    <>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>} >
         <Route path="/login" element={<Login/>} /> 
         <Route path="/registerrec" element={<RecuiterReg/>} />
         <Route path="/student" element={<StudentReg/>} /> 
         <Route path="/recruiter" element={<RecruiterDashboard/>} />
      </Route>


    </Routes>
    </BrowserRouter>
    
    </>
  )
  

  
}

export default App
