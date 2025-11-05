"use client";
import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

function Model() {
  const { scene } = useGLTF("/model/my.glb");
  useEffect(() => {
    // Traverse all meshes in the model
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        // Narrowed to Mesh, safely access material
        const material: any = child.material;

        // Log all material names once for debugging
        console.log(material?.name);

        // Example 1: Change *specific* material by name (if you know it)
        if (material && typeof material.name === "string" && material.name.toLowerCase().includes("face")) {
          if (material.color && typeof material.color.set === "function") {
            material.color.set("#ffdbac"); // bright natural skin tone
          }
        }

        // Example 2: If you want to brighten all materials slightly
        // if (material.color && typeof material.color.offsetHSL === "function") {
        //   material.color.offsetHSL(0, 0, 0.1);
        // }
      }
    });
  }, [scene]);
  }, [scene]);

  return <primitive object={scene} scale={1.5} />;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
