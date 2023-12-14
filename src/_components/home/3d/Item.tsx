import { rotation } from "@/types/Catch";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React from "react";
import { MeshComponent } from "./MeshComponent";


export function Item({ position, fileUrl, scale, rotation }:
    {
        position: [x: number, y: number, z: number],
        fileUrl: string,
        scale: [x: number, y: number, z: number],
        rotation: rotation 
    }) {
    return(
    <Canvas className='lg:h-36 lg:w-36 xl:h-36 xl:w-36 2xl:h-36 2xl:w-36 sm:h-24 sm:w-24'>
        <OrbitControls />
        <hemisphereLight intensity={1.2} />
        <pointLight position={[80, 50, 60]} />
        <MeshComponent position={position} scale={scale} fileUrl={fileUrl} rotation={rotation} />
    </Canvas>
    )
}