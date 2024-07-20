import React from 'react';

const TestDrive = ({
  content1, content2, content3, content4, content5, content6, content7,
  content8, content9, content10, content11, content12, content13, content14,
  content15, content16, imgurl, setIsTestDriveOpen
}) => {
    
    const handleAlertClick = () => {
        alert('Request Sent!');
      };

  const handleClose = () => {
    setIsTestDriveOpen(false);
  };

 

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white shadow-md rounded-lg flex max-w-4xl overflow-hidden relative">
        <div className="w-full p-8">
          <button onClick={handleClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold mb-4">Book a Test Drive Now</h2>
          <p className="mb-4">Experience a ŠKODA for yourself. Request now.</p>
          <div className="mb-4">
            <label htmlFor="model" className="block text-gray-700 text-sm font-bold mb-2">
              Choose a model
            </label>
            <select id="model" className="w-full px-3 py-2 border rounded" required>
              <option value="">Choose a model</option>
              <option value="skoda-slavia">{content1}</option>
              <option value="skoda-kushaq">{content2}</option>
              <option value="skoda-superb">{content3}</option>
              <option value="skoda-kodiaq">{content4}</option>
              <option value="skoda-rapid">{content5}</option>
              <option value="skoda-fabia">{content6}</option>
              <option value="skoda-laura">{content7}</option>
              <option value="skoda-kamiq">{content8}</option>
              <option value="skoda-citigo">{content9}</option>
              <option value="skoda-enyaq">{content10}</option>
              <option value="skoda-new-kodiaq">{content11}</option>
              <option value="skoda-octavia-facelift">{content12}</option>
              <option value="skoda-sub-four-metre-suv">{content13}</option>
              <option value="skoda-slavia-facelift">{content14}</option>
              <option value="skoda-kodiaq-sportline">{content15}</option>
              <option value="skoda-superb-sportline">{content16}</option>
            </select>
          </div>
          <button onClick={handleAlertClick} className="w-full bg-[#353e4e] text-white font-bold py-2 px-4 rounded hover:bg-gray-500">
            Request a Test Drive
          </button>
        </div>
        <div className="w-full relative">
          <img
            src={imgurl}
            alt="Skoda cars"
            className="object-cover w-full h-full"
          />
          <button onClick={handleClose} className="absolute top-2 right-2 text-[20px] hover:text-gray-600 rounded-full p-2">
          ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestDrive;
