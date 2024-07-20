import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";

const CarSearchFilter = ({ cars }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredCars = cars.filter(car => {
      return car.type.toLowerCase().includes(searchTerm) ||
             car.year.toString().includes(searchTerm) ||
             car.model.toLowerCase().includes(searchTerm) ||
             car.price.toString().includes(searchTerm);
    });
    setFilteredCars(filteredCars);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Search & Filter</h2>
      <div className="flex items-center gap-4 mb-4">
        <input type="text" placeholder="Search..." className="rounded-lg border-gray-300 shadow-sm py-2 px-4 focus:outline-none focus:ring focus:ring-blue-200 flex-1" onChange={handleSearch} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => setSearchTerm('')}>
          Clear
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCars.map((car, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <img src={car.image} alt={car.model} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold mb-2">{car.model}</h3>
            <p>Type: {car.type}</p>
            <p>Year: {car.year}</p>
            <p>Price: ${car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSearchFilter;