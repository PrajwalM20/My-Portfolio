
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const CUBE_COUNT = 64;

const CUBE_COLORS = [
  "#a58aff",
  "#c6b5ff",
  "#eee8ff",
  "#ffffff",
  "#8c6be8",
];

function FloatingCubes({ reducedMotion }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const cubes = useMemo(
    () =>
      Array.from({ length: CUBE_COUNT }, (_, i) => {
        const angle = i * 2.399963;
        const radius = 1.35 + (i % 7) * 0.11;

        return {
          angle,
          radius,
          height: Math.sin(i * 2.17) * 1.25,
          size: 0.035 + (i % 4) * 0.014,
          speed: 0.12 + (i % 5) * 0.025,
          color: new THREE.Color(CUBE_COLORS[i % CUBE_COLORS.length]),
          phase: i * 0.37,
        };
      }),
    []
  );

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    if (!mesh.userData.colorsReady) {
      cubes.forEach((cube, i) => {
        mesh.setColorAt(i, cube.color);
      });

      if (mesh.instanceColor) {
        mesh.instanceColor.needsUpdate = true;
      }

      mesh.userData.colorsReady = true;
    }

    const time = state.clock.elapsedTime;

    cubes.forEach((cube, i) => {
      const angle =
        cube.angle + (reducedMotion ? 0 : time * cube.speed);

      const pulse = reducedMotion
        ? 1
        : 1 + Math.sin(time * 1.2 + cube.phase) * 0.12;

      dummy.position.set(
        Math.cos(angle) * cube.radius,
        cube.height +
          (reducedMotion
            ? 0
            : Math.sin(time * 0.65 + cube.phase) * 0.12),
        Math.sin(angle) * cube.radius
      );

      dummy.scale.setScalar(cube.size * pulse);

      dummy.rotation.set(
        cube.phase,
        reducedMotion ? 0 : time * 0.3 + cube.phase,
        reducedMotion ? 0 : time * 0.2
      );

      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, CUBE_COUNT]}
      frustumCulled={false}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        roughness={0.3}
        metalness={0.08}
        emissive="#39236e"
        emissiveIntensity={0.08}
      />
    </instancedMesh>
  );
}

function Crystal({ reducedMotion }) {
  const crystalRef = useRef();
  const innerRef = useRef();

  useFrame((state, delta) => {
    if (reducedMotion) return;

    if (crystalRef.current) {
      crystalRef.current.rotation.y += delta * 0.22;
      crystalRef.current.rotation.x = THREE.MathUtils.damp(
        crystalRef.current.rotation.x,
        -state.pointer.y * 0.18,
        3,
        delta
      );
      crystalRef.current.rotation.z = THREE.MathUtils.damp(
        crystalRef.current.rotation.z,
        state.pointer.x * 0.12,
        3,
        delta
      );
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.32;
      innerRef.current.rotation.x += delta * 0.12;
    }
  });

  return (
    <group>
      {/* Outer faceted crystal */}
      <mesh ref={crystalRef}>
        <icosahedronGeometry args={[1.02, 0]} />
        <meshPhysicalMaterial
          color="#b7a0ff"
          roughness={0.22}
          metalness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.16}
          flatShading
          emissive="#7050c8"
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* Bright inner crystal */}
      <mesh ref={innerRef} scale={0.63}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#f1ecff"
          roughness={0.16}
          metalness={0.04}
          clearcoat={1}
          flatShading
          emissive="#b49aff"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Fine outline around the main crystal */}
      <mesh scale={1.035}>
        <icosahedronGeometry args={[1.02, 0]} />
        <meshBasicMaterial
          color="#9b7cff"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>
    </group>
  );
}

function Orbit({ radius, rotation, color, speed, reducedMotion }) {
  const orbitRef = useRef();

  useFrame((_, delta) => {
    if (!orbitRef.current || reducedMotion) return;

    orbitRef.current.rotation.y += delta * speed;
    orbitRef.current.rotation.z += delta * speed * 0.35;
  });

  return (
    <mesh ref={orbitRef} rotation={rotation}>
      <torusGeometry args={[radius, 0.007, 8, 160]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.72}
      />
    </mesh>
  );
}

function Scene({ reducedMotion }) {
  const sceneRef = useRef();

  useFrame((state, delta) => {
    if (!sceneRef.current || reducedMotion) return;

    sceneRef.current.rotation.y = THREE.MathUtils.damp(
      sceneRef.current.rotation.y,
      state.pointer.x * 0.12,
      2.5,
      delta
    );

    sceneRef.current.rotation.x = THREE.MathUtils.damp(
      sceneRef.current.rotation.x,
      -state.pointer.y * 0.08,
      2.5,
      delta
    );
  });

  return (
    <>
      <ambientLight intensity={1.4} />
      <hemisphereLight
        args={["#ffffff", "#b8a1ed", 1.3]}
      />
      <directionalLight
        position={[3, 4, 5]}
        intensity={2.5}
      />
      <pointLight
        position={[-2, 1, 2]}
        intensity={18}
        color="#a58aff"
      />
      <pointLight
        position={[2, -1, -2]}
        intensity={12}
        color="#e6d8ff"
      />

      <group ref={sceneRef}>
        <Float
          speed={reducedMotion ? 0 : 0.7}
          rotationIntensity={reducedMotion ? 0 : 0.06}
          floatIntensity={reducedMotion ? 0 : 0.16}
        >
          <Crystal reducedMotion={reducedMotion} />
        </Float>

        <Orbit
          radius={1.65}
          rotation={[0.95, 0.25, 0.35]}
          color="#b8a1ff"
          speed={0.12}
          reducedMotion={reducedMotion}
        />

        <Orbit
          radius={1.85}
          rotation={[0.35, 0.8, -0.45]}
          color="#ded3ff"
          speed={-0.08}
          reducedMotion={reducedMotion}
        />

        <FloatingCubes reducedMotion={reducedMotion} />
      </group>
    </>
  );
}

function FallbackArtwork() {
  return (
    <div
      role="img"
      aria-label="Lavender 3D crystal artwork"
      className="absolute inset-0 grid place-items-center overflow-hidden bg-gradient-to-br from-white via-[#f6f2ff] to-[#e7deff]"
    >
      <div className="relative grid h-48 w-48 place-items-center sm:h-56 sm:w-56">
        <div className="absolute h-36 w-36 rotate-45 rounded-3xl border border-violet-300 bg-gradient-to-br from-white to-violet-300 shadow-2xl shadow-violet-300/50" />
        <div className="absolute h-20 w-20 rotate-45 rounded-xl border border-white bg-violet-200/80" />
      </div>
    </div>
  );
}

export default function AssemblyMachine({ reducedMotion = false }) {
  return (
    <div className="absolute inset-0">
      {reducedMotion ? (
        <FallbackArtwork />
      ) : (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5.8], fov: 43 }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
          fallback={<FallbackArtwork />}
        >
          <Scene reducedMotion={false} />
        </Canvas>
      )}

      <div className="pointer-events-none absolute bottom-16 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/80 bg-white/75 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-[#74658e] shadow-sm backdrop-blur-md sm:text-[10px]">
        Explore · Create · Evolve
      </div>
    </div>
  );
}
