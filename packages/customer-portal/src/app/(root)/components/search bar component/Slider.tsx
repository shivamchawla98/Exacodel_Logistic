import { Carousel, IconButton } from "@material-tailwind/react";
import HeroSlider from "../HeroSlider";

const slidersData = [
  {
    title: "Logistics & Trade Finance solution",
    para: `
    Today SeaRates can offer an extensive finance solution to support your international deals. Working with world's leading NBFC's through DP World's Finance we give you deferred payment options for either logistics services or even payments for the goods.
    
    Getting Started
    pinterest-logo
    
    Logistics & Trade Finance solution`,
    img: `https://readymadeui.com/readymadeui_banner.webp`,
    gradient: " bg-gradient-to-r from-blue-500 to-blue-600",
    logo: [
      {
        alt: "pinterest",
        img: "https://readymadeui.com/pinterest-logo.svg",
      },
    ],
  },
  {
    title: "Logistics & Trade Finance solution",
    para: `
    Today SeaRates can offer an extensive finance solution to support your international deals. Working with world's leading NBFC's through DP World's Finance we give you deferred payment options for either logistics services or even payments for the goods.
    
    Getting Started
    pinterest-logo
    
    Logistics & Trade Finance solution`,
    img: `https://readymadeui.com/readymadeui_banner.webp`,
    gradient: "bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800",
    logo: [
      {
        alt: "pinterest",
        img: "https://readymadeui.com/pinterest-logo.svg",
      },
    ],
  },
  {
    title: "Logistics & Trade Finance solution",
    para: `
    Today SeaRates can offer an extensive finance solution to support your international deals. Working with world's leading NBFC's through DP World's Finance we give you deferred payment options for either logistics services or even payments for the goods.
    
    Getting Started
    pinterest-logo
    
    Logistics & Trade Finance solution`,
    img: `https://readymadeui.com/readymadeui_banner.webp`,
    gradient:
      "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-300 to-amber-900",
    logo: [
      {
        alt: "pinterest",
        img: "https://readymadeui.com/pinterest-logo.svg",
      },
    ],
  },
  {
    title: "Logistics & Trade Finance solution",
    para: `
    Today SeaRates can offer an extensive finance solution to support your international deals. Working with world's leading NBFC's through DP World's Finance we give you deferred payment options for either logistics services or even payments for the goods.
    
    Getting Started
    pinterest-logo
    
    Logistics & Trade Finance solution`,
    img: `https://readymadeui.com/readymadeui_banner.webp`,
    gradient: "bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600",
    logo: [
      {
        alt: "pinterest",
        img: "https://readymadeui.com/pinterest-logo.svg",
      },
    ],
  },
  {
    title: "Logistics & Trade Finance solution",
    para: `
    Today SeaRates can offer an extensive finance solution to support your international deals. Working with world's leading NBFC's through DP World's Finance we give you deferred payment options for either logistics services or even payments for the goods.
    
    Getting Started
    pinterest-logo
    
    Logistics & Trade Finance solution`,
    img: `https://readymadeui.com/readymadeui_banner.webp`,
    gradient: "bg-gradient-to-r from-rose-700 to-pink-600",
    logo: [
      {
        alt: "pinterest",
        img: "https://readymadeui.com/pinterest-logo.svg",
      },
    ],
  },
];

export function Slider() {
  return (
    <div className="w-full flex justify-center bg-white pt-4 pb-12 items-center">
      <Carousel
        autoplay={true}
        loop={true}
        className="rounded-3xl max-h-screen lg:w-11/12 shadow-2xl "
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {slidersData.map((slider, index): any => (
          <HeroSlider
            key={index}
            title={slider.title}
            para={slider.para}
            heroImage={slider.img}
            logo={slider.logo}
            gradient={slider.gradient}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
