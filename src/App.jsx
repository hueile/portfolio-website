import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Room from './Room';
import * as THREE from 'three';

export default function App() {
  return (
    <Canvas camera={{ position: [0, 5, 0], fov: 50}}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 6.0]} />
      <Room />
      <OrbitControls
        enablePan={false}
        target={[0, 2, 0]}
        mouseButtons={{
          LEFT: null,
          MIDDLE: THREE.MOUSE.ROTATE,
          RIGHT: THREE.MOUSE.ROTATE
        }}
        minDistance={1}
        maxDistance={8}
       />
    </Canvas>
  );
}
