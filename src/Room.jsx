import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useRef, useEffect } from 'react';

export default function Room() {
  const gltf = useLoader(GLTFLoader, '/model/room.glb');
  const mixer = useRef();

  useEffect(() => {
    if (gltf.animations.length) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);

      const ball1Action = mixer.current.clipAction(gltf.animations[0]);
      const ball2Action = mixer.current.clipAction(gltf.animations[1]);

      ball1Action.setLoop(THREE.LoopRepeat).play();
      ball2Action.setLoop(THREE.LoopRepeat).play();
    }
  }, [gltf]);

  useFrame((_, delta) => mixer.current?.update(delta));

  return <primitive object={gltf.scene} />;
}
