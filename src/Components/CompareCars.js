import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

function Card() {
  const reviewData = [
    {
      poster1: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV-3XO/11683/1714407830967/front-left-side-47.jpg?imwidth=420&impolicy=resize',
      poster2: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Urban-Cruiser-Taisor/11639/1712131241368/front-left-side-47.jpg?imwidth=247&impolicy=resize',
      cname1: 'Mahindra XUV 3XO',
      price1: 'Rs. 7.49 Lakh',
      showroomprice1: 'Avg-Exshowroom Price',
      cname2: 'Toyota Urban Cruiser Taisor',
      price2: 'Rs. 7.74 Lakh',
      showroomprice2: 'Avg-Exshowroom Price',
      compare: 'Compare Now',
      link: '/topsuvcars',
    },
    {
      poster1: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Punch/10681/1691392713058/front-left-side-47.jpg',
      poster2: 'https://media.zigcdn.com/media/model/2023/Jan/front-1-4-left-336740161_600x400.jpg',
      cname1: 'Tata Punch',
      price1: 'Rs. 6.13 Lakh',
      showroomprice1: 'Avg-Exshowroom Price',
      cname2: 'Maruti Fronx',
      price2: 'Rs. 7.51 Lakh',
      showroomprice2: 'Avg-Exshowroom Price',
      compare: 'Compare Now',
      link: '/topluxurycars',
    },
    {
      poster1: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/10406/1697698080681/front-left-side-47.jpg',
      poster2: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/11104/1697698470038/front-left-side-47.jpg',
      cname1: 'Maruti Swift',
      price1: 'Rs. 6.49 Lakh',
      showroomprice1: 'Avg-Exshowroom Price',
      cname2: 'Tata Nexon',
      price2: 'Rs. 8.00 Lakh',
      showroomprice2: 'Avg-Exshowroom Price',
      compare: 'Compare Now',
      link: '/topluxurycars',
    },
    {
      poster1: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg',
      poster2: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/GLC/9132/1691570604368/front-left-side-47.jpg',
      cname1: 'Mahindra Scorpio',
      price1: 'Rs. 13.62 Lakh',
      showroomprice1: 'Avg-Exshowroom Price',
      cname2: 'Mercedes-Benz GLC',
      price2: 'Rs. 75.90 Lakh',
      showroomprice2: 'Avg-Exshowroom Price',
      compare: 'Compare Now',
      link: '/topluxurycars',
    },
    {  
      poster1: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/C-Class/10858/1690452480264/front-left-side-47.jpg',
      poster2: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/GLC/9132/1691570604368/front-left-side-47.jpg',
      cname1: 'Mercedes-Benz GLC',
      price1: 'Rs. 75.90 Lakh',
      showroomprice1: 'Avg-Exshowroom Price',
      cname2: 'Mercedes-Benz C-Class',
      price2: 'Rs. 61.85 Lakh',
      showroomprice2: 'Avg-Exshowroom Price',
      compare: 'Compare Now',
      link: '/topluxurycars',
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
          <div key={index} className="mb-2 mx-4 bg-white border-2 border-gray-300 shadow-lg flex flex-col justify-bewtween rounded-lg ">
            <div className='flex flex-row items-center justify-center p-4'>
              <div className='w-1/2  p-4'>
                <img src={review.poster1} className='w-full h-auto' alt={review.cname1} />
                <h2 className='text-[11px] mt-2'>{review.cname1}</h2>
                <p className='text-[12px] text-gray-600'>{review.showroomprice1}</p>
                <p className='text-md text-gray-800'>{review.price1}</p>
              </div>
              <div className=' '>
                <div className='rounded-full bg-gray-700 text-white px-1.5 py-1'>VS</div>
              </div>
              <div className='w-1/2 p-4'>
                <img src={review.poster2} className='p-w-full h-auto' alt={review.cname2} />
                <h2 className='text-[11px] mt-2'>{review.cname2}</h2>
                <p className='text-[12px] text-gray-600'>{review.showroomprice2}</p>
                <p className='text-md text-gray-800'>{review.price2}</p>
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

// import 'react-slideshow-image/dist/styles.css';
// import { Slide } from 'react-slideshow-image';
// import { Link } from 'react-router-dom';

// function Card() {
//   const reviewData = [
//     { poster1: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV-3XO/11683/1714407830967/front-left-side-47.jpg?imwidth=420&impolicy=resize', cname1: 'Mahindra XUV 3XO',  price1: 'Rs. 7.49 Lakh', showroomprice1: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/topsuvcars' },
//     { poster1: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Urban-Cruiser-Taisor/11639/1712131241368/front-left-side-47.jpg?imwidth=247&impolicy=resize', cname1: 'Toyota Urban Cruiser Taisor', price1: 'Rs. 7.74 Lakh', showroomprice1: 'Avg-Exshowroom Price1',  compare: 'Compare Now', link: '/topsedancars' },
//     { poster1: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Punch/10681/1691392713058/front-left-side-47.jpg', cname1: 'Tata Punch', price1: 'Rs. 6.13 Lakh', showroomprice1: 'Avg-Exshowroom Price1',compare: 'Compare Now', link: '/topluxurycars' },
//     { poster1: 'https://media.zigcdn.com/media/model/2023/Jan/front-1-4-left-336740161_600x400.jpg', cname1: 'Maruti Fronx',  price1: 'Rs. 7.51 Lakh', showroomprice1: 'Avg-Exshowroom Price1',  compare: 'Compare Now', link: '/topcompactcars' },
//     { poster1: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/10406/1697698080681/front-left-side-47.jpg', cname1: 'Maruti Swift', price1: 'Rs. 6.49 Lakh', showroomprice1: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/tophatchbackcars' },
//     { poster1: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/11104/1697698470038/front-left-side-47.jpg', cname1: 'Tata Nexon', price1: 'Rs. 8.00 Lakh', showroomprice1: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/topluxurycars' },
//     { poster1: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg', cname1: 'Mahindra Scorpio', price1: 'Rs. 13.62 Lakh', showroomprice1: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/topluxurycars' },
//     { poster1: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/C-Class/10858/1690452480264/front-left-side-47.jpg', cname1: 'Mercedes-Benz C-Class', price1: 'Rs. 61.85 Lakh', showroomprice1: 'Avg-Exshowroom Price1', cname1: 'Mercedes-Benz C-Class', compare: 'Compare Now', link: '/topluxurycars' },
//     { poster1: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/GLC/9132/1691570604368/front-left-side-47.jpg', cname1: 'Mercedes-Benz GLC', price1: 'Rs. 75.90 Lakh', showroomprice1: 'Avg-Exshowroom Price1',  compare: 'Compare Now', link: '/topluxurycars' },
//     { poster1: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/GLC/9132/1691570604368/front-left-side-47.jpg', cname1: 'Mercedes-Benz GLC', price1: 'Rs. 75.90 Lakh', showroomprice1: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/topluxurycars' },
//     //<-----------------------------------P O S T E R 2-------------------------------------------->
//     { poster2: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV-3XO/11683/1714407830967/front-left-side-47.jpg?imwidth=420&impolicy=resize',cname1: 'Mahindra XUV 3XO',  cname2: 'Mahindra XUV 3XO', price2: 'Rs. 7.49 Lakh', showroomprice2: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/topsuvcars' },
//     { poster2: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Urban-Cruiser-Taisor/11639/1712131241368/front-left-side-47.jpg?imwidth=247&impolicy=resize',cname2: 'Toyota Urban Cruiser Taisor', price2: 'Rs. 7.74 Lakh', showroomprice2: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/topsedancars' },
//     { poster2: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Punch/10681/1691392713058/front-left-side-47.jpg',  cname2: 'Tata Punch',price2: 'Rs. 6.13 Lakh', showroomprice2: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/topluxurycars' },
//     { poster2: 'https://media.zigcdn.com/media/model/2023/Jan/front-1-4-left-336740161_600x400.jpg', cname2: 'Maruti Fronx',  price2: 'Rs. 7.51 Lakh', showroomprice2: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/topcompactcars' },
//     { poster2: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/10406/1697698080681/front-left-side-47.jpg',  cname2: 'Maruti Swift', compare: 'Compare Now', link: '/tophatchbackcars' },
//     { poster2: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/11104/1697698470038/front-left-side-47.jpg',  cname2: 'Tata Nexon', price2: 'Rs. 8.00 Lakh', showroomprice2: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/topluxurycars' },
//     { poster2: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg',  cname2: 'Mahindra Scorpio', price2: 'Rs. 13.62 Lakh', showroomprice2: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/topluxurycars' },
//     { poster2: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/C-Class/10858/1690452480264/front-left-side-47.jpg',  price2: 'Rs. 61.85 Lakh', showroomprice2: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/topluxurycars' },
//     { poster2: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/GLC/9132/1691570604368/front-left-side-47.jpg',  cname2: 'Mercedes-Benz GLC', price2: 'Rs. 75.90 Lakh', showroomprice2: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/topluxurycars' },
//     { poster2: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/GLC/9132/1691570604368/front-left-side-47.jpg', cname2: 'Mercedes-Benz GLC', price2: 'Rs. 75.90 Lakh', showroomprice2: 'Avg-Exshowroom Price1', compare: 'Compare Now', link: '/topluxurycars' },
//   ];

//   const settings = {
//     infinite: true,
//     slidesToShow: 2,
//     duration: 200000,
//   };

//   const customArrows = (
//     <div style={{ display: 'none' }}>
//       {/* Hide the default navigation arrows */}
//       <span>&#60;</span>
//       <span>&#62;</span>
//     </div>
//   );

//   return (
//     <div className="mx-auto max-w-6xl ">
//       <Slide {...settings} prevArrow={customArrows} nextArrow={customArrows}>
//         {reviewData.map((review, index) => (
//           <div key={index} className="mb-4 mx-8 bg-white shadow-lg flex flex-col ">
//             <div className='flex flex-row items-center justify-center'>
//                 <img src={review.poster1} className='w-1/2' />
//                 <div className='rounded-full bg-[#353e4e] text-white px-2 py-1'>vs</div>
//                 <img className='w-1/2' src={review.poster2}/>
//             </div>
//             <div className='flex flex-row m-1'>
//               <div className='w-1/2 pt-3'>
//                 <h1 className='pt-3 pl-1 text-[17px] font-medium text-black '>{review.cname1}</h1>
//                 <h1 className='pl-1 text-[13px] font-medium text-gray-800 '>{review.showroomprice1}</h1>
//                 <h1 className='pl-1 text-[14px] font-medium text-gray-500 '>{review.price1}</h1>
//               </div>
//               <div className='w-1/2 text-right pt-3'>
//                 <h1 className='pt-3 pr-1 text-[17px] font-medium text-black '>{review.cname2}</h1>
//                 <h1 className='pr-1 text-[13px] font-medium text-gray-800 '>{review.showroomprice2}</h1>
//                 <h1 className='pr-1 text-[14px] font-medium text-gray-500 '>{review.price2}</h1>
//               </div>
//             </div>
//             <div className="text-center py-2"><br/>
//               <Link to={review.link}>
//                 <h1 className='border-2 border-[#45b3e0] hover:bg-[#45b3e0] hover:text-white px-40 py-3 rounded text-[14px] text-[#45b3e0] inline-block mb-3'>{review.compare}</h1>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </Slide>
//     </div>
//   );
// }

// export default Card;


