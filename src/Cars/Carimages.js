import React from 'react';

const CarCard = () => {
  return (
    // <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    //   <div className="grid grid-cols-3 gap-1 p-2">
    //     <img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=80" alt="Car 1" className="col-span-1 object-cover h-24 w-full"/>
    //     <img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" alt="Car 2" className="col-span-1 object-cover h-24 w-full"/>
    //     <img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80" alt="Car 3" className="col-span-1 object-cover h-24 w-full"/>
    //     <img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-side-view.jpeg?isig=0&q=80" alt="Car 4" className="col-span-1 object-cover h-24 w-full"/>
    //     <img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-rear-three-quarter.jpeg?isig=0&q=80" alt="Car 6" className="col-span-2 object-cover h-48 w-full"/>
    //     <img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-left-side-view.jpeg?isig=0&q=80" alt="Car 5" className="col-span-1 object-cover h-24 w-full"/>
    //   </div>
    //   <div className="px-4 py-2">
    //     <h2 className="text-xl font-semibold text-gray-800">Skoda</h2>
    //     <p className="text-gray-600">Slavia</p>
    //   </div>
    //   <div className="px-4 py-2 flex items-center">
    //     <span className="text-gray-600">27</span>
    //     <svg className="w-6 h-6 text-gray-600 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l-5 5m0 0l-5-5m5 5V3" />
    //     </svg>
    //   </div>
    // </div>
    // <table border="2">
    //   <tr>
    //     <td><img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=80" className='object-cover h-24 w-full'></img></td>
    //     <td><img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=80" className='object-cover h-24 w-full'></img></td>
    //     <td><img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=80 className='object-cover h-24 w-full'"></img></td>
    //   </tr>
    //   <tr>
    //     <td><img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=80" className='object-cover h-24 w-full'></img></td>
    //     <td colspam="2" rowspan="2"><img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=80"  className='object-cover h-24 w-full'></img></td>
    //   </tr>
    //   <tr >
    //     <td ><img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=80" className='object-cover h-24 w-full'></img></td>
    //   </tr>
    // </table>

    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="grid grid-cols-3 gap-1 p-2">
        <div className="col-span-1">
          <img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=80" alt="Car 1" className="object-cover h-24 w-full"/>
        </div>
        <div className="col-span-1">
          <img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" alt="Car 2" className="object-cover h-24 w-full"/>
        </div>
        <div className="col-span-1">
          <img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80" alt="Car 3" className="object-cover h-24 w-full"/>
        </div>
        <div className="col-span-1">
          <img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-side-view.jpeg?isig=0&q=80" alt="Car 4" className="object-cover h-24 w-full"/>
        </div>
        <div className="col-span-2">
          <img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-rear-three-quarter.jpeg?isig=0&q=80" alt="Car 6" className="object-cover h-48 w-full"/>
        </div>
        <div className="col-span-1">
          <img src="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-left-side-view.jpeg?isig=0&q=80" alt="Car 5" className="object-cover h-24 w-full"/>
        </div>
      </div>
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold text-gray-800">Skoda</h2>
        <p className="text-gray-600">Slavia</p>
      </div>
      <div className="px-4 py-2 flex items-center">
        <span className="text-gray-600">27</span>
        <svg className="w-6 h-6 text-gray-600 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l-5 5m0 0l-5-5m5 5V3" />
        </svg>
      </div>
    </div>



  );
};

export default CarCard;
