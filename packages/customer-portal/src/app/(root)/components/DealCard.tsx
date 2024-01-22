import Image from "next/image";
import { MdDirectionsBoat } from "react-icons/md";

function DealCard({ flag, country, containerType, amount }: any) {
  return (
    <div className="relative m-6 flex max-w-xl flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <span className="bg-primary-500 text-white w-30 ml-32 font-semibold rounded-bl-md text-base rounded-tr-md text-center">
        Starting from
      </span>
      <div className="p-3 flex justify-start pt-4">
        <Image src={flag} width={40} alt="flag" />
        <h5 className="mb-1 ml-2 block paragraph-semibold text-blue-gray-900 antialiased">
          {country}
        </h5>
      </div>
      <div className="flex justify-evenly p-3 pt-2">
        <div className="flex-center">
          <MdDirectionsBoat size={15} className="text-primary-500" />
          <p className="small-semibold ml-2">{containerType}</p>
        </div>
        <h3 className="body-semibold rounded-sm text-primary-500">
          USD $ {amount}
        </h3>
      </div>
    </div>
  );
}

export default DealCard;
