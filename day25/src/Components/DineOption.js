// 
import { useRef } from "react";
import { dineoutRestaurants } from "../Utils/DineData";
import DineCard from "./DineCard";

export default function DineCardOption() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="w-[80%] mx-auto mt-20 mb-20">
      {/* Header + Arrows */}
      <div className="flex justify-between items-center px-2 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Discover Best Restaurants on Dineout
        </h2>
        <div className="flex gap-3">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-gray-100 shadow hover:bg-gray-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
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
            className="p-2 rounded-full bg-gray-100 shadow hover:bg-gray-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex flex-nowrap overflow-x-auto gap-6 scroll-smooth pb-2"
      >
        {dineoutRestaurants.map((RestData) => (
          <DineCard key={RestData?.info?.id} RestData={RestData} />
        ))}
      </div>
    </div>
  );
}
