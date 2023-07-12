import React from "react";
import { BsCircleHalf } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Carousel from "./Carousel";

// const slider = [
//   "https://media-cdn.tripadvisor.com/media/photo-s/18/3b/9e/f4/takht-sri-harmandir-sahib.jpg",
//   "https://media-cdn.tripadvisor.com/media/photo-f/18/3b/9e/f4/takht-sri-harmandir-sahib.jpg",
//   "https://media-cdn.tripadvisor.com/media/photo-o/18/3b/9e/f4/takht-sri-harmandir-sahib.jpg",
//   "https://media-cdn.tripadvisor.com/media/photo-l/18/3b/9e/f4/takht-sri-harmandir-sahib.jpg",
//   "https://media-cdn.tripadvisor.com/media/photo-t/18/3b/9e/f4/takht-sri-harmandir-sahib.jpg",
// ];
const Card = ({ value , index}) => {
  const { name, rating,  ranking, address, website,photo } = value;
  const val = Object.values(photo?.images || {}).map(size => size.url)
  return (
    <>
      <div className="flex border-b-2 border-gray-200">
        <div className="max-w-lg max-h-64 m-2">
          <Carousel>
            {val && val.map((s) => (
              <>
              <img src={s} alt="Cards" />
              <div className="absolute top-4 right-4 w-6 h-6 p-4 rounded-full bg-white" ><AiOutlineHeart className="absolute -mt-2 -ml-2 font-bold text-lg"/></div>
            </>
            ))}
          </Carousel>
        </div>
        <div className="w-1/2 p-2">
          <h2 className="text-xl font-bold mb-2">{index+1+"."+ name}</h2>
          <p className="text-gray-700 flex gap-2 ">
            <div className="flex"> <BsCircleHalf className="text-green-400 bg-green-400 rounded-full"/><BsCircleHalf className="text-green-400 bg-green-400 rounded-full"/><BsCircleHalf className="text-green-400 bg-green-400 rounded-full"/><BsCircleHalf className="text-green-400 bg-green-400 rounded-full"/><BsCircleHalf className="text-green-400 rounded-full"/></div>
            <div className="justify-center -mt-1 font-bold">
            {rating}
            </div>
          </p>
          <div className="flex truncate">{ranking}</div>
          <div className="flex justify-between">
            <HiLocationMarker className="text-2xl m-2" /> {address}
          </div>
          <div
            onClick={() => window.open(website, "_blank")}
            className="flex justify-end"
          >
            <AiOutlineLink className="text-sky-300 text-2xl active:text-blue-50 duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
