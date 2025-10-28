import { useState } from "react";

export default function DineCard({ RestData }) {
  const [showAllOffers, setShowAllOffers] = useState(false);

  // ✅ Table booking
  const tableBooking = RestData?.info?.vendorHighlights?.some(
    (h) => h.title === "Table booking"
  );

  // ✅ Offers array
  const offers = RestData?.info?.vendorOffer?.info
    ? [RestData.info.vendorOffer.info]
    : [];

  // ✅ Customer Offer
  const customerOffer = RestData?.info?.customerOffer?.infos?.[0]?.description;


  return (
    <div className="w-80 flex-none rounded-3xl overflow-hidden shadow-lg bg-white">
      {/* Image Section */}
      <a target="_blank" href={RestData?.cta?.link} rel="noopener noreferrer">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles[0]?.url
            }
            alt={RestData?.info?.name}
          />
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>

          {/* Restaurant Name */}
          <div className="absolute bottom-3 left-3 text-white text-lg font-extrabold">
            {RestData?.info?.name}
          </div>

          {/* Rating */}
          {RestData?.info?.rating?.value && (
            <div className="absolute bottom-3 right-3 text-white text-sm font-bold bg-black/40 px-2 py-1 rounded-lg">
              {RestData?.info?.rating?.value}
            </div>
          )}
        </div>
      </a>

      {/* Info Section */}
      <div className="p-4 space-y-2">
        {/* Cuisine + Cost */}
        <div className="flex justify-between items-center text-sm font-medium text-gray-700">
          <p className="truncate max-w-[60%]">
            {RestData?.info?.cuisines?.join(" • ")}
          </p>
          <p className="text-gray-800">{RestData?.info?.costForTwo}</p>
        </div>

        {/* Address + Distance */}
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <p className="truncate">{RestData?.info?.locationInfo?.formattedAddress}</p>
          <p className="ml-2 font-medium">{RestData?.info?.locationInfo?.distanceString}</p>
        </div>

        {/* Table Booking */}
       {tableBooking && (
  <span className="inline-flex items-center gap-2 text-xs md:text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-medium">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png"
      alt="Table Booking"
      className="w-4 h-4 md:w-5 md:h-5"
    />
    Table booking available
  </span>
)}


        {/* Offers */}
{offers.length > 0 && (
  <div className="space-y-2 mt-2">
    {offers
      .slice(0, showAllOffers ? offers.length : 1)
      .map((offer, i) => (
        <div
          key={i}
          className="flex items-center gap-3 text-sm md:text-base px-3 py-2 rounded-lg font-semibold"
          style={{
            backgroundColor: i === 0 ? "#1BA672" : "#C6F0E3",
            color: i === 0 ? "white" : "#1BA672",
          }}
        >
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"
            alt="Offer"
            className="w-6 h-6 md:w-7 md:h-7"
          />
          <span>
            {offer.title} - {offer.subtitle}
          </span>
        </div>
      ))}

    {!showAllOffers && offers.length > 1 && (
      <button
        onClick={() => setShowAllOffers(true)}
        className="text-[#1BA672] text-sm md:text-base font-medium hover:underline"
      >
        +{offers.length - 1} more
      </button>
    )}
  </div>
)}

        {/* Customer Offer */}
        {customerOffer && (
          <div
            className="text-sm md:text-base px-3 py-2 rounded-lg font-medium"
            style={{
              backgroundColor: "#C8F9E5",
              color: "#1BA672",
            }}
          >
            {customerOffer}
          </div>
        )}
      </div>
    </div>
  );
}
