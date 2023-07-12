import GoogleMap from "google-map-react";
import { HiLocationMarker } from "react-icons/hi";
import {mapStyles} from '../mapStyles'

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
          options={{disableDefaultUI:false,zoomControl:true,styles:mapStyles}}
        >
          {values &&
            values.map((value) => (
              <HiLocationMarker
              className="text-2xl text-green-600"
              lat={Number(value.latitude)}
                lng={Number(value.longitude)}
            />
            ))}
        </GoogleMap>
      </div>
    </>
  );
};

export default Map;
