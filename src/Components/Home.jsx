import React, { useEffect, useState } from "react";
import Map from "./Map";
import { data } from "../rapidapi";
import Card from "./Card";
import {BsExclamationCircle} from "react-icons/bs"
import {ImSpinner8} from "react-icons/im"

const Home = ({ place }) => {
  const [Data, SetData] = useState(null);

  const [coordinates, setcoordinates] = useState();
  const [bounds, setBounds] = useState(null);
  const [ChildClicked, setChildClicked] = useState();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setcoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    data(place, bounds).then((data) => {
      SetData(data);
      setIsLoading(false)
    });
  }, [progress, place, coordinates, bounds]);

  const handleSliderChange = (event) => {
    setProgress(event.target.value);
  };
  console.log(Data);
  console.log({ChildClicked})

  return (
    <>
      <div>
        <div className=" md:flex grid grid-rows-2">
          {/*Content*/}
          <div className="md:w-4/12 h-screen overflow-y-scroll scrollbar-hide">
            {/* distance */}
            <div className="mt-2 px-4 pt-2 pb-1 md:w-1/3 w-2/3 ml-4">
              <div className="flex justify-between">
                <div className="">Distance</div>
                <div>{6 - progress} KM</div>
              </div>
              <div className=" md:m-1 md:ml-1">
                <input
                  type="range"
                  id="progressSlider"
                  className="w-auto h-2 rounded-md outline-none appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:w-[5px] [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:bg-sky-500"
                  style={{
                    background: `linear-gradient(90deg, rgb(0, 153, 0) ${
                      (progress - 1) * 25
                    }%, rgb(0, 255, 0) ${(progress - 1) * 25}%)`,
                  }}
                  min={1}
                  max={5}
                  value={progress}
                  thumbClassName="bg-white"
                  onChange={handleSliderChange}
                />
              </div>
            </div>

            <div className="flex justify-start ml-4">
              {Data?.length || 377} places sorted by traveler favorites <BsExclamationCircle className="mx-2 my-1"/>
            </div>
            {isLoading?(<div className="flex md:mt-40 justify-center" ><ImSpinner8 className=" text-2xl text-lime-500 animate-spin"/></div>):
            <div className="m-3">
            {/* card */}
            {Data && (
              Data.map((value, index) => (
                <Card
                  index={index}
                  value={value}
                  
                />
              ))
            )}
          </div>}
          </div>
          {/* map */}
          <div className="md:w-8/12 grid grid-rows-2 h-screen">
            <div className="m-3 mt-0">
              <Map
                setcoordinates={setcoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                values={Data}
                progress={progress}
                setChildClicked={setChildClicked}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
