import { Plane, Box } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React from 'react';
import { TextureLoader } from 'three';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Room() {
  const wallTexture = useLoader(TextureLoader, 'src/assets/wall-texture.jpg'); // Replace with your texture file

  return (
    <>
      <Plane args={[12, 12]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <meshStandardMaterial attach="material" color="#f08080" />
      </Plane>
      <Box position={[0, 4, -6]} args={[12, 8, 0.1]} receiveShadow>
        <meshStandardMaterial attach="material" map={wallTexture} />
      </Box>
      <Box position={[-6, 4, 0]} args={[0.1, 8, 12]} receiveShadow>
        <meshStandardMaterial attach="material" map={wallTexture} />
      </Box>
      <Box position={[6, 4, 0]} args={[0.1, 8, 12]} receiveShadow>
        <meshStandardMaterial attach="material" map={wallTexture} />
      </Box>

      <Table />
      <Glass />
      <Laptop />
      <Board />
    </>
  );
}

export function Table() {
  const { scene } = useGLTF('src/assets/models/table.glb');

  React.useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true; // Ensure the table casts shadows
        obj.receiveShadow = true; // Ensure it can receive shadows
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      position={[0, 0, -2]} // Move table slightly forward
      scale={[1.5, 1.5, 1.5]} // Increase size if necessary
      rotation={[0, -Math.PI / 2, 0]} // Adjust rotation if necessary
      castShadow
      receiveShadow
    />
  );
}

export function Glass() {
  const { scene } = useGLTF('src/assets/models/glass.glb');

  React.useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true; // Ensure the glass casts shadows
        obj.receiveShadow = true; // Ensure it can receive shadows

        // Apply a glass material
        obj.material = new THREE.MeshPhysicalMaterial({
          transmission: 0.7, // Adjust transparency (higher = more transparent)
          roughness: 0, // Makes the glass smooth
          metalness: 0, // Non-metallic
          clearcoat: 1, // Adds a clear reflective layer
          clearcoatRoughness: 0,
          thickness: 0.05, // Simulate glass thickness
          transparent: true, // Allows transparency
          opacity: 0.9, // Adjust visibility
          color: new THREE.Color(0xf5f5f5), // Set a clear white tint
        });
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      position={[-1.5, 1.288, -1.5]} 
      rotation={[0, Math.PI / 8, 0]} 
      castShadow
      receiveShadow
    />
  );
}

export function Laptop() {
  const { scene } = useGLTF('src/assets/models/laptop.glb');

  React.useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true; // Ensure the laptop casts shadows
        obj.receiveShadow = true; // Ensure it can receive shadows
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      position={[-0.5, 1.3, -2]} 
      rotation={[0, 0 , 0.01]} 
      castShadow
      receiveShadow
    />
  );
}

export function Board() {
  const { scene } = useGLTF('src/assets/models/board.glb');

  React.useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true; // Ensure the board casts shadows
        obj.receiveShadow = true; // Ensure it can receive shadows
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      position={[0, 1.5, -5.95]} 
      rotation={[0, - Math.PI / 2, 0]} 
      castShadow
      receiveShadow
    />
  );
}
