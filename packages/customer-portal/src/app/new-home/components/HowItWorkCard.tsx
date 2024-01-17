import { HiArrowRight } from "react-icons/hi";

function HowItWorkCard() {
  return (
    <div className="border-r py-2 w-56 pl-4 hover:bg-slate-700 hover:scale-105 flex-start flex-col">
      <p className="text-base w-full flex-start paragraph-semibold  text-orange-500">
        01
      </p>
      <h3 className="text-white w-full flex-start pt-2 pb-4 text-lg h3-bold">
        Chemicals
      </h3>
      <div className="w-full flex-start">
        <div className="h-8 w-8 flex-center rounded-full bg-gray-500 hover:bg-orange-500">
          <HiArrowRight className="text-white h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

export default HowItWorkCard;
