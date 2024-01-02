"use client";
import { rotation } from "@/types/Catch";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React from "react";
import { MeshComponent } from "./MeshComponent";

export function Item({
  position,
  fileUrl,
  rotation,
}: {
  position: [x: number, y: number, z: number];
  fileUrl: string;
  rotation: rotation;
}) {
  return (
    <Canvas className="">
      <OrbitControls />
      <hemisphereLight intensity={1.2} />
      <MeshComponent
        position={position}
        fileUrl={fileUrl}
        rotation={rotation}
      />
    </Canvas>
  );
}
