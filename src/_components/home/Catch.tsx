import React, { useEffect, useState } from "react";
import { Item } from "./3d/Item";

export const Catch = () => {
      return (
        <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-background h-screen flex items-center justify-center">
          <div className="h-80 w-80 lg:h-[500px] lg:w-[500px] xl:h-[500px] xl:w-[500px] 2xl:h-[500px] 2xl:w-[500px] animate-border">
          <div className="h-80 w-80 lg:h-[500px] lg:w-[500px] xl:h-[500px] xl:w-[500px] 2xl:h-[500px] 2xl:w-[500px] border-4 border-background">
            <Item position={[0, 2, 0]} fileUrl="PianoColors.gltf" rotation="y" />
          </div>
          </div>
        </div>
      )
}

