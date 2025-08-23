import React from 'react'
import axios from 'axios'

// Simple email and password validation functions
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)
const isValidPassword = (password) => password.length >= 8 // You can improve this

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')
  const [successMessage, setSuccessMessage] = React.useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    // Clear previous messages
    setErrorMessage('')
    setSuccessMessage('')

    // Client-side validation
    if (!email) {
      setErrorMessage('Email is required')
      return
    }
    if (!isValidEmail(email)) {
      setErrorMessage('Invalid email format')
      return
    }
    if (!password) {
      setErrorMessage('Password is required')
      return
    }
    if (!isValidPassword(password)) {
      setErrorMessage('Password must be at least 8 characters long')
      return
    }

    try {
      // Call backend only if validation passes
      const response = await axios.post("http://localhost:3000/api/students/login", {
        email,
        password
      })

      if (response.status === 200) {
        setSuccessMessage('Login successful! Redirecting...')
        setTimeout(() => {
          window.location.href = "/student/dashboard"
        }, 1000)
      } else {
        setErrorMessage('Login failed. Please check your credentials.')
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message)
      } else {
        setErrorMessage('Login failed. Please check your credentials.')
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Login</h2>

        {errorMessage && (
          <div className="mb-4 text-red-500 font-semibold">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="mb-4 text-green-500 font-semibold">{successMessage}</div>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
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

export default Login
