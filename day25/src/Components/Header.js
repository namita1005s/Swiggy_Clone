import React from "react";

export default function Header() {
  // Function to scroll to banner
  const scrollToBanner = () => {
    const banner = document.getElementById("appBanner");
    if (banner) {
      banner.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#ff5200] font-serif">
      {/* Top Navbar */}
      <div className="flex justify-between container mx-auto py-8">
        <img
          className="w-40 h-12"
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="Swiggy Logo"
        />
        <div className="text-white text-base font-bold flex gap-6 items-center">
          <a target="_blank" rel="noopener noreferrer" href="https://www.swiggy.com/corporate/">
            Swiggy Corporate
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://partner.swiggy.com/login#/swiggy">
            Partner with Us
          </a>
          <button
            onClick={scrollToBanner}
            className="border border-white py-3 px-4 rounded-2xl hover:bg-white hover:text-[#ff5200] transition-colors"
          >
            Get The App
          </button>
          <a
            className="border border-black bg-black py-3 px-4 rounded-2xl hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.swiggy.com/corporate/"
          >
            Sign in
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-16 pb-8 relative">
        <img
          className="h-110 w-60 absolute top-0 left-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="Veggies"
        />
        <img
          className="h-110 w-60 absolute top-0 right-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="Sushi"
        />
        <div className="max-w-[60%] text-5xl text-white font-bold container mx-auto text-center">
          Order Food and groceries. Discover best restaurants. Swiggy it!
        </div>
        <div className="max-w-[70%] container mx-auto flex gap-5 mt-10">
          <input
            className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl"
            placeholder="Delhi, India"
          />
          <input
            className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl"
            placeholder="Search for restaurant and items for more"
          />
        </div>
      </div>

      {/* Merchandising Banners */}
      <div className="max-w-[80%] container mx-auto flex gap-4 mt-6">
        <a href="/restaurant">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
            alt="Food"
          />
        </a>
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"
            alt="Instamart"
          />
        </a>
        <a href="https://www.swiggy.com/dineout">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"
            alt="Dineout"
          />
        </a>
        <a href="https://www.swiggy.com/genie">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"
            alt="Genie"
          />
        </a>
      </div>
    </header>
  );
}
