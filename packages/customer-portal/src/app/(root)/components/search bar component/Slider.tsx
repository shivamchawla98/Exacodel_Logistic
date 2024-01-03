import { Carousel, IconButton } from "@material-tailwind/react";
import HeroSlider from "../HeroSlider";

export function Slider() {
  return (
    <div className="w-full flex justify-center bg-sky-100 py-16 items-center">
      <Carousel
        autoplay={true}
        loop={true}
        className="rounded-2xl shadow-md w-11/12 "
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
        <HeroSlider />
        <HeroSlider />
      </Carousel>
    </div>
  );
}

export default Slider;
