import React from 'react';

export function CeilingLight() {
  return (
    <group>
      {/* Light Bulb */}
      <mesh position={[0, 8, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} /> {/* Small bulb sphere */}
        <meshStandardMaterial emissive="#fcdcdc" emissiveIntensity={1} /> {/* Glowing effect */}
      </mesh>

      {/* Point Light */}
      <pointLight
        position={[0, 8, 0]} // Near the bulb
        intensity={200} // Brightness of the light
        distance={40} // Range of light
        decay={3} // How quickly light diminishes
        color={"#fcdfdf"} // Light color
        castShadow // Enable shadows
        shadow-mapSize-width={2048} // Higher resolution reduces acne
        shadow-mapSize-height={2048}
        shadow-bias={-0.0002} // Moves shadow slightly away from surface
        />
    </group>
  );
}
