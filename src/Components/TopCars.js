// import React from 'react';
// import { Link } from 'react-router-dom';

// let onwards="onwards";
// const Card = ({ content1,content2,content3,content4,content5,imageUrl }) => {
// return (
// <>
// <div className="border border-gray-300 rounded-lg overflow-hidden m-4 w-[322.66px] h-[300px] card">
// <form>
// <tr><img src={imageUrl} className="w-[320.66px] h-[200px] card-image p-[5%]" /></tr>
// <div style={{height:'100px',textAlign:'justify'}} className='p-[5%]'>
// <tr style={{fontSize:'15px',position:'relative',left:'10px'}}>{content1}</tr>
// <trstyle={{position:'relative',top:'3px',left:'10px',fontWeight:"bold",fontSize:'15px'}}>{content2} <labelstyle={{fontSize:'13px',color:'#616060',fontWeight:'light'}}>{onwards}</label></tr>
// <trstyle={{position:'relative',left:'7px',fontSize:'15px',outline:'none',border:'none'}}><buttonclassName='btn' style={{color:'#0288D1',backgroundColor:'#353e4e'}}>{content3}</button></tr>
// <tr style={{position:'relative',left:'0.1px',fontSize:'15px'}}><button className='btn'style={{color:'#0288D1'}}>{content4}</button></tr>
// <tr style={{position:'relative',right:'8px',fontSize:'15px'}}><button className='btn'style={{color:'#0288D1'}}>{content5}</button></tr>
// </div>
// </form>
// </div>
// {/* <div className='flex p-[5px]' style={{borderColor:'black'}}>

// <div className='flex flex-col bg-[#f2f2f2] border-slate-300 rounded-lg shadow-md w-[30%] m-6 '>

// <img src='https:imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80/' className='h-[70%]'/>

// <p className='pt-[5px] pl-[10px] pb-[5px]'>MG Hector</p>
// <p className='pt-[5px] pl-[10px] pb-[5px]'>Rs.15 Lakh</p>
// <a href='#' className='pt-[5px] pl-[10px] pb-[5px]'>show more</a>
// </div>

// <div className='flex flex-col bg-[#f2f2f2] border-slate-200 rounded-lg shadow-md w-[30%] m-6 '>

// <img src='https:imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80/' className='h-[70%]'/>

// <p className='pt-[5px] pl-[10px] pb-[5px]'>MG Hector</p>
// <p className='pt-[5px] pl-[10px] pb-[5px]'>Rs.15 Lakh</p>
// <a href='#' className='pt-[5px] pl-[10px] pb-[5px]'>show more</a>
// </div>

// <div className='flex flex-col bg-[#f2f2f2] border-slate-200 rounded-lg shadow-md w-[30%] m-6'>

// <img src='https:imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80/' className='h-[70%]'/>

// <p className='pt-[5px] pl-[10px] pb-[5px]'>MG Hector</p>
// <p className='pt-[5px] pl-[10px] pb-[5px]'>Rs.15 Lakh</p>
// <a href='#' className='pt-[5px] pl-[10px] pb-[5px]'>show more</a>

// </div>
// </div> */}
// </>
// );
// };

// export default Card;




// <-----------------------------------Card------------------------------------>



// import React from 'react'

// const Card = ({ content1, content2, content3, content4, content5, imageUrl }) => {
//     return (
//         <div className='font-[Poppins]'>

//             <div className='pt-12 bg-slate-30 min-h-[calc(100vh)]'>
//                 <div className="border border-gray-300 rounded-sm overflow-hidden m-4 w-[300px] h-[35 0px]
// p-[1px]">
//                     <div><img src={imageUrl} className="w-full h-[185px]" /></div>
//                     <div className='p-[5%]'>
//                         <div className='pt-2'>{content1}</div>
//                         <div className='pt-2 font-medium'>{content2}</div>
//                         <div className='text-center pt-2'><button className='border border-[#353e4e] hover:bg-gray-500 hover:text-white p-2 text-white rounded w-full bg-[#353e4e]' >{content3}</button></div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Card;

// import 'react-slideshow-image/dist/styles.css';
// import { Slide } from 'react-slideshow-image';
// import { Link } from 'react-router-dom';

