import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';

const SpinningTorusKnot = () => {
    const meshRef = useRef();

    useFrame(() => (meshRef.current.rotation.y += 0.01));

    return (
        <TorusKnot
            ref={meshRef}
            args={[1, 0.3, 100, 16]}
            onClick={(e) => {
                e.stopPropagation();
                meshRef.current.scale.x *= 1.1;
            }}
            onPointerOver={(e) => {
                e.stopPropagation();
                meshRef.current.scale.y *= 1.1;
            }}
            onPointerOut={(e) => {
                e.stopPropagation();
                meshRef.current.scale.z *= 1.1;
            }}
        >
            <meshStandardMaterial attach="material" color="navy" />
        </TorusKnot>
    );
};

export default SpinningTorusKnot;
