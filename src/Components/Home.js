import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Card from './TopCars';
import Images from '../Images/Car1.jpg';
import { Link } from 'react-router-dom';
import FeaturedCars from './FeaturedCars'
import CompareCars from './CompareCars'
import Footer from './Footer';
import Header2 from './Header2'
import LiveChat from './LiveChat';
import SuzukiCars from '../Cars/SuzukiCars';
// import { IoIosSearch } from 'react-icons/io';
// import Slider from 'react-slick';
// import Reviews from '../pages/Reviews';
// import { FaArrowRightLong } from "react-icons/fa6";
// import SkodaCars from '../pages/SkodaCars'
// import SliderCards from './SliderCards'
// import TopSuvCars from '../pages/TopSuvCars';
// import CardSlider from './CarSlider';

function Home() {
  //   const cardsData = [
  //     {
  //         content1: 'Content 1',
  //         content2: 'Content 2',
  //         content3: 'Content 3',
  //         content4: 'Content 4',
  //         content5: 'Content 5',
  //         imageUrl: 'https://via.placeholder.com/300x185'
  //     },
  //     // Add more card data as needed
  // ];

  const [showRow, setShowRow] = useState(false);
  const toggleRow = () => {
    setShowRow(!showRow);
  };

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (showContent) {
      document.body.style.overflow = 'hidden';
    } else {

      document.body.style.overflow = 'auto';
    }
  }, [showContent]);

  const [showContent1, setShowContent1] = useState(false);
  const toggleContent = () => {
    setShowContent1(!showContent1);
  };

  const Brands = (
    <div className=''>
      <div className='overflow-x-auto'>
        <table className="border-collapse border border-slate-500 " width='100%'>
          <tr className='' align='center'>
            <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><Link to='/skoda'><img src='https://www.carlogos.org/car-logos/skoda-logo.png'
                width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-
50'>Skoda</label></Link></td>
            <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><Link to='/suzukicars'><img src='https://www.carlogos.org/car-logos/suzuki-logo.png'
                width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50
'>Suzuki</label></Link></td>
            <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><Link to='/tata'><img src='https://www.carlogos.org/car-logos/tata-logo.png'
                width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50
'>Tata</label></Link></td>
            <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><Link to='/feedbackform'><img src='https://www.carlogos.org/car-logos/hyundai-logo.png'
                width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50
'>Hyundai</label></Link></td>

            <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://1000logos.net/wp-content/uploads/2020/04/Mahindra-Logo.png'
                width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Mahindra</label></td>
            <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-

[16px]'><img src='https://www.financialexpress.com/wp-content/uploads/2021/01/Kia-new-
logo_black_.jpg ' width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50

'>Kia</label></td>
          </tr>
          <tr className='' align='center'>
            <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://www.carlogos.org/car-logos/toyota-logo.png ' width="60"
                height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Toyota</label></td>
            <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://www.carlogos.org/car-logos/mg-logo.png' width="60"
                height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Mg</label></td>
            <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://www.carlogos.org/car-logos/honda-logo.png' width="60"
                height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Honda</label></td>

            <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://www.carlogos.org/car-logos/ferrari-logo.png' width="60"
                height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Ferrari</label></td>
            <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://www.carlogos.org/car-logos/bmw-logo.png' width="60"
                height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>BMW</label></td>
            <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://www.carlogos.org/car-logos/volkswagen-logo.png' width="60"
                height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Volkswagon</label></td>
          </tr>
          {showRow && (
            <>
              <tr className='' align='center'>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-

[16px]'><img src='https://cdn4.vectorstock.com/i/1000x1000/74/83/porsche-logo-brand-car-
symbol-with-name-vector-46127483.jpg' width="50.41" height="40" /><label className='text-

[13px] text-[#6f6f6f]-50 '>Porsche</label></td>

                <td className='cursor-pointer border border-slate-700 pr-[23.55px] pl-[23.55px] pt-[16px] pb-

[16px]'><img src='https://imgd.aeplcdn.com/0X0/n/cw/ec/11/brands/logos/mercedes-
benz.jpg?v=1629973270530&q=80' width="60" height="40" /><label className='text-[13px] text-

[#6f6f6f]-50 '>Mercedes-Benz</label></td>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://1000logos.net/wp-content/uploads/2018/03/Lamborghini-logo.png'
                    width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50
'>Lamborghini</label></td>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://logos-world.net/wp-content/uploads/2021/09/Jeep-Logo.png'
                    width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Jeep</label></td>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img
                    src='https://imgd.aeplcdn.com/0X0/n/cw/ec/37/brands/logos/volvo.jpg?v=1641478299001&q=80'
                    width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Volvo</label></td>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://listcarbrands.com/wp-content/uploads/2016/03/Jaguar-Logo-2012.png'
                    width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Jaguar</label></td>
              </tr>

              <tr className='' align='center'>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-

[16px]'><img src='https://imgd.aeplcdn.com/0X0/n/cw/ec/23/brands/logos/land-
rover1647236056893.jpg?v=1647236057234&q=80' width="50.41" height="40" /><label

                    className='text-[13px] text-[#6f6f6f]-50 '>Land Rover</label></td>
                <td className='cursor-pointer border border-slate-700 pr-[23.55px] pl-[23.55px] pt-[16px] pb-
[16px]'><img
                    src='https://imgd.aeplcdn.com/0X0/n/cw/ec/18/brands/logos/audi.jpg?v=1630055874070&q=80'
                    width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Audi</label></td>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://imgd.aeplcdn.com/0X0/cw/brands/logos/lexus.png?v=10&q=80'
                    width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Lexus</label></td>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img
                    src='https://imgd.aeplcdn.com/0X0/n/cw/ec/21/brands/logos/nissan.jpg?v=1631163973143&q=80'
                    width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Nissan</label></td>

                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img
                    src='https://imgd.aeplcdn.com/0X0/n/cw/ec/74/brands/logos/citroen1649763818937.jpg?v=16497
63819072&q=80' width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50
'>Citroen</label></td>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img
                    src='https://imgd.aeplcdn.com/0X0/n/cw/ec/45/brands/logos/renault.jpg?v=1630057266767&q=80
' width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Renault</label></td>
              </tr>

              <tr className='' align='center'>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-

[16px]'><img src='https://imgd.aeplcdn.com/0X0/n/cw/ec/25/brands/logos/rolls-
royce.jpg?v=1631164135042&q=80' width="50.41" height="40" /><label className='text-[13px]

text-[#6f6f6f]-50 '>Rolls-Royce</label></td>
                <td className='cursor-pointer border border-slate-700 pr-[23.55px] pl-[23.55px] pt-[16px] pb-
[16px]'><img src='https://imgd.aeplcdn.com/0X0/cw/brands/logos/mini.png?v=10&q=80'
                    width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Mini</label></td>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img
                    src='https://imgd.aeplcdn.com/0X0/n/cw/ec/77/brands/logos/mclaren1649762557086.jpg?v=16497
62557267&q=80' width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50
'>McLaren</label></td>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://imgd.aeplcdn.com/0X0/cw/brands/logos/bugatti.png?v=10&q=80'
                    width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Bugatti</label></td>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://imgd.aeplcdn.com/0X0/cw/brands/logos/force-moto₹png?v=10&q=80'
                    width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Force
                      Motors</label></td>
                <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
[16px]'><img src='https://imgd.aeplcdn.com/0X0/cw/brands/logos/aston-martin.png?v=10&q=80'
                    width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Aston
                      Martin</label></td>
              </tr>
            </>

          )}
          <tr className=''>
            <td colSpan="6" align='center'>
              <button
                className=' text-[#0288D1] pt-[10px] pb-[10px] text-[13px] '
                onClick={() => {
                  setShowRow(!showRow);
                }}
              >
                {showRow ? 'View Less Brands' : 'View More Brands'}
              </button></td></tr>
        </table>
      </div>
    </div>
  );

  // const Budget = [

  //   <table className='border border-slate-500'>
  //     <tr>
  //       <label>
  //         <button><label>Under 5 Lakh</label></button>
  //       </label>
  //       <label>
  //         <button><label>Under 7 Lakh</label></button>
  //       </label>
  //       <label>

  //         <button><label>Under 10 Lakh</label></button>
  //       </label>
  //     </tr>
  //     <tr>
  //       <label>
  //         <button><label>Under 15 Lakh</label></button>
  //       </label>
  //       <label>
  //         <button><label>Under 20 Lakh</label></button>
  //       </label>
  //       <label>
  //         <button><label>Under 30 Lakh</label></button>
  //       </label>
  //     </tr>
  //   </table>
  // ]
  // let onwards = [
  //   <b>onwards</b>
  // ];

//   const Trending = [
//     <table className="border-collapse border border-slate-500 " width='100%'>
//       <tr className='' align='center'>
//         <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
// [16px]'><Link to='/skodacars'><img src='https://www.carlogos.org/car-logos/skoda-logo.png' width="60"
//             height="40" /><label className='text-[13px] text-[#6f6f6f]-50'>Skoda</label></Link>
//         </td>

//         <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
// [16px]'><img src='https://www.carlogos.org/car-logos/suzuki-logo.png' width="60"
//             height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Suzuki</label></td>
//         <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
// [16px]'><img src='https://www.carlogos.org/car-logos/tata-logo.png' width="60"
//             height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Tata</label></td>
//         <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
// [16px]'><img src='https://www.carlogos.org/car-logos/hyundai-logo.png' width="60"
//             height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Hyundai</label></td>
//         <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-
// [16px]'><img src='https://1000logos.net/wp-content/uploads/2020/04/Mahindra-Logo.png'
//             width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50 '>Mahindra</label></td>
//         <td className='cursor-pointer border border-slate-700 pr-[52px] pl-[52px] pt-[16px] pb-

// [16px]'><img src='https://www.financialexpress.com/wp-content/uploads/2021/01/Kia-new-
// logo_black_.jpg ' width="60" height="40" /><label className='text-[13px] text-[#6f6f6f]-50

// '>Kia</label></td>
//       </tr>
//     </table>

//     // <form><td>

//     // <Card

//     // imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80/"

//     // content1="MG Hector"
//     // content2='₹15 Lakh</label>'
//     // content3='show more details'
//     // />
//     // </td><td>
//     // <Card

//     // imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"

//     // content1="Mahindra XUV700"
//     // content2='₹14.02 Lakh</label>'
//     // content3='show more details'
//     // />
//     // </td><td>
//     // <Card

//     // imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80"

//     // content1="Toyota Fortuner"
//     // content2='₹33.43 Lakh</label>'
//     // content3='show more details'
//     // />
//     // </td>
//     // </form>
//   ]

  const budgetButtonRef = useRef(null);

  useEffect(() => {
    if (budgetButtonRef.current) {
      budgetButtonRef.current.focus();
    }
  }, []);

  const trendingButtonRef = useRef(null);

  useEffect(() => {
    if (trendingButtonRef.current) {
      trendingButtonRef.current.focus();
    }
  }, []);

  // const [showBudgetTable, setShowBudgetTable] = useState(Budget);
  // const [showBodyTable, setShowBodyTable] = useState(false);
  // const [showFuelTable, setShowFuelTable] = useState(false);
  // const [showTransmissionTable, setShowTransmissionTable] = useState(false);
  // const [showSeatingTable, setShowSeatingTable] = useState(false);
  // const [showTrendingCars, setShowTrendingCars] = useState(Trending);
  // const [showPopularCars, setShowPopularCars] = useState(false);

  // const handleEvent = (e) => {
  //   e.preventDefault(7000);
  // };
  // const displayBudgetTable = (e) => {
  //   e.preventDefault();
  //   setShowBudgetTable(true);
  // };

  // const hideBudgetTable = () => {
  //   setShowBudgetTable(false);
  // };

  // const displayBodyTable = (e) => {
  //   e.preventDefault();
  //   setShowBodyTable(true);
  // };

  // const hideBodyTable = () => {
  //   setShowBodyTable(false);
  // };

  // const displayFuelTable = (e) => {
  //   e.preventDefault();
  //   setShowFuelTable(true);
  // };

  // const hideFuelTable = () => {
  //   setShowFuelTable(false);
  // };

  // const displayTransmissionTable = (e) => {
  //   e.preventDefault();
  //   setShowTransmissionTable(true);
  // };

  // const hideTransmissionTable = () => {
  //   setShowTransmissionTable(false);
  // };

  // const displaySeatingTable = (e) => {
  //   e.preventDefault();
  //   setShowSeatingTable(true);
  // };

  // const hideSeatingTable = () => {
  //   setShowSeatingTable(false);
  // };
  // //Featured Cars
  // const displayTrendingCars = (e) => {
  //   e.preventDefault();
  //   setShowTrendingCars(true);
  // };

  // const hideTrendingCars = () => {
  //   setShowTrendingCars(false);
  // };
  // const displayPopularCars = (e) => {
  //   e.preventDefault();
  //   setShowPopularCars(true);
  // };

  // const hidePopularCars = () => {
  //   setShowPopularCars(false);
  // };

  // const displayTable = (tableType) => {
  //   setShowBudgetTable(true);
  //   setShowBodyTable(false);
  //   setShowFuelTable(false);
  //   setShowTransmissionTable(false);
  //   setShowSeatingTable(false);
  //   setShowTrendingCars(true);
  //   setShowPopularCars(false);

  //   switch (tableType) {

  //     case 'body':
  //       setShowBodyTable(true);
  //       setShowBudgetTable(false);
  //       break;
  //     case 'fuel':
  //       setShowFuelTable(true);
  //       setShowBudgetTable(false);
  //       break;
  //     case 'transmission':
  //       setShowTransmissionTable(true);
  //       setShowBudgetTable(false);
  //       break;
  //     case 'seating':
  //       setShowSeatingTable(true);

  //       setShowBudgetTable(false);
  //       break;
  //     case 'popular':
  //       setShowPopularCars(true);
  //       setShowTrendingCars(false);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer`}
        style={{ ...style, background: "black", zIndex: 10 }}
        onClick={onClick}
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer`}
        style={{ ...style, background: "black", zIndex: 10 }}
        onClick={onClick}
      >
        <svg

          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='font-[Poppins]'>
      <Header />
      <div className='pt-[4.1%]'>
        <Header2 />
      </div>


      <div className='pl-[15%] pr-[15%] pt-28 bg-slate-30 min-h-[calc(100vh)]'>
        <div className="w-full h-100 relative">
          <img src={Images} alt="Your Alt Text" className="w-full h-auto" />
          <div className="absolute top-2 px-4 py-3 text-container">
            <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#ff9900] font-bold '>
              Buying Your Dream Car?<br />Check Now!
            </p>
          </div>
        </div>


        {/* <div className='pt-[50px]'>
          <Car/>
        </div> */}



        <p className='pt-[50px] text-[20px] font-medium'>New Cars</p>
        <p className='pt-[15px] text-justify text-[#424242]'>Are you planning on buying a new car?
          Well, we know that with so many car options available out there, it gets really difficult to find a good
          car which suits your need. Hence, we have put together a complete list of new ca₹ Maruti Suzuki,
          Tata and Hyundai are the 3 most popular car brands.
          These popular car brands cater to a wide spectrum of budgets and needs, offering a variety of
          cars from fuel-efficient hatchbacks to spacious SUVs. The 5 most popular cars are Maruti Suzuki
          Fronx, Mahindra Scorpio N, Tata Punch, Mahindra Thar and Hyundai Creta.
          Explore the complete list of cars by exploring different brands or by applying multiple filters
          such as budget, fuel type, body type etc. You can find the car that suits you best from the list of cars
          below.<br />
          {showContent1 && (
            <>
              <p className='pt-[50px] text-[17px] font-medium text-black'>New Cars in India with
                Prices</p><br />
              <div className='overflow-x-auto text-black'>

                <table className="border-collapse border border-slate-500 " width='100%'>
                  <tr className='bg-gray-200' align='left'>
                    <td className='cursor-pointer border border-slate-700 px-6 py-2'>Model</td>
                    <td className='cursor-pointer border border-slate-700 px-6 py-2'>Price</td>
                  </tr>
                  <tr className='' align='left' >
                    <td className='cursor-pointer border border-slate-700 px-6 py-2'>Land Rover Range Rover
                      Evoque</td>
                    <td className='cursor-pointer border border-slate-700 px-6 py-2'>₹ 67.90 Lakh*</td>
                  </tr>
                  <tr className='' align='left' >
                    <td className='cursor-pointer border border-slate-700 px-6 py-2'>Citroen C3 Aircross</td>
                    <td className='cursor-pointer border border-slate-700 px-6 py-2'>₹ 9.99 - 13.85 Lakh*</td>
                  </tr>
                  <tr className='' align='left' >
                    <td className='cursor-pointer border border-slate-700 px-6 py-2'>Land Rover Defender</td>
                    <td className='cursor-pointer border border-slate-700 px-6 py-2'>₹ 93.55 Lakh - 2.35 Cr*</td>
                  </tr>
                  <tr className='' align='left' >
                    <td className='cursor-pointer border border-slate-700 px-6 py-2'>Porsche Macan EV</td>
                    <td className='cursor-pointer border border-slate-700 px-6 py-2'>₹ 1.65 Cr*</td>
                  </tr>
                  <tr className='' align='left' >
                    <td className='cursor-pointer border border-slate-700 px-6 py-2'>Citroen eC3</td>
                    <td className='cursor-pointer border border-slate-700 px-6 py-2'>₹ 11.61 - 13.35 Lakh*</td>
                  </tr>
                </table>
              </div>

            </>
          )}
          <button
            className=' text-[#0288D1] pt-[10px] pb-[10px] text-[17px] '
            onClick={() => {
              setShowContent1(!showContent1);
            }}
          >
            {showContent1 ? 'View Less' : 'View More'}
          </button>
        </p><br /><br />
        <div className='border-slate-300 '>
          <p className='text-[20px] font-medium'>ALL Brands</p>
          <div className='text-justify text-[#424242] pt-[15px] '>{Brands}</div>
        </div><br /><br />

        <div className='border-slate-300 '>
          <p className='text-[20px] font-medium'>Featured Cars</p>
          <div className='text-justify text-[#424242] pt-[15px] text-center'>
            <FeaturedCars />
          </div>
        </div><br /><br />

        <div className='border-slate-300'>
          <p className='text-[20px] font-medium'>Top Cars in India</p>
          <div className='text-justify text-[#424242] pt-[15px] '>
            <div className=''>
              <Card />
              {/* <CardSlider cards={cardsData} /> */}

            </div>
          </div><br /><br />

          <div className='border-slate-300 '>
            <p className='text-[20px] font-medium'>Compare Cars</p>
            <div className='text-justify text-[#424242] pt-[15px] text-center'>
              <CompareCars />
            </div>
          </div><br /><br />



          <div className='border-slate-300 '>
            <p className='text-[20px] font-medium '>Tools You May Needed</p>
            <div className='pt-[15px]'>
              <table class="border-collapse border border-slate-500 w-full">
                <tr>
                  <Link to='/loan'><td class="cursor-pointer border border-slate-700 p-8 flex items-center space-x-4">
                    <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/car-loans-02.svg" class="w-12" />
                    <div>
                      <span class="block font-semibold text-lg">Instant Car Loan</span>
                      <span class="block text-sm text-gray-600">Apply and Get Best Car Loan Offers within minutes</span>
                    </div>
                  </td></Link>
                  <Link to='/locatedealer'><td class="cursor-pointer border border-slate-700 p-8 flex items-center space-x-4">
                    <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/locate-dealer.svg" class="w-12" />
                    <div>
                      <span class="block font-semibold text-lg">Locate Dealer</span>
                      <span class="block text-sm text-gray-600">Find a dealer near your current location</span>
                    </div>
                  </td></Link>
                </tr>
                <tr>
                <Link to='/usersreviews'><td class="cursor-pointer border border-slate-700 p-8 flex items-center space-x-4">
                    <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/user-reviews-2.svg" class="w-12" />
                    <div>
                      <span class="block font-semibold text-lg">Users Reviews</span>
                      <span class="block text-sm text-gray-600">Read user reviews of the car of your choice</span>
                    </div>
                  </td></Link>
                  <Link to='/usedcare'><td class="cursor-pointer border border-slate-700 p-8 flex items-center space-x-4">
                    <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/used-car.svg" class="w-12" />
                    <div>
                      <span class="block font-semibold text-lg">Explore Used Cars</span>
                      <span class="block text-sm text-gray-600">Explore best priced used cars in good conditions near you</span>
                    </div>
                  </td></Link>
                </tr>
              </table>

            </div>
          </div><br /><br />
          <LiveChat/>





          {/* ---------------------------CAR CHOICE----------------------- */}

          {/* <p className='text-[20px] font-medium'>Find The Cars Of Your Choice</p>
          <p className='pt-[3%] text-[17px] font-medium'>Search Cars By Price</p>
          <p className='pt-[3%] text-[15px] font-medium'>
            <ul className='flex gap-[3%] cursor-pointer'>
              <li className=''>1-5 Lakh</li>
              <li>6-10 Lakh</li>
              <li>11-20 Lakh</li>
              <li>20-30 Lakh</li>
              <li>31-60 Lakh</li>
              <li>60 Lakh-1 Crore</li>
              <li>Above 1 Crore</li>

            </ul>
          </p> */}
          {/* ------------------------CAR CHOICE------------------------- */}

          {/* <div className=''>
            <Slider {...settings}>
              <Card

                imagesUrl="https://stimg.cardekho.com/imagess/carexteriorimagess/630x420/Maruti/Alto-
K10/10331/1687349000534/front-left-side-47.jpg"

                content1="Maruti Alto K10"
                content2='₹ 3.99 - 5.96 Lakh*'
                content3='show more details'
              />
              <Card

                imagesUrl="https://stimg.cardekho.com/imagess/carexteriorimagess/630x420/Renault/KWID/10076/1
705905595853/front-left-side-47.jpg?tr=w-664"
                content1="Renault KWID"
                content2='₹ 4.70 - 6.45 Lakh*'
                content3='show more details'
              />
              <Card

                imagesUrl="https://stimg.cardekho.com/imagess/carexteriorimagess/630x420/Maruti/Alto-
800/10327/1687348176706/front-left-side-47.jpg"

                content1="Maruti Alto"
                content2='₹ 3.54 - 5.13 Lakh*'
                content3='show more details'
              />
              <Card

                imagesUrl="https://stimg.cardekho.com/imagess/carexteriorimagess/630x420/Bajaj/RE60/6895/16617
62401874/front-left-side-47.jpg?tr=w-664"
                content1="Bajaj Qute (RE60)"
                content2='Rs3.61 Lakh*'
                content3='show more details'
              />
              <div className='text-white bg-[#353e4e] rounded-full w-0'>
                <FaArrowRightLong />
              </div>
              <Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/54399/swift-exterior-right-front-three-
quarter-64.jpeg?isig=0&q=80"

content1="Maruti Suzuki Swift"
content2='₹ 5.99 Lakh*'
content3='show more details'
/>
<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-front-
three-quarter-71.jpeg?isig=0&q=80"

content1="Tata Nexon"
content2='₹ 8.10 Lakh*'
content3='show more details'
/>
<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-front-
three-quarter-71.jpeg?isig=0&q=80"

content1="Tata Nexon"
content2='₹ 8.10 Lakh*'

content3='show more details'
/>
            </Slider>
          </div> */}
          {/* <Slider>
<div>
<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/54399/swift-exterior-right-front-three-
quarter-64.jpeg?isig=0&q=80"

content1="Maruti Suzuki Swift"
content2='₹ 5.99 Lakh'
content3='show more details'
/>
</div>

<div>
<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-front-
three-quarter-71.jpeg?isig=0&q=80"

content1="Tata Nexon"
content2='₹ 8.10 Lakh'
content3='show more details'
/>
</div>
<div>
<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/112947/wagon-r-2022-exterior-right-
front-three-quarter-3.jpeg?isig=0&q=80"

content1="Maruti Suzuki WagonR"

content2='₹ 5.55 Lakh'
content3='show more details'
/>
</div>
</Slider>

<p className='pt-[3%] text-[17px] font-medium'>Search Cars By Body Type</p>
<p className='pt-[3%] text-[15px] font-medium'>
<ul className='flex gap-[3%] cursor-pointer'>
<li>SUV</li>
<li>Hatchback</li>
<li>Sedan</li>
<li>20-30 Lakh</li>
<li>MUV</li>
<li>Luxury</li>
</ul>
</p>
<Slider>
<div className='flex-row items-center'>
<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/54399/swift-exterior-right-front-three-
quarter-64.jpeg?isig=0&q=80"

content1="Maruti Suzuki Swift"
content2='₹ 5.99 Lakh'
content3='show more details'
/>
</div>
<div>

<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-front-
three-quarter-71.jpeg?isig=0&q=80"

content1="Tata Nexon"
content2='₹ 8.10 Lakh'
content3='show more details'
/>
</div>
<div>
<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/112947/wagon-r-2022-exterior-right-
front-three-quarter-3.jpeg?isig=0&q=80"

content1="Maruti Suzuki WagonR"
content2='₹ 5.55 Lakh'
content3='show more details'
/>
</div>
</Slider> */}

          {/* <p className='pt-[15px] flex gap-[5%] text-justify text-[#353E4E] font-medium'>
<label className='cursor-pointer'>BUDGET</label>
<label className='cursor-pointer'>BODY TYPE</label>
<label className='cursor-pointer'>FUEL TYPE</label>
<label className='cursor-pointer'>TRANSMISSION</label>
<label className='cursor-pointer'>SEATING CAPACITY</label>
</p>

<p className='pt-[30px]'>
<div className='overflow-x-auto text-black'>
<table className="border-collapse border border-slate-500 bg-gray-50" width='100%'>
<tr className=''>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 5 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 6 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 7 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 8 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 10 Lakh</label></td>

</tr>
<tr>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 15 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 20 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 25 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 30 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Luxury Cars</label></td>

</tr>
</table>
</div>

</p>

<p className='pt-[30px]'>
<div className='overflow-x-auto text-black'>
<table className="border-collapse border border-slate-500 bg-gray-50" width='100%'>
<tr className='' align='center'>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/suv_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50'>SUV</label></td>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/sedan_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>Sedan</label></td>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/hatchback_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>Hatchback</label></td>
</tr>

<tr className='' align='center'>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/suv_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50'>Compact SUV</label></td>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/compactsedan_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>Compact Sedan</label></td>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/suv_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>MUV</label></td>
</tr>

<tr className='' align='center'>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/convertible_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50'>Convertible</label></td>

<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/coupe_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>Coupe</label></td>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/wagon_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>Station Wagon</label></td>
</tr>
</table>
</div>
</p>

<p className='pt-[30px]'>
<div className='overflow-x-auto text-black'>
<table className="border-collapse border border-slate-500 bg-gray-50" width='100%'>
<tr className='' align='center'>
<td className='border border-slate-700 p-[25px] rounded-[50%7'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/petrol.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50'>PETROL</label></td>
<td className='border border-slate-700 p-[25px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/diesel.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>DIESEL</label></td>
<td className='border border-slate-700 p-[25px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/cng.svg?v=1' width="70" height="50"/><br/><label
className='text-[15px] text-[#6f6f6f]-50 '>CNG</label></td>
</tr>

<tr className='' align='center'>
<td className='border border-slate-700 p-[25px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/electric.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50'>ELECTRIC</label></td>
<td className='border border-slate-700 p-[25px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/h-filter-without-background.svg?v=2' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>HYBRID</label></td>

<td className='border border-slate-700 p-[25px]'></td>
</tr>
</table>
</div>
</p>

<p className='pt-[30px]'>
<div className='overflow-x-auto text-black'>
<table className="border-collapse border border-slate-500 bg-gray-50" width='100%'>
<tr className='' align='center'>
<td className='border border-slate-700 p-[15px] rounded-[50%7'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/petrol.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50'>PETROL</label></td>
<td className='border border-slate-700 p-[15px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/diesel.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>DIESEL</label></td>
<td className='border border-slate-700 p-[50px]'></td>
</tr>
</table>
</div>
</p>

<p className='pt-[15px] text-justify text-[#424242]'>Are you planning on buying a new car? Well,
we know that with so many car options available out there, it gets really difficult to find a good car
which suits your need. Hence, we have put together a complete list of new ca₹ Maruti Suzuki, Tata
and Hyundai are the 3 most popular car brands.
These popular car brands cater to a wide spectrum of budgets and needs, offering a variety of
cars from fuel-efficient hatchbacks to spacious SUVs. The 5 most popular cars are Maruti Suzuki
Fronx, Mahindra Scorpio N, Tata Punch, Mahindra Thar and Hyundai Creta.

Explore the complete list of cars by exploring different brands or by applying multiple filters
such as budget, fuel type, body type etc. You can find the car that suits you best from the list of cars
below.<br/>
</p> */}

          {/*
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAA */}

          {/* <p className='pt-[15px] flex gap-[10%] text-[#424242]'>
<label ref={budgetButtonRef} onClick={(e) => {
handleEvent(e);
displayTable("budget");
}} className='cursor-pointer'>BUDGET</label>

<label className='cursor-pointer' onClick= {(e) => { handleEvent(e); displayTable('body');}} >
BODY TYPE
</label>
<label className='cursor-pointer' onClick={(e)=> {handleEvent(e); displayTable('fuel');}}>
FUEL TYPE
</label>
<label className='cursor-pointer' onClick={(e)=> {handleEvent(e); displayTable('transmission');}}>
TRANSMISSION
</label>
<label className='cursor-pointer' onClick={(e)=> {handleEvent(e); displayTable('seating');}}>

SEATING CAPACITY
</label>
</p> */}
          <br />
          {/* <p className=''>

{showBudgetTable && (
<div className='overflow-x-auto text-black'>
<table className="border-collapse border border-slate-500 bg-gray-50" width='100%'>
<tr className=''>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 5 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 6 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 7 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 8 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 10 Lakh</label></td>

</tr>
<tr>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 15 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 20 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 25 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Under 30 Lakh</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>Luxury Cars</label></td>

</tr>
</table>
</div>
)}

{showBodyTable && (
<div className='overflow-x-auto text-black'>
<table className="border-collapse border border-slate-500 bg-gray-50" width='100%'>
<tr className='' align='center'>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/suv_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50'>SUV</label></td>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/sedan_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>Sedan</label></td>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/hatchback_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>Hatchback</label></td>
</tr>

<tr className='' align='center'>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/suv_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50'>Compact SUV</label></td>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/compactsedan_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>Compact Sedan</label></td>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/suv_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>MUV</label></td>
</tr>

<tr className='' align='center'>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/convertible_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50'>Convertible</label></td>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/coupe_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>Coupe</label></td>
<td className='border border-slate-700 p-[30px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/body/svg/wagon_clr.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>Station Wagon</label></td>
</tr>
</table>
</div>
)}

{showFuelTable && (
<div className='overflow-x-auto text-black'>
<table className="border-collapse border border-slate-500 bg-gray-50" width='100%'>
<tr className='' align='center'>
<td className='border border-slate-700 p-[10px] rounded-[50%7'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/petrol.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50'>PETROL</label></td>
<td className='border border-slate-700 p-[10px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/diesel.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>DIESEL</label></td>
<td className='border border-slate-700 p-[10px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/cng.svg?v=1' width="70" height="50"/><br/><label
className='text-[15px] text-[#6f6f6f]-50 '>CNG</label></td>
</tr>

<tr className='' align='center'>

<td className='border border-slate-700 p-[10px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/electric.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50'>ELECTRIC</label></td>
<td className='border border-slate-700 p-[10px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/h-filter-without-background.svg?v=2' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>HYBRID</label></td>
<td className='border border-slate-700 p-[10px]'></td>
</tr>
</table>
</div>
)}

{showTransmissionTable && (
<div className='overflow-x-auto text-black'>
<table className="border-collapse border border-slate-500 bg-gray-50" width='100%'>
<tr className='' align='center'>
<td className='border border-slate-700 p-[10px] rounded-[50%7'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/petrol.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50'>AUTOMATIC</label></td>
<td className='border border-slate-700 p-[10px]'><img
src='https://imgd.aeplcdn.com/0x0/cw/fuel/svg/diesel.svg?v=1' width="70"
height="50"/><br/><label className='text-[15px] text-[#6f6f6f]-50 '>MANUAL</label></td>
<td className='border border-slate-700 p-[45px]'></td>
</tr>
</table>
</div>
)}
{showSeatingTable && (
<div className='overflow-x-auto text-black'>
<table className="border-collapse border border-slate-500 bg-gray-50" width='100%'>
<tr className=''>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>5 Seater</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>6 Seater</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>7 Seater</label></td>

<td className='pt-[40px] pb-[40px] ' align='center'><label className='border border-slate-
500 p-[12px] rounded-[50px] bg-[#fafafa]'>8 Seater</label></td>

</tr>
</table>
</div>
)}
</p></div><br/><br/> */}

          {/* <div className='border-slate-300 p-[2%] shadow-md'>
<p className='text-[20px] font-medium'>Featured Cars</p><br/>
<p >
<div className='pt-[15px] flex gap-[10%] text-[#424242]'>
<button onClick={(e) => { handleEvent(e); displayTable('trending'); }}>
TRENDING
</button>
<button onClick={(e) => { handleEvent(e); displayTable('popular'); }}>
POPULAR
</button>
</div>
<br/><br/>
{showTrendingCars && (
<form width='100%'>
<div className='gap-[5%]'>

<td>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800
dark:border-gray-700">
<a href="#">

<img class="rounded-t-lg" src="https:imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-
exterior-right-front-three-quarter-75.jpeg?isig=0&q=80/" alt="" />

</a>
<div class="p-5">
<a href="#">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MG
Hector</h5>
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">₹15 Lakh onwards</p>

<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-
white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300

dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
show more
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">

<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-
width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>

</svg>
</a>
</div>
</div>

<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-
three-quarter-75.jpeg?isig=0&q=80/"

content1="MG Hector"

content2='₹15 Lakh'
content3='show more'
/>
</td><td>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800
dark:border-gray-700">
<a href="#">
<img class="rounded-t-lg" src="https:imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-
exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" alt="" />
</a>
<div class="p-5">
<a href="#">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mahindra
XUV700</h5>
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">₹14.02 Lakh</p>

<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-
white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300

dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
show more
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">

<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-
width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>

</svg>
</a>
</div>
</div>
<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-
three-quarter-3.jpeg?isig=0&q=80"

content1="Mahindra XUV700"
content2='₹14.02 Lakh'
content4='show more'
/>
</td><td>
<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-
three-quarter-20.jpeg?isig=0&q=80"

content1="Toyota Fortuner"
content2='₹33.43 Lakh'
content5='show more'
/>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800
dark:border-gray-700">
<a href="#">
<img class="rounded-t-lg" src="https:imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-
exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" alt="" />
</a>
<div class="p-5">
<a href="#">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Toyota
Fortuner</h5>
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">₹33.43 Lakh</p>

<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-
white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300

dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
show more
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">

<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-
width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>

</svg>
</a>
</div>
</div>
</td>
</div>
</form>
)}
{showPopularCars && (
<form><td>

<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/54399/swift-exterior-right-front-three-
quarter-64.jpeg?isig=0&q=80"

content1="Maruti Suzuki Swift"
content2='₹ 5.99 Lakh'
content3='show more details'
/>
</td><td>
<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-front-
three-quarter-71.jpeg?isig=0&q=80"

content1="Tata Nexon"
content2='₹ 8.10 Lakh'
content3='show more details'
/>
</td><td>

<Card

imagesUrl="https:imgd.aeplcdn.com/664x374/n/cw/ec/112947/wagon-r-2022-exterior-right-
front-three-quarter-3.jpeg?isig=0&q=80"

content1="Maruti Suzuki WagonR"
content2='₹ 5.55 Lakh'
content3='show more details'
/>
</td>
</form>
)}
</p>*/}
        </div>
      </div>
      <div class="bg-gray-100 py-8">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div class="flex flex-col items-center">
        <span class="icon-india-no text-4xl mb-2"></span>
        <div class="trafic_col">
          <div class="title font-semibold text-lg">India’s #1</div>
          <p class="text-sm text-gray-600">Largest Auto portal</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <span class="icon-car-sold text-4xl mb-2"></span>
        <div class="trafic_col">
          <div class="title font-semibold text-lg">Car Sold</div>
          <p class="text-sm text-gray-600">Every 4 minutes</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <span class="icon-offers text-4xl mb-2"></span>
        <div class="trafic_col">
          <div class="title font-semibold text-lg">Offers</div>
          <p class="text-sm text-gray-600">Stay updated, pay less</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <span class="icon-compare-car text-4xl mb-2"></span>
        <div class="trafic_col">
          <div class="title font-semibold text-lg">Compare</div>
          <p class="text-sm text-gray-600">Decode the right car</p>
        </div>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </div>

  );
}

export default Home;