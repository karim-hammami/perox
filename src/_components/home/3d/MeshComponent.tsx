'use client';
import { rotation } from "@/types/Catch";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";




export function MeshComponent(
    { position, fileUrl, rotation }:
        {
            position: [x: number, y: number, z: number],
            fileUrl: string,
            rotation: rotation
        }) {
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);
    const { viewport } = useThree()
    const rot: rotation = rotation
    const SPEED = 0.01

    useFrame(() => {
        switch(rot) {
            case 'x' :
                mesh.current.rotation.x += SPEED
                break
            case 'y' :
                mesh.current.rotation.y += SPEED
                break
            case 'z' :
                mesh.current.rotation.z += SPEED
                break
            default :
                mesh.current.rotation.y += SPEED
                break
        }
    });

    return (
        <mesh ref={mesh} position={position} scale={(viewport.width / 4)}>
            <primitive object={gltf.scene.clone(true)} />
        </mesh>
    );
}