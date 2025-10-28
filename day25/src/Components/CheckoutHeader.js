
import React from "react";
import { Link } from "react-router";

const CheckoutHeader = () => {
 return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">

        {/* LEFT: Swiggy logo + Secure Checkout */}
        <div className="flex items-center gap-4">
          {/* Swiggy Logo */}
          <Link to="/">
            <div className="flex items-center justify-center">
              <img
                src="https://media-assets.swiggy.com/fl_lossy,f_auto,q_auto,w_96,h_96/portal/m/logo_192x192.png"
                alt="Swiggy Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
          </Link>

          {/* Secure Checkout text */}
          <p className="text-gray-900 font-semibold text-lg tracking-wide">
            SECURE CHECKOUT
          </p>
        </div>

        {/* RIGHT: Help + Sign In */}
        <div className="flex items-center gap-10">
          {/* Help */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17h.01M12 13a4 4 0 1 0-4-4m4 4v4m0-12a9 9 0 1 0 9 9 9 9 0 0 0-9-9Z"
              />
            </svg>
            <span className="font-medium text-gray-800">Help</span>
          </div>

          {/* Sign In */}
          <Link
            to="/login"
            className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9A3.75 3.75 0 1 1 12 5.25 3.75 3.75 0 0 1 15.75 9ZM6 20.25a6 6 0 0 1 12 0v.75H6v-.75Z"
              />
            </svg>
            <span className="font-medium text-gray-800">Sign In</span>
          </Link>
        </div>
      </div>
    </header>
  );
};


export default CheckoutHeader;
