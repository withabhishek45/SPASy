import React, { useState } from 'react'

const JobPost = () => {
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [requirements, setRequirements] = useState('')
  const [location, setLocation] = useState('')
  const [salary, setSalary] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement job post submission logic, e.g., API call
    alert('Job posted successfully!')
    // Clear form
    setJobTitle('')
    setJobDescription('')
    setRequirements('')
    setLocation('')
    setSalary('')
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded shadow-md w-full max-w-lg text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Post a New Job</h2>

        <div className="mb-4">
          <label htmlFor="jobTitle" className="block mb-2 font-semibold">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jobDescription" className="block mb-2 font-semibold">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="requirements" className="block mb-2 font-semibold">
            Requirements
          </label>
          <textarea
            id="requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block mb-2 font-semibold">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="salary" className="block mb-2 font-semibold">
            Salary
          </label>
          <input
            type="text"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 py-3 rounded font-semibold transition-colors"
        >
          Post Job
        </button>
      </form>
    </div>
  )
}

export default JobPost
