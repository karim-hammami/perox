"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);

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

      {isMenuVisible && (
        <div
          ref={menuContainerRef}
          className="fixed z-50 top-0 right-0 h-screen lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-screen sm:w-screen bg-surface shadow-2xl"
        >
          <div className="flex items-center my-8 justify-between mx-48 sm:mx-12">
            <h1 className="text-surface font-bold select-none">
              Get Beats Now
            </h1>
            <Image
              onClick={toggleMenu}
              src="/close.png"
              alt="close"
              width={50}
              height={50}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="flex flex-col text-onBackground font-bold text-7xl sm:text-6xl mx-16 sm:mx-10 mt-24 sm:mt-10 ">
            <div className="my-5 hover:text-primary cursor-pointer">Home</div>
            <div className="my-5 hover:text-primary cursor-pointer">Shop</div>
            <div className="my-5 hover:text-primary cursor-pointer">About</div>
            <div className="my-5 hover:text-primary cursor-pointer">
              Contact me
            </div>
            <div className="my-5 hover:text-primary cursor-pointer">Log in</div>
          </div>
        </div>
      )}
    </>
  );
}
