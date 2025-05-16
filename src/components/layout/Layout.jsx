import React, { useContext } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './components/common/NavBar'
import NavBarLoggedIn from './components/common/NavBarLoggedIn'
import NavBarStudent from './components/student/NavBarStudent'
import NavBarRecruiter from '../recruiter/NavBarRecruiter'
import Footer from '../common/Footer'
import { AuthContext } from '../../context/AuthContext'

const Layout = () => {
  const { user } = useContext(AuthContext)
  const location = useLocation()

  const isInitialPage = location.pathname === '/' || location.pathname === '/contact'

  return (
    <div className="flex flex-col min-h-screen">
      {isInitialPage ? (
        <NavBar />
      ) : user ? (
        user.role === 'student' ? (
          <NavBarStudent user={user} />
        ) : user.role === 'recruiter' ? (
          <NavBarRecruiter user={user} />
        ) : (
          <NavBarLoggedIn user={user} />
        )
      ) : (
        <NavBar />
      )}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
