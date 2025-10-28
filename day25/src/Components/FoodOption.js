import { useRef } from "react";
import Foodcard from "./FoodCard";
import { imageGridCards } from "../Utils/FoodData";

export default function FoodOption() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-[80%] mx-auto mt-30">
      {/* Arrows on Top Right */}
      <div className="absolute -top-10 right-2 flex gap-2">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="p-2 rounded-full bg-gray-100 shadow hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="p-2 rounded-full bg-gray-100 shadow hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>

      {/* Scrollable Double Row */}
      <div
        ref={scrollRef}
        className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto whitespace-nowrap px-12 scroll-smooth"
      >
        {imageGridCards.map((foodData) => (
          <div className="w-40 shrink-0" key={foodData.id}>
            <Foodcard foodData={foodData} />
          </div>
        ))}
      </div>
    </div>
  );
}
