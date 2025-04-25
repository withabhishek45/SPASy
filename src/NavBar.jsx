import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

  const handleLoginChange = (e) => {
    const value = e.target.value
    if (value && value !== 'default') {
      navigate(value)
    }
  }

  const handleRegisterChange = (e) => {
    const value = e.target.value
    if (value && value !== 'default') {
      navigate(value)
    }
  }

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg px-8 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <button
          className="text-3xl font-extrabold text-white hover:text-yellow-300 transition-colors"
          onClick={() => navigate('/')}
        >
          Smart Placement Assistant System
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <button
          className="text-white px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out transform hover:text-yellow-300 hover:bg-indigo-900 hover:scale-105"
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button
          className="text-white px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out transform hover:text-yellow-300 hover:bg-indigo-900 hover:scale-105"
          onClick={() => navigate('/contact')}
        >
          Contact Us
        </button>
        <select
          onChange={handleLoginChange}
          defaultValue="default"
          className="bg-white text-gray-800 px-4 py-2 rounded-md border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300 font-semibold cursor-pointer transition duration-300 ease-in-out hover:shadow-lg"
        >
          <option value="default" disabled hidden>
            Login
          </option>
          <option value="/login/student" className="hover:bg-yellow-100">Student</option>
          <option value="/login/recruiter" className="hover:bg-yellow-100">Recruiter</option>
        </select>
        <select
          onChange={handleRegisterChange}
          defaultValue="default"
          className="bg-white text-gray-800 px-4 py-2 rounded-md border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300 font-semibold cursor-pointer transition duration-300 ease-in-out hover:shadow-lg"
        >
          <option value="default" disabled hidden>
            Register Here
          </option>
          <option value="/student" className="hover:bg-yellow-100">Student</option>
          <option value="/registerrec" className="hover:bg-yellow-100">Recruiter</option>
        </select>
      </div>
    </nav>
  )
}

export default NavBar
