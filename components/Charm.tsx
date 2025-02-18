"use client";

import { Suspense } from "react";

import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import {
  OrbitControls,
  PerspectiveCamera,
  Billboard,
  Text,
  MeshDistortMaterial,
  Backdrop,
  Environment,
  Clouds,
  Cloud,
  Grid,
} from "@react-three/drei";

function Background() {
  return (
    <>
      <mesh position={[0, 10, 0]} receiveShadow>
        <boxGeometry args={[100, 20, 20]} />
        <meshStandardMaterial side={THREE.BackSide} />
      </mesh>
      <Backdrop
        scale={[100, 5, 5]}
        position={[0, 0, -8]}
        floor={5} // Stretches the floor segment, 0.25 by default
        segments={20} // Mesh-resolution, 20 by default
        receiveShadow={true}
      >
        <meshStandardMaterial color="white" />
      </Backdrop>
    </>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight
        position={[3, 5, 3]}
        intensity={50}
        distance={20}
        decay={2}
        castShadow
      >
        <axesHelper />
      </pointLight>
    </>
  );
}

function Object() {
  const model = useLoader(GLTFLoader, "/computer/scene.gltf");

  model.scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.castShadow = true;
    }
  });

  return (
    <mesh position={[0, 0, 0]} castShadow>
      <primitive object={model.scene} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function Charm() {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[0, 5, 5]} zoom={0.3} />
      <OrbitControls enablePan={false} enableZoom={false} />
      <Lighting />
      <Object />
      <Background />
    </Canvas>
  );
}
