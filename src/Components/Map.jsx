import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import {HiLocationMarker} from "react-icons/hi"

const Map = ({setcoordinates,setBounds,coordinates, values}) => {
  
  return (
    <>
    <div className='h-screen w-full'>
      <GoogleMapReact
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={11}
        margin={[50,50,50,50]}
        onChange={(e)=>{
          setcoordinates({lat: e.center.lat,lng:e.center.lng})
          setBounds({ne: e.marginBounds.ne, sw:e.marginBounds.sw})
        }}
      >
        {values && values.map((value,i)=>(
          <div  
          className='text-2xl text-red-700'
          lat={Number(value.latitude)|| 25.61445} 
          lng={Number(value.longitude )|| 85.14384}
      ><HiLocationMarker/></div>
        ))}
        
      </GoogleMapReact>
    </div>
    </>
  )
}

export default Map