import React, { useState } from 'react';
import Header from "../Components/Header";
import { FiFilter } from "react-icons/fi";
import Filter from '../Components/Filter';
import Skcars from './Skcars'
import Skcomcars from './Skcomcars'
import TestDrive from './TestDrive';
import Skodapopcars from './Skodapopcars'
import Carimgages from './Carimages'
import CarExpReview from './CarExpReview';
import CarUserReview from './CarUserReview'

// import CardBrand from "../Components/CardBrand";


export default function Skodacarss() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  return (
    <>
      <div className="font-[Poppins]">
        <Header />

         <div className="w-full h-100 relative">
          <img src='https://cdn.skoda-auto.com/images/sites/enin-v2/c1b46208-78d9-45f5-992a-005eaf638546/e0a45b9bc0c83d63a7449c96c102e426/HeroBannerModule/d5873a76116765a49a9393a5cabdf63b/5bc0aca7c374efa831e62ea25fffd93b057bc29bec68f8dda9d5fdd6471c1cd4/Header_bp1200_1.webp' alt="Your Alt Text" className="w-full h-auto" />
          <div className="absolute top-[83%] pl-[3%] px-4 py-3 text-container">
            <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[white] font-semibold '>
              
            <button onClick={() => setIsTestDriveOpen(true)} className="bg-[#353e4e] px-2 py-2 rounded-[4px] hover:bg-gray-500 ">
        Book a Test Drive
      </button>
        </p>
          </div>
      {isTestDriveOpen && (
        <TestDrive
          imgurl='https://cdn.skoda-auto.com/images/sites/enin-v2/c1b46208-78d9-45f5-992a-005eaf638546/e0a45b9bc0c83d63a7449c96c102e426/HeroBannerModule/d5873a76116765a49a9393a5cabdf63b/5bc0aca7c374efa831e62ea25fffd93b057bc29bec68f8dda9d5fdd6471c1cd4/Header_bp576_1.webp'
          content1='Skoda Slavia'
          content2='Skoda Kushaq'
          content3='Skoda Superb'
          content4='Skoda Kodiaq'
          content5='Skoda Rapid'
          content6='Skoda Fabia'
          content7='Skoda Laura'
          content8='Skoda Kamiq'
          content9='Skoda Citigo'
          content10='Skoda Enyaq'
          content11='Skoda New Kodiaq'
          content12='Skoda Octavia Facelift'
          content13='Skoda Sub-four metre SUV'
          content14='Skoda Slavia Facelift' 
          content15='Skoda Kodiaq Sportline'
          content16='Skoda Superb Sportline'
          setIsTestDriveOpen={setIsTestDriveOpen} // Pass the state setter function
        />
      )}
          
        </div>

        <div className="pl-[15%] pr-[15%] pt-10 bg-slate-30 min-h-[calc(100vh)]">
          <p className="pt-[50px] text-[20px] font-medium">Skoda Cars</p>
          <br />

          <p className="pt-[15px] text-justify text-[#424242]">
            Skoda car price starts at Rs 10.89 Lakh for the cheapest model which
            is Slavia and the price of most expensive model, which is Kodiaq
            starts at Rs 38.50 Lakh. Skoda offers 3 car models in India,
            including 2 cars in SUV category, 1 car in Sedan category. Skoda has
            3 upcoming cars in India, Enyaq, Superb and New Kodiaq. Skoda Auto
            India is a subsidiary of Czech automobile manufacturer Skoda Auto.
            The company is a part of Volkswagen Group India and currently heads
            the Skoda Auto Volkswagen India Private Limited (SAVWIPL) parent
            brand in India. Founded in 2001, Skoda has its manufacturing
            facility located in Aurangabad, Maharashtra and a research facility
            in Pune, Maharashtra.
            <br />
            <br />
            Skoda India currently retails models including the Kushaq, Slavia,
            and Kodiaq. The carmaker is also working on a new EV SUV for the
            Indian market, called the Enyaq. It is based on the same platform as
            the Volkswagen ID.4.
          </p>
          <p className="pt-[50px] text-[20px] font-medium">
            Skoda Cars Price List (December 2023) in India
          </p>
          <br />
          <p className="pt-[50px] text-[17px] ">
            Skoda car price starts at Rs. 10.89 Lakh and goes upto Rs. 38.50
            Lakh (Avg. ex-showroom). The prices for the top 5 popular Skoda Cars
            are: Skoda Slavia Price is Rs. 10.89 Lakh, Skoda Kushaq Price is Rs.
            10.89 Lakh, Skoda Kodiaq Price is Rs. 38.50 Lakh, Skoda Enyaq Price
            is Rs. 50.00 Lakh and Skoda Superb Price is Rs. 28.00 Lakh.
          </p>

          <p className="pt-[50px] text-[20px] font-medium">Skoda Car Models</p>
          <br />

          {/* ------------------------------FILTER------------------------------- */}


          <div className="flex items-center pt-[5px] text-[15px] font-medium">
            <button onClick={() => setIsFilterOpen(true)} className="flex items-center bg-[#353e4e] text-white px-4 py-2 rounded">
            <FiFilter/>Filter By
            </button>
            <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
          </div>


{/* ---------------------------------------Carssss----------------------------- */}

          <Skcars/>

          <div className='pt-[50px] text-[20px] font-medium'>Skoda Compare Cars
            <div className='pt-[50px]'><Skcomcars/></div>
          </div>


{/* -------------------------------------POPULAR CARS---------------------------- */}
          <div className='pt-[50px] text-[20px] font-medium'>Popular Used Skoda Cars
            <div className='pt-[50px]'><Skodapopcars/></div>
          </div>

{/* -----------------------------EXPERT REVIEWS--------------------------- */}
          <div className='pt-[50px] text-[20px] font-medium'>Expert Reviews
          <div className="pt-[50px]">
      <CarExpReview/>
          </div>
          </div>


          {/* --------------------------USER REVIEWS----------------------------- */}

          <div className='pt-[50px] text-[20px] font-medium'>Skoda Users Reviews
            <div className='pt-[50px]'>
              <CarUserReview/>
              </div>
          </div>

          

          {/* <div className=''>
          <Carimgages
            img1="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=80&q=80"
            img2="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80"
            img3="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80&q=80"
            img4="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-right-side-view.jpeg?isig=0&q=80&q=80"
            img5="https://imgd.aeplcdn.com/211x211/n/cw/ec/175951/slavia-exterior-left-side-view.jpeg?isig=0&q=80&q=80"
            imgno="27"
            content1="Skoda"
            content2="Slavia"
          />
          </div> */}

          {/* ----------------------------------------------------------------------- */}
            

               </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}


