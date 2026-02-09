import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { Float, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Fix: Add JSX intrinsic element types for React Three Fiber to resolve TypeScript errors
declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {}
    }
  }
}

const GlobePoints = () => {
  const pointsRef = useRef<THREE.Points>(null);

  // Create a dotted globe effect
  const [positions, colors] = useMemo(() => {
    const pos = [];
    const cols = [];
    const count = 7000;
    const radius = 2.5;

    for (let i = 0; i < count; i++) {
      // Golden spiral distribution on a sphere for uniform look
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      pos.push(x, y, z);

      // Gradient colors from purple to orange matching brand identity
      const mix = (y + radius) / (radius * 2);
      const color = new THREE.Color();
      // Lerping between brand colors based on height
      color.lerpColors(
        new THREE.Color("#8b5cf6"),
        new THREE.Color("#fb923c"),
        mix,
      );
      cols.push(color.r, color.g, color.b);
    }
    return [new Float32Array(pos), new Float32Array(cols)];
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      // Gentle auto-rotation removed here as OrbitControls will handle it,
      // or we can keep it if we want it to rotate independently of the controls.
      // But user wants manual interaction, so OrbitControls is better suited.
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Glow = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[2.55, 32, 32]} />
      <meshBasicMaterial
        color="#8b5cf6"
        transparent
        opacity={0.05}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

export const Globe: React.FC = () => {
  return (
    <div className="globe-canvas-container">
      {/* Fix: Moved 'alpha' prop into the 'gl' configuration object to resolve TypeScript error */}
      <Canvas
        gl={{ alpha: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4.5], fov: 70 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <GlobePoints />
        </Float>
        <Glow />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
