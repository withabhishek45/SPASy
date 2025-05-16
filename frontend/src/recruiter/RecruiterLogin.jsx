import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const RecruiterLogin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add login validation logic here
    // For now, just set user info and redirect to recruiter dashboard
    const userData = { name: 'Recruiter User', role: 'recruiter' }
    login(userData)
    alert('Login successful!')
    navigate('/recruiter/dashboard')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Recruiter Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6 relative">
          <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-9 text-sm text-blue-400 focus:outline-none"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default RecruiterLogin
