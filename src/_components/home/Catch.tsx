'use client';
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { MeshComponent } from "./3d/MeshComponent";
import { Item } from "./3d/Item";




export const Catch = () => {
    return (
        <div className="w-1/2 h-screen flex items-center justify-center">
            <div className="grid grid-cols-4 grid-rows-4">
                {/* first row */}
                <Item position={[0, 1, 0]} scale={[3, 3, 3]} fileUrl="PianoColors.gltf" rotation="y"/>
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb"  rotation="y"/>
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="MixerColors.glb"  rotation="y"/>
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb"  rotation="y"/>
                {/* second row */}
                <Item position={[1, 0, 0]} scale={[3, 3, 3]} fileUrl="MixerColors.glb" rotation="y"/>
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" rotation="y"/>  
                <Item position={[-3, 1, 0]} scale={[3, 3, 3]} fileUrl="PianoColors.gltf" rotation="y"/>
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" rotation="y"/>
                {/* third row */}
                <Item position={[0, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" rotation="y"/>
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="MixerColors.glb" rotation="y"/>
                <Item position={[-3, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" rotation="y"/>
                <Item position={[-2, 1, 0]} scale={[3, 3, 3]} fileUrl="PianoColors.gltf" rotation="y"/>
                {/* forth row */}
                <Item position={[0, 1, 0]} scale={[3, 3, 3]} fileUrl="PianoColors.gltf" rotation="y"/>
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" rotation="y"/>
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="MixerColors.glb" rotation="y"/>
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" rotation="y"/>

            </div>
        </div >
    )
}
