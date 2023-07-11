import React from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

const Maps = () => {
  const values = [
    {
      location_id: "5944216",
      name: "Gandhali Restaurants",
      latitude: "25.61445",
      longitude: "85.14384",
      num_reviews: "49",
    },
    {
      location_id: "2711005",
      name: "Bansi Vihar",
      latitude: "25.60961",
      longitude: "85.13765",
      num_reviews: "167",
    },
    {
      location_id: "3631584",
      name: "Mainland China",
      latitude: "25.611607",
      longitude: "85.13903",
      num_reviews: "120",
    },
    {
      location_id: "4603466",
      name: "Biryani Mahal",
      latitude: "25.610277",
      longitude: "85.133736",
      num_reviews: "178",
    },
  ];

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: 25.610277,
    lng: 85.133736,
  };

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {
            values && values.map((value)=>(
                <MarkerF position={{lat : value.latitude,lng : value.longitude}}/>
            ))
        }
      </GoogleMap>
    </>
  );
};

export default Maps;
