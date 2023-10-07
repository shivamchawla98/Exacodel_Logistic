import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoImg from "./LogoImg";

function Brand() {
  const sliderSettings = {
    infinite: true, // Loop the slider
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Autoplay the slider
    speed: 2000, // Autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 768, // Adjust the settings for smaller screens if needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // Add more breakpoints and settings as needed
    ],
  };

  return (
    <section className="bg-white py-24">
      {/* <div className="container mx-auto"> */}
        <div className="w-full">
          {/* <Slider {...sliderSettings} > */}
          <div className="bg-gray-200 py-8">
            <div className="container mx-auto">
              <div className="flex justify-center">
                <div className="logo-slider flex space-x-4 items-center overflow-x-auto">
                  <div className="logo-item">
                    <LogoImg
                      href="#"
                      alt="Brand Image"
                      imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                      // Use your sky-500 color for background, text, or border
                      className="bg-sky-500 text-white rounded-lg p-4"
                    />
                  </div>
                  <div className="logo-item">
                    <LogoImg
                      href="#"
                      alt="Brand Image"
                      imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
                      // Use your sky-500 color for background, text, or border
                      className="bg-sky-500 text-white rounded-lg p-4"
                    />
                  </div>
                  <div className="logo-item">
                    <LogoImg
                      href="#"
                      alt="Brand Image"
                      imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
                      // Use your sky-500 color for background, text, or border
                      className="bg-sky-500 text-white rounded-lg p-4"
                    />
                  </div>
                  <div className="logo-item">
                    <LogoImg
                      href="#"
                      alt="Brand Image"
                      imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
                      // Use your sky-500 color for background, text, or border
                      className="bg-sky-500 text-white rounded-lg p-4"
                    />
                  </div>
                  {/* Add more LogoImg components here if needed */}
                </div>
              </div>
            </div>
            {/* </Slider> */}
          </div>
        </div>
    </section>
  );
}

export default Brand;
