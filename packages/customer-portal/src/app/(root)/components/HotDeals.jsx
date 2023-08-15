import { FireIcon } from '@heroicons/react/24/outline';
import DealCard from './DealCard';
import IndianFlag from '../indiaFlag.png';

function HotDeals() {
  const testDataForOffer = [1, 2, 3, 4];
  return (
    <section className="pt-40 pb-40 bg-gradient-to-br from-white to-sky-100">
      <h1 className=" mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-white text-center flex justify-center">
        Hot{<FireIcon className="h-7 text-rose-400 " />} Deals
      </h1>

      {/* import Offer */}
      <h3 className="mb-4 text-xl font-semibold tracking-tight leading-none md:text-2xl xl:text-2xl text-center dark:text-white pt-12">
        Import Offers
      </h3>
      <div className="flex justify-center flex-wrap">
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
      <h3 className="mb-4 text-xl font-semibold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white text-center pt-12">
        Export Offers
      </h3>
      <div className="flex justify-center flex-wrap">
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
