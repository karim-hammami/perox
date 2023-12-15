import React from "react";

export const Banner = () => {
  return (
    <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-screen flex items-center justify-evenly">
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col items-center mb-36">
          <h1 className="text-blanche text-9xl md:text-5xl sm:text-8xl font-bold">
            MUSIC
          </h1>
          <h1 className="text-primary text-9xl md:text-5xl sm:text-8xl font-bold">
            VIDEOS
          </h1>
        </div>
        <div className="flex items-center md:flex-col sm:flex-col">
          <div className="border-primary bg-primary border p-3 rounded w-44  mr-4">
            <div className="font-bold text-xl md:text-lg sm:text-lg text-center">
              Buy Now
            </div>
          </div>
          <p className="text-blanche font-bold md:mt-4 sm:mt-4">
            Contact me for custom requests!
          </p>
        </div>
      </div>
    </div>
  );
};
