import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card'; // Make sure to import the Card component

const CardSlider = ({ cards }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    content1={card.content1}
                    content2={card.content2}
                    content3={card.content3}
                    content4={card.content4}
                    content5={card.content5}
                    imageUrl={card.imageUrl}
                />
            ))}
        </Slider>
    );
};

export default CardSlider;