{/* ------------------------------Slavia-----------------------------------
      <div className="w-[78%] pt-4">
        <div className="border border-gray-400 rounded-sm p-4 pt-5 pb-5  flex items-center ">
          <img
            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/175951/slavia-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
            alt="Skoda Slavia"
            className="w-48 h-auto mr-6"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-[17px]">Skoda Slavia</h2>
                <div className="text-gray-500 text-[16px] mt-1">
                  5 Star Safety | 18-20 kmpl | 114-148 bhp
                </div>
              </div>
              <div className="flex items-center border border-gray-800 px-2">
                <div className="flex items-center text-[#00857a] font-semibold text-[10px] mr-1">
                  <MdOutlineStar />
                  4.9/5
                </div>
                |&nbsp;
                <div className="text-[10px]">17 Ratings</div>
              </div>
            </div>
            <div className="flex items-center text-[16px] mt-1">
              Rs. 11.63 Lakh{" "}
              <span className="text-sm text-gray-500">&nbsp;onwards</span>
              &nbsp;&nbsp;
              <span className="flex items-center text-[#00857a] text-sm mt-1 cursor-pointer hover:underline">
                <RiDiscountPercentFill />
                Offers
              </span>
            </div>
            <div className="text-gray-500 mt-1">Avg. Ex-Showroom price</div>
            <div className="">
              <button className="text-blue-600 text-sm hover:underline mt-1">
                Get Best Offer
              </button>
            </div>
          </div>
        </div>
        </div> */}




















          {/* <div >
                        <form>

                            <tr>
                                <CardBrand

                                    imageUrl1="https://imgd.aeplcdn.com/227x128/n/cw/ec/144999/slavia-exterior-right-front-
three-quarter-6.jpeg?isig=0&q=80"

                                    content6="Skoda Kushaq"
                                    content7='Rs. 10.89 Lakh'
                                    content8='onwards'
                                    content9='Avg. Ex-Showroom price'
                                    content10='show more'
                                /></tr><br />

                            <tr><CardBrand

                                imageUrl1="https://imgd.aeplcdn.com/227x128/n/cw/ec/145021/kushaq-exterior-right-front-
three-quarter-12.jpeg?isig=0&q=80"

                                content6="Skoda Kushaq"
                                content7='Rs. 10.89 Lakh'
                                content8='onwards'
                                content9='Avg. Ex-Showroom price'
                                content10='show more'

                            /></tr><br />
                            <tr>
                                <CardBrand

                                    imageUrl1="https://imgd.aeplcdn.com/664x374/n/cw/ec/49051/kodiaq-exterior-right-front-
three-quarter-3.jpeg?isig=0&q=80"

                                    content6="MG Hector"
                                    content7='Rs. 38.50 Lakh'
                                    content8='onwards'

                                    content9='Avg. Ex-Showroom price'
                                    content10='show more'
                                /></tr><br />
                            <tr><CardBrand

                                imageUrl1="https://imgd.aeplcdn.com/227x128/n/cw/ec/137871/enyaq-exterior-right-front-
three-quarter.jpeg?isig=0&q=80"

                                content6="Skoda Enyaq"
                                content7='Rs. 50.00 Lakh'
                                content8='onwards'
                                content9='Avg. Ex-Showroom price'
                                content10='show more'
                            />
                            </tr><br />
                            <tr>
                                <CardBrand

                                    imageUrl1="https://imgd.aeplcdn.com/664x374/n/cw/ec/158937/new-superb-exterior-right-
front-three-quarter-5.jpeg?isig=0&q=80"

                                    content6="Skoda Superb"
                                    content7='Rs. 28.00 Lakh'
                                    content8='onwards'
                                    content9='Avg. Ex-Showroom price'
                                    content10='show more'
                                /></tr><br />
                            <tr>
                                <CardBrand

                                    imageUrl1="https://imgd.aeplcdn.com/664x374/n/cw/ec/158729/kodiaq-new-exterior-left-
front-three-quarter.jpeg?isig=0&q=80"

                                    content6="Skoda New Kodiaq"
                                    content7='Rs. 45.00 Lakh'

                                    content8='onwards'
                                    content9='Avg. Ex-Showroom price'
                                    content10='show more'
                                /></tr>
                        </form>
                        <p className='up'></p>
                    </div> */}
     

