
import React, { useRef, useState } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls, Text, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Bottle3DProps {
  color?: string;
  position?: [number, number, number];
  scale?: number;
  name?: string;
  onClick?: () => void;
}

const BottleModel = ({ color = '#4ade80', position = [0, 0, 0], scale = 1, name = 'PY Milli', onClick }: Bottle3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += hovered ? 0.02 : 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Bottle Body */}
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, 0, 0]}
      >
        <cylinderGeometry args={[0.3, 0.4, 2, 8]} />
        <MeshWobbleMaterial
          color={color}
          attach="material"
          factor={hovered ? 0.6 : 0.1}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
      
      {/* Bottle Neck */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 0.4, 8]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.9} />
      </mesh>
      
      {/* Cap */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.1, 8]} />
        <meshStandardMaterial color="#ffd700" roughness={0.1} metalness={1} />
      </mesh>
      
      {/* Label */}
      <Text
        position={[0, 0, 0.41]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        rotation={[0, 0, 0]}
      >
        {name}
      </Text>
      
      {/* Glow effect when hovered */}
      {hovered && (
        <pointLight position={[0, 0, 1]} color={color} intensity={2} distance={3} />
      )}
    </group>
  );
};

const Bottle3D = (props: Bottle3DProps) => {
  return (
    <div className="w-full h-64 cursor-pointer">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[0, 10, 0]} angle={0.3} intensity={1} color="#ffd700" />
        <BottleModel {...props} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Bottle3D;
