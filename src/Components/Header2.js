import React from 'react';

const Header2 = () => {
  return (
    <header className="bg-[#353e4e] text-white">
      <div className="container mx-auto py-3 ">
      <h1 className="text-3xl  text-center">Discover the CarSpot Advantage Today!</h1>
        <p className="mt-0.5 text-lg text-center">Explore the CarSpot website and unlock a world of automotive excellence.</p>
     
        {/* <h1 className="text-center text-xl font-bold">Welcome to <span className="text-blue-600">CarSpot</span> website experience now!</h1> */}
      </div>
    </header>
  );
};

export default Header2;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header2 = () => {
//     return (
//         <div className=''>
//             <header className="bg-[#353e4e] shadow-lg h-[65px] fixed w-full z-50">
//                 <nav className="flex justify-center items-center w-[92%] mx-auto">
//                     <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-white h-16">
//                         <li className='hover:text-gray-500'>
//                             <Link to='/newcars'>
//                                 HOME
//                             </Link>
//                         </li>
//                         <li className='hover:text-gray-500'>
//                             <Link to='/about'>
//                                 ABOUT
//                             </Link>
//                         </li>
//                         <li className='hover:text-gray-500'>
//                             <Link to='/reviews'>
//                                 REVIEWS
//                             </Link>
//                         </li>
//                         <li className='hover:text-gray-500'>
//                             <Link to='/contact'>
//                                 CONTACT
//                             </Link>
//                         </li>
//                         <li className='hover:text-gray-500'>
//                             <Link to='/services'>
//                                 SERVICES
//                             </Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </header>
//         </div>
//     )
// }

// export default Header2;
