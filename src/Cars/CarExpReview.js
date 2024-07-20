import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

const CarExpReview = () => {
  const reviewData = [
    {
      title: "Skoda Kushaq, Slavia, and Kodiaq Drive Experience at Natrax",
      author: "By Aditya Nadkarni",
      date: "13 May 2023",
      description: "Skoda invited us over to Natrax in Indore. What all did they have ready on its platter for us to sample?...",
      imageUrl: "https://imgd.aeplcdn.com/370x208/n/cw/ec/148205/skoda-kodiaq-front-view7.jpeg?isig=0&wm=1&q=80"
    },
    {
      title: "Skoda Octavia RS Drive Experience at Chandigarh",
      author: "By Ananya Sharma",
      date: "22 June 2023",
      description: "Skoda brought us to Chandigarh for an exhilarating drive in the new Octavia RS. The performance, handling, and comfort were beyond expectations, making...",
      imageUrl: "https://5.imimg.com/data5/SX/FT/MY-20601043/skoda-octavia-rs-250x250.png"
    },
    {
      title: "Skoda Enyaq iV Electric Test Drive in Mumbai",
      author: "By Rohan Deshmukh",
      date: "8 April 2023",
      description: "Test-driving the Skoda Enyaq iV in Mumbai was a game-changer. Its smooth acceleration and impressive range made it clear why electric is the...",
      imageUrl: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220909095126_24_skoda_enyaq_coupe_rs_iv.jpg&w=700&c=1"
    },
    {
      title: "Top six luxury cars we have tested in 2022 so far",
      author: "By Sagar Bhanushali",
      date: "30 Jul 2022",
      description: "This year we have driven many a luxury cars at different price points and here are our top six cars if you want to be chauffeured.",
      imageUrl: "https://imgd.aeplcdn.com/370x208/n/cw/ec/127375/front-view0.jpeg?isig=0&wm=1&q=80"
    }
  ];

  const settings = {
    infinite: true,
    slidesToShow: 2,
    duration: 200000,
  };

  const customArrows = (
    <div style={{ display: 'none' }}>
      {/* Hide the default navigation arrows */}
      <span>&#60;</span>
      <span>&#62;</span>
    </div>
  );


  // const slideProperties = {
  //   duration: 3000,
  //   transitionDuration: 500,
  //   infinite: true,
  //   indicators: true,
  //   arrows: false,
  //   pauseOnHover: true
  // };
  // <Slide {...slideProperties}></Slide>

  return (
    <div className="mx-auto max-w-6xl">
      <Slide {...settings} prevArrow={customArrows} nextArrow={customArrows}>
        {reviewData.map((review, index) => (
          <div key={index} className="each-slide">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <img src={review.imageUrl} alt="Car Review" className="w-full h-56" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{review.title}</div>
                <div className="mt-4 flex justify-between text-sm text-gray-600">
                  <p>By {review.author}</p>
                  <p>{review.date}</p>
                </div>
                <p className="mt-4 text-base">{review.description}</p>
                <Link to="#" className="block mt-1 text-sm font-semibold text-blue-600 hover:underline">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default CarExpReview;

// ----------------------------Appp------------------------

// import React from 'react';
// import CarReviewCard from './CarReviewCard';

// const App = () => {
//   const reviews = [
//     {
//       title: "Skoda Kushaq: A Compact SUV with Big Ambitions",
//       author: "Aditya Nadkarni",
//       date: "13 May 2023",
//       description: "The Skoda Kushaq impresses with its robust build, smooth drive, and advanced features. It’s a perfect compact SUV for urban explorers.",
//       imageUrl: "path_to_kushaq_image", // replace with actual image URL
//     },
//     {
//       title: "Skoda Slavia: Elegance Meets Performance",
//       author: "Neha Sharma",
//       date: "25 March 2023",
//       description: "The Skoda Slavia combines elegance and performance in a sleek sedan package. It’s a great choice for those who value both style and substance.",
//       imageUrl: "path_to_slavia_image", // replace with actual image URL
//     },
//     {
//       title: "Skoda Kodiaq: The Ultimate Family SUV",
//       author: "Ravi Kapoor",
//       date: "10 April 2023",
//       description: "The Skoda Kodiaq stands out as a family SUV with its spacious interior, powerful engine, and cutting-edge technology. Perfect for long drives and family outings.",
//       imageUrl: "path_to_kodiaq_image", // replace with actual image URL
//     }
//   ];

//   return (
//     <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-4">
//       {reviews.map((review, index) => (
//         <div key={index} className="m-4">
//           <CarReviewCard
//             title={review.title}
//             author={review.author}
//             date={review.date}
//             description={review.description}
//             imageUrl={review.imageUrl}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;


// ----------------------------------------1st------------------------------
// import React from 'react';

// const CarReviewCard = ({ title, author, date, description, imageUrl }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg">
//       <img className="w-full" src={imageUrl} alt="Car Review" />
//       <div className="px-2 py-2">
//         <div className="text-[16px] mb-2">{title}</div>
//         <div className="pt-2 pb-2">
//           <div className="flex items-center justify-between text-sm">
//             <p className="text-gray-600">By {author}</p>
//             <p className="text-gray-600">{date}</p>
//           </div>
//         </div>
//         <p className="pt-2 text-gray-700 text-base">{description}</p>
//         <a href="#" className="text-blue-500 hover:underline text-sm">Read More</a>
//       </div>
//     </div>
//   );
// };

// export default CarReviewCard;