// function Card() {
//   const reviewData = [
//     { poster: 'https://imgd.aeplcdn.com/272x153/cw/body/suv.jpg?v=1&q=80', name: 'Top SUVs in India', cname: 'Mahindra Scorpio, Mahindra XUV700', details: 'Get more Details' },
//     { poster: 'https://imgd.aeplcdn.com/272x153/cw/body/sedan.jpg?v=1&q=80', name: 'Top Sedans in India', cname: 'Hyundai Verna, Volkswagen Virtus', details: 'Get more Details' },
//     { poster: 'https://imgd.aeplcdn.com/272x153/cw/body/hatchbacks.jpg?v=1&q=80', name: 'Top Hatchbacks in India', cname: 'Maruti Suzuki Swift, Maruti Suzuki Baleno', details: 'Get more Details' },
//     { poster: 'https://imgd.aeplcdn.com/272x153/cw/body/suv.jpg?v=1&q=80', name: 'Top Compact SUVs in India', cname: 'Maruti Suzuki Swift, Maruti Suzuki Baleno', details: 'Get more Details' },
//     { poster: 'https://imgd.aeplcdn.com/272x153/cw/static/top-10-cars/m/luxury_msite.jpg?q=80', name: 'Top Luxury Cars in India', cname: 'MINI Cooper, BMW M4 Competition', details: 'Get more Details' },
//   ];

//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     duration: 2000,
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
//           <div key={index} className="mb-4 mx-8 bg-white shadow-lg flex flex-col justify-between"> {/* Added mx-2 for horizontal margin */}
//             <img src={review.poster} alt={review.sname} className='w-full' />
//               <h1 className='pt-3 pl-1 text-[17px] font-medium text-black '>{review.name}</h1>
//               <h1 className='pl-1 text-[14px] font-medium text-gray-500'>{review.cname}</h1>
//             <div className="text-center py-4">
//               <Link to='/topsuvcars'><h1 className='bg-[#353e4e] px-12 py-3 rounded text-[14px] font-medium text-white inline-block'>{review.details}</h1></Link>
//             </div>
//           </div>
//         ))}
//       </Slide>
//     </div>
//   );
// }

// export default Card;




import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
// import TopSuvCars from './pages/TopSuvCars'

function Card() {
  const reviewData = [
    { poster: 'https://imgd.aeplcdn.com/272x153/cw/body/suv.jpg?v=1&q=80', name: 'Top SUVs in India', cname: 'Mahindra XUV700', details: 'Get more Details', link: "/topsuvcars" },
    { poster: 'https://imgd.aeplcdn.com/272x153/cw/body/sedan.jpg?v=1&q=80', name: 'Top Sedans in India', cname: 'Hyundai Verna', details: 'Get more Details', link: '/topsedancars' },
    { poster: 'https://imgd.aeplcdn.com/272x153/cw/body/hatchbacks.jpg?v=1&q=80', name: 'Top Hatchbacks in India', cname: 'Maruti Suzuki Swift', details: 'Get more Details', link: '/tophatchbackcars' },
    { poster: 'https://imgd.aeplcdn.com/272x153/cw/body/suv.jpg?v=1&q=80', name: 'Top Compact SUVs in India', cname: 'Maruti Suzuki Swift', details: 'Get more Details', link: '/topcompactcars' },
    { poster: 'https://imgd.aeplcdn.com/272x153/cw/static/top-10-cars/m/luxury_msite.jpg?q=80', name: 'Top Luxury Cars in India', cname: 'BMW M4 Competition', details: 'Get more Details', link: '/topluxurycars' },
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
          <div key={index} className="mb-8 mx-8 bg-white shadow-lg flex flex-col justify-between"> {/* Added mx-2 for horizontal margin */}
            <img src={review.poster} alt={review.name} className='w-full' />
              <h1 className='pt-3 pl-1 text-[17px] font-medium text-black text-center '>{review.name}</h1>
              <h1 className='pl-1 text-[14px] font-medium text-gray-500 text-center'>{review.cname}</h1>
            <div className="text-center py-2">
              <Link to={review.link}>
                <h1 className='bg-[#353e4e] hover:border-2 border-[#353e4e] hover:bg-gray-100 hover:text-[#353e4e]  px-10 py-1 rounded text-[14px] font-medium text-white inline-block'>{review.details}</h1>
              </Link>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Card;