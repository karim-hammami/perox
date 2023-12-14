import { rotation } from "@/types/Catch";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
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
    <Canvas className='h-36 w-36'>
        <OrbitControls />
        <hemisphereLight intensity={1.2} />
        <pointLight position={[80, 50, 60]} />
        <MeshComponent position={position} scale={scale} fileUrl={fileUrl} rotation={rotation} />
    </Canvas>
    )
}