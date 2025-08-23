import React, { useState } from 'react';

const CandidateManagement = () => {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      status: 'Under Review',
      appliedDate: '2024-02-15',
      experience: '5 years',
      skills: ['React', 'Node.js', 'Python']
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Product Manager',
      status: 'Interview Scheduled',
      appliedDate: '2024-02-14',
      experience: '7 years',
      skills: ['Product Strategy', 'Agile', 'UX Design']
    }
  ]);

  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleStatusChange = (candidateId, newStatus) => {
    setCandidates(prev => prev.map(candidate => 
      candidate.id === candidateId ? { ...candidate, status: newStatus } : candidate
    ));
  };

  const filteredCandidates = candidates.filter(candidate => {
    if (filter === 'all') return true;
    return candidate.status === filter;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Candidate Management</h1>

      {/* Filters */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <div className="flex gap-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="select select-bordered"
          >
            <option value="all">All Candidates</option>
            <option value="Under Review">Under Review</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Rejected">Rejected</option>
            <option value="Hired">Hired</option>
          </select>
        </div>
      </div>

      {/* Candidates List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Candidate Cards */}
        <div className="space-y-4">
          {filteredCandidates.map(candidate => (
            <div
              key={candidate.id}
              className={`bg-gray-800 p-6 rounded-lg cursor-pointer transition-all ${
                selectedCandidate?.id === candidate.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedCandidate(candidate)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{candidate.name}</h3>
                  <p className="text-gray-400">{candidate.position}</p>
                  <p className="text-sm text-gray-500">Applied: {candidate.appliedDate}</p>
                </div>
                <select
                  value={candidate.status}
                  onChange={(e) => handleStatusChange(candidate.id, e.target.value)}
                  className="select select-bordered select-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <option value="Under Review">Under Review</option>
                  <option value="Interview Scheduled">Interview Scheduled</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Hired">Hired</option>
                </select>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-400">Experience: {candidate.experience}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {candidate.skills.map((skill, index) => (
                    <span key={index} className="badge badge-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Candidate Details */}
        <div className="bg-gray-800 p-6 rounded-lg">
          {selectedCandidate ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Candidate Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  <p>Name: {selectedCandidate.name}</p>
                  <p>Position: {selectedCandidate.position}</p>
                  <p>Experience: {selectedCandidate.experience}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Skills</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedCandidate.skills.map((skill, index) => (
                      <span key={index} className="badge badge-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Application Status</h3>
                  <p>Status: {selectedCandidate.status}</p>
                  <p>Applied Date: {selectedCandidate.appliedDate}</p>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-primary">Schedule Interview</button>
                  <button className="btn btn-ghost">Download Resume</button>
                  <button className="btn btn-ghost text-red-500">Reject</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400">
              Select a candidate to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidateManagement; 