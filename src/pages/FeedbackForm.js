import React, { useState } from 'react';
import { RiStarSFill } from "react-icons/ri";

const FeedbackForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      feedback: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here (e.g., send data to backend, etc.)
      console.log(formData);
      // Reset form fields after submission
      setFormData({ name: '', email: '', feedback: '' });
    }; 

    return (
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 h-[110%] flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-lg w-[40%] h-[500px] p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <button>
                        </button>
                        <button>
                        </button>
                    </div>
                    <button onClick={onClose} className="text-black hover:text-gray-400">
                        ✕
                    </button>
                </div>
                <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="feedback" className="block text-sm font-bold text-gray-700 mb-2">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
            </div>
        </div>
    );
};

export default FeedbackForm;