import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

const ProfileUpdate = () => {
  const { user, login } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    companyName: '',
    position: '',
  })

  const { role } = useParams()

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        password: '',
        companyName: user.companyName || '',
        position: user.position || '',
      })
    }
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, simulate update by updating context user info
    const updatedUser = { ...user, ...formData }
    login(updatedUser)
    alert('Profile updated successfully!')
  }

  if (!user || user.role !== role) {
    return <p className="p-4 text-red-500">Unauthorized access</p>
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded shadow-md text-white">
      <h2 className="text-2xl font-bold mb-6">Update {role.charAt(0).toUpperCase() + role.slice(1)} Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        {role === 'recruiter' && (
          <>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="position">Position</label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </>
        )}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold transition-colors"
        >
          Update Profile
        </button>
      </form>
    </div>
  )
}

export default ProfileUpdate
