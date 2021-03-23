/* eslint-disable no-void */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import * as THREE from 'three';
import {
  Canvas, useLoader, useFrame, useThree,
} from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function Camera(props : any) {
  const ref = React.useRef<any>();
  const { setDefaultCamera } = useThree();
  // Make the camera known to the system
  React.useEffect(() => void setDefaultCamera(ref.current), []);
  // Update it every frame
  useFrame(() => {
    ref.current.updateMatrixWorld();
  });
  return <perspectiveCamera ref={ref} position={[0, 0, 65]} />;
}

const Model = () => {
  const ref = React.useRef<any>();
  const obj = useLoader(OBJLoader, 'https://cdn.glitch.com/61e61ba5-d086-4c7a-870a-94bb3b71b117%2FJapaneseGatesTorii_BLENDER.obj?v=1616338270651');
  const material = React.useMemo(
    () => new THREE.PointsMaterial({ color: 0xCF2244, size: 0.1 }),
    [],
  );
  const geo : any = obj.children[0];
  const mesh = React.useMemo(() => new THREE.Points(geo.geometry, material), []);
  useFrame(() => {
    mesh.rotation.y += 0.001;
  });
  return (
    <primitive
      ref={ref}
      object={mesh}
      rotation={[0, 60, 0]}
      position={[0, -15, 0]}
      scale={[1, 1, 1]}
    />
  );
};

export default function Model3D() {
  return (
    <Canvas>
      <Camera />
      <React.Suspense fallback={null}>
        <Model />
      </React.Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2 - 0.5}
        maxPolarAngle={Math.PI / 2 - 0.5}
      />
    </Canvas>
  );
}
