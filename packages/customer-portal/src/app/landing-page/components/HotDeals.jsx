import { FireIcon } from '@heroicons/react/24/outline';
import DealCard from './DealCard';
import IndianFlag from '../indiaFlag.png';

function HotDeals() {
  const testDataForOffer = [1, 2, 3, 4];
  return (
    <section className="pt-40 bg-gradient-to-br from-white to-sky-100">
      <h1 className=" mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-white text-center flex justify-center">
        Hot{<FireIcon className="h-7 text-rose-400 " />} Deals
      </h1>

      {/* import Offer */}
      <h3 className="mb-4 text-xl font-semibold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white pl-10 pt-4">
        Import Offers
      </h3>
      <div className="grid grid-cols-4 gap-4 ml md:ml-7 md:mr-7 lg:ml-24 lg:mr-24">
        {testDataForOffer.map((e) => (
          <DealCard
            key={e}
            flag={IndianFlag}
            country={'India'}
            containerType={"FCL 20' ST"}
            amount={40}
          />
        ))}
      </div>

      {/* export offer */}
      <h3 className="mb-4 text-xl font-semibold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white pl-10 pt-9">
        Export Offers
      </h3>
      <div className="grid grid-cols-4 gap-4 ml md:ml-7 md:mr-7 lg:ml-24 lg:mr-24">
        {testDataForOffer.map((e) => (
          <DealCard
            key={e}
            flag={IndianFlag}
            country={'India'}
            containerType={"FCL 20' ST"}
            amount={40}
          />
        ))}
      </div>
    </section>
  );
}

export default HotDeals;
