import React, { useState } from 'react';
import { MdOutlineStar } from 'react-icons/md';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const cars = [
  {
    name: 'Skoda Slavia',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
    details: '5 Star Safety | 18-20 kmpl | 114-148 bhp',
    rating: '4.9/5',
    ratingCount: '17 Ratings',
    price: 'Rs. 11.63 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Kushaq',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/175993/kushaq-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
    details: '5 Star Safety | 17-19 kmpl | 110-150 bhp',
    rating: '4.2/5',
    ratingCount: '10 Ratings',
    price: 'Rs. 12.79 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Superb',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/158937/superb-exterior-right-front-three-quarter-6.png?isig=0&q=80',
    details: '5 Star Safety | 14-18 kmpl | 190-270 bhp',
    rating: '3/5',
    ratingCount: '13 Ratings',
    price: 'Rs. 32.85 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Kodiaq',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/49051/kodiaq-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
    details: '5 Star Safety | 16-18 kmpl | 150-200 bhp',
    rating: '4.3/5',
    ratingCount: '30 Ratings',
    price: 'Rs. 38.99 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Rapid',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/47562/rapid-tsi-exterior-right-front-three-quarter-53.jpeg?isig=0&q=80',
    details: '4 Star Safety | 14-17 kmpl | 110-120 bhp',
    rating: '4.2/5',
    ratingCount: '40 Ratings',
    price: 'Rs. 8.19 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Fabia',
    image: 'https://th.bing.com/th/id/OIP.isZ3iWQ67Fw-YOniT8R14AHaEc?rs=1&pid=ImgDetMain',
    details: '4 Star Safety | 20-23 kmpl | 100-130 bhp',
    rating: '4.3/5',
    ratingCount: '22 Ratings',
    price: 'Rs. 7.19 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Laura',
    image: 'https://th.bing.com/th/id/OIP.-aYAwxAOzIpUJ9WhoeFefgHaE8?rs=1&pid=ImgDetMain',
    details: '4 Star Safety | 13-15 kmpl | 140-180 bhp',
    rating: '4.0/5',
    ratingCount: '35 Ratings',
    price: 'Rs. 14.56 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Kamiq',
    image: 'https://th.bing.com/th/id/OIP.o6rU_11g3BLlsHI-uuWP0QHaFj?w=251&h=188&c=7&r=0&o=5&pid=1.7',
    details: '5 Star Safety | 18-20 kmpl | 115-150 bhp',
    rating: '4.7/5',
    ratingCount: '18 Ratings',
    price: 'Rs. 9.95 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Citigo',
    image: 'https://th.bing.com/th/id/OIP.xgb-lTvC2TnmT7rmDkJXswHaFA?w=258&h=180&c=7&r=0&o=5&pid=1.7',
    details: '4 Star Safety | 20-25 kmpl | 75-100 bhp',
    rating: '4.2/5',
    ratingCount: '25 Ratings',
    price: 'Rs. 5.00 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Enyaq',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/137871/enyaq-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
    details: '5 Star Safety | 19-22 kmpl | 200-300 bhp',
    rating: '4.8/5',
    ratingCount: '12 Ratings',
    price: 'Rs. 50.00 Lakh',
    link: '#'
  },
  {
    name: 'Skoda New Kodiaq',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/158729/kodiaq-new-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80',
    details: '4 Star Safety | 15-18 kmpl | 100-130 bhp',
    rating: '4.1/5',
    ratingCount: '8 Ratings',
    price: 'Rs. 45.00 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Octavia facelift',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/170883/octavia-facelift-exterior-front-view-6.jpeg?isig=0&q=80',
    details: '5 Star Safety | 18-21 kmpl | 110-150 bhp',
    rating: '4.6/5',
    ratingCount: '20 Ratings',
    price: 'Rs. 35.00 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Sub-four metre SUV',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/171777/compact-suv-exterior-headlight.jpeg?isig=0&q=80',
    details: '4 Star Safety | 14-17 kmpl | 110-120 bhp',
    rating: '4.3/5',
    ratingCount: '28 Ratings',
    price: 'Rs. 8.00 - 12.00 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Slavia Facelift',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/179753/slavia-facelift-exterior-left-front-three-quarter.jpeg?isig=0&q=80',
    details: '5 Star Safety | 16-18 kmpl | 150-200 bhp',
    rating: '4.6/5',
    ratingCount: '15 Ratings',
    price: 'Rs. 12.00 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Kodiaq Sportline',
    image: 'https://th.bing.com/th/id/OIP.eHhGeaSYWlZ5kIzXgFudDQHaE8?rs=1&pid=ImgDetMain',
    details: '5 Star Safety | 16-18 kmpl | 150-200 bhp',
    rating: '4.7/5',
    ratingCount: '15 Ratings',
    price: 'Rs. 38.00 Lakh',
    link: '#'
  },
  {
    name: 'Skoda Superb Sportline',
    image: 'https://mediacloud.carbuyer.co.uk/image/private/s--2G5GqxtN--/v1579633355/carbuyer/2018/04/new_skoda_superb_spotline_plus_front.jpg',
    details: '5 Star Safety | 14-18 kmpl | 190-270 bhp',
    rating: '4.6/5',
    ratingCount: '30 Ratings',
    price: 'Rs. 34.00 Lakh',
    link: '#'
  },
];

const CarCard = ({ car }) => (
  <div className="border border-gray-400 rounded-sm p-4 pt-5 pb-5 flex items-center mb-4">
    <img
      src={car.image}
      alt={car.name}
      className="w-48 h-auto mr-6"
    />
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-[17px]">{car.name}</h2>
          <div className="text-gray-500 text-[16px] mt-1">
            {car.details}
          </div>
        </div>
        <div className="flex items-center border border-gray-800 px-2">
          <div className="flex items-center text-[#00857a] font-semibold text-[10px] mr-1">
            <MdOutlineStar />
            {car.rating}
          </div>
          |&nbsp;
          <div className="text-[10px]">{car.ratingCount}</div>
        </div>
      </div>
      <div className="flex items-center text-[16px] mt-1">
        {car.price}
        <span className="text-sm text-gray-500">&nbsp;onwards</span>
        &nbsp;&nbsp;
        <span className="flex items-center text-[#00857a] text-sm mt-1 cursor-pointer hover:underline">
          <RiDiscountPercentFill />
          Offers
        </span>
      </div>
      <div className="text-gray-500 mt-1">Avg. Ex-Showroom price</div>
       <div>
        <button className="text-blue-600 text-sm hover:underline mt-1">
          Get Best Offer
        </button>
      </div>
    </div>
  </div>
);

const CarList = () => {
  const [showContent1, setShowContent1] = useState(false);

  return (
    <div className="w-[78%] pt-4">
      {cars.slice(0, 3).map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
      {showContent1 && cars.slice(3).map((car, index) => (
        <CarCard key={index + 3} car={car} />
      ))}
      <button
        className='flex items-center text-center text-[#0288D1] pt-[10px] pb-[10px] text-[17px] '
        onClick={() => setShowContent1(!showContent1)}
      >
         {showContent1 ? (
          <>
            Show Less <RiArrowUpSLine className='ml-2' />
          </>
        ) : (
          <>
            Show More <RiArrowDownSLine className='ml-2' />
          </>
        )}
      </button>
    </div>
  );
};

export default CarList;
