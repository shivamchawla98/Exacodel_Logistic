import { FireIcon } from "@heroicons/react/24/outline";
import DealCard from "./DealCard";
import IndianFlag from "../indiaFlag.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HotDeals() {
  const testDataForOffer = [1, 2, 3, 4];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the autoplay speed (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-40 pb-20 bg-white w-full">
      <h1 className=" mb-4 h1-bold text-gray-800 leading-none md:text-6xl xl:text-5xl text-center flex justify-center">
        Hot{<FireIcon className="h-7 text-primary-500 " />} Deals
      </h1>

      {/* import Offer */}
      <h3 className="mb-4 h3-bold leading-none md:text-2xl text-center text-gray-700 pt-12">
        Import Offers
      </h3>

      <div className="blog-card-slider w-full">
        <Slider
          {...settings}
          className="lg:w-11/12 mx-auto flex justify-center"
        >
          {testDataForOffer.map((e) => (
            <DealCard
              key={e}
              flag={IndianFlag}
              country={"India"}
              containerType={"FCL 20' ST"}
              amount={40}
            />
          ))}
        </Slider>
      </div>

      {/* export offer */}
      <h3 className="mb-4 h3-bold leading-none text-gray-700 text-center pt-12">
        Export Offers
      </h3>
      <div className="blog-card-slider w-full">
        <Slider
          {...settings}
          className="lg:w-11/12 mx-auto flex justify-center"
        >
          {testDataForOffer.map((e) => (
            <DealCard
              key={e}
              flag={IndianFlag}
              country={"India"}
              containerType={"FCL 20' ST"}
              amount={40}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default HotDeals;
