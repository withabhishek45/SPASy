import React, { useContext } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import NavBarLoggedIn from './NavBarLoggedIn'
import NavBarStudent from './student/NavBarStudent'
import NavBarRecruiter from './recruiter/NavBarRecruiter'
import Footer from './Footer'
import { AuthContext } from './context/AuthContext'

const Layout = () => {
  const { user } = useContext(AuthContext)
  const location = useLocation()

  console.log('Layout user:', user)
  console.log('Current path:', location.pathname)

  const isInitialPage = location.pathname === '/' || location.pathname === '/contact'

  return (
    <div className="flex flex-col min-h-screen">
      {isInitialPage ? (
        <>
          {console.log('Rendering NavBar for initial page')}
          <NavBar />
        </>
      ) : user ? (
        user.role === 'student' ? (
          <>
            {console.log('Rendering NavBarStudent')}
            <NavBarStudent user={user} />
          </>
        ) : user.role === 'recruiter' ? (
          <>
            {console.log('Rendering NavBarRecruiter')}
            <NavBarRecruiter user={user} />
          </>
        ) : (
          <>
            {console.log('Rendering NavBarLoggedIn')}
            <NavBarLoggedIn user={user} />
          </>
        )
      ) : (
        <>
          {console.log('Rendering NavBar for non-logged in non-initial page')}
          <NavBar />
        </>
      )}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
