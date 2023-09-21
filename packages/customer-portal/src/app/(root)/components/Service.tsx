import { MdDirectionsBoatFilled } from 'react-icons/md';
import { BsGlobeAmericas } from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { MdSupportAgent } from 'react-icons/md';
import ServicesCard from './ServicesCard';


function Service() {
  return (
    <section className="py-16 h-full bg-sky-100">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        Services
      </h2>
      <div className="pl-5 pr-5 ">
        <div className=" mx-auto flex justify-evenly p-2 md:m-7 lg:m-9 flex-wrap">
          <ServicesCard
            icons={<MdDirectionsBoatFilled size={30} color="#6699CC"  />}
            title='Freight Services'
          />
          <ServicesCard icons={<BsGlobeAmericas size={30} color="#007FFF" />} title='Shipping & Logistics' />
          <ServicesCard icons={<FaTools size={30} color="#722f37" />} title='Business services' />
        </div>
        <div className="mx-auto flex justify-evenly p-2 pb-10 md:m-7 lg:m-9 flex-wrap">
          <ServicesCard icons={<FiMonitor size={30} color="#922724" />} title='Digital Technologies'  />
          <ServicesCard icons={<MdSupportAgent size={30} color="purple" />} title='24/7 Support'  />
          <ServicesCard icons={<MdSupportAgent size={30} color="purple" />}  title='24/7 Support'  />
        </div>
      </div>
    </section>
  );
}

export default Service;