// import React, { useState } from 'react';
// import Header from '../Components/Header';
// import CardBrand from '../Components/CardBrand';

// function NewCars() {
// const [buttonClicked, setButtonClicked] = useState(false);
// const handleButtonClick = () => {
// setButtonClicked(!buttonClicked);
// };

// const buttonText = buttonClicked ? 'Hide' : 'Read More';

// const data = [
// {
// title: 'Card 1',
// description: 'Description for Card 1.',
// image: 'https://placekitten.com/300/200',
// },
// {
// title: 'Card 2',
// description: 'Description for Card 2.',
// image: 'https://placekitten.com/300/201',
// },
// {
// title: 'Card 2',
// description: 'Description for Card 2.',
// image: 'https://placekitten.com/300/201',
// },
// {
// title: 'Card 2',
// description: 'Description for Card 2.',
// image: 'https://placekitten.com/300/201',
// },
// {
// title: 'Card 2',
// description: 'Description for Card 2.',
// image: 'https://placekitten.com/300/201',

// },
// {
// title: 'Card 2',
// description: 'Description for Card 2.',
// image: 'https://placekitten.com/300/201',
// },
// ];

// return (
// <div className='font-[Poppins]'>
// <Header/>
// <div className='pl-[15%] pr-[15%] pt-20 bg-slate-30 min-h-[calc(100vh)]'>
// <p className='text-justify pt-[50px] text-[20px] font-medium '>New Cars</p><br/>

// <p >Are you planning on buying a new car? Well, we know that with so many options available outthere, it gets really difficult to find a good car which suits your need. Hence, we have put together acomplete list of new cars. Maruti Suzuki, Tata and Hyundai are the 3 most popular car brands.
// The 5 most popular cars are Maruti Suzuki Fronx, Tata Nexon, Mahindra Scorpio N, Tata Punchand Mahindra Thar.<br/>
// <button className='text-[#0288D1] pt-[10px] pb-[10px] text-[17px] 'onClick={handleButtonClick}>{buttonText}</button>
// {buttonClicked && <div>
// <p className='pt-[50px] text-[17px] font-medium '>Upcoming Cars Price List (December2023) in India
// </p>
// <div className='overflow-x-auto text-black'>
// <table className="border-collapse border border-slate-500 " width='100%'>

// <tr className='bg-gray-200' align='left'>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>MODEL</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>EXPECTED PRICE</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>EXPECTED LAUNCHDATE</td>
// </tr>
// <tr className='' align='left' >
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Kia Sonet Facelift</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Rs. 8.00 - 15.00 Lakh</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Jan 16, 2024</td>
// </tr>
// <tr className='' align='left' >
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Maruti Suzuki New-genSwift</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Rs. 6.50 - 10.00 Lakh</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Sep 24, 2024</td>
// </tr>
// <tr className='' align='left' >
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Hyundai New Santa Fe</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Rs. 45.00 - 55.00 Lakh</td>
// <td className='cursor-pointer border border-slate-700 px-6 py-2'>Feb 15, 2024</td>
// </tr>
// </table>
// </div>

// </div>}
// <br/><br/>

// </p>
// <p className='pt-[50px] text-[20px] font-medium'>Upcoming Cars in India 2023</p>
// <p className='pt-[30px] text-[17px] font-medium'>New Car Launch in India 2023 - Aldetails</p><br/>

// </div>
// </div>
// );
// }
// export default NewCars;
