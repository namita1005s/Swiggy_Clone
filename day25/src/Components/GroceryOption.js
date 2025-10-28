import { useRef } from "react";
import { GroceryGridCards } from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="mt-20 w-[80%] container mx-auto">
      {/* Header with title + arrows in one row */}
      <div className="flex justify-between items-center px-4">
        <h1 className="text-[24px] font-bold">Shop Groceries on Instamart</h1>
        <div className="flex gap-2">
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
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto mt-10 whitespace-nowrap px-4 scroll-smooth"
      >
        {GroceryGridCards.map((foodData) => (
          <GroceryCard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </div>
  );
}
