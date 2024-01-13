// import SearchBar from "./SearchBar";
import map from "../../../asset/images/map.jpg";
import globe from "../../../asset/images/Globe .png";
import Image from "next/image";
import ShippingFilter from "@/components/ShippingFilter";

function Hero() {
  return (
    <section className="w-full h-screen relative flex bg-white justify-evenly align-middle bg-sky-white opacity-90 flex-wrap">
      <Image
        className="absolute top-0 z-0 opacity-20"
        fill={true}
        src={map}
        alt="background image"
      />

      <div className="lg:h-52 top-24  lg:w-10/12 lg:top-44  my-auto flex justify-center align-middle absolute bg z-10">
        <ShippingFilter />
      </div>
    </section>
  );
}

export default Hero;
