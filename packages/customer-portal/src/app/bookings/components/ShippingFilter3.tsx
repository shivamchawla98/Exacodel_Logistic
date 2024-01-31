"use client";
import { Datepicker } from "flowbite-react";
import { FaCalendar, FaTruck } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuContainer } from "react-icons/lu";
import { MdWarehouse } from "react-icons/md";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SubSearchBar from "./SubSearchBar";
import SearchBar from "@/components/small components/ContainerInputBar";
import moment from "moment";
import GET_SHIPMENT_DETAILS_LCL from "@/graphql/query/getLclShipment";
import { useLazyQuery } from "@apollo/client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import type { CustomFlowbiteTheme } from "flowbite-react";
import GET_SHIPMENT_DETAILS from "@/graphql/query/shipmentDetails";

const CalendarIcon = () => <FaCalendar className="h-4 w-4 text-orange-500" />;

function ShippingFilter3({
  setData,
  setFcl,
  setContainerSizeType,
  setNumberOfContainer,
}: any) {
  const pathname = usePathname();
  const [showFromBar, setShowFromBar] = useState(false);
  const [showToBar, setShowToBar] = useState(false);
  const [date, setDate] = useState<string>("");
  const [fromCountry, setFromCountry] = useState("");
  const [fromState, setFromState] = useState("");
  const [fromName, setFromName] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [toState, setToState] = useState("");
  const [toName, setToName] = useState("");
  const [fclOrLcl, setFclOrLcl] = useState("");
  const [container, setContainer] = useState("");
  const [numContainer, setNumContainer] = useState<number>(0);
  const [weight, setWeights] = useState<number>(0);
  const [volume, setVolumes] = useState<number>(0);
  const [airOrSea, setAirOrSea] = useState("sea");
  const [submitError, setSubmitError] = useState(false);
  const router = useRouter();
  const [showLoad, setShowLoad] = useState(false);
  const [getShipmentDetailslcl, { loading, data, error }] = useLazyQuery(
    GET_SHIPMENT_DETAILS_LCL
  );
  const [getShipmentDetails, { data: shipmentData }] =
    useLazyQuery(GET_SHIPMENT_DETAILS);

  const handleDateChange = (date: any) => {
    let formatedDate = moment(date).format("DD/MM/YYYY");
    setDate(formatedDate);
    console.log(formatedDate);
  };
  console.log("path name", pathname);

  const handleSubmit = async () => {
    if (pathname !== "/bookings") {
      console.log("pathname internal : ", pathname);

      router.push("/bookings");
      setSubmitError(false);
      return;
    }

    if (fromName.length === 0 || toState.length === 0) {
      setSubmitError(true);
      return;
    }

    if (fclOrLcl === "fcl") {
      console.log("fcl or lcl : ", fclOrLcl);
      console.log("container type : ", container);
      console.log("number of container : ", numContainer);
      setContainerSizeType(container);
      setNumberOfContainer(numContainer);
      try {
        let { data } = await getShipmentDetails({
          variables: {
            fromShipment: "Port",
            fromCountry: fromCountry,
            fromState: fromState,
            fromName: fromName,
            toShipment: "Port",
            toCountry: toCountry,
            toState: toState,
            toName: toName,
            ST20: 0,
            ST40: 1,
            REF20: 0,
            REF40: 0,
            HQ40: 0,
            HQ45: 0,
            currency: "USD",
            date: date,
          },
        });
        console.log("data shipment", data);
        setFcl(true);
        setData(data.getShipmentDetails);
      } catch (error) {
        console.log("error : ", error);
      }
    } else {
      try {
        let { data } = await getShipmentDetailslcl({
          variables: {
            fromShipment: airOrSea === "sea" ? "Port" : "Airport",
            fromCountry: fromCountry,
            fromState: fromState,
            fromName: fromName,
            toShipment: "Port",
            toCountry: toCountry,
            toState: toState,
            toName: toName,
            currency: "USD",
            weight: weight * 1,
            volume: volume * 1,
            date: date,
          },
        });
        console.log("fcl or lcl : ", fclOrLcl);
        console.log("Weight : ", weight);
        console.log("Volume : ", volume);
        setContainerSizeType(weight);
        setNumberOfContainer(volume);
        console.log("data : ", data);
        setData(data.getShipmentDetailslcl);
        setFcl(false);
      } catch (error) {
        console.log("error in lcl : ", error);
      }
    }
  };

  return (
    <div className="w-full flex-center">
      <div className="w-full md:w-4/5 mt-10  bg-gradient-to-l from-gray-200 to-gray-400 p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-xl border border-orange-500">
        <div className="flex justify-end flex-wrap pl-4 w-full">
          <div className="flex-start flex-wrap">
            <p className="text-xs md:text-sm lg:text-base text-white h3-semibold mr-5 my-2 md:my-0 ">
              Shipping Type :{" "}
            </p>
            <div className="flex-start pl-4 flex-wrap bg-white shadow-md px-4 py-2 rounded-lg">
              <div className="flex jutify-evenly flex-wrap items-center md:w-48 rounded-md h-6 md:h-8 bg-white shadow-md">
                <div
                  onClick={() => {
                    router.push("/bookings");
                  }}
                  className="flex-center cursor-pointer"
                >
                  <LuContainer className="h-4 w-4 cursor-pointer md:h-5 md:w-5 text-orange-500 mx-4" />
                  <p className="text-xs cursor-pointer md:text-sm text-gray-800 paragraph-semibold">
                    Freight
                  </p>
                  <button
                    onClick={() => {
                      setAirOrSea("air");
                      router.push("/bookings");
                    }}
                    className={`border-r border-gray-300 text-xs paragraph-medium hover:scale-105 mx-2 pr-2 ${
                      airOrSea !== "sea" &&
                      "text-sm text-orange-500 paragraph-semibold"
                    } `}
                  >
                    Air
                  </button>
                  <button
                    onClick={() => {
                      setAirOrSea("sea");
                      router.push("/bookings");
                    }}
                    className={`text-xs paragraph-medium hover:scale-105 mx-2 ${
                      airOrSea === "sea" &&
                      "text-sm text-orange-500 paragraph-semibold"
                    }`}
                  >
                    Sea
                  </button>
                </div>
              </div>
              <div className="flex-center mt-2 md:mt-0 hover:scale-105 md:ml-2 cursor-pointer">
                <FaTruck className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mx-4" />
                <Link
                  href={"/trucking"}
                  className="text-xs md:text-sm text-gray-800 paragraph-semibold"
                >
                  Truck
                </Link>
              </div>
              <div className="flex-center mt-2 md:mt-0 hover:scale-105 md:ml-2 cursor-pointer">
                <MdWarehouse className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mx-4" />
                <a
                  href={"/warehouse"}
                  className="text-xs md:text-sm text-gray-800 paragraph-semibold"
                >
                  Warehouse
                </a>
              </div>
            </div>
          </div>
          {/* <button className="text-xs my-2 md:my-0 md:text-sm lg:text-base text-gray-800 h3-bold flex-center">
            Request Quote
            <IoIosArrowRoundForward className="h-6 w-6 font-light text-orange-500 mx-4" />
          </button> */}
        </div>

        <div className="flex-center flex-wrap md:flex-nowrap w-full shadow-lg">
          <div className="w-11/12 md:w-3/12 lg:w-3/12 relative mt-2 bg-white rounded-md md:rounded-r-none md:rounded-l-lg shadow-xl border-r  px-3.5 py-2.5 h-14  hover:border-gray-300">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <HiLocationMarker
                className="h-5 w-5 text-orange-500"
                aria-hidden="true"
              />
            </div>
            <div
              id="from"
              className="block w-full truncate rounded-md body-medium border-0 py-1.5 pl-10 text-gray-500 hover:scale-105 cursor-pointer placeholder:text-gray-400  outline-none sm:text-sm sm:leading-6"
              placeholder="From"
              onClick={() => {
                setShowToBar(false);
                setShowFromBar(!showFromBar);
              }}
            >
              {fromName.length === 0 ? "From..." : fromName}
            </div>
            <div className="left-0 absolute z-20 mt-4 w-full overflow-hidden rounded-md bg-white">
              {showFromBar && (
                <SubSearchBar
                  country={fromCountry}
                  name={fromName}
                  state={fromState}
                  setCountry={setFromCountry}
                  setState={setFromState}
                  setName={setFromName}
                  setShowbar={setShowFromBar}
                />
              )}
            </div>
          </div>

          <div className="w-11/12 md:w-3/12 lg:w-3/12 relative mt-2 bg-white  rounded-md md:rounded-none px-3.5 py-2.5 h-14 shadow-2xl border-r   hover:border-gray-300">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <HiLocationMarker
                className="h-5 w-5 text-orange-500"
                aria-hidden="true"
              />
            </div>
            <div
              id="from"
              className="block truncate w-full rounded-md body-medium border-0 py-1.5 pl-10 text-gray-500 hover:scale-105 cursor-pointer placeholder:text-gray-400  outline-none sm:text-sm sm:leading-6"
              placeholder="From"
              onClick={() => {
                setShowFromBar(false);
                setShowToBar(!showToBar);
              }}
            >
              {toName.length === 0 ? "To.." : toName}
            </div>
            <div className="left-0 absolute z-20 mt-4 w-full overflow-hidden rounded-md bg-white">
              {showToBar && (
                <SubSearchBar
                  country={toCountry}
                  name={toName}
                  state={toState}
                  setCountry={setToCountry}
                  setState={setToState}
                  setName={setToName}
                  setShowbar={setShowToBar}
                />
              )}
            </div>
          </div>

          <div className="w-11/12 md:w-3/12 lg:w-3/12 relative mt-2 bg-white rounded-md md:rounded-none  px-3.5 pt-1.5 h-14 shadow-2xl border-r  hover:border-gray-300">
            <Datepicker
              style={{
                color: "#6b7280",
                fontWeight: "500",
                outlineColor: "white",
              }}
              icon={CalendarIcon}
              onClick={() => {
                setShowFromBar(false);
                setShowToBar(false);
              }}
              onSelectedDateChanged={(date) => {
                handleDateChange(date);
              }}
              minDate={new Date()}
            />
          </div>
          <div className="w-11/12 md:w-3/12 lg:w-3/12 relative mt-2 bg-white text-gray-500 rounded-md md:rounded-none font-medium text-base  px-3.5 py-1 h-14 shadow-2xl  hover:border-gray-300">
            <button
              onClick={() => {
                setShowLoad(!showLoad);
                setShowFromBar(false);
                setShowToBar(false);
              }}
              className="w-full text-gray-500 font-medium text-base  px-auto h-11"
            >
              {fclOrLcl.length === 0
                ? "Load"
                : fclOrLcl === "fcl"
                  ? `${fclOrLcl} / ${container}`
                  : `${fclOrLcl} / ${weight} Metric Tone`}
            </button>
            {showLoad && (
              <SearchBar
                setFclOrLcl={setFclOrLcl}
                setContainer={setContainer}
                setNumContainer={setNumContainer}
                setWeights={setWeights}
                setVolumes={setVolumes}
                handleDateChange={handleDateChange}
                setShowLoad={setShowLoad}
                register={(args: any) => {
                  console.log(args);
                }}
              />
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="flex justify-center  items-center bg-orange-500 rounded-md md:rounded-l-none md:rounded-r-lg px-2 py-3 mt-2 "
          >
            <MagnifyingGlassIcon className="text-white h-8 " />
          </button>
        </div>
        {submitError && (
          <p className="text-xs font-medium text-rose-300">
            Enter all field before search
          </p>
        )}
      </div>
    </div>
  );
}

export default ShippingFilter3;
