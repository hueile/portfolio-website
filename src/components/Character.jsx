import { useGLTF, useAnimations } from '@react-three/drei';
import React, { useEffect } from 'react';

useGLTF.preload('src/assets/models/character_placeholder.glb'); 

export function Character() {
  const { scene, animations } = useGLTF('src/assets/models/character_placeholder.glb');
  const { actions } = useAnimations(animations, scene); // Hook for animations

  useEffect(() => {
    if (actions.idle) {
      actions.idle.play(); // Play the "idle" animation
    }
  }, [actions]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      position={[0, 0, 0]}
      scale={1}
      castShadow // Enable shadow casting
    />
  );
}
