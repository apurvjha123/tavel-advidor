import React, { useEffect, useState } from "react";
import Map from "./Map";
import { data } from "../rapidapi";
import Card from "./Card";
import Search from "./Search";

const Home = ({ place }) => {
  const [Data, SetData] = useState(null);

  const [coordinates, setcoordinates] = useState();
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setcoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    data(place, bounds).then((data) => {
      SetData(data);
    });
  }, [place, coordinates, bounds]);

  console.log(Data);

  return (
    <>
      <div>
        <Search />
      </div>
      <div>
        <div className=" md:flex grid grid-rows-2">
          {/*Content*/}
          <div className="md:w-4/12 h-screen overflow-y-scroll scrollbar-hide">
            <div className="m-3">
              {/* card */}
              {Data ? (
                Data.map((value, index) => (
                  <Card
                    index={index}
                    value={value}
                    imageUrl={value.photo && value.photo.images.original.url}
                  />
                ))
              ) : (
                <div>Loading.....</div>
              )}
            </div>
          </div>
          {/* map */}
          <div className="md:w-8/12 grid grid-rows-2 h-screen">
            <div className="m-3">
              <Map
                setcoordinates={setcoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                places={Data}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
