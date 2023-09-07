import OurProductCard from "@/components/OurProductCard";
import OurProductShortCard from "@/components/OurProductShortCard";
import { BsFillBoxSeamFill } from "react-icons/bs";

const incentives = [
  {
    name: "Ocean Freight",
    imageSrc:
      "https://img.icons8.com/ios-filled/50/cargo-ship.png",
    description:
      "Managing the transportation of goods by sea, including container shipping",
  },
  {
    name: "Freight Forwarding",
    imageSrc:
      "https://img.icons8.com/ios-filled/50/port.png",
    description:
      "Coordinating the transportation of goods by various modes such as road, rail, sea, or air.",
  },
  {
    name: "Trucking and Shipping",
    imageSrc:
      "https://img.icons8.com/ios-filled/50/partially-shipped.png",
    description:
      "Providing trucking and shipping services for transporting goods locally or internationally.",
  },
];

const warehousing = [
  {
    name: "Warehousing ",
    imageSrc:
      "https://img.icons8.com/ios-filled/50/warehouse-1.png",
    description:
      "Storage and inventory management services, including pick, pack, and ship operations.",
  },
  {
    name: "Cross-Docking",
    imageSrc:
      "https://img.icons8.com/ios-filled/50/horizontal-docking.png",
    description:
      "Transferring goods directly from inbound to outbound shipments with minimal storage",
  },
];

const supplyChain = [
  {
    name: "Demand Forecasting",
    imageSrc:
      "https://img.icons8.com/ios-filled/50/strike.png",
    description:
      "Predicting future demand to optimize inventory and production planning",
  },
  {
    name: "Vendor Management",
    imageSrc:
      "https://img.icons8.com/ios-filled/50/commercial-development-management.png",
    description:
      "Coordinating with suppliers to ensure a smooth flow of materials and products",
  },
];


function Feature() {
  return (
    <section className="relative pt-16 bg-sky-100">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-6">
        Our Products
      </h1>
      <div className="w-11/12 flex justify-center flex-col">
        <div className="ml-8 lg:w-1/6 bg-sky-500 rounded-tr-lg rounded-tl-lg md:ml-20 lg:ml-20 ">
          <h2 className="text-white ml-45  py-2  weight-bold text-xl  text-center ">
            Transportation Services
          </h2>
        </div>
        <div className="w-screen flex justify-center items-center">
          <OurProductCard itemsArray={incentives} />
        </div>

        <div className="w-screen flex justify-evenly items-center flex-wrap">
          <div className="lg:w-1/2">
            <div className="mt-12 flex justify-center">
            <div className="w-80 bg-sky-500 rounded-tr-lg rounded-tl-lg">
              <h2 className="text-white ml-45  py-2  weight-bold text-xl  text-center ">
                Warehousing and Distribution
              </h2>
            </div>
            </div>
            <div className="mb-12  flex justify-center items-center ">
              <OurProductShortCard itemsArray={warehousing} />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mt-12 flex justify-center">
            <div className="w-80 bg-sky-500 rounded-tr-lg rounded-tl-lg">
              <h2 className="text-white ml-45  py-2  weight-bold text-xl  text-center ">
                Supply Chain Management
              </h2>
            </div>
            </div>
            <div className="mb-12  flex justify-center items-center ">
              <OurProductShortCard itemsArray={supplyChain.slice(0,2)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
