import { useEffect, useRef } from "react";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface LocationSearchInputProps {
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
}

const libraries = ["places"];

const LocationSearchInput: React.FC<LocationSearchInputProps> = ({ onPlaceSelected}) => {

  const searchBoxRef = useRef<google.maps.places.SearchBox>();
  const key = process.env.NEXT_PUBLIC_googleMapsApiKey;
  const selectedPlace = () => {
    if (searchBoxRef.current && onPlaceSelected) {
      searchBoxRef.current.addListener("places_changed", () => {
        const places = searchBoxRef.current?.getPlaces();
        console.log("palces >>>>>>>", places);
        
        if (places && places.length > 0) {
          onPlaceSelected(places[0]);
        }
      });
    }
  }
 

  const handleLoad = (searchBox: google.maps.places.SearchBox) => {
    searchBoxRef.current = searchBox;
  };
  if (!key) {
    // you can throw error here and
    // let [Error Boundary](https://reactjs.org/docs/error-boundaries.html)
    // handle it
    // or return an component that says "Google Token is not set"
    throw new Error("Google token is not set");
  }

  return (
    <LoadScript libraries={["places"]} googleMapsApiKey={key}>
      <StandaloneSearchBox onLoad={handleLoad}>
        <div className="relative flex-col items-center my-2">
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Warehouse Location
          </label>
          <input
            type="text"
            id="location"
            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-fuchsia-500 dark:focus:ring-fuchsia-500 p-2.5 text-sm pl-2 rounded-lg"
            placeholder="Search warehouse location"
            onChangeCapture={() => selectedPlace()}
          />
          {/* <MagnifyingGlassIcon className="h-6 w-6 absolute right-3" /> */}
        </div>
      </StandaloneSearchBox>
    </LoadScript>
  );
};

export default LocationSearchInput;
