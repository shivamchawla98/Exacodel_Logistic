'use client'
import { useEffect, useState } from 'react';

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported.'));
    } else {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }
  });
};

const LocationInfo = () => {
  const [locationData, setLocationData] = useState({
    latitude: null,
    longitude: null,
    city: '',
    postalCode: '',
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const position: any = await getCurrentLocation();

        const { latitude, longitude } = position?.coords;
        setLocationData((prevLocationData) => ({
          ...prevLocationData,
          latitude,
          longitude,
        }));
        // Fetch city and postal code based on coordinates using Google Maps Geocoder
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCFigvs7RwemDJcfluki8CNX4uTUzua5Lo`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
console.log(response);

        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const { address_components } = data.results[0];

          let city = '';
          let postalCode = '';

          address_components.forEach((component: any) => {
            if (component.types.includes('locality')) {
              city = component.long_name;
            }
            if (component.types.includes('postal_code')) {
              postalCode = component.long_name;
            }
          });

          setLocationData((prevLocationData) => ({
            ...prevLocationData,
            city,
            postalCode,
          }));
        }
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    fetchLocation();
  }, []);
  console.log("city : ",locationData);
  
  return (
    <div>
      <p>Latitude: {locationData.latitude}</p>
      <p>Longitude: {locationData.longitude}</p>
      <p>City: {locationData?.city || 'Loading...'}</p>
      <p>Postal Code: {locationData?.postalCode || 'Loading...'}</p>
    </div>
  );
};

export default LocationInfo;