import React from 'react';
import CarSearchFilter from './CarSearchFilter'; // Assuming this is the correct path to CarSearchFilter component

const CarWebsite = () => {
  // Assuming cars array is defined here or fetched from somewhere
  const cars = [
    { image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/47580/ford-endeavour-exterior4.jpeg?wm=0", type: 'SUV', year: 2021, model: 'Ford Explorer', price: 35000 },
    { image: "https://example.com/truck.jpg", type: 'Truck', year: 2019, model: 'Chevrolet Silverado', price: 40000 },
    { image: "https://example.com/sedan.jpg", type: 'Sedan', year: 2020, model: 'Toyota Camry', price: 28000 },
    { image: "https://example.com/hatchback.jpg", type: 'Hatchback', year: 2018, model: 'Volkswagen Golf', price: 20000 },
    { image: "https://example.com/convertible.jpg", type: 'Convertible', year: 2017, model: 'BMW 4 Series', price: 45000 },
    { image: "https://example.com/electric.jpg", type: 'Electric', year: 2022, model: 'Tesla Model 3', price: 50000 },
    // Add more car objects as needed
  ];
 

  return (
    <div>
      {/* Other components or sections of the car website */}
      <CarSearchFilter cars={cars} />
    </div>
  );
};

export default CarWebsite;
