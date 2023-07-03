import React from 'react'
import {AiFillStar} from "react-icons/ai"
import {PiDotOutlineBold} from "react-icons/pi"
import {HiLocationMarker} from "react-icons/hi"
import {AiOutlineLink} from "react-icons/ai"


const Card = ({value,imageUrl}) => {
    const {name,rating, num_reviews,ranking,address,website} = value
  return (
    <>
    <div className="flex border-b-2 border-gray-200">
                <div className="w-1/2">
                  <img
                    src={imageUrl}
                    alt="Card"
                    className="p-2 h-44 w-full rounded-2xl overflow-hidden object-cover"
                  />
                </div>
                <div className="w-1/2 p-2">
                  <h2 className="text-xl font-bold mb-2">{name}</h2>
                  <p className="text-gray-700 flex "><AiFillStar className='text-yellow-500 m-1'/> <div className='font-extrabold flex'>{rating} <PiDotOutlineBold className='m-1'/> {num_reviews} reveiws</div></p>
                  <div className='flex truncate'>{ranking}</div>
                  <div className='flex justify-between'><HiLocationMarker className='text-2xl m-2'/> {address}</div>
                  <div onClick={()=> window.open(website,'_blank')} className='flex justify-end'><AiOutlineLink className='text-sky-300 text-2xl active:text-blue-50 duration-300'/></div >
                </div>
              </div>
    </>
  )
}

export default Card