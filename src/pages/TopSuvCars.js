import React from 'react';

function TopSuvCars() {
  return (
    <div>
      <h1>Top SUVs in India</h1>
      {/* Add content for Top SUVs */}
    </div>
  );
}

export default TopSuvCars;


// import React, { useState } from 'react';
// import Header from '../Components/Header';
// import CardBrand from '../Components/CardBrand';

// function NewCars() {
//     const [buttonClicked, setButtonClicked] = useState(false);

//     const handleButtonClick = () => {
//         setButtonClicked(!buttonClicked);
//     };
//     const buttonText = buttonClicked ? 'Hide' : 'Read More';

//     const data = [
//         {
//             title: 'Card 1',
//             description: 'Description for Card 1.',
//             image: 'https://placekitten.com/300/200',
//         },
//         {
//             title: 'Card 2',
//             description: 'Description for Card 2.',
//             image: 'https://placekitten.com/300/201',
//         },
//         // Add more cards as needed
//     ];

//     return (
//         <div className='font-[Poppins]'>
//             <Header />
//             <div className='pl-[15%] pr-[15%] pt-20 bg-slate-30 min-h-[calc(100vh)]'>

//                 <p className='text-justify pt-[50px] text-[20px] font-medium '>New Cars</p><br />

//                 <p >Are you planning on buying a new car? Well, we know that with so many options available out
//                     there, it gets really difficult to find a good car which suits your need. Hence, we have put together a
//                     complete list of new cars. Maruti Suzuki, Tata and Hyundai are the 3 most popular car brands.
//                     The 5 most popular cars are Maruti Suzuki Fronx, Tata Nexon, Mahindra Scorpio N, Tata Punch and
//                     Mahindra Thar.<br />
//                     <button className='text-[#0288D1] pt-[10px] pb-[10px] text-[17px] '
//                         onClick={handleButtonClick}>{buttonText}</button>
//                     {buttonClicked && <div>
//                         <p className='pt-[50px] text-[17px] font-medium '>Upcoming Cars Price List (December 2023)
//                             in India
//                         </p>
//                         <div className='overflow-x-auto text-black'>
//                             <table className="border-collapse border border-slate-500 " width='100%'>
//                                 <tr className='bg-gray-200' align='left'>
//                                     <td className='cursor-pointer border border-slate-700 px-6 py-2'>MODEL</td>
//                                     <td className='cursor-pointer border border-slate-700 px-6 py-2'>EXPECTED PRICE</td>
//                                     <td className='cursor-pointer border border-slate-700 px-6 py-2'>EXPECTED LAUNCH
//                                         DATE</td>
//                                 </tr>
//                                 <tr className='' align='left' >
//                                     <td className='cursor-pointer border border-slate-700 px-6 py-2'>Kia Sonet Facelift</td>
//                                     <td className='cursor-pointer border border-slate-700 px-6 py-2'>Rs. 8.00 - 15.00 Lakh</td>
//                                     <td className='cursor-pointer border border-slate-700 px-6 py-2'>Jan 16, 2024</td>
//                                 </tr>
//                                 <tr className='' align='left' >
//                                     <td className='cursor-pointer border border-slate-700 px-6 py-2'>Maruti Suzuki New-gen
//                                         Swift</td>
//                                     <td className='cursor-pointer border border-slate-700 px-6 py-2'>Rs. 6.50 - 10.00 Lakh</td>

//                                     <td className='cursor-pointer border border-slate-700 px-6 py-2'>Sep 24, 2024</td>
//                                 </tr>
//                                 <tr className='' align='left' >
//                                     <td className='cursor-pointer border border-slate-700 px-6 py-2'>Hyundai New Santa Fe</td>
//                                     <td className='cursor-pointer border border-slate-700 px-6 py-2'>Rs. 45.00 - 55.00 Lakh</td>
//                                     <td className='cursor-pointer border border-slate-700 px-6 py-2'>Feb 15, 2024</td>
//                                 </tr>
//                             </table>
//                         </div>

//                     </div>}
//                     <br /><br />

//                 </p>
//                 <p className='pt-[50px] text-[20px] font-medium'>Upcoming Cars in India 2023</p>
//                 <p className='pt-[30px] text-[17px] font-medium'>New Car Launch in India 2023 - All
//                     details</p><br />
//                 <form className=''>
//                     <tr>
//                         <CardBrand

//                             imageUrl1="https://imgd.aeplcdn.com/227x128/n/cw/ec/159099/new-gen-swift-exterior-left-front-three-quarter.jpeg?isig=0&q=80"

//                             content6="Maruti New-gen Swift"
//                             content7="Rs. 6.50 - 10.00 Lakh"
//                             content8="Expected launch - September 2024"
//                             content9="show more"
//                         />
//                     </tr><br /><br />

//                     <tr className=''>
//                         <CardBrand

//                             imageUrl1="https://imgd.aeplcdn.com/227x128/n/cw/ec/134113/new-wr-v-exterior-left-
// front-three-quarter-2.jpeg?isig=0&q=80"

//                             content6="Honda WR-V"
//                             content7="Rs. 9.00 - 13.00 Lakh"
//                             content8="Expected launch - March 2024"
//                             content9="show more"
//                         />
//                     </tr><br /><br />
//                     <tr className=''>
//                         <CardBrand

//                             imageUrl1="https://imgd.aeplcdn.com/227x128/n/cw/ec/138947/ka4-carnival-exterior-left-
// front-three-quarter-3.jpeg?isig=0&q=80"

//                             content6="Kia KA4 (Carnival)"
//                             content7='Rs. 40.00 - 45.00 Lakh'
//                             content8='Expected launch - February 2024'
//                             content9="show more"
//                         />
//                     </tr><br /><br />
//                     <tr className=''>
//                         <CardBrand

//                             imageUrl1="https://imgd.aeplcdn.com/227x128/n/cw/ec/125241/avenger-exterior-right-front-
// three-quarter.jpeg?isig=0&q=80"

//                             content6="Jeep Avenger"
//                             content7='Rs. 8.00 - 12.00 Lakh'
//                             content8='Expected launch - April 2024'
//                             content9="show more"
//                         />

//                     </tr><br /><br />
//                     <tr className=''>
//                         <CardBrand

//                             imageUrl1="https://imgd.aeplcdn.com/227x128/n/cw/ec/139651/curvv-ice-exterior-left-front-
// three-quarter.jpeg?isig=0&q=80"

//                             content6="Tata Curvv"
//                             content7='Rs. 15.00 - 20.00 Lakh'
//                             content8='Expected launch - July 2024'
//                             content9="show more"
//                         />
//                     </tr><br /><br />
//                     <tr className=''>
//                         <CardBrand

//                             imageUrl1="https://imgd.aeplcdn.com/227x128/n/cw/ec/121335/avinya-concept-exterior-left-
// front-three-quarter.jpeg?isig=0&q=80"

//                             content6="Tata Avinya"
//                             content7='Rs. 30.00 - 60.00 Lakh'
//                             content8='Expected launch - February 2025'
//                             content9="show more"
//                         />
//                     </tr>
//                     <tr>
//                         <td>
//                         </td>
//                         <td>
//                         </td>
//                     </tr>
//                     <tr>

//                         <td>
//                         </td>
//                         <td>
//                         </td></tr>
//                 </form>

//             </div>
//         </div>
//     );
// }
// export default NewCars;
