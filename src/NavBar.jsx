import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'

const NavBar = () => {
  const navigate = useNavigate()

  const handleDropdownChange = (e) => {
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

        {/* LOGIN DROPDOWN */}
        <div className="relative group">
          <select
            onChange={handleDropdownChange}
            defaultValue="default"
            className="appearance-none bg-white text-gray-800 px-4 py-2 rounded-md border border-gray-300 shadow-md pr-10 cursor-pointer font-semibold 
              transition duration-300 ease-in-out
              group-hover:bg-yellow-50
              group-hover:border-yellow-400
              group-hover:shadow-xl
              focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <option value="default" disabled hidden>
              Login here
            </option>
            <option value="/login/student">Student</option>
            <option value="/login/recruiter">Recruiter</option>
          </select>
          <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 pointer-events-none group-hover:text-yellow-500 transition" />
        </div>

        {/* REGISTER DROPDOWN */}
        <div className="relative group">
          <select
            onChange={handleDropdownChange}
            defaultValue="default"
            className="appearance-none bg-white text-gray-800 px-4 py-2 rounded-md border border-gray-300 shadow-md pr-10 cursor-pointer font-semibold 
              transition duration-300 ease-in-out
              group-hover:bg-yellow-50
              group-hover:border-yellow-400
              group-hover:shadow-xl
              focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <option value="default" disabled hidden>
              Register Here
            </option>
            <option value="/student">Student</option>
            <option value="/registerrec">Recruiter</option>
          </select>
          <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 pointer-events-none group-hover:text-yellow-500 transition" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
