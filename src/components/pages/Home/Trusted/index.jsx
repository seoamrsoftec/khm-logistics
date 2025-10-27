"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TrustedSection() {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1340, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  const logos = [
    { src: "/images/clients/dubey-cab.png", alt: "" },
    { src: "/images/clients/jay-sikotar.png", alt: "" },
    { src: "/images/clients/mangat-travel.png", alt: "" },
    { src: "/images/clients/kanha-travels.png", alt: "" },
    { src: "/images/clients/noru-cab.png", alt: "" },
    { src: "/images/clients/patiala-cab.png", alt: "" },
    { src: "/images/clients/dubey-cab.png", alt: "" },
    { src: "/images/clients/jay-sikotar.png", alt: "" },
    { src: "/images/clients/mangat-travel.png", alt: "" },
    { src: "/images/clients/kanha-travels.png", alt: "" },
    { src: "/images/clients/noru-cab.png", alt: "" },
    { src: "/images/clients/patiala-cab.png", alt: "" },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="page-inner-title">
          Trusted by Taxi Businesses Across India
        </h2>
        <p className="text-gray-black text-md mb-10">
          Hundreds of local taxi operators rely on MyCabPortal to manage and grow their online booking system.
        </p>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-4 flex">
              <div className="home-client-logos-slider">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                objectFit="contain"
              />
              </div>
             </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
