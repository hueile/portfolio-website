import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import DialogBox from './components/DialogBox';
import { useDialog } from './components/useDialog';
import { Room } from './components/Room';
import { Character } from './components/Character';
import { CeilingLight } from './components/CeilingLight';

useGLTF.preload('src/assets/character_placeholder.glb');

export default function App() {
  const cameraRef = useRef();
  const { dialog, options, handleOptionSelect } = useDialog(); // Using the hook

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas
        shadows
        camera={{ position: [0, 3, 5], fov: 60 }}
        onCreated={({ camera }) => (cameraRef.current = camera)}
      >
        <ambientLight intensity={0.5} />
        <CeilingLight />
        <Room />
        <Character />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={1}
          maxDistance={5}
          maxPolarAngle={Math.PI / 1.5}
          target={[0, 1.3, -2]}
          mouseButtons={{
            LEFT: null,
            RIGHT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.PAN,
          }}
        />
      </Canvas>

      {/* Pass dialog state to DialogBox */}
      {/* <DialogBox dialog={dialog} options={options} onOptionSelect={handleOptionSelect} /> */}
    </div>
  );
}
