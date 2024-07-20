import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

function Card() {
  const reviewData = [
    { poster: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV-3XO/11683/1714407830967/front-left-side-47.jpg?imwidth=420&impolicy=resize', cname: 'Mahindra XUV 3XO', price: 'Rs. 7.49 Lakh',showroomprice:'Avg Ex-Showroom Price', offers: 'Get more offers', link: '/topsuvcars' },
    { poster: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Urban-Cruiser-Taisor/11639/1712131241368/front-left-side-47.jpg?imwidth=247&impolicy=resize', cname: 'Mahindra XUV 3XO', price: 'Rs. 7.49 Lakh',showroomprice:'Avg Ex-Showroom Price', offers: 'Get more offers', link: '/topsuvcars' },
    { poster: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Punch/10681/1691392713058/front-left-side-47.jpg', cname: 'Tata Punch', price: 'Rs. 6.13 Lakh',showroomprice:'Avg Ex-Showroom Price', offers: 'Get more offers', link: '/topluxurycars' },
    { poster: 'https://media.zigcdn.com/media/model/2023/Jan/front-1-4-left-336740161_600x400.jpg', cname: 'Maruti Fronx', price: 'Rs. 7.51 Lakh',showroomprice:'Avg Ex-Showroom Price', offers: 'Get more offers', link: '/topcompactcars' },
    { poster: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/10406/1697698080681/front-left-side-47.jpg', cname: 'Maruti Swift', price: 'Rs. 6.49 Lakh',showroomprice:'Avg Ex-Showroom Price', offers: 'Get more offers', link: '/tophatchbackcars' },
    { poster: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/11104/1697698470038/front-left-side-47.jpg', cname: 'Tata Nexon', price: 'Rs. 8.00 Lakh',showroomprice:'Avg Ex-Showroom Price', offers: 'Get more offers', link: '/topluxurycars' },
    { poster: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg', cname: 'Mahindra Scorpio', price: 'Rs. 13.62 Lakh',showroomprice:'Avg Ex-Showroom Price', offers: 'Get more offers', link: '/topluxurycars' },
    { poster: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/C-Class/10858/1690452480264/front-left-side-47.jpg', cname: 'Mercedes-Benz C-Class', price: 'Rs. 61.85 Lakh',showroomprice:'Avg Ex-Showroom Price', offers: 'Get more offers', link: '/topluxurycars' },
    { poster: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/GLC/9132/1691570604368/front-left-side-47.jpg', cname: 'Mercedes-Benz GLC', price: 'Rs. 75.90 Lakh',showroomprice:'Avg Ex-Showroom Price', offers: 'Get more offers', link: '/topluxurycars' },
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
              <h1 className='pl-1 text-[13px] font-medium text-gray-800 '>{review.showroomprice}</h1>
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