import React, { useState } from 'react';
import { RiStarSFill } from "react-icons/ri";

const FilterModal = ({ isOpen, onClose }) => {
    const [brand, setBrand] = useState();
    const [filters, setFilters] = useState({
        budget: '',
        bodyType: '',
        transmissionType: '',
        fuelType: '',
        seatingCapacity: '',
        mileage: '',ratings: '',
        airbags: '',
        engineCapacity: '',
        powerTorque: '',
        color: ''
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const handleApplyChanges = () => {
        // Apply the filter changes
        console.log('Filters applied:', filters);
        onClose();
    };

    return (
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 h-[110%] flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-lg w-[40%] h-[500px] p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <button 
                            onClick={() => setBrand('Skoda')}
                            className={`px-4 py-2 rounded ${brand === 'Skoda' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Skoda
                        </button>
                        <button 
                            onClick={() => setBrand('All Makes')}
                            className={`ml-2 px-4 py-2 rounded ${brand === 'All Makes' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            All Makes
                        </button>
                    </div>
                    <button onClick={onClose} className="text-black hover:text-gray-400">
                        ✕
                    </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Budget</label>
                        <input 
                            type="range" 
                            name="budget" 
                            min="0" 
                            max="100" 
                            value={filters.budget} 
                            onChange={handleFilterChange} 
                            className="w-full mt-1"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>$0</span>
                            <span>${filters.budget}</span>
                            <span>$100</span>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700">Body Type</label>
                        <select name="bodyType" value={filters.bodyType} onChange={handleFilterChange} className="w-full mt-1 p-2 border rounded">
                            <option value="">Select Body Type</option>
                            <option value="SUV">SUV</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Coupe">Coupe</option>
                            <option value="Convertible">Convertible</option>
                            <option value="Minivan">Minivan</option>
                            <option value="Truck">Truck</option>
                            <option value="Wagon">Wagon</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Transmission Type</label>
                        <select name="transmissionType" value={filters.transmissionType} onChange={handleFilterChange} className="w-full mt-1 p-2 border rounded">
                            <option value="">Select Transmission Type</option>
                            <option value="Automatic">Automatic</option>
                            <option value="Manual">Manual</option>
                            <option value="CVT">CVT</option>
                            <option value="Semi-Automatic">Semi-Automatic</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Fuel Type</label>
                        <select name="fuelType" value={filters.fuelType} onChange={handleFilterChange} className="w-full mt-1 p-2 border rounded">
                            <option value="">Select Fuel Type</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electric">Electric</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Seating Capacity</label>
                        <select name="seatingCapacity" value={filters.seatingCapacity} onChange={handleFilterChange} className="w-full mt-1 p-2 border rounded">
                            <option value="">Select Seating Capacity</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="7">7</option>
                            <option value="8+">8+</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Mileage</label>
                        <select name="mileage" value={filters.mileage} onChange={handleFilterChange} className="w-full mt-1 p-2 border rounded">
                            <option value="">Select Mileage</option>
                            <option value="0-10">0-10 MPG</option>
                            <option value="10-20">10-20 MPG</option>
                            <option value="20-30">20-30 MPG</option>
                            <option value="30-40">30-40 MPG</option>
                            <option value="40+">40+ MPG</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Ratings</label>
                        <div className="relative">
                            <select
                                name="ratings"
                                value={filters.ratings}
                                onChange={handleFilterChange}
                                className="w-full mt-1 p-2 border rounded appearance-none"
                            >
                                <option value="">Select Ratings</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <div className="absolute inset-y-0 left-4 flex items-center px-2 pointer-events-none">
                                {[...Array(parseInt(filters.ratings || 0))].map((_, index) => (
                                    <RiStarSFill key={index} className="text-yellow-500" />
                                ))}
                            </div>
                        </div>
                        </div>
                    <div>
                        <label className="block text-gray-700">Airbags</label>
                        <select name="airbags" value={filters.airbags} onChange={handleFilterChange} className="w-full mt-1 p-2 border rounded">
                            <option value="">Select Airbags</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8+</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Engine Capacity</label>
                        <select name="engineCapacity" value={filters.engineCapacity} onChange={handleFilterChange} className="w-full mt-1 p-2 border rounded">
                            <option value="">Select Engine Capacity</option>
                            <option value="1.0L">1.0L</option>
                            <option value="1.5L">1.5L</option>
                            <option value="2.0L">2.0L</option>
                            <option value="2.5L">2.5L</option>
                            <option value="3.0L">3.0L</option>
                            <option value="3.5L">3.5L</option>
                            <option value="4.0L">4.0L+</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Power Torque</label>
                        <select name="powerTorque" value={filters.powerTorque} onChange={handleFilterChange} className="w-full mt-1 p-2 border rounded">
                            <option value="">Select Power Torque</option>
                            <option value="100-150">100-150 HP</option>
                            <option value="150-200">150-200 HP</option>
                            <option value="200-250">200-250 HP</option>
                            <option value="250-300">250-300 HP</option>
                            <option value="300+">300+ HP</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Color</label>
                        <select name="color" value={filters.color} onChange={handleFilterChange} className="w-full mt-1 p-2 border rounded">
                            <option value="">Select Color</option>
                            <option value="Black">Black</option>
                            <option value="White">White</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Silver">Silver</option>
                            <option value="Gray">Gray</option>
                            <option value="Green">Green</option>
                            <option value="Yellow">Yellow</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <button onClick={() => setFilters({
                        budget: '',
                        bodyType: '',
                        transmissionType: '',
                        fuelType: '',
                        seatingCapacity: '',
                        mileage: '',
                        ratings: '',
                        airbags: '',
                        engineCapacity: '',
                        powerTorque: '',
                        color: ''
                    })} className="text-blue-500 hover:text-[white] hover:bg-blue-500 px-4 py-2 rounded hover:text-gray-700">
                        Clear All
                    </button>
                    <button onClick={handleApplyChanges} className="bg-[#353e4e] text-white px-4 py-2 rounded">
                        Apply Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;



// import React, { useState } from 'react';
// import { RiStarSFill } from "react-icons/ri";

// const FilterModal = ({ isOpen, onClose }) => {
//     const [brand, setBrand] = useState();
//     const [filters, setFilters] = useState({
//         budget: '',
//         bodyType: [],
//         transmissionType: [],
//         fuelType: [],
//         seatingCapacity: [],
//         mileage: [],
//         ratings: [],
//         airbags: [],
//         engineCapacity: [],
//         powerTorque: [],
//         color: []
//     });

//     const handleFilterChange = (e) => {
//         const { name, value } = e.target;
//         setFilters({
//             ...filters,
//             [name]: value
//         });
//     };

//     const handleCheckboxChange = (e) => {
//         const { name, value, checked } = e.target;
//         setFilters((prevFilters) => {
//             const updatedFilter = checked
//                 ? [...prevFilters[name], value]
//                 : prevFilters[name].filter((item) => item !== value);
//             return {
//                 ...prevFilters,
//                 [name]: updatedFilter
//             };
//         });
//     };

//     const handleApplyChanges = () => {
//         // Apply the filter changes
//         console.log('Filters applied:', filters);
//         onClose();
//     };

//     const renderCheckboxGroup = (name, options) => (
//         <div>
//             <label className="block text-gray-700">{name}</label>
//             <div className="space-y-1">
//                 {options.map((option) => (
//                     <label key={option} className="inline-flex items-center">
//                         <input
//                             type="checkbox"
//                             name={name}
//                             value={option}
//                             checked={filters[name].includes(option)}
//                             onChange={handleCheckboxChange}
//                             className="mr-2"
//                         />
//                         {option}
//                     </label>
//                 ))}
//             </div>
//         </div>
//     );

//     return (
//         <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 h-[110%] flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
//             <div className="bg-white rounded-lg shadow-lg w-[40%] h-[500px] p-6 overflow-y-auto">
//                 <div className="flex justify-between items-center mb-4">
//                     <div className="flex items-center">
//                         <button 
//                             onClick={() => setBrand('Skoda')}
//                             className={`px-4 py-2 rounded ${brand === 'Skoda' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//                         >
//                             Skoda
//                         </button>
//                         <button 
//                             onClick={() => setBrand('All Makes')}
//                             className={`ml-2 px-4 py-2 rounded ${brand === 'All Makes' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//                         >
//                             All Makes
//                         </button>
//                     </div>
//                     <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//                         ✕
//                     </button>
//                 </div>
//                 <div className="space-y-4">
//                     <div>
//                         <label className="block text-gray-700">Budget</label>
//                         <input 
//                             type="range" 
//                             name="budget" 
//                             min="0" 
//                             max="100" 
//                             value={filters.budget} 
//                             onChange={handleFilterChange} 
//                             className="w-full mt-1"
//                         />
//                         <div className="flex justify-between text-sm text-gray-600">
//                             <span>$0</span>
//                             <span>${filters.budget}</span>
//                             <span>$100</span>
//                         </div>
//                     </div>
//                     {renderCheckboxGroup('bodyType', ['SUV', 'Sedan', 'Hatchback', 'Coupe', 'Convertible', 'Minivan', 'Truck', 'Wagon'])}
//                     {renderCheckboxGroup('transmissionType', ['Automatic', 'Manual', 'CVT', 'Semi-Automatic'])}
//                     {renderCheckboxGroup('fuelType', ['Petrol', 'Diesel', 'Electric', 'Hybrid'])}
//                     {renderCheckboxGroup('seatingCapacity', ['2', '4', '5', '7', '8+'])}
//                     {renderCheckboxGroup('mileage', ['0-10 MPG', '10-20 MPG', '20-30 MPG', '30-40 MPG', '40+ MPG'])}
//                     {renderCheckboxGroup('ratings', ['1', '2', '3', '4', '5'])}
//                     {renderCheckboxGroup('airbags', ['2', '4', '6', '8+'])}
//                     {renderCheckboxGroup('engineCapacity', ['1.0L', '1.5L', '2.0L', '2.5L', '3.0L', '3.5L', '4.0L+'])}
//                     {renderCheckboxGroup('powerTorque', ['100-150 HP', '150-200 HP', '200-250 HP', '250-300 HP', '300+ HP'])}
//                     {renderCheckboxGroup('color', ['Black', 'White', 'Red', 'Blue', 'Silver', 'Gray', 'Green', 'Yellow'])}
//                 </div>
//                 <div className="mt-6 flex justify-between items-center">
//                     <button onClick={() => setFilters({
//                         budget: '',
//                         bodyType: [],
//                         transmissionType: [],
//                         fuelType: [],
//                         seatingCapacity: [],
//                         mileage: [],
//                         ratings: [],
//                         airbags: [],
//                         engineCapacity: [],
//                         powerTorque: [],
//                         color: []
//                     })} className="text-blue-500 hover:text-[white] hover:bg-blue-500 px-4 py-2 rounded hover:text-gray-700">
//                         Clear All
//                     </button>
//                     <button onClick={handleApplyChanges} className="bg-[#353e4e] text-white px-4 py-2 rounded">
//                         Apply Changes
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FilterModal;






