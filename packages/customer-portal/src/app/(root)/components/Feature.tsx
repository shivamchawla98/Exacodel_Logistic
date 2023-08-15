import OurProductCard from "@/components/OurProductCard";
import OurProductShortCard from "@/components/OurProductShortCard";
import { BsFillBoxSeamFill } from "react-icons/bs";

const incentives = [
  {
    name: "Free shipping",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "10-year warranty",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: "Exchanges",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

function Feature() {
  return (
    <section className="relative pt-16 bg-sky-100">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-6">
        Our Products
      </h1>
      <div className="w-11/12 flex justify-center flex-col">
        <div className="w-1/6 bg-blue-600 rounded-tr-lg rounded-tl-lg ml-20">
          <h2 className="text-white ml-45  py-2  weight-bold text-xl  text-center ">
            hsdjsdcsd slknl skdnc
          </h2>
        </div>
        <div className="flex justify-center items-center w-screen ">
          <OurProductCard itemsArray={incentives} />
        </div>

        <div className="flex justify-evenly items-center w-screen ">
          <div className="mt-12 justify-center flex-col lg:w-2/5">
            <div className="w-96 bg-blue-600 rounded-tr-lg rounded-tl-lg ml-20">
              <h2 className="text-white ml-45  py-2  weight-bold text-xl  text-center ">
                hsdjsdcsd slknl skdnc
              </h2>
            </div>
            <OurProductShortCard itemsArray={incentives.slice(0, 2)} />
          </div>

          <div className="mt-12 justify-center flex-col lg:w-2/5">
            <div className="w-96 bg-blue-600 rounded-tr-lg rounded-tl-lg ml-20">
              <h2 className="text-white ml-45  py-2  weight-bold text-xl  text-center ">
                hsdjsdcsd slknl skdnc
              </h2>
            </div>
            <OurProductShortCard itemsArray={incentives.slice(0, 2)} />
          </div>
        </div>

        <div className="mt-12 w-1/6 bg-blue-600 rounded-tr-lg rounded-tl-lg ml-20">
          <h2 className="text-white ml-45  py-2  weight-bold text-xl  text-center ">
            hsdjsdcsd slknl skdnc
          </h2>
        </div>
        <div className="flex mb-12 justify-center items-center w-screen ">
          <OurProductCard itemsArray={incentives} />
        </div>
      </div>
    </section>
  );
}

export default Feature;
