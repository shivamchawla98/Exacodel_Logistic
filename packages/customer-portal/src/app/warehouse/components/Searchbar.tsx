import { useEffect, useRef } from "react";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface LocationSearchInputProps {
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
}

const LocationSearchInput: React.FC<LocationSearchInputProps> = ({
  onPlaceSelected,
}) => {
  const searchBoxRef = useRef<google.maps.places.SearchBox>();

  useEffect(() => {
    if (searchBoxRef.current && onPlaceSelected) {
      searchBoxRef.current.addListener("places_changed", () => {
        const places = searchBoxRef.current?.getPlaces();
        if (places && places.length > 0) {
          onPlaceSelected(places[0]);
        }
      });
    }
  }, [onPlaceSelected]);

  const handleLoad = (searchBox: google.maps.places.SearchBox) => {
    searchBoxRef.current = searchBox;
  };

  return (
    <LoadScript
      libraries={["places"]}
      googleMapsApiKey={process.env.NEXT_PUBLIC_googleMapsApiKey!}
    >
      <StandaloneSearchBox onLoad={handleLoad}>
        <div className="relative flex justify-center items-center my-2">
          <input
            type="text"
            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm pl-10 rounded-lg"
            placeholder="Search warehouse location"
          />
          <MagnifyingGlassIcon className="h-6 w-6 absolute right-3" />
        </div>
      </StandaloneSearchBox>
    </LoadScript>
  );
};

export default LocationSearchInput;
