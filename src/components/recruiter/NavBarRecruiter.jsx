import React from 'react'

const NavBarRecruiter = ({ user }) => {
  return (
    <nav className="bg-indigo-800 shadow-lg px-8 py-4 flex items-center justify-between fixed w-full z-50">
      <div className="text-white font-bold text-xl">Recruiter NavBar - Welcome, {user?.name}</div>
      {/* Add recruiter-specific navigation items here */}
    </nav>
  )
}

export default NavBarRecruiter
