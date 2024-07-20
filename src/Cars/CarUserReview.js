import React, { useState } from 'react';
import { IoMdStar } from "react-icons/io";

const Reviews = () => {
  // Defining car and review content
  const content1 = 'Skoda Slavia';
  const content2 = 'Skoda Kushaq';
  const content3 = 'Skoda Superb';
  const content4 = 'Skoda Kodiaq';
  const content5 = 'Skoda Rapid';
  const content6 = 'Skoda Fabia';
  const content7 = 'Skoda Laura';
  const content8 = 'Skoda Kamiq';
  const content9 = 'Skoda Citigo';
  const content10 = 'Skoda Enyaq';
  const content11 = 'Skoda New Kodiaq';
  const content12 = 'Skoda Octavia Facelift';
  const content13 = 'Skoda Sub-four metre SUV';
  const content14 = 'Skoda Slavia Facelift';
  const content15 = 'Skoda Kodiaq Sportline';
  const content16 = 'Skoda Superb Sportline';

  // Placeholder cars and reviews
  const car1 = 'Skoda Slavia';
  const car2 = 'Skoda Kushaq';
  const car3 = 'Skoda Superb';
  const review1 = 'I love the Skoda Slavia. It has great performance and comfort!';
  const review2 = 'The Skoda Kushaq is a reliable and fuel-efficient car. Highly recommend!';
  const review3 = 'The Skoda Superb is an iconic car with powerful performance. I enjoy driving it!';

  const cars = [content1, content2, content3, content4, content5, content6, content7,
    content8, content9, content10, content11, content12, content13, content14,
    content15, content16];

  const [newReview, setNewReview] = useState({ name: '', car: '', review: '', rating: 0 });
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'John Doe',
      car: car1,
      review: review1,
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      car: car2,
      review: review2,
      rating: 4,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      car: car3,
      review: review3,
      rating: 5,
    },
  ]);

  const handleChange = e => {
    const { name, value } = e.target;
    setNewReview(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRatingChange = rating => {
    setNewReview(prevState => ({
      ...prevState,
      rating
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newReview.name || !newReview.car || !newReview.review || newReview.rating === 0) return;
    const newReviewWithId = { ...newReview, id: Date.now() };
    setReviews(prevState => [...prevState, newReviewWithId]);
    setNewReview({ name: '', car: '', review: '', rating: 0 });
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Car Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">{review.name}</h3>
                  <p className="text-gray-500">{review.car}</p>
                </div>
                <div className="flex text-yellow-500">
                  {[...Array(review.rating)].map((_, index) => (
                    <IoMdStar key={index} className="h-5 w-5" fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{review.review}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Leave a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={newReview.name}
                onChange={handleChange}
                className="px-4 py-2 w-full md:w-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="car"
                value={newReview.car}
                onChange={handleChange}
                className="px-4 py-2 w-full md:w-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Car</option>
                {cars.map((car, index) => (
                  <option key={index} value={car}>{car}</option>
                ))}
              </select>
              <textarea
            id="feedback"
            name="feedback"
            value={newReview.review}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            required
          />
              <div className="flex items-center">
                <p className="text-gray-600 mr-2">Rating:</p>
                {[1, 2, 3, 4, 5].map(rating => (
                  <IoMdStar
                    key={rating}
                    onClick={() => handleRatingChange(rating)}
                    className={`cursor-pointer h-6 w-6 ${rating <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
