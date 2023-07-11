import { useState } from "react"
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai"

export default function Carousel({
  children: slides
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-black text-white hover:bg-gray-500"
        >
          <AiOutlineArrowLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-black text-white hover:bg-gray-500"
        >
        <AiOutlineArrowRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-4">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${curr === i ? "p-1.5" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}