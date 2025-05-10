import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Room from './Room';

export default function App() {
  return (
    <Canvas camera={{ position: [0, 5, 0] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 6.0]}
       />
      <Room />
      <OrbitControls />
    </Canvas>
  );
}
