'use client';
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export function MeshComponent(
    { position, fileUrl, scale }:
        {
            position: [x: number, y: number, z: number],
            fileUrl: string,
            scale: [x: number, y: number, z: number]
        }) {
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
        mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={mesh} position={position} scale={scale}>
            <primitive object={gltf.scene.clone(true)} />
        </mesh>
    );
}