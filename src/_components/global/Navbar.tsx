"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";




export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  const variants = {
    open: { opacity: 1 , x: 0 },
    closed: { opacity: 0, x: "-20%" },
  }

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const closeMenuOnOutsideClick = (event: MouseEvent) => {
    const menuContainer = menuContainerRef.current;

    if (menuContainer && !menuContainer.contains(event.target as Node)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    if (isMenuVisible) {
      document.addEventListener("click", closeMenuOnOutsideClick);
    }

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isMenuVisible]);

  const container = {
    hidden: {  x: "100%" },
    show: {
      x: 0,
      transition: {
        ease: "linear",
        duration: 0.15,
        staggerChildren: 0.05,
      },
    },
    close: {
      x: "100%", 
      transition: { 
        ease: "easeIn",
        duration: 0.2,
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
    <>
      <div className="fixed z-40 bg-background w-full h-28">
        <div className="flex mx-48 md:mx-24 sm:mx-12 items-center py-5 justify-between">
          <Image src="/logo.webp" alt="logo" width={50} height={50} />
          <Image
            src="/Vector.png"
            alt="menu"
            width={50}
            height={50}
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <AnimatePresence mode="wait">
      {isMenuVisible && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="close"
          ref={menuContainerRef}
          className="fixed z-50 top-0 right-0 h-screen lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-screen sm:w-screen bg-primary shadow-2xl"
        >
          <div className="flex items-center my-8 justify-between mx-48 sm:mx-12">
            <h1 className="text-primary font-bold select-none">
              Get Beats Now
            </h1>
            <Image
              onClick={toggleMenu}
              src="/Closer.png"
              alt="close"
              width={50}
              height={50}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div  className="flex flex-col text-surface font-bold text-7xl sm:text-6xl mx-16 sm:mx-10 mt-24 sm:mt-10 ">
            <Link href="/" onClick={toggleMenu}>
              <motion.div className="my-5 hover:text-onSecondary cursor-pointer" variants={item}>Home</motion.div>
            </Link>
            
            <motion.div className="my-5 hover:text-onSecondary cursor-pointer" variants={item}>Shop</motion.div>
           
            <Link href="/about" onClick={toggleMenu}>
              <motion.div className="my-5 hover:text-onSecondary cursor-pointer" variants={item}>About</motion.div>
            </Link>
            
            <motion.div className="my-5 hover:text-onSecondary cursor-pointer" variants={item}>
              Contact me
            </motion.div>
           
            <motion.div className="my-5 hover:text-onSecondary cursor-pointer" variants={item}>Log in</motion.div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
