"use client";
import React from "react";
import { motion } from "framer-motion";




export const Banner = () => {
  const container = {
    hidden: {  x: "-100%" },
    show: {
      x: 0,

      transition: {
        ease: "linear",
        duration: 0.15,
        staggerChildren: 0.05,
      },
    },
    close: {
      x: 100, 
      transition: { 
        ease: "linear",
        duration: 1,
       }, 
    },
  };
  const item = {
    hidden: { x: "100%" },
    show: { 
      x: 0, 
      transition: { duration: 0.5 }
    },
  };
  return (
    <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-screen flex items-center justify-evenly">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center justify-between">
        <motion.div variants={item} className="flex flex-col items-center mb-36">
          <h1 className="text-blanche text-9xl md:text-5xl sm:text-8xl font-bold">
            MUSIC
          </h1>
          <h1 className="text-primary text-9xl md:text-5xl sm:text-8xl font-bold">
            VIDEOS
          </h1>
        </motion.div>
        <motion.div variants={item} className="flex items-center md:flex-col sm:flex-col">
          <div className="border-primary bg-primary border p-3 rounded w-44  mr-4">
            <div className="font-bold text-xl md:text-lg sm:text-lg text-center">
              Buy Now
            </div>
          </div>
          <p className="text-blanche font-bold md:mt-4 sm:mt-4">
            Contact me for custom requests!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
