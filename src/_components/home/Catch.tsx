'use client';
import React from "react";
import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";




function MeshComponent(
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

export const Catch = () => {
    return (
        <div className="border-primary border w-1/2 h-screen flex items-center justify-center">
            <div className="grid grid-cols-4 grid-rows-4">
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[0, 1, 0]} scale={[3, 3, 3]} fileUrl="PianoColors.gltf" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="MixerColors.glb" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="PianoColors.gltf" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="MixerColors.glb" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="PianoColors.gltf" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="MixerColors.glb" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="PianoColors.gltf" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="MixerColors.glb" />
                </Canvas>
                <Canvas className='h-36 w-36'>
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent position={[-2, 0, 0]} scale={[3, 3, 3]} fileUrl="SoundwaveColors.glb" />
                </Canvas>
            </div>
        </div >
    )
}
