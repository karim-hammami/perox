'use client';
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { MeshComponent } from "./3d/MeshComponent";
import { Item } from "./3d/Item";




export const Catch = () => {
    return (
        <div className="border-primary border w-1/2 h-screen flex items-center justify-center">
            <div className="grid grid-cols-4 grid-rows-4">
                <Item position={[0, 1, 0]} scale={[3, 3, 3]} fileUrl="PianoColors.gltf" />
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="MixerColors.glb" />
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                <Item position={[0, 1, 0]} scale={[3, 3, 3]} fileUrl="PianoColors.gltf" />
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="MixerColors.glb" />
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                <Item position={[0, 1, 0]} scale={[3, 3, 3]} fileUrl="PianoColors.gltf" />
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="MixerColors.glb" />
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                <Item position={[0, 1, 0]} scale={[3, 3, 3]} fileUrl="PianoColors.gltf" />
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="MixerColors.glb" />
                <Item position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
            </div>
        </div >
    )
}
