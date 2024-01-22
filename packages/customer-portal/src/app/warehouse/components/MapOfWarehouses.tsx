"use client";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

function MapOfWarehouses() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_googleMapsApiKey!,
    // libraries: libraries as any,
  });
  const { markers } = useSelector((state: any) => state.warehouseSlice);
  useEffect(() => {
    console.log("markers : ", markers);
  }, [markers]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      // clickableIcons: true,
      // scrollwheel: false,
    }),
    []
  );

  // const libraries = useMemo(() => ["places"], []);

  if (!isLoaded) {
    return (
      <div className="lg-w-1/2 flex justify-center items-center">
        Loading ...
      </div>
    );
  }

  return (
    <div className="lg:w-1/2 flex justify-center items-center">
      {
        <GoogleMap
          options={mapOptions}
          zoom={9}
          center={{
            lat: markers[0]?.latitude * 1,
            lng: markers[0]?.longitude * 1,
          }}
          mapContainerStyle={{ width: "100vw", height: "100vh" }}
          onLoad={(map) => console.log("Map Loaded")}
        >
          {markers?.map((warehouse: any) => (
            <Marker
              key={`${warehouse.latitude}-${warehouse.longitude}`}
              // icon={{ url: imageUrl }}
              position={{
                lat: warehouse.latitude * 1,
                lng: warehouse.longitude * 1,
              }}
            />
          ))}
        </GoogleMap>
      }
    </div>
  );
}

export default MapOfWarehouses;
