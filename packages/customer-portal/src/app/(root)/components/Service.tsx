import { MdDirectionsBoatFilled } from "react-icons/md";
import { BsGlobeAmericas } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";
import ServicesCard from "./ServicesCard";

function Service() {
  return (
    <section className="py-16 h-full flex-center bg-white">
      <div className="w-full">
        <h1 className="text-5xl h1-bold text-gray-900  text-center">
          Services
        </h1>
        <div className=" ">
          <div className="flex justify-evenly p-2 md:m-7 lg:m-0 flex-wrap">
            <ServicesCard
              icons={<MdDirectionsBoatFilled size={25} color="#6699CC" />}
              title="Freight Services"
            />
            <ServicesCard
              icons={<BsGlobeAmericas size={25} color="#007FFF" />}
              title="Shipping & Logistics"
            />
            <ServicesCard
              icons={<FaTools size={25} color="#722f37" />}
              title="Business services"
            />
          </div>
          <div className="mx-auto flex justify-evenly p-2 pb-10 md:m-7 lg:m-0  flex-wrap">
            <ServicesCard
              icons={<FiMonitor size={25} color="#922724" />}
              title="Digital Technologies"
            />
            <ServicesCard
              icons={<MdSupportAgent size={25} color="purple" />}
              title="24/7 Support"
            />
            <ServicesCard
              icons={<MdSupportAgent size={25} color="purple" />}
              title="24/7 Support"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
