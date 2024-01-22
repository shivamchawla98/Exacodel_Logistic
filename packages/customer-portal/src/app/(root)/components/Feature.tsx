import delivery from "../../../asset/icons/delivery.png";
import callCenter from "../../../asset/icons/call-center.png";
import distribution from "../../../asset/icons/distribution.png";
import truck from "../../../asset/icons/truck.png";

const perks = [
  {
    name: "Transportation Services",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
    description:
      "At our logistics company, we take pride in our vital role as the backbone of supply chains, quietly ensuring that goods flow smoothly from manufacturers to customers.",
  },
  {
    name: "Warehousing and Distribution",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg",
    description:
      "Warehouses are the cornerstone of efficient inventory management. Our logistics team ensures your products are readily available for distribution, fostering your business's confidence in our reliable services.",
  },
  {
    name: "Supply Chain Management",
    imageSrc:
      "https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/external-logistic-logistics-delivery-icongeek26-outline-gradient-icongeek26-16.png",
    description:
      "We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here.",
  },
  {
    name: "Customs and Compliance",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "We handle customs and compliance seamlessly, ensuring your shipments meet all regulations with ease.",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {perks.map((perk) => (
            <div key={perk.name} className="sm:flex-center">
              <div className="sm:flex-shrink-0">
                <div className="flex-center">
                  <img className="h-24 w-28" src={perk.imageSrc} alt="#" />
                </div>
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0">
                <h3 className="text-base body-semibold text-gray-900">
                  {perk.name}
                </h3>
                <p className="mt-2 text-sm body-medium text-gray-500">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
