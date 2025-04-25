import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Background from './Background'
import Login from './Login'
import RecuiterReg from './RecuiterReg'
import StudentReg from './StudentReg'
import RecruiterDashboard from './RecruiterDashboard'
import StudentLogin from './StudentLogin'
import RecuiterLogin from './RecuiterLogin'
import Contact from './Contact'
import Home from './Home'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/student" element={<StudentLogin />} />
            <Route path="/login/recruiter" element={<RecuiterLogin />} />
            <Route path="/registerrec" element={<RecuiterReg />} />
            <Route path="/student" element={<StudentReg />} />
            <Route path="/recruiter" element={<RecruiterDashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
