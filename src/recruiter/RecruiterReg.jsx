import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RecruiterReg = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    password: '',
    phone: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }
    if (!/.+@.+\..+/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMessage('Company Name is required.');
      return;
    }
    if (!formData.contactPerson.trim()) {
      setErrorMessage('Contact Person is required.');
      return;
    }
    if (formData.phone && isNaN(Number(formData.phone))) {
      setErrorMessage('Phone number must be numeric.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        phone: formData.phone ? Number(formData.phone) : undefined,
      };

      console.log('Sending to backend:', payload);

      const response = await axios.post('http://localhost:3000/recruiter/register', payload);

      console.log('Backend response:', response.data);

      if (response.data.success) {
        alert('Registration successful! ');
        setTimeout(() => {
          
        }, 300); // slight delay for alert to complete
      } else {
        setErrorMessage(response.data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response?.status === 409) {
        setErrorMessage('Email already registered.');
      } else if (error.response?.data?.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Recruiter Registration</h2>

        {errorMessage && <div className="mb-4 text-red-500 font-semibold">{errorMessage}</div>}

        <div className="mb-4">
          <label htmlFor="companyName" className="block mb-2 font-semibold">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactPerson" className="block mb-2 font-semibold">Contact Person</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 font-semibold">Phone (optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4 relative">
          <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-9 text-sm text-blue-400"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RecruiterReg;
