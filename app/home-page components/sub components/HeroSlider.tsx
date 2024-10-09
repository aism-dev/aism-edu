"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider, { Settings } from "react-slick";
import { WithChildren } from "@/lib/Types";

export default function HeroSlider({ children }: WithChildren) {
    var settings: Settings = {
        infinite: true,
        draggable: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // fade: true,
        autoplaySpeed: 10000
    };
    return (
        <Slider className="w-full overflow-hidden h-[100vh]" autoplay {...settings}>
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
