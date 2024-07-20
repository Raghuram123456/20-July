import React, { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { MdOutlineSmartToy } from 'react-icons/md';
import { TiMessage } from "react-icons/ti";
import { IoIosClose as IoClose } from 'react-icons/io';

const LiveChat = () => {
  const [message, setMessage] = useState('');
  const [showChatbox, setShowChatbox] = useState(false);

  const toggleChatbox = () => {
    setShowChatbox(!showChatbox);
  };

  return (
    <>
      <div className='flex items-center justify-center fixed right-[88.5px] bottom-7 h-12 w-12 border-none outline-none cursor-pointer bg-[#353e4e] rounded-full'>
        <span onClick={toggleChatbox} className={`opacity-${showChatbox ? '0' : '100'}`}>
          <TiMessage className='text-white fixed right-[90px] bottom-[-224px] w-[42px] rounded-[15px]  overflow-hidden h-[550px]' />
        </span>
        <span onClick={toggleChatbox} className={`opacity-${showChatbox ? '100' : '0'}`}>
          <IoClose className='text-white fixed right-[90px] bottom-[-224px] w-[42px] rounded-[15px]  overflow-hidden h-[550px]' />
        </span>
      </div>

      <div className={`transition-transform duration-300 chatbot bg-white fixed right-[90px] bottom-[80px] w-[370px] rounded-[15px] shadow-custom overflow-hidden h-[500px] overflow-y-auto transform ${showChatbox ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-50 opacity-0 pointer-events-none'}`}>
        <header className='bg-[#353e4e] text-center py-4 px-0 w-full'>
          <h1 className='text-[24px] font-bold text-[#fff]'>ChatBot</h1>
        </header>
        <div className='flex'>
          <ul className='chatbox h-[400px] overflow-y-auto pt-[15px] pr-[20px] pb-[70px] pl-[20px]'>
            <li className='chat flex incoming'>
              <span className='h-6 w-6 flex items-center justify-center self-end text-black bg-[#e8e8e8] rounded-sm  mr-2 mb-7'><MdOutlineSmartToy /></span>
              <p className='text-black bg-[#e8e8e8] w-[75%] py-3 px-4  text-[0.95rem] rounded-tl-[17px] rounded-tr-[17px] rounded-br-[17px] rounded-bl-[0px]'>Hi there 👋 <br /> How can I help you today?</p>
            </li>
            <li className='chat outgoing flex justify-end my-5'>
              <p className='text-white bg-[black] w-[75%] py-3 px-4  text-[0.95rem] rounded-tl-[17px] rounded-tr-[17px] rounded-br-[0px] rounded-bl-[17px]'>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </div>
        <div className='flex items-top absolute bottom-0 w-full bg-white py-0 px-5 border-t border-gray-300'>
          <textarea
            placeholder='Enter a message...'
            className='w-[100%] h-[55px] border-none outline-none text-sm resize-none px-1 py-4 required'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          {message && (
            <span id='send-btn' className='self-start pt-[17px] pl-2 self-end h-[55px] leading-[55px] text-[#724ae8] text-[1.35rem] cursor-pointer'>
              <IoMdSend className='text-xl text-[#353e4e]' />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default LiveChat;










// // import React,{useState} from 'react'
// // import { IoMdSend } from "react-icons/io";
// // import { MdOutlineSmartToy } from "react-icons/md";
// // import { FiMessageSquare } from "react-icons/fi";
// // import { IoIosClose as IoClose } from 'react-icons/io';

// // const LiveChat = () => {
// //   const [message, setMessage] = useState('');
// //   return (
// //     <>
// //     <div className='flex items-center justify-center fixed right-[88.5px] bottom-8 h-12 w-12 border-none outline-none cursor-pointer bg-[#353e4e] rounded-full '>
// //     <span className=''><FiMessageSquare className='text-white fixed right-[90px] bottom-[-220px] w-[42px] rounded-[15px]  overflow-hidden h-[550px] '/></span>
// //     <span className=''><IoClose className='text-white fixed right-[90px] bottom-[-220px] w-[42px] rounded-[15px]  overflow-hidden h-[550px] opacity-0'/></span>
// //     </div>
// //     <div className='chatbot bg-white fixed right-[90px] bottom-[100px] w-[370px] rounded-[15px] shadow-custom overflow-hidden h-[500px] overflow-y-auto transform scale-50 opacity-0 pointer-events-none'>
// //       <header className='bg-[#353e4e] text-center py-4 px-0 w-full'>
// //         <h1 className='text-[24px] font-bold text-[#fff]'>ChatBot</h1>
// //       </header>
// //       <div className='flex '>
// //         <ul className='chatbox h-[400px] overflow-y-auto pt-[15px] pr-[20px] pb-[70px] pl-[20px]'>
// //           <li className='chat flex         incoming '>
// //             <span className='h-6 w-6 flex items-center justify-center self-end text-black bg-[#e8e8e8] rounded-sm  mr-2 mb-7'><MdOutlineSmartToy /></span>
// //             <p className='text-black bg-[#e8e8e8] w-[75%] py-3 px-4  text-[0.95rem] rounded-tl-[17px] rounded-tr-[17px] rounded-br-[17px] rounded-bl-[0px]'>Hi there 👋 <br /> How can I help you today?</p>
// //           </li>
// //           <li className='chat     outgoing flex justify-end my-5'>
// //             <p className='text-white bg-[black] w-[75%] py-3 px-4  text-[0.95rem] rounded-tl-[17px] rounded-tr-[17px] rounded-br-[0px] rounded-bl-[17px]'>Lorem ipsum dolor sit amet consectetur.</p>
// //           </li>
// //         </ul>
// //       </div>
// //       <div className='flex items-top absolute bottom-0 w-full bg-white py-0 px-5 border-t border-gray-300'>
// //       <textarea
// //         placeholder='Enter a message...'
// //         className='w-[100%] h-[55px] border-none outline-none text-sm resize-none px-1 py-4 required'
// //         value={message}
// //         onChange={(e) => setMessage(e.target.value)}
// //         ></textarea>
// //       {message && (
// //         <span
// //         id='send-btn'
// //         className='self-start pt-[17px] pl-2 self-end h-[55px] leading-[55px] text-[#724ae8] text-[1.35rem] cursor-pointer'
// //         >
// //           <IoMdSend className='text-xl text-[#353e4e]' />
// //         </span>
// //       )}
// //     </div>

// //     </div>

// //       </>
// //   )
// // }

// // export default LiveChat