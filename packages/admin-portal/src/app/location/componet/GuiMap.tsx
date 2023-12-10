"use client";

import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
// import type { NextPage } from 'next';
import { useEffect, useMemo } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import styles from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateLat,
  updateAddress,
  updateLng,
  updateCity,
  updateCountry,
  updatePincode,
  updateState,
} from "@/features/gmapSlice/gmap-slice";

const Home = () => {
  const { lat, lng } = useSelector((state: any) => state.gmapSlice);
  const dispatch = useDispatch();

  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);
  const dispatchAll = async (lat: any, lng: any) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCFigvs7RwemDJcfluki8CNX4uTUzua5Lo`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch.");
    }
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const { address_components } = data.results[0];
      console.log("hey : ");

      let city = "";
      let postalCode = "";
      let address = data.results[0].formatted_address;
      let country = "";
      let state = "";

      address_components.forEach((component: any) => {
        if (component.types.includes("administrative_area_level_1")) {
          state = component.long_name;
        }
        if (component.types.includes("administrative_area_level_3")) {
          city = component.long_name;
        }
        if (component.types.includes("postal_code")) {
          postalCode = component.long_name;
        }
        if (component.types.includes("country")) {
          country = component.long_name;
        }
      });
      dispatch(updateAddress(address));
      dispatch(updatePincode(postalCode));
      dispatch(updateCity(city));
      dispatch(updateCountry(country));
      dispatch(updateState(state));
      dispatch(updateLat(lat));
      dispatch(updateLng(lng));
      console.log(data);
      console.log("city", city);
      console.log("pincode", postalCode);
      console.log("state", state);
    }
  };
  // initial location will be its current location
  try {
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            dispatchAll(latitude, longitude);
            // You can perform further actions with latitude and longitude data here
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        dispatchAll(0, 0);
        console.error("Geolocation is not supported by this browser.");
      }
    }, [navigator.geolocation]);
  } catch (error) {
    console.log("navigator error", error);
  }

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      // clickableIcons: true,
      // scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "add key here",
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const handleMarkerDragEnd = (e: any) => {
    console.log("lng", e.latLng.lng());

    dispatchAll(e.latLng.lat(), e.latLng.lng());
  };

  return (
    <div className="rounded-md flex justify-center flex-wrap">
      <div className="w-11/12 max-w-xl">
        {/* render Places Auto Complete and pass custom handler which updates the state */}
        <PlacesAutocomplete
          onAddressSelect={(address) => {
            getGeocode({ address: address }).then(async (results: any) => {
              const { lat, lng } = getLatLng(results[0]);
              dispatchAll(lat, lng);
              dispatch(updateLat(lat));
              dispatch(updateLng(lng));
            });
          }}
        />
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "80%", height: "400px" }}
        onLoad={(map) => console.log("Map Loaded")}
      >
        <MarkerF
          position={mapCenter}
          draggable={true}
          onDragEnd={handleMarkerDragEnd}
          onLoad={() => console.log("Marker Loaded")}
        />
      </GoogleMap>
    </div>
  );
};

const PlacesAutocomplete = ({
  onAddressSelect,
}: {
  onAddressSelect?: (address: string) => void;
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    //   requestOptions: { componentRestrictions: { country: 'us' } },
    debounce: 300,
    cache: 86400,
  });

  const renderSuggestions = () => {
    return data.map((suggestion: any) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <li
          className="text-gray-600 text-sm  py-2 cursor-pointer pl-4 rounded-sm shadow-md"
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div className={styles.autocompleteWrapper}>
      <button
        type="button"
        className="rounded-md bg-sky-500 px-3 mx-1 py-2.5 text-xs  font-semibold text-white shadow-sm hover:bg-sky-400"
      >
        Locate your Warehouse
      </button>
      <input
        value={value}
        className="shadow-md rounded-md focus:outline-none py-2 mb-2 text-sm border border-sky-500 focus:border-2  font-medium  w-1/2 pl-4"
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for loaction of yours warehouse"
      />

      {status === "OK" && (
        <ul className={styles.suggestionWrapper}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};

export default Home;
