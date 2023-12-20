"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";




export const Banner = () => {
  const container = {
    hidden: { x: "-100%" },
    show: {
      x: 0,
      transition: {
        type: "tween",
        ease: "linear",
        duration: 0.2,
        end: 0,
        staggerChildren: 0.05,
      },
    },
  };

  
  return (
    <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-screen flex items-center justify-evenly">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center justify-between">
        <motion.div  className="flex flex-col items-center mb-36">
          <Link href="https://open.spotify.com/artist/5heEFQJapwComFULv1tiEB">
          <h1 className="text-blanche text-9xl md:text-5xl sm:text-7xl font-bold">
            MUSIC
          </h1>
          </Link>
          <Link href="https://www.youtube.com/channel/UCFt81JdYEXwKjyQJoI2d89Q">
          <h1 className="text-primary text-9xl md:text-5xl sm:text-7xl font-bold">
            VIDEOS
          </h1>
          </Link>
        </motion.div>
        <motion.div  className="flex items-center md:flex-col sm:flex-col">
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
