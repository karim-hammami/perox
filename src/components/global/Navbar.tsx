"use client";
// TODO: Refactor Navbar into multiple components
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);
  const { data: session } = useSession();

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-20%" },
  };

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
    hidden: { x: "100%" },
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div className="fixed z-40 bg-background w-full h-28">
        <div className="flex mx-48 md:mx-24 sm:mx-12 items-center py-5 justify-between">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="logo"
              width={50}
              height={50}
              priority
            />
          </Link>
          <Image
            src="/Vector.png"
            alt="menu"
            width={50}
            height={50}
            onClick={toggleMenu}
            priority
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
                priority
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="flex flex-col text-surface font-bold text-6xl sm:text-5xl mx-16 sm:mx-10 mt-24 sm:mt-10 ">
              <Link href="/" onClick={toggleMenu}>
                <motion.div
                  className="my-5 hover:text-onSecondary cursor-pointer"
                  variants={item}
                >
                  Home
                </motion.div>
              </Link>

              <motion.div
                className="my-5 hover:text-onSecondary cursor-pointer"
                variants={item}
              >
                Shop
              </motion.div>

              <Link href="/about" onClick={toggleMenu}>
                <motion.div
                  className="my-5 hover:text-onSecondary cursor-pointer"
                  variants={item}
                >
                  About
                </motion.div>
              </Link>

              <Link href="/contact" onClick={toggleMenu}>
                <motion.div
                  className="my-5 hover:text-onSecondary cursor-pointer"
                  variants={item}
                >
                  Contact
                </motion.div>
              </Link>
              </div>
              <motion.div
                className="absolute bottom-2 w-4/5 mx-16 sm:mx-10  my-5 py-6 px-4 text-blanche bg-background font-bold text-4xl sm:text-3xl rounded"
                variants={item}
              >
                {session?.user ? (
                  <div className="flex items-center justify-between">
                    <div
                      onClick={() => signOut()}
                      className="hover:text-primary cursor-pointer"
                    >
                      {session.user.name}
                    </div>
                    <Image src={session.user.image as string} alt="image" width={60} height={60} className="rounded-FULL"/>
                  </div>
                ) : (
                  <div
                    onClick={() => signIn()}
                    className="hover:text-onSecondary cursor-pointer"
                  >
                    Sign In
                  </div>
                )}
              </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
