"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider, { Settings } from "react-slick";
import { WithChildren } from "@/lib/Types";

export default function Carousel({ children }: WithChildren) {
    var settings: Settings = {
        infinite: true,
        draggable: true,
        speed: 500,
        dots: true,
        pauseOnFocus: true,
        pauseOnHover: false,
        slidesToShow: 3,
        adaptiveHeight: true,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        focusOnSelect: true,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 4
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ],
        initialSlide: 0,
        // fade: true,
        autoplaySpeed: 5000
    };
    return (
        <Slider className="w-full overflow-hidden gap-4" autoplay {...settings}>
            {children}
        </Slider>
    );
}

function SampleNextArrow(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
function SamplePrevArrow(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
