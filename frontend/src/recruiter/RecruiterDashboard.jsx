import React from 'react'

const RecruiterDashboard = () => {
  const handleEditProfile = () => {
    window.location.href = '/recruiter/profile'
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-900 via-teal-900 to-cyan-900 text-white p-10 space-y-12 font-sans">
      <h1 className="text-5xl font-extrabold mb-10 text-center tracking-wide drop-shadow-lg">Recruiter Dashboard</h1>

      <section className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 border-b border-green-400 pb-2">Job Postings Management</h2>
        <button className="mb-4 px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md">
          Add New Job Posting
        </button>
        <ul className="space-y-3 text-lg">
          <li className="bg-green-900 bg-opacity-50 p-4 rounded-lg shadow-inner">Frontend Developer - Open</li>
          <li className="bg-green-900 bg-opacity-50 p-4 rounded-lg shadow-inner">Backend Developer - Closed</li>
          <li className="bg-green-900 bg-opacity-50 p-4 rounded-lg shadow-inner">Data Scientist - Open</li>
        </ul>
      </section>

      <section className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 border-b border-green-400 pb-2">Applicant Tracking</h2>
        <ul className="space-y-3 text-lg">
          <li className="bg-green-900 bg-opacity-50 p-4 rounded-lg shadow-inner">John Doe - Frontend Developer - Applied</li>
          <li className="bg-green-900 bg-opacity-50 p-4 rounded-lg shadow-inner">Jane Smith - Data Scientist - Interview Scheduled</li>
          <li className="bg-green-900 bg-opacity-50 p-4 rounded-lg shadow-inner">Alice Johnson - Backend Developer - Rejected</li>
        </ul>
      </section>

      <section className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 border-b border-green-400 pb-2">Profile Management</h2>
        <p className="mb-4 text-lg">Update your company profile and contact information.</p>
        <button
          onClick={handleEditProfile}
          className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md"
        >
          Edit Profile
        </button>
      </section>

      <section className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 border-b border-green-400 pb-2">Notifications</h2>
        <ul className="space-y-3 text-lg">
          <li className="bg-green-900 bg-opacity-50 p-4 rounded-lg shadow-inner">New application received for Frontend Developer</li>
          <li className="bg-green-900 bg-opacity-50 p-4 rounded-lg shadow-inner">Interview scheduled with Jane Smith</li>
          <li className="bg-green-900 bg-opacity-50 p-4 rounded-lg shadow-inner">Profile updated successfully</li>
        </ul>
      </section>
    </div>
  )
}

export default RecruiterDashboard
