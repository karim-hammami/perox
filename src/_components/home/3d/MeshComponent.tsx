'use client';
import { rotation } from "@/types/Catch";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";




export function MeshComponent(
    { position, fileUrl, scale, rotation }:
        {
            position: [x: number, y: number, z: number],
            fileUrl: string,
            scale: [x: number, y: number, z: number],
            rotation: rotation
        }) {
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);
    const { viewport } = useThree()
    const rot: rotation = rotation

    useFrame(() => {
        switch(rot) {
            case 'x' :
                mesh.current.rotation.x += 0.002
                break
            case 'y' :
                mesh.current.rotation.y += 0.002
                break
            case 'z' :
                mesh.current.rotation.z += 0.002
                break
            default :
                mesh.current.rotation.y += 0.002
                break
        }
    });

    return (
        <mesh ref={mesh} position={position} scale={(viewport.width / 4)}>
            <primitive object={gltf.scene.clone(true)} />
        </mesh>
    );
}