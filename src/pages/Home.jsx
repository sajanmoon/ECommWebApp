import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/2 m-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            Experience Electronics
          </h1>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Redefined: Unleash Innovation
          </h1>
          <p className="text-gray-600">
            Discover the Future of Electronics: Unleash Innovation, Immerse in
            Unparalleled Quality. Experience our cutting-edge technology and
            elevate your everyday with GadgetHub. Explore the extraordinary
            today
          </p>
          <Link to="/products">
            <button className="bg-blue-500 my-6 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              SHOP NOW
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            className="object-cover h-[600px] w-[600px] lg:h-auto"
            src="https://media.istockphoto.com/id/1133980246/photo/shopping-online-concept-shopping-service-on-the-online-web-with-payment-by-credit-card-and.jpg?s=612x612&w=0&k=20&c=joeQ74hTCWThhW6XfnBsCUc5Qp3YB868J-hyBWxGSUM="
            alt="Electronic Shopping"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
