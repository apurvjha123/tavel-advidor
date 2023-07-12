import GoogleMap from "google-map-react";
import { HiLocationMarker } from "react-icons/hi";

const Map = ({ setcoordinates, setBounds, coordinates, values, progress , setChildClicked}) => {
  
  return (
    <>
      <div className="h-screen w-full">
        <GoogleMap
          defaultCenter={coordinates}
          center={coordinates}
          zoom={progress*5}
          defaultZoom={11}
          onChange={(e) => {
            setcoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={child => setChildClicked(child)}
        >
          {values &&
            values.map((value) => (
              <HiLocationMarker
              className="text-2xl text-green-950"
              lat={Number(value.latitude) || 25.61445}
                lng={Number(value.longitude) || 85.14384}
            />
            ))}
            
        </GoogleMap>
      </div>
    </>
  );
};

export default Map;
