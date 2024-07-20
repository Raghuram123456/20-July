// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import Card from '../Components/Card'; // Assuming you have a Card component

// export default function Car() {
// const NextArrow = (props) => {
// const { className, style, onClick } = props;
// return (
// <div
// className={className}
// style={{ ...style, display: "block", background: "black" }}
// onClick={onClick}
// />
// );
// };

// const PrevArrow = (props) => {
// const { className, style, onClick } = props;
// return (
// <div
// className={className}
// style={{ ...style, display: "block", background: "black" }}
// onClick={onClick}
// />
// );
// };

// const settings = {
// dots: true,

// infinite: true,
// speed: 500,
// slidesToShow: 3,
// slidesToScroll: 1,
// nextArrow: <NextArrow />,
// prevArrow: <PrevArrow />,
// appendDots: dots => (
// <div>
// <ul style={{ margin: "0px" }}> {dots} </ul>
// </div>
// ),

// responsive: [
// {
// breakpoint: 1024,
// settings: {
// slidesToShow: 2,
// slidesToScroll: 1,
// infinite: true,
// dots: true,
// },
// },
// {
// breakpoint: 768,
// settings: {
// slidesToShow: 1,
// slidesToScroll: 1,

// initialSlide: 1,
// },
// },
// ],
// };
// const Card = ({ content1,content2,content3,content4,content5,imageUrl }) => {
// }

// return (
// <div className='border-slate-300 p-[2%] shadow-md'>
// <Slider {...settings}>
// <div>
// <div className="border border-gray-300 rounded-lg overflow-hidden m-4 w-[322.66px] h-[300px] card">
// <form>
// <tr><img src={imageUrl} className="w-[320.66px] h-[200px] card-image p-[5%]" /></tr>
// <div style={{height:'100px',textAlign:'justify'}} className='p-[5%]'>
// <tr style={{fontSize:'15px',position:'relative',left:'10px'}}>{content1}</tr>
// <trstyle={{position:'relative',top:'3px',left:'10px',fontWeight:"bold",fontSize:'15px'}}>{content2} <labelstyle={{fontSize:'13px',color:'#616060',fontWeight:'light'}}>{onwards}</label></tr>
// <trstyle={{position:'relative',left:'7px',fontSize:'15px',outline:'none',border:'none'}}><buttonclassName='btn' style={{color:'#0288D1',backgroundColor:'#353e4e'}}>{content3}</button></tr>
// <tr style={{position:'relative',left:'0.1px',fontSize:'15px'}}><button className='btn'style={{color:'#0288D1'}}>{content4}</button></tr>
// <tr style={{position:'relative',right:'8px',fontSize:'15px'}}><button className='btn'style={{color:'#0288D1'}}>{content5}</button></tr>
// </div>
// </form>

// </div>
// </div>
// {/* Add more Card components as needed */}
// </Slider>
// </div>
// );
// }

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Car({ content1, content2, content3, content4, content5, imageUrl }) {
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    };

    const PrevArrow = (props) => {

        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),

        responsive: [
            {
                breakpoint: 1024,

                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <div className='border-slate-300 p-[2%] shadow-md'>
            <Slider {...settings}>
                <div>
                    <div className="border border-gray-300 rounded-lg overflow-hidden m-4 w-[322.66px] h-
[300px] card">
                        <form>
                            <tr><img src={imageUrl} className="w-[320.66px] h-[200px] card-image p-[5%]" /></tr>
                            <div style={{ height: '100px', textAlign: 'justify' }} className='p-[5%]'>
                                <tr style={{ fontSize: '15px', position: 'relative', left: '10px' }}>{content1}</tr>

                                <tr style={{
                                    position: 'relative', top: '3px', left: '10px', fontWeight: "bold", fontSize: '15px'
                                }}>{content2} <label style={{
                                    fontSize: '13px', color: '#616060', fontWeight: 'light'
                                }}>onwards</label></tr>
                                <tr style={{
                                    position: 'relative', left: '7px', fontSize: '15px', outline: 'none', border: 'none'
                                }}><button className='btn' style={{
                                    color: '#0288D1', backgroundColor: '#353e4e'
                                }}>{content3}</button></tr>
                                <tr style={{ position: 'relative', left: '0.1px', fontSize: '15px' }}><button className='btn'
                                    style={{ color: '#0288D1' }}>{content4}</button></tr>
                                <tr style={{ position: 'relative', right: '8px', fontSize: '15px' }}><button className='btn'
                                    style={{ color: '#0288D1' }}>{content5}</button></tr>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Add more Card components as needed */}
            </Slider>
        </div>
    );
}