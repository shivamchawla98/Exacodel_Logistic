"use client";
import GET_WARE_HOUSE_BY_ID from "@/graphql/query/getWarehouseById";
import { useQuery } from "@apollo/client";
import { Carousel } from "@material-tailwind/react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { label: "Warehouse Type", value: "2021" },
  { label: "Temperature Capacity", value: "37" },
  { label: "Temperature Type", value: "12" },
  { label: "Storage Charges (Day / Sq. Ft.)", value: "$25M" },
];

const hazardousTypes = [
  "Class1",
  "Class2",
  "Class3",
  "Class4",
  "Class5",
  "Class6",
  "Class7",
  "Class8",
];

const temperatureCapacityMapping: any = {
  MINUS_Eighteen_Degree_to_twenty_degree_celcius: "Between -18°C and 20°C",
  MINUS_Two_Degree_to_MINUS_Eight_degree_celcius: "Between -2°C and -8°C",
  MINUS_Twenty_Degree_to_twenty_degree_celcius: "Between -20°C and 20°C",
  fifteen_Degree_to_twentyfive_degree_celcius: "Between 15°C and 25°C",
};

const warehouseTypeMapping: any = {
  coldStorageFacility: "Cold Storage Facility",
  generalWarehouse: "General Warehouse",
  referigeratedWarehouse: "Refrigerated Warehouse",
  fullFilmentCenter: "Fulfillment Center",
  petroleumWarehouse: "Petroleum Warehouse",
  bondedWarehouse: "Bonded Warehouse",
  hazCargoWarehouse: "Hazardous Cargo Warehouse",
};

export default function WarehouseDetails() {
  const [id, setId] = useState(1);
  useEffect(() => {
    try {
      let warehouseId: any = localStorage.getItem("warehouseId");
      console.log(warehouseId);

      setId(warehouseId * 1);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { data, error, loading, refetch } = useQuery(GET_WARE_HOUSE_BY_ID, {
    variables: {
      id: id * 1,
    },
  });
  stats[0].value = warehouseTypeMapping[data?.getWarehouseById.warehouseType];
  stats[1].value =
    temperatureCapacityMapping[data?.getWarehouseById.temperatureCapacity];
  stats[2].value = data?.getWarehouseById.temperatureType;
  stats[3].value = data?.getWarehouseById.storageCharges;
  console.log(data?.getWarehouseById);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="w-full flex justify-center bg-white pt-4 pb-12 items-center">
              <Carousel
                autoplay={true}
                loop={true}
                className="rounded-3xl max-h-screen lg:w-11/12 shadow-2xl "
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                <div className="h-96">
                  <Image
                    src="/images/w1.jpg"
                    className="w-full h-full"
                    fill={true}
                    alt="warehouse 1"
                  />
                </div>
                <div className="h-96">
                  <Image
                    src="/images/w1.jpg"
                    className="w-full h-full"
                    fill={true}
                    alt="warehouse 1"
                  />
                </div>
                <div className="h-96">
                  <Image
                    src="/images/w1.jpg"
                    className="w-full h-full"
                    fill={true}
                    alt="warehouse 1"
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-primary-500">
                Warehouse Name
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {data?.getWarehouseById.uniqueid}
              </h1>
              <div className="max-w-xl">
                <h3 className="mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-base">
                  {data?.getWarehouseById.Adress}
                </h3>
                <p className="mt-6">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-2">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="mt-2 text-lg body-semibold leading-10 tracking-tight text-gray-900">
                    {stat.label}
                  </dt>
                  <dd className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
