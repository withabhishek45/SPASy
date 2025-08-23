import React, { useState } from 'react';

const JobApplications = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Corp',
      location: 'Remote',
      type: 'Full-time',
      status: 'Active',
      applications: 15
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Tech Corp',
      location: 'New York',
      type: 'Full-time',
      status: 'Active',
      applications: 8
    }
  ]);

  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = {
      id: jobs.length + 1,
      ...newJob,
      status: 'Active',
      applications: 0
    };
    setJobs(prev => [...prev, job]);
    setNewJob({
      title: '',
      company: '',
      location: '',
      type: 'Full-time',
      description: ''
    });
  };

  const handleStatusChange = (jobId, newStatus) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, status: newStatus } : job
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Job Applications</h1>

      {/* Add New Job Form */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Post New Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={newJob.title}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={newJob.company}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newJob.location}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
            <select
              name="type"
              value={newJob.type}
              onChange={handleInputChange}
              className="select select-bordered w-full"
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <textarea
            name="description"
            placeholder="Job Description"
            value={newJob.description}
            onChange={handleInputChange}
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Post Job
          </button>
        </form>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Active Job Listings</h2>
        {jobs.map(job => (
          <div key={job.id} className="bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-400">{job.company} • {job.location}</p>
                <p className="text-gray-400">{job.type}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{job.applications}</p>
                  <p className="text-sm text-gray-400">Applications</p>
                </div>
                <select
                  value={job.status}
                  onChange={(e) => handleStatusChange(job.id, e.target.value)}
                  className="select select-bordered"
                >
                  <option value="Active">Active</option>
                  <option value="Paused">Paused</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="btn btn-sm btn-primary">View Applications</button>
              <button className="btn btn-sm btn-ghost">Edit</button>
              <button className="btn btn-sm btn-ghost text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobApplications; 