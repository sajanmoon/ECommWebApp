import React from 'react';

const ShimmerCard = () => (
  <div className="animate-pulse flex flex-col justify-center items-center border border-gray-300 m-4 p-4 rounded-lg max-w-xs">
    <div className="h-48 w-full bg-gray-300 rounded-md mb-4"></div>
    <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
    <div className="h-10 w-full bg-gray-300 rounded-md"></div>
  </div>
);

export default ShimmerCard;
