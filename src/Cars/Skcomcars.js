import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';


function Card() {
  const reviewData = [
    {
      poster1: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
      poster2: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80',
      cname1: 'Skoda Slavia',
      price1: 'Rs. 11.63 Lakh',
      showroomprice1: 'Avg Ex-Showroom Price',
      cname2: 'Volkswagen Virtus',
      price2: 'Rs. 13.50 Lakh',
      showroomprice2: 'Avg Ex-Showroom Price',
      compare: 'Compare Now',
      link: '/',
    },
    {
      poster1: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/175993/kushaq-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
      poster2: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/144689/taigun-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80',
      cname1: 'Skoda Kushaq',
      price1: 'Rs. 14.99 Lakh',
      showroomprice1: 'Avg Ex-Showroom Price',
      cname2: 'Volkswagon Taigun',
      price2: 'Rs. 13.67 Lakh',
      showroomprice2: 'Avg Ex-Showroom Price',
      compare: 'Compare Now',
      link: '/',
    },
    {
      poster1: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/158937/superb-exterior-right-front-three-quarter-6.png?isig=0&q=80',
      poster2: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/49051/kodiaq-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
      cname1: 'Skoda Superb',
      price1: 'Rs. 62.65 Lakh',
      showroomprice1: 'Avg Ex-Showroom Price',
      cname2: 'Skoda Kodiaq',
      price2: 'Rs. 44.31 Lakh',
      showroomprice2: 'Avg Ex-Showroom Price',
      compare: 'Compare Now',
      link: '/',
    },
    {
      poster1: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/49051/kodiaq-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
      poster2: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/53123/tiguan-exterior-right-front-three-quarter-4.jpeg?q=80',
      cname1: 'Skoda Kodiaq',
      price1: 'Rs. 44.31 Lakh',
      showroomprice1: 'Avg Ex-Showroom Price',
      cname2: 'Volkswagon Tiagun',
      price2: 'Rs. 20.15 Lakh',
      showroomprice2: 'Avg Ex-Showroom Price',
      compare: 'Compare Now',
      link: '/',
    },
    {  
      poster1: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
      poster2: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/121943/verna-exterior-right-front-three-quarter-101.jpeg?isig=0&q=80',
      cname1: 'Skoda Slavia',
      price1: 'Rs. 11.00 Lakh',
      showroomprice1: 'Avg Ex-Showroom Price',
      cname2: 'Hyndai Verna',
      price2: 'Rs. 12.82 Lakh',
      showroomprice2: 'Avg Ex-Showroom Price',
      compare: 'Compare Now',
      link: '/',
    },
    {  
      poster1: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/175993/kushaq-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
      poster2: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/142515/elevate-exterior-right-front-three-quarter-21.jpeg?isig=0&q=80',
      cname1: 'Skoda Kushaq',
      price1: 'Rs. 14.99 Lakh',
      showroomprice1: 'Avg Ex-Showroom Price',
      cname2: 'Honda Elevate',
      price2: 'Rs. 13.37 Lakh',
      showroomprice2: 'Avg Ex-Showroom Price',
      compare: 'Compare Now',
      link: '/',
    },
    {  
      poster1: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/158937/superb-exterior-right-front-three-quarter-6.png?isig=0&q=80',
      poster2: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/110233/camry-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
      cname1: 'Skoda Superb',
      price1: 'Rs. 62.65 Lakh',
      showroomprice1: 'Avg Ex-Showroom Price',
      cname2: 'Toyato Camry',
      price2: 'Rs. 52.83 Lakh',
      showroomprice2: 'Avg Ex-Showroom Price',
      compare: 'Compare Now',
      link: '/',
    },
    {  
      poster1: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/49051/kodiaq-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
      poster2: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/47139/meridian-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80',
      cname1: 'Skoda Kodiaq',
      price1: 'Rs. 44.31 Lakh',
      showroomprice1: 'Avg Ex-Showroom Price',
      cname2: 'Jeep Meridian',
      price2: 'Rs. 37.27 Lakh',
      showroomprice2: 'Avg Ex-Showroom Price',
      compare: 'Compare Now',
      link: '/',
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 2,
    duration: 2000,
  };

  const customArrows = (
    <div style={{ display: 'none' }}>
      {/* Hide the default navigation arrows */}
      <span>&#60;</span>
      <span>&#62;</span>
    </div>
  );

  return (
    <div className="mx-auto max-w-6xl">
      <Slide {...settings} prevArrow={customArrows} nextArrow={customArrows}>
        {reviewData.map((review, index) => (
          <div key={index} className="mb-2 mx-8 bg-white border-2 border-gray-300 shadow-lg flex flex-col justify-bewtween rounded-lg ">
            <div className='flex flex-row items-center justify-center p-4'>
              <div className='w-1/2  p-4'>
                <img src={review.poster1} className='w-full h-auto' alt={review.cname1} />
                <h2 className='text-[13px]  mt-2'>{review.cname1}</h2>
                <p className='text-[12px] text-gray-600'>{review.showroomprice1}</p>
                <p className='text-[16px] text-gray-800 '>{review.price1}</p>
              </div>
              <div className=' '>
                <div className='rounded-full bg-gray-700 text-white px-1.5 py-1'>VS</div>
              </div>
              <div className='w-1/2 p-4'>
                <img src={review.poster2} className='p-w-full h-auto' alt={review.cname2} />
                <h2 className='text-[13px]  mt-2'>{review.cname2}</h2>
                <p className='text-[12px] text-gray-600'>{review.showroomprice2}</p>
                <p className='text-[16px] text-gray-800 '>{review.price2}</p>
              </div>
            </div>
            <div className="text-center py-2">
              <Link to={review.link}>
                <button className='border-2 border-[#45b3e0] hover:bg-[#45b3e0] hover:text-white px-28 py-3 rounded text-[14px] text-[#45b3e0] inline-block mb-3'>
                  {review.compare}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Card;
