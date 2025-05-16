import React, { useState } from 'react'

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs')

  const jobs = [
    { title: 'Software Engineer at ABC Corp', deadline: 'Apply by 30th June' },
    { title: 'Internship at XYZ Ltd', deadline: 'Apply by 15th July' },
    { title: 'Data Analyst at DataWorks', deadline: 'Apply by 10th July' },
  ]

  const internships = [
    { title: 'Frontend Developer Intern at WebStart' },
    { title: 'Backend Developer Intern at CloudTech' },
    { title: 'Marketing Intern at MarketGuru' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white p-8 font-sans">
      <h1 className="text-5xl font-extrabold mb-8 text-center tracking-wide drop-shadow-lg">Student Dashboard</h1>

      <section className="mb-8 bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 border-b border-blue-400 pb-2">Placement Preparation - PYQs</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500 transition-colors">GeeksforGeeks</a></li>
          <li><a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500 transition-colors">HackerRank</a></li>
          <li><a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500 transition-colors">LeetCode</a></li>
          <li><a href="https://www.codingninjas.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500 transition-colors">Coding Ninjas</a></li>
          <li><a href="https://www.codechef.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500 transition-colors">CodeChef</a></li>
        </ul>
      </section>

      <section className="mb-8 bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 border-b border-blue-400 pb-2">Resume Builder</h2>
        <p className="mb-4 text-lg">Create and update your resume to apply for jobs and internships.</p>
        <a href="https://www.mycvcreator.com/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md">Open Resume Builder</a>
      </section>

      <section className="mb-8 bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold focus:outline-none ${
              activeTab === 'jobs' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setActiveTab('jobs')}
          >
            Job Notifications
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold focus:outline-none ${
              activeTab === 'internships' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setActiveTab('internships')}
          >
            Internship Opportunities
          </button>
        </div>

        {activeTab === 'jobs' && (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, idx) => (
              <li key={idx} className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 rounded-xl shadow-xl flex flex-col justify-between hover:scale-105 transform transition-transform duration-300">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{job.title}</h3>
                  <p className="text-sm text-gray-300 mb-5">{job.deadline}</p>
                </div>
                <button className="self-start px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md">
                  Apply
                </button>
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'internships' && (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internships.map((internship, idx) => (
              <li key={idx} className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 rounded-xl shadow-xl flex flex-col justify-between hover:scale-105 transform transition-transform duration-300">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{internship.title}</h3>
                </div>
                <button className="self-start px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md">
                  Apply
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 border-b border-blue-400 pb-2">Quiz Section - Interview Preparation</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><a href="#" className="text-blue-300 hover:text-blue-500 transition-colors">Aptitude</a></li>
          <li><a href="#" className="text-blue-300 hover:text-blue-500 transition-colors">Technical Questions</a></li>
          <li><a href="#" className="text-blue-300 hover:text-blue-500 transition-colors">HR Interview</a></li>
          <li><a href="#" className="text-blue-300 hover:text-blue-500 transition-colors">Group Discussion</a></li>
        </ul>
      </section>
    </div>
  )
}

export default StudentDashboard
