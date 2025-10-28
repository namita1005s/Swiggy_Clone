import { useState } from "react";

export default function Footer() {
  const swiggyLink =
    "https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en_IN";

  const foodCities = [
    "Bangalore", "Gurgaon", "Hyderabad", "Delhi",
    "Mumbai", "Pune", "Kolkata", "Chennai",
    "Ahmedabad", "Chandigarh", "Jaipur", "Lucknow", "Indore"
  ];

  const groceryCities = [
    "Bangalore", "Gurgaon", "Hyderabad", "Delhi",
    "Mumbai", "Pune", "Kolkata", "Chennai",
    "Ahmedabad", "Chandigarh", "Jaipur", "Noida", "Surat"
  ];

  const [showMoreFood, setShowMoreFood] = useState(false);
  const [showMoreGrocery, setShowMoreGrocery] = useState(false);

  const renderCities = (cities, type, showMore) => {
    const visibleCities = showMore ? cities : cities.slice(0, 11);
    return (
      <>
        {visibleCities.map((city, index) => (
          <button
            key={index}
            onClick={() => window.open(swiggyLink, "_blank")}
            className="text-[#02060CBF] text-[14px] font-medium border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition w-full text-left leading-tight"
          >
            Order {type} in {city}
          </button>
        ))}
      </>
    );
  };

  return (
    <footer className="w-full flex justify-center font-sans p-6">
      <div className="max-w-[868px] w-full">
        {/* Food Delivery Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Cities with food delivery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {renderCities(foodCities, "food online", showMoreFood)}
            {!showMoreFood && (
              <button
                onClick={() => setShowMoreFood(true)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-red-500 text-[14px] font-medium hover:bg-gray-100 transition w-full text-left"
              >
                Show More <span className="text-sm">⌄</span>
              </button>
            )}
          </div>
        </div>

        {/* Grocery Delivery Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cities with grocery delivery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {renderCities(groceryCities, "grocery delivery", showMoreGrocery)}
            {!showMoreGrocery && (
              <button
                onClick={() => setShowMoreGrocery(true)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-red-500 text-[14px] font-medium hover:bg-gray-100 transition w-full text-left"
              >
                Show More <span className="text-sm">⌄</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
