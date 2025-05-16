import React from 'react'

const NavBarStudent = ({ user }) => {
  return (
    <nav className="bg-blue-700 shadow-lg px-8 py-4 flex items-center justify-between fixed w-full z-50">
      <div className="text-white font-bold text-xl">Student NavBar - Welcome, {user?.name}</div>
      {/* Add student-specific navigation items here */}
    </nav>
  )
}

export default NavBarStudent
