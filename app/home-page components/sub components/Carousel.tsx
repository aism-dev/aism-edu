"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider, { Settings } from "react-slick";
import { WithChildren } from "@/lib/Types";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Carousel({ children }: WithChildren) {
  const settings: Settings = {
    infinite: true,
    draggable: true,
    speed: 500,
    dots: true,
    pauseOnHover: true,
    slidesToShow: 3,
    adaptiveHeight: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    focusOnSelect: true,
    prevArrow: <PrevArrow />,
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
    <Slider className="w-full gap-4 relative" autoplay {...settings}>
      {children}
    </Slider>
  );
}

function NextArrow(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute sm:-bottom-8 -bottom-10 left-8 cursor-pointer active:scale-90 z-30 text-theme opacity-50 hover:opacity-100"
    >
      <FaArrowLeftLong className="text-4xl" /> 
    </div>
  );
}

function PrevArrow(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute sm:-bottom-8 -bottom-10 right-8 cursor-pointer active:scale-90 z-30 text-theme opacity-50 hover:opacity-100"
    >
      <FaArrowRightLong className="text-4xl" />
    </div>
  );
}
