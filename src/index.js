import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NewCars from './pages/NewCars';
import Reviews from './pages/Reviews';
import TopCars from './Components/TopCars';
// ------------cars-------------------
import Skoda from './Cars/Skoda';
import SuzukiCars from './Cars/SuzukiCars';
import TopSuvCars from './pages/TopSuvCars';
import TopSedanCars from './pages/TopSedanCars';
import TopHatchbackCars from './pages/TopHatchbackCars';
import TopCompactCars from './pages/TopCompactCars';
import TopLuxuryCars from './pages/TopLuxuryCars';
import Loan from './pages/Loan'
import FeedbackForm from './pages/FeedbackForm';
import PrivacyandPolicy from './pages/PrivacyandPolicy';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='newcars' element={<NewCars />} />
      <Route path='reviews' element={<Reviews />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='topcars' element={<TopCars />} />
      <Route path='topsuvcars' element={<TopSuvCars />} />
      <Route path='topsedancars' element={<TopSedanCars />} />
      <Route path='tophatchbackcars' element={<TopHatchbackCars />} />
      <Route path='topcompactcars' element={<TopCompactCars />} />
      <Route path='topluxurycars' element={<TopLuxuryCars />} />
      <Route path='Skoda' element={<Skoda />} />
      <Route path='SuzukiCars' element={<SuzukiCars />} />
      <Route path='Loan' element={<Loan />} />
      <Route path='FeedbackForm' element={<FeedbackForm />} />
      <Route path='PrivacyandPolicy' element={<PrivacyandPolicy />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
// import Home from './Components/Home';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import NewCars from './pages/NewCars';
// import Reviews from './pages/Reviews';
// // import MThar from './pages/MThar';
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//     <Route index element={<Home/>}/>
//     <Route path='/newcars' element={<NewCars/>}/>
//     <Route path='Reviews' element={<Reviews/>}/>
//     <Route path='Login' element={<Login/>}/>
//     <Route path='SignUp' element={<SignUp/>}/>
//     {/* <Route path='MThar' element={<MThar/>}/> */}
//     </Route>

//   )
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router}/>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();