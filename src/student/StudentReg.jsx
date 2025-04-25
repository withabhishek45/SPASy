import React, { useState } from 'react'

const StudentReg = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Registration</h2>
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-2 font-semibold">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
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
        <div className="mb-4 relative">
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
        <div className="mb-4">
          <label htmlFor="gender" className="block mb-2 font-semibold">Gender</label>
          <select
            id="gender"
            name="gender"
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="course" className="block mb-2 font-semibold">Course</label>
          <select
            id="course"
            name="course"
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select course</option>
            <option value="cs">Computer Science</option>
            <option value="mech">Mechanical Engineering</option>
            <option value="ee">Electrical Engineering</option>
            <option value="civil">Civil Engineering</option>
            <option value="ba">Business Administration</option>
            <option value="bca">BCA</option>
            <option value="bfs">BFS</option>
            <option value="mfs">MFS</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="year" className="block mb-2 font-semibold">Year</label>
          <select
            id="year"
            name="year"
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default StudentReg
