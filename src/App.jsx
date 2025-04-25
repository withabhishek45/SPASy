import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Background from './Background'
import Login from './Login'
import RecruiterReg from './recruiter/RecruiterReg'
import StudentReg from './student/StudentReg'
import RecruiterDashboard from './recruiter/RecruiterDashboard'
import StudentDashboard from './student/StudentDashboardNew'
import StudentLogin from './student/StudentLogin'
import RecruiterLogin from './recruiter/RecruiterLogin'
import Contact from './Contact'
import Home from './Home'
import ProfileUpdate from './ProfileUpdate'
import StudentProfileUpdate from './student/StudentProfileUpdate'
import RecruiterProfileUpdate from './recruiter/RecruiterProfileUpdate'
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/student" element={<StudentLogin />} />
            <Route path="/login/recruiter" element={<RecruiterLogin />} />
            <Route path="/registerrec" element={<RecruiterReg />} />
            <Route path="/student" element={<StudentReg />} />
            <Route
              path="/student/dashboard"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/recruiter"
              element={
                <ProtectedRoute allowedRoles={['recruiter']}>
                  <RecruiterDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/recruiter/dashboard"
              element={
                <ProtectedRoute allowedRoles={['recruiter']}>
                  <RecruiterDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/student/profile"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentProfileUpdate />
                </ProtectedRoute>
              }
            />
            <Route
              path="/recruiter/profile"
              element={
                <ProtectedRoute allowedRoles={['recruiter']}>
                  <RecruiterProfileUpdate />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
