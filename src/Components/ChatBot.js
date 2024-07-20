const chatInput = document.querySelector("flex items-top absolute bottom-0 w-full bg-white py-0 px-5 border-t border-gray-300 w-[100%] h-[55px] border-none outline-none text-sm resize-none px-1 py-4 required");
const sendChatBtn = document.querySelector("flex items-top absolute bottom-0 w-full bg-white py-0 px-5 border-t border-gray-300 self-start pt-[17px] pl-2 self-end h-[55px] leading-[55px] text-[#724ae8] text-[1.35rem] cursor-pointer");

let userMessage;

const handleChat= () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);
}

sendChatBtn.addEventListener("click",handleChat);