import React from 'react'

const NavBarLoggedIn = ({ user }) => {
  return (
    <nav className="bg-gray-800 shadow-lg px-8 py-4 flex items-center justify-between fixed w-full z-50">
      <div className="text-white font-bold text-xl">Welcome, {user?.name}</div>
      {/* Add logged-in user navigation items here */}
    </nav>
  )
}

export default NavBarLoggedIn
