import React, { useState } from 'react';
import Header from '../Components/Header';
import Images from '../Images/Luxurycar.webp';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:3000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Success:', result);
      alert('Signup successful');
      // Handle success (e.g., redirect to login page)
    } catch (error) {
      console.error('Error:', error);
      alert('Signup failed');
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center pt-[5%]">
        <div className="border border-gray-200  max-w-4xl w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8">
            <div className="text-center mb-8">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Sign Up</h1>
              <p className="text-sm">Create a new account</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm"
                  placeholder="******"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium" htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm"
                  placeholder="******"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#007bff] hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign Up
              </button>
            </form>
            <div className="mt-6 flex items-center justify-center">
              <div className="w-full border-t border-gray-300"></div>
              <span className="px-4 text-sm bg-white">or</span>
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-[15px] font-medium flex items-center justify-center gap-2 hover:underline">
                <img src="https://auth.openai.com/assets/google-logo-NePEveMl.svg" className='h-5' alt="Google" />Google
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-[15px] font-medium flex items-center justify-center gap-2 hover:underline">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvzC_QRv6moAhgNb5C6e3yicKgFND1g2RwA&s" className='h-5' alt="Facebook" />Facebook
              </button>
            </div>
            <p className="mt-6 text-center text-[15px]">
              Already have an account? <Link to='/login'><a href="#" className="text-[#007bff] hover:underline">Login</a></Link>
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white p-4 flex items-center justify-center">
            <div className="text-center">
              <img className="object-cover mx-auto h-full w-full" src={Images} alt="Toyota C-HR" />
            </div>
          </div>
        </div>
      </div><br/>
    </>
  );
};

export default Signup;
