import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

function Card() {
  const reviewData = [
    { poster: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/158937/superb-exterior-right-front-three-quarter-6.png?isig=0', cname: 'Used Skoda Superb', price: 'Rs. 2.00 Lakh', offers: 'Get more offers', link: '/topsuvcars' },
    { poster: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/49980/rapid-tsi-at-exterior-right-front-three-quarter-3.jpeg', cname: 'Used Skoda Rapid', price: 'Rs. 2.95 Lakh', offers: 'Get more offers', link: '/topsuvcars' },
    { poster: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/175993/kushaq-exterior-right-front-three-quarter.jpeg?isig=0', cname: 'Used Skoda Kushaq', price: 'Rs. 10.00 Lakh', offers: 'Get more offers', link: '/topluxurycars' },
    { poster: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/40371/octavia-exterior-right-front-three-quarter-2.jpeg', cname: 'Used Skoda Octavia', price: 'Rs. 6.00 Lakh', offers: 'Get more offers', link: '/topcompactcars' },
    { poster: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0', cname: 'Used Skoda Slavia', price: 'Rs. 10.00Lakh', offers: 'Get more offers', link: '/tophatchbackcars' },
    { poster: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/49051/kodiaq-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80', cname: 'Used Skoda Kodiaq', price: 'Rs. 17.08 Lakh', offers: 'Get more offers', link: '/topluxurycars' },
    { poster: 'https://imgd.aeplcdn.com/370x208/cw/cars/discontinued/skoda/fabia-2008-2010.jpg', cname: 'Used Skoda Fabia', price: 'Rs. 1.20 Lakh', offers: 'Get more offers', link: '/topluxurycars' },
    ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
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
    <div className="mx-auto max-w-6xl ">
      <Slide {...settings} prevArrow={customArrows} nextArrow={customArrows}>
        {reviewData.map((review, index) => (
          <div key={index} className="mb-4 mx-8 bg-white shadow-lg flex flex-col justify-between"> {/* Added mx-2 for horizontal margin */}
            <img src={review.poster}  className='w-full' />
              <h1 className='pt-3 pl-1 text-[17px] font-medium text-black '>{review.cname}</h1>
              <h1 className='pl-1 text-[14px] font-medium text-gray-500 '>{review.price}</h1>
            <div className="text-center py-2">
              <Link to={review.link}>
                <h1 className='border-2 border-[#353e4e] bg-gray-100 hover:bg-[#353e4e] hover:text-white px-12 py-1 rounded text-[14px] text-[#353e4e] inline-block'>{review.offers}</h1>
              </Link>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Card;