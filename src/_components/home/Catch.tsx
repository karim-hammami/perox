"use client";

import React, { useEffect, useState } from "react";
import { Item } from "./3d/Item";





export const Catch = () => {
  const hasWindow = typeof window !== "undefined";


    const [w, setWindowSize] = useState({
      width: hasWindow ? window.innerWidth : undefined,
      height: hasWindow ? window.innerHeight : undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
       
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);   


  if (w.width != undefined && w.width != null) {
    if (w.width > 800) {
      console.log(w);
      return (
        <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-background h-screen flex items-center justify-center">
          <div className="grid lg:grid-cols-4 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-4 2xl:grid-cols-4 2xl:grid-rows-4 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-2">
            {/* first row */}
            <Item position={[0, 1, 0]} fileUrl="PianoColors.gltf" rotation="y" />
            <Item
              position={[-2, 0, 0]}
              fileUrl="SoundwaveColors.glb"
              rotation="y"
            />
            <Item position={[-2, 0, 0]} fileUrl="MixerColors.glb" rotation="y" />
            <Item
              position={[-2, 0, 0]}
              fileUrl="SoundwaveColors.glb"
              rotation="y"
            />
            {/* second row */}
            <Item position={[1, 0, 0]} fileUrl="MixerColors.glb" rotation="y" />
            <Item
              position={[-2, 0, 0]}
              fileUrl="SoundwaveColors.glb"
              rotation="y"
            />
            <Item position={[-3, 1, 0]} fileUrl="PianoColors.gltf" rotation="y" />
            <Item
              position={[-2, 0, 0]}
              fileUrl="SoundwaveColors.glb"
              rotation="y"
            />
            {/* third row */}
            <Item
              position={[0, 0, 0]}
              fileUrl="SoundwaveColors.glb"
              rotation="y"
            />
            <Item position={[-2, 0, 0]} fileUrl="MixerColors.glb" rotation="y" />
            <Item
              position={[-3, 0, 0]}
              fileUrl="SoundwaveColors.glb"
              rotation="y"
            />
            <Item position={[-2, 1, 0]} fileUrl="PianoColors.gltf" rotation="y" />
            {/* forth row */}
            <Item position={[0, 1, 0]} fileUrl="PianoColors.gltf" rotation="y" />
            <Item
              position={[-2, 0, 0]}
              fileUrl="SoundwaveColors.glb"
              rotation="y"
            />
            <Item position={[-2, 0, 0]} fileUrl="MixerColors.glb" rotation="y" />
            <Item
              position={[-2, 0, 0]}
              fileUrl="SoundwaveColors.glb"
              rotation="y"
            />
          </div>
        </div>
      );
    } else {
      console.log(w);
      return (
        <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-background h-screen flex items-center justify-center">
          <div className="grid lg:grid-cols-4 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-4 2xl:grid-cols-4 2xl:grid-rows-4 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-2">
            {/* first row */}
            <Item position={[0, 1, 0]} fileUrl="PianoColors.gltf" rotation="y" />
            <Item
              position={[-2, 0, 0]}
              fileUrl="SoundwaveColors.glb"
              rotation="y"
            />
            <Item position={[-2, 0, 0]} fileUrl="MixerColors.glb" rotation="y" />
            <Item
              position={[-2, 0, 0]}
              fileUrl="SoundwaveColors.glb"
              rotation="y"
            />
            {/* second row */}
            <Item position={[1, 0, 0]} fileUrl="MixerColors.glb" rotation="y" />
            <Item
              position={[-2, 0, 0]}
              fileUrl="SoundwaveColors.glb"
              rotation="y"
            />
            <Item position={[-3, 1, 0]} fileUrl="PianoColors.gltf" rotation="y" />
            <Item
              position={[-2, 0, 0]}
              fileUrl="SoundwaveColors.glb"
              rotation="y"
            />
          </div>
        </div>
      );
    }
  } 
};
