import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { EventCards } from "./EventCards/EventCards";
import React from "react";
import Slider from "react-slick";
import styles from "./CardCarousel.module.css"

const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
};

const products = [
    {
        img: "/images/product1.jpg",
        title: "Dolore magna",
        text: "Lorem ipsum dolor sit amet elit.",
    },
    {
        img: "/images/product2.jpg",
        title: "Eget est lorem",
        text: "Lorem Ipsum adipiscing elit ipsum.",
    },
    {
        img: "/images/product3.jpg",
        title: "Tempus imperdiet",
        text: "Orci porta non pulvinar neque laoreet.",
    },
    {
        img: "/images/product4.jpg",
        title: "Mattis rhoncus",
        text: "Bibendum neque egestas congue quisque.",
    },
    {
        img: "/images/product5.jpg",
        title: "Odio ut enim",
        text: "Mattis rhoncus urna neque viverra justo.",
    },
];


const CardCarousel = () => {
    return (
        <div className={styles.CardCarousel}>
            <Slider {...config}>
                {products.map((x, i) => {
                    const img={
                        src:x.img,
                    }
                    const cardDetails={
                        title:x.title,
                        text:x.text,
                    }
                    return (
                        <EventCards  key={i}  img={img} cardDetails={cardDetails} />
                    );
                })}
            </Slider>
        </div>
    );
};
export default CardCarousel;
