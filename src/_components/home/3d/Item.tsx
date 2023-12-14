import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { MeshComponent } from "./MeshComponent";


export function Item({ position, fileUrl, scale }:
    {
        position: [x: number, y: number, z: number],
        fileUrl: string,
        scale: [x: number, y: number, z: number]
    }) {
    return(
    <Canvas className='h-36 w-36'>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent position={position} scale={scale} fileUrl={fileUrl} />
    </Canvas>
    )
}