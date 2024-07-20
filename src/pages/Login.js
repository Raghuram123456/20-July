import React, { useState } from 'react';
import Header from '../Components/Header';
import carImage from '../Images/Luxurycar.webp';
import { Link } from 'react-router-dom';

const Login = () => {

  
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center ">
        <div className="border border-gray-200 max-w-4xl w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8">
            <div className="text-center mb-8">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Welcome Back</h1>
              <p className="text-sm">Enter your credentials to access your account.</p>
            </div>
            <form action='POST'>
              <div className="mb-4">
                <label className="block text-sm font-medium" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm"
                  placeholder="******"
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm ">Remember me</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-[#007bff] hover:underline">Forgot Password?</a>
                </div>
              </div>
              <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#007bff] hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Login
              </button>
            </form>
            <div className="mt-6 flex items-center justify-center">
              <div className="w-full border-t border-gray-300"></div>
              <span className="px-4 text-sm bg-white">or</span>
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="mt-6 flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-center space-x-0 sm:space-x-4">
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-[15px] font-medium flex items-center justify-center gap-2 hover:underline">
                <img src="https://auth.openai.com/assets/google-logo-NePEveMl.svg" alt="Google Logo" className='h-5 w-5' /> Google
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-[15px] font-medium flex items-center justify-center gap-2 hover:underline">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvzC_QRv6moAhgNb5C6e3yicKgFND1g2RwA&s" alt="Facebook Logo" className='h-6 w-6' /> Facebook
              </button>
            </div>
            <p className="mt-6 text-center text-[15px]">
              Don't have an account? <Link to='/signup'><a href="#" className="text-[#007bff] hover:underline">Sign Up</a></Link>
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white p-4 flex items-center justify-center">
            <div className="text-center">
              <img className="object-cover mx-auto h-full w-full" src={carImage} alt="Toyota C-HR" />
            </div>
          </div>
        </div>
      </div><br/>
    </>
  );
};

export default Login;

// import React, { useState } from 'react';
// import { FaUserAlt, FaLock } from 'react-icons/fa';
// import { BiShow, BiHide } from 'react-icons/bi';
// import './Login.css';
// import Header from '../Components/Header';
// import { Link } from 'react-router-dom';

// function LoginForm() {

//   const [data, setData] = useState({
//     userName: '',
//     password: '',
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleOnChange = (e) => {

//     const { name, value } = e.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleTogglePassword = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     const { userName, password } = data;
//     if (userName && password) {
//       alert('Successful!!');
//     } else {

//       alert('Please fill all required fields!');
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className='wrapper'>
//         <form className='form' onSubmit={handleOnSubmit}>
//           <h1 style={{ textAlign: 'center', color: '#000000', fontSize: '35px' }}>Login</h1>
//           <div className='input-box'>
//             <input type='text'
//               id='userName'
//               name='userName'
//               placeholder='Username'
//               className='input'
//               required
//               value={data.userName}
//               onChange={handleOnChange}
//             />
//             <FaUserAlt className='icon' />
//           </div>

//           <div className='input-box'>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               id='password'

//               name='password'
//               placeholder='Password'
//               className='input'
//               required
//               value={data.password}
//               onChange={handleOnChange}
//             />
//             <div>
//               <FaLock className='icon' style={{ position: 'absolute', top: '30%' }} />
//               <span className='flex p-3' onClick={handleTogglePassword}>
//                 {showPassword ? <input type='checkbox' /> : <input type='checkbox' />}
//                 &nbsp;&nbsp;show password
//               </span>
//             </div>
//           </div>

//           <div className='remember'>
//             <label className='label'>
//               <input type='checkbox' />Remember Me
//             </label>
//             <Link to='/forgetpassword' className='anchor'>
//               Forget Password?
//             </Link>
//           </div>

//           <button type='submit' className='btn2'>
//             Login

//           </button>

//           <div className='register'>
//             <p>
//               Don't have an account? <Link to='/signup' className='anchor'>Sign Up</Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default LoginForm;

// import React, { useState } from 'react'
// import { FaUserAlt,FaLock } from "react-icons/fa";
// import './Login.css'
// import Header from '../Component/Header';
// import { Link } from 'react-router-dom';
// import { BiShow ,BiHide } from "react-icons/bi";

// function LoginForm(){

// const [data,setData]=useState({
// userName:"",
// password:"",
// })
// console.log(data)

// const handleOnChange=(e)=>{
// const {name,value}=e.target
// setData((preve)=>{
// return {
// ...preve,
// [name] : value
// }
// })
// }

// const handleOnSubmit=(e)=>{
// e.preventDefault()
// const {userName,password}=data
// if(userName && password){
// alert("Successful!!")
// }
// else{
// alert("Please fill all required field!")

// }
// }

// return (
// <>
// <Header/>
// <div className='wrapper'>
// <form className='form' onSubmit={handleOnSubmit}>
// <h1 style={{textAlign: 'center',color: '#000000',fontSize:'35px'}}>Login</h1>
// <div className='input-box'>
// <input type='text' id='userName' name='userName' placeholder='Username'className = 'input' required value = { data.userName } onChange = { handleOnChange } />
  // <FaUserAlt className='icon'/>
  // </div>

  // <div className='input-box'>
  // <input type="password" id='password' name='password' placeholder='Password'className='input' required value = { data.password } onChange = { handleOnChange } />
  // <div>
  // <FaLock className='icon' style={{position:'absolute',top:'30%'}}/>
  // <span className='flex p-3' ></span>
  // </div>
  // </div>

  // <div className='remember'>
  // <label className='label'><input type='checkbox'/>Remember Me</label>
  // <Link to='/forgetpassword' className='anchor'>Forget Password?</Link>
  // </div>

  // <button type='submit' className='btn2'>Login</button>

  // <div className='register'>
  // <p>Don't have an account? <Link to='/signup' className='anchor'>Sign Up</Link></p>
  // </div>
  // </form>
  // </div>
  // </>
  // )
  // }
  // export default LoginForm;

  // import React, { useState } from 'react';
  // import Header from '../Component/Header';

  // export default function Table() {
  // const [showPassword, setShowPassword] = useState(false);

  // const handleShowPassword = () => {
  // setShowPassword(!showPassword);
  // };

  // return (
  // <>
  // <Header/>

  // <div className='flex items-center justify-center min-h-screen '>
  // <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-lg rounded-2xl
  // md:flex-row md:space-y-0'>
  // <div className='flex flex-col justify-center p-8 md:p-14'>
  // <span className='mb-3 text-4xl font-bold text-center'>
  // Login
  // </span>
  // <div className='py-4'>
  // <span className='mb-2 text-md'>
  // <input className='w-full p-2 border border-gray-400 rounded-md'
  // type='text' placeholder='User Name' id='userName' name='userName' required/>
  // </span>
  // </div>

  // <div className='py-4'>
  // <span className='mb-2 text-md'>
  // <input className='w-full p-2 border border-gray-400 rounded-md'
  // type='text' placeholder='Password' id='password' name='password' required/>
  // </span>
  // </div>
  // </div>
  // </div>
  // </div>
  // </>
  // );
  // }

  {/* <form className=''>
<h1>Login</h1>
<div>Name</div>
<input type='text'/>
<tr>
<td>Password</td>
<td>
<input
type={showPassword ? 'text' : 'password'}
/>
<button onClick={handleShowPassword}>
{showPassword ? 'Hide' : 'Show'} Password
</button>
</td>
</tr>
</form> */}