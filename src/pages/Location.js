// import React, { useState } from 'react';
// import { CiLocationOn } from "react-icons/ci";

// const cities = ["Coimbatore", "Tirupur", "Salem", "Chennai", "Delhi",
//     "Mumbai", "Banglore", "Goa", "Punjab", "Pondicherry"];

// function Location() {
//     const [showItems, setShowItems] = useState(false);
//     const [selectedCity, setSelectedCity] = useState("");

//     const handleInputClick = () => {
//         setShowItems(true);
//     };

//     const handleCitySelect = (city) => {
//         setSelectedCity(city);
//         setShowItems(false);
//     };

//     const handleBlur = () => {
//         setShowItems(false);
//     };

//     return (
//         <div className="relative">
//             <div className="flex items-center cursor-pointer" onClick={handleInputClick}
//                 onBlur={handleBlur} tabIndex={0}>

//                 <CiLocationOn className='text-black text-2xl hover:text-gray-500' />
//                 <label className='text-black text-sm ml-2 cursor-pointer hover:text-gray-500'>{selectedCity ||
//                     'Select your city'}</label>
//             </div>

//             {showItems && (

//                 <div className="absolute left-0 mt-1 w-[200%] max-h-60 bg-white border shadow overflow-y-
// auto">

//                     {cities.map((city, index) => (
//                         <div
//                             key={index}
//                             className="p-2 cursor-pointer hover:bg-gray-100"
//                             onClick={() => handleCitySelect(city)}
//                         >
//                             {city}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Location;

import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";

const cities = ["Coimbatore", "Tirupur", "Salem", "Chennai", "Delhi",
    "Mumbai", "Banglore", "Goa", "Punjab", "Pondicherry"];

function Location() {
    const [showItems, setShowItems] = useState(false);
    const [selectedCity, setSelectedCity] = useState("");

    const handleInputClick = () => {
        setShowItems(true);
    };

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        setShowItems(false);
    };

    const handleBlur = () => {
        setShowItems(false);
    };

    return (
        <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={handleInputClick}
                onBlur={handleBlur} tabIndex={0}>
                <CiLocationOn className='text-black text-2xl hover:text-gray-500' />
                <label className='text-black text-sm ml-2 cursor-pointer hover:text-gray-500'>{selectedCity ||
                    'Select your city'}</label>
            </div>

            {showItems && (
                <div className="absolute left-0 mt-1 w-[200%] max-h-60 bg-white border shadow overflow-y-auto">
                    {cities.map((city, index) => (
                        <div
                            key={index}
                            className="p-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleCitySelect(city)}
                        >
                            {city}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Location;