// // import React, { useState } from 'react';
// // import { IoIosSearch } from 'react-icons/io';
// // import { Link } from 'react-router-dom';

// // function Search() {
// // const [showItems, setShowItems] = useState(false);

// // const handleInputClick = () => {
// // setShowItems(true);
// // };

// // const handleBlur = () => {
// // setShowItems(false);
// // };

// // return (
// // <div className="relative ">
// // <div className='flex items-center'>
// // <input
// // type="text"
// // placeholder="Search.."
// // className="border text-[17px] w-[20%] rounded-sm h-10 pl-[5%] dark:bg-white-700dark:border-gray-600 dark:placeholder-gray-500 dark:text-black"
// // onClick={handleInputClick}
// // onBlur={handleBlur}
// // />

// // <div className="flex items-center absolute right- text-[20px] text-[white] bg-[#353e4e] px-3h-full left-auto cursor-pointer">
// // <IoIosSearch />
// // </div>
// // </div>

// // {showItems && (

// // <div className="absolute left-0 mt-1 w-[135%] max-h-40 bg-white border shadow overflow-y-auto">

// // <div className="p-2">Mahindra Thar</div>
// // <div className="p-2">Mahindra XUV700</div>
// // <div className="p-2"><Link to='/mthar'>Tata Punch</Link></div>
// // <div className="p-2">Tata Nexon</div>
// // <div className="p-2">Maruti Swift</div>
// // <div className="p-2">Maruti Brezza</div>
// // <div className="p-2">Kia Seltoz</div>
// // </div>
// // )}
// // </div>
// // );
// // }

// // export default Search;

// import React, { useState } from 'react';
// import { IoIosSearch } from 'react-icons/io';

// const search = ["Mahindra Thar", "Mahindra XUV700", "Tata Punch", "Tata Nexon", "Maruti Swift",
//   "Kia Seltoz", "Maruti Brezza"];

// function Search() {
//   const [showItems, setShowItems] = useState(false);
//   const [selectedCity, setSelectedCity] = useState("");

//   const handleInputClick = () => {
//     setShowItems(true);
//   };

//   const handleCitySelect = (city) => {
//     setSelectedCity(city);
//     setShowItems(false);
//   };

//   const handleBlur = () => {
//     setShowItems(false);
//   };

//   return (
//     <div className="relative">
//       <div className="flex items-center cursor-pointer" onClick={handleInputClick}
//         onBlur={handleBlur} tabIndex={0}>
//         <IoIosSearch className='text-2xl text-white h-10 w-10 bg-[#353e4e]' />
//         <input
//           type="text"
//           placeholder="Search.."
//           className="border text-[17px] w-[80%] rounded-sm h-10 pl-[5%] dark:bg-white-700
// dark:border-gray-600 dark:placeholder-gray-500 dark:text-black"
//           onClick={handleInputClick}
//           onBlur={handleBlur}
//         />

//         <label className='text-black text-sm ml-2 cursor-pointer'>{selectedCity || ''}</label>

//       </div>

//       {showItems && (

//         <div className="absolute left-0 mt-1 w-[150%] max-h-60 bg-white border shadow overflow-y-
// auto">

//           {search.map((city, index) => (
//             <div
//               key={index}
//               className="p-2 cursor-pointer hover:bg-gray-100"
//               onClick={() => handleCitySelect(city)}
//             >
//               {city}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Search;


import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

const searchItems = ["Mahindra Thar", "Mahindra XUV700", "Tata Punch", "Tata Nexon", "Maruti Swift", "Kia Seltoz", "Maruti Brezza"];

function Search() {
    const [showItems, setShowItems] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");

    const handleInputClick = () => {
        setShowItems(true);
    };

    const handleItemSelect = (item) => {
        setSelectedItem(item);
        setShowItems(false);
    };

    const handleBlur = () => {
        setShowItems(false);
    };

    return (
        <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={handleInputClick}
                onBlur={handleBlur} tabIndex={0}>
                <IoIosSearch className='text-2xl text-white h-10 w-10 bg-[#353e4e]' />
                <input
                    type="text"
                    placeholder="Search.."
                    className="border text-[17px] w-[80%] rounded-sm h-10 pl-[5%] dark:bg-white-700
dark:border-gray-600 dark:placeholder-gray-500 dark:text-black"
                    onClick={handleInputClick}
                    onBlur={handleBlur}
                />
                <label className='text-black text-sm ml-2 cursor-pointer'>{selectedItem || ''}</label>
            </div>

            {showItems && (
                <div className="absolute left-0 mt-1 w-[150%] max-h-60 bg-white border shadow overflow-y-auto">
                    {searchItems.map((item, index) => (
                        <div
                            key={index}
                            className="p-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleItemSelect(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;