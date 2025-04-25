import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const NavBarStudent = () => {
  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    alert('Logout successful!')
    navigate('/')
  }

  const handleProfileUpdate = () => {
    navigate('/student/profile')
  }

  // Dummy photo URL for demonstration
  const dummyPhotoUrl = 'https://i.pravatar.cc/40'

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg px-8 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <button
          className="text-3xl font-extrabold text-white hover:text-yellow-300 transition-colors"
          onClick={() => navigate('/student/dashboard')}
        >
          Smart Placement Assistant System - Student
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-white text-lg font-semibold">
          Hello, {user?.name}
        </span>
        <button
          onClick={handleProfileUpdate}
          className="text-white px-4 py-2 rounded-md font-semibold bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
        >
          Update Profile
        </button>
        <img
          src={dummyPhotoUrl}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
          title="User Avatar"
        />
        <button
          className="text-white px-4 py-2 rounded-md font-semibold bg-red-600 hover:bg-red-700 transition-colors shadow-md"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default NavBarStudent
