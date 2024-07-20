import React from 'react'
import Header from '../Components/Header';
import { FaUserAlt,FaLock  } from "react-icons/fa";
function SignUpForm(){


return (
    <>
    <Header/>
<div className='wrapper'>
 <form className='form'>
   <h1 style={{textAlign: 'center',color: '#000000',fontSize:'25px'}}>Reset your Password</h1><br/>
   <h3 style={{textAlign: 'center',color: '#000000',fontSize:'15px',paddingRight:'17px',paddingLeft:'17px'}}>Enter your email address so we can reset your password.</h3><br/>
   <div className='input-box'>
      <input type='text' placeholder='Enter Email' className='input' required/>
      <FaUserAlt className='icon'/>
   </div>

   <button type='submit' className='btn2'>Next</button>
 </form>
</div>
    </>
)
}
export default SignUpForm;