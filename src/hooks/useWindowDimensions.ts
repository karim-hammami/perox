"use client";
import { useState, useEffect } from "react";

const hasWindow = typeof window !== "undefined";

interface prop {
  width: number
  height: number
}

export default function useWindowDimensions() {

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : 0;
    const height = hasWindow ? window.innerHeight : 0;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState<prop>(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
