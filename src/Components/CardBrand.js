// import React from 'react'
// import { Link } from 'react-router-dom';

// const CardBrand = ({content6,content7,content8,content9,content10,content11,content12,content13,content14,conten15,imageUrl1}) => {
// return (
// <>
// <div className='border border-gray-400 '>
// <form>
// <td><img src={imageUrl1} className='w-58 h-24'/></td>
// <td className='text-[10px]'>
// <tr className=''>{content6}</tr>
// <tr><b>{content7}</b><label > {content8} </tr>

// <tr >{content9}</tr>
// <tr className=''><Link to='/slavia'>{content10}</Link></tr>
// <tr className=''><Link to='/'>{content11}</Link></tr>
// <tr className=''><Link to='/'>{content12}</Link></tr>
// <tr className=''><Link to='/'>{content13}</Link></tr>
// <tr className=''><Link to='/'>{content14}</Link></tr>
// <tr className=''><Link to='/'>{content15}</Link></tr>
// </td>
// </form>
// </div>
// </>
// )
// };

// export default CardBrand;

import React from 'react';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const CardBrand = ({

    content6, content7, content8, content9, content10, content11, content12, content13, content14, content15, imageUrl1, }) => {

        const settings = {
            infinite: true,
            slidesToShow: 3,
            duration: 2000,
          };
        
          const customArrows = (
            <div style={{ display: 'none' }}>
              {/* Hide the default navigation arrows */}
              <span>&#60;</span>
              <span>&#62;</span>
            </div>
          );
        

    return (
        <>

            <div className="mx-auto max-w-6xl ">
                <Slide {...settings} prevArrow={customArrows} nextArrow={customArrows}>
                    
                        <div className="mb-4 mx-8 bg-white shadow-lg flex flex-col justify-between"> {/* Added mx-2 for horizontal margin */}
                            <img src={imageUrl1}  className='w-full' />
                            <h1 className='pt-3 pl-1 text-[17px] font-medium text-black '>{content6}</h1>
                            <h1 className='pl-1 text-[14px] font-medium text-gray-500'>{content7}</h1>
                            <div className="text-center py-4">
                                <Link to='/topsuvcars'><h1 className='bg-[#353e4e] px-12 py-3 rounded text-[14px] font-medium text-white inline-block'>{content8}</h1></Link>
                            </div>
                        </div>
                </Slide>
            </div>

            {/* <form>
    <td><img src={imageUrl1} className='w-58 h-24'/></td>
    <td className='text-[15px] t-[-10%]'>
    <tr className=''>{content6}</tr>
    <tr><b>{content7}</b> {content8} </tr>
    <tr className='text-[12px]'>{content9}</tr>
    <tr className=''><Link to='/slavia'>{content10}</Link></tr>
    <tr className=''><Link to='/'>{content11}</Link></tr>
    <tr className=''><Link to='/'>{content12}</Link></tr>
    <tr className=''><Link to='/'>{content13}</Link></tr>
    <tr className=''><Link to='/'>{content14}</Link></tr>
    <tr className=''><Link to='/'>{content15}</Link></tr>
    </td>
    </form> */}

        </>
    );
};

export default CardBrand;