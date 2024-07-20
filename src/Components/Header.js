import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosClose as IoClose } from "react-icons/io";
import { IoIosMenu as IoMenu } from "react-icons/io";
import Search from "../pages/Search";
import Location from "../pages/Location";
import Images from "../Images/lo2.png";
import Login from "../pages/Login";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-[Poppins] shadow-lg">
      <header className="bg-white shadow-lg h-[65px] fixed w-full z-50">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <Link to="/">
              <img className="h-16 cursor-pointer" src={Images} alt="Logo" />
            </Link>
          </div>
          <div
            className={`nav-links duration-1000 md:static absolute bg-white md:min-h-fit min-h-[40vh]
left-0 ${
              isMenuOpen ? "top-[100%]" : "-top-[500%]"
            } md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex items-center md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li className="">
                <Search />
              </li>
              <li className="hover:bg-[#353e4e] px-2 py-2 rounded-sm hover:text-white">
                <Link to="/newcars">NEW CARS</Link>
              </li>
              <li className="hover:bg-[#353e4e] px-2 py-2 rounded-sm hover:text-white">
                <Link to="/reviews">REVIEWS</Link>
              </li>
              <li className="">
                <Location />
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/login">
              <button className="bg-[#353e4e] text-white px-5 py-2 rounded-full hover:bg-gray-500">
                Log in
              </button>
            </Link>
            {isMenuOpen ? (
              <IoClose
                className="text-3xl cursor-pointer md:hidden"
                onClick={toggleMenu}
              />
            ) : (
              <IoMenu
                className="text-3xl cursor-pointer md:hidden"
                onClick={toggleMenu}
              />
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoIosClose as IoClose } from 'react-icons/io';
// import { IoIosMenu as IoMenu } from 'react-icons/io';
// import Search from '../pages/Search';
// import Location from '../pages/Location';
// import Images from '../Images/lo2.png';
// import Login from '../pages/Login';

// function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div className='font-[Poppins] shadow-lg'>
//             <header className="bg-white shadow-lg h-[65px] fixed w-full z-50">
//                 <nav className="flex justify-between items-center w-[92%] mx-auto">
//                     <div>
//                         <Link to='/'>
//                             <img className="h-16 cursor-pointer" src={Images} alt="Logo" />
//                         </Link>
//                     </div>
//                     <div
//                         className={`nav-links duration-1000 md:static absolute bg-white md:min-h-fit min-h-[40vh]
// left-0 ${isMenuOpen ? 'top-[100%]' : '-top-[500%]'} md:w-auto w-full flex items-center px-5`}
//                     >
//                         <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
//                             <li className=''>
//                                 <Search />
//                             </li>
//                             <li className='hover:text-gray-500'>
//                                 <Link to='/newcars'>
//                                     NEW CARS
//                                 </Link>
//                             </li>
//                             <li className='hover:text-gray-500'>
//                                 <Link to='/reviews'>
//                                     REVIEWS
//                                 </Link>
//                             </li>

//                             <li className=''>
//                                 <Location />
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="flex items-center gap-6">
//                         <Link to='/login'>
//                             <button className="bg-[#353e4e] text-white px-5 py-2 rounded-full hover:bg-gray-500">Log in</button>
//                         </Link>
//                         {isMenuOpen ? (
//                             <IoClose className="text-3xl cursor-pointer md:hidden" onClick={toggleMenu} />
//                         ) : (
//                             <IoMenu className="text-3xl cursor-pointer md:hidden" onClick={toggleMenu} />
//                         )}
//                     </div>
//                 </nav>
//             </header>
//         </div>
//     );
// }

// export default Header;


// Header.js

// import React, { useState, useEffect } from 'react';
// import Images from '../Images/lo2.png';
// import { Link } from 'react-router-dom';
// import { FaLocationDot } from 'react-icons/fa6';
// import { IoMenu, IoClose } from 'react-icons/io5';
// import { IoIosSearch } from "react-icons/io";
// import Search from '../pages/NewCars';

// const Header = () => {
// const [isMenuOpen, setIsMenuOpen] = useState(false);
// const [isScrolled, setIsScrolled] = useState(false);

// useEffect(() => {
// const handleScroll = () => {
// setIsScrolled(window.scrollY > 0);
// };

// window.addEventListener('scroll', handleScroll);

// return () => {
// window.removeEventListener('scroll', handleScroll);
// };
// }, []);

// useEffect(() => {
// const navLinks = document.querySelector('.nav-links');

// if (navLinks) {
// navLinks.classList.toggle('bottom-[0]', isMenuOpen);
// }
// }, [isMenuOpen]);

// const toggleMenu = () => {
// setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
// };

// const [showLoc, setShowMenu] = useState(false);
// const handleShowLoc = () => {
// setShowMenu((prev) => !prev);
// };

// return (
// <div>
// <header
// className={`fixed shadow-md w-full h-24 flex items-center ${
// isScrolled ? 'scrolled' : ''
// }`}
// >
// <nav className='flex justify-between items-center w-[92%] mx-auto'>
// <div className='flex items-center gap-[50px]'>
// {isMenuOpen ? (
// <IoClose
// name='close'
// onClick={toggleMenu}

// className='text-3xl cursor-pointer md:hidden'
// />
// ) : (
// <IoMenu
// name='menu'
// onClick={toggleMenu}
// className='text-3xl cursor-pointer md:hidden'
// />
// )}
// <Link to='/'>
// <img src={Images} className='h-16' alt='logo' />
// </Link>
// </div>

// <div
// className={`nav-links md:static absolute bg-[#fafafa] min-h-fit w-[50%] fixed shadowmd:shadow-none md:bg-[white] md:min-h-fit min-h[60vh] left-0 bottom-[0] md:w-auto w-full flexitems-center px-5`}
// >
// <ul className='flex md:flex-row flex-col md:items-center md:gap-[10vw] gap-7'>
// <li className=''>
// <Search/>
// </li>
// <li className='hover:text-gray-500'>
// <Link
// to='/newcars'
// className='font-medium text-[#000000] hover:text-gray-500'
// >

// NEW CARS
// </Link>
// </li>
// <li className='hover:text-gray-500'>
// <Link
// to='/reviews'
// className='font-medium text-[#000000] hover:text-gray-500'
// >
// REVIEWS
// </Link>
// </li>
// <li className='hover:text-gray-500'>
// <FaLocationDot className='text-3xl hover:text-gray-500 cursor-pointer ' />
{
  /* <div onClick={handleShowLoc}>
<FaLocationDot className='text-3xl hover:text-gray-500 cursor-pointer' />
{showLoc && (
<div className='absolute left-[82%] pt-[20px]'>
<p className='absolute bg-white py-2 px-2 shadow drop-shadow-md'>
<select>
<option className='cursor-pointer'>
Coimbatore
</option>
<option>Chennai</option>
<option>Mumbai</option>
<option>Delhi</option>
<option>Bangalore</option>
</select>

</p>
</div>
)}
</div> */
}
// </li>
// <li className='hover:text-gray-500'>
// <Link
// to='/login'
// className='font-medium bg-[black] text-[white] pr-[20px] pt-[10px] pb-[10px] pl-[20px]rounded-md'
// >
// Login
// </Link>
// </li>
// </ul>
// </div>
// </nav>
// </header>
// </div>
// );
// };

// export default Header;
