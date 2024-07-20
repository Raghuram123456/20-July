import React from "react";
import { Outlet } from "react-router-dom";
// import Home from './Components/Home';

function App() {
  return (
    <div>
      {/* Any common layout components like header, footer, etc., can go here */}
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

// import Home from './Components/Home';

// function App() {
//   return (
//     <div>
//       <Home/>

//     </div>

//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';
// import './Component/Header.css'
// import Login from './pages/Login'
// import NewCars from './pages/NewCars'
// import Reviews from './pages/Reviews'
// import SignUp from './pages/SignUp';
// import Search from './pages/Search'
// import ForgetPassword from './pages/ForgetPassword';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
{
  /* <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/NewCars' element={<NewCars/>}/>
    <Route path='/reviews' element={<Reviews/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/Search' element={<Search/>}/>
    <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
    </Routes>
    </BrowserRouter> */
}