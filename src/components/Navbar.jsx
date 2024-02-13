import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/browser">
              <span className="text-white font-semibold text-xl">
                GadgetHub
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/browser"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Product
              </Link>
              <Link
                to="/cart"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Cart - {items.length} items
              </Link>
              <div>
                {/* <img
                  className=" h-10"
                  src="https://static.vecteezy.com/system/resources/previews/006/388/924/original/logout-sign-out-icon-in-circle-button-vector.jpg"
                  alt=""
                /> */}
                <button
                  onClick={handleSignOut}
                  className=" bg-red-500 p-1 rounded-lg"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
