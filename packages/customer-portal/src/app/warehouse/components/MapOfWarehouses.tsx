"use client";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

function MapOfWarehouses() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "add key here",
    // libraries: libraries as any,
  });
  const markers = [
    {
      lat: 37.7749,
      lng: -122.4194,
      imageUrl: "https://i.imgur.com/1w6QqKZ.png",
    },
    {
      lat: 37.7749,
      lng: -122.5194,
      imageUrl: "https://i.imgur.com/1w6QqKZ.png",
    },
    {
      lat: 37.8749,
      lng: -122.4194,
      imageUrl: "https://i.imgur.com/1w6QqKZ.png",
    },
    {
      lat: 37.8749,
      lng: -122.5194,
      imageUrl: "https://i.imgur.com/1w6QqKZ.png",
    },
  ];

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
          zoom={14}
          center={{ lat: 37.7749, lng: -122.4194 }}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: "100vw", height: "100vh" }}
          onLoad={(map) => console.log("Map Loaded")}
        >
          {markers.map(({ lat, lng, imageUrl }) => (
            <Marker
              key={`${lat}-${lng}`}
              // icon={{ url: imageUrl }}
              position={{ lat, lng }}
            />
          ))}
        </GoogleMap>
      }
    </div>
  );
}

export default MapOfWarehouses;
