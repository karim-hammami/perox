'use client';
import useWindowDimensions from "@/hooks/useWindowDimensions";
import React from "react";
import { Item } from "./3d/Item";




export const Catch = () => {
    const { height, width } = useWindowDimensions();
    console.log(width)
    if (width === null) {
        return (
            <></>
        )
    }
    else if (width > 800) {
        return (
            <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-background h-screen flex items-center justify-center">
                <div className="grid lg:grid-cols-4 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-4 2xl:grid-cols-4 2xl:grid-rows-4 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-2">
                    {/* first row */}
                    <Item position={[0, 1, 0]}  fileUrl="PianoColors.gltf" rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="SoundwaveColors.glb" rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="MixerColors.glb" rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="SoundwaveColors.glb" rotation="y"/>
                    {/* second row */}
                    <Item position={[1, 0, 0]}  fileUrl="MixerColors.glb" rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="SoundwaveColors.glb" rotation="y"/>  
                    <Item position={[-3, 1, 0]} fileUrl="PianoColors.gltf" rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="SoundwaveColors.glb" rotation="y"/>
                    {/* third row */}
                    <Item position={[0, 0, 0]}  fileUrl="SoundwaveColors.glb" rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="MixerColors.glb" rotation="y"/>
                    <Item position={[-3, 0, 0]} fileUrl="SoundwaveColors.glb" rotation="y"/>
                    <Item position={[-2, 1, 0]} fileUrl="PianoColors.gltf" rotation="y"/>
                    {/* forth row */}
                    <Item position={[0, 1, 0]}  fileUrl="PianoColors.gltf" rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="SoundwaveColors.glb" rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="MixerColors.glb" rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="SoundwaveColors.glb" rotation="y"/>
    
                </div>
            </div >
        )
    } else {
        return (
            <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-background h-screen flex items-center justify-center">
                <div className="grid lg:grid-cols-4 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-4 2xl:grid-cols-4 2xl:grid-rows-4 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-2">
                    {/* first row */}
                    <Item position={[0, 1, 0]} fileUrl="PianoColors.gltf" rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="SoundwaveColors.glb"  rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="MixerColors.glb"  rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="SoundwaveColors.glb"  rotation="y"/>
                    {/* second row */}
                    <Item position={[1, 0, 0]} fileUrl="MixerColors.glb" rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="SoundwaveColors.glb" rotation="y"/>  
                    <Item position={[-3, 1, 0]} fileUrl="PianoColors.gltf" rotation="y"/>
                    <Item position={[-2, 0, 0]} fileUrl="SoundwaveColors.glb" rotation="y"/>
                </div>
            </div >
        )
    }
    
}
