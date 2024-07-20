// src/App.js
import React from 'react';
import Slider from 'react-slick';

const CarCard = ({ image, title, price, offers }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={title} className="h-48 w-full object-cover rounded-t-lg" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">Price: {price}</p>
        <p className="text-gray-600 mt-2">Offers: {offers}</p>
      </div>
    </div>
  );
};

const CarSlider = () => {
  const cars = [
    {
      image: 'https://via.placeholder.com/400',
      title: 'Car Model 1',
      price: '$20,000',
      offers: '0% APR for 36 months'
    },
    {
      image: 'https://via.placeholder.com/400',
      title: 'Car Model 2',
      price: '$25,000',
      offers: 'Free maintenance for 2 years'
    },
    {
      image: 'https://via.placeholder.com/400',
      title: 'Car Model 3',
      price: '$30,000',
      offers: '$1,000 cashback'
    }
    // Add more car objects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container mx-auto mt-8">
      <Slider {...settings}>
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </Slider>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl">Car Slider</h1>
      </header>
      <CarSlider />
    </div>
  );
};

export default App;