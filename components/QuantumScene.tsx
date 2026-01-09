
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, PointMaterial, Text3D, Sparkles, Cylinder, Sphere, Torus, Box, Icosahedron, Plane } from '@react-three/drei';
import * as THREE from 'three';
import '../types';

// Fix: Add local JSX intrinsic elements augmentation to ensure Three.js elements are recognized.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      meshStandardMaterial: any;
      meshPhysicalMaterial: any;
      meshBasicMaterial: any;
      pointLight: any;
      spotLight: any;
      ambientLight: any;
      sphereGeometry: any;
      boxGeometry: any;
      planeGeometry: any;
      cylinderGeometry: any;
      bufferGeometry: any;
      bufferAttribute: any;
      points: any;
      fog: any;
      color: any;
      primitive: any;
      directionalLight: any;
      [elemName: string]: any;
    }
  }
}

// --- VISUAL OS STYLE GLASS MATERIAL ---
const VisionGlass = ({ color = '#ffffff', opacity = 0.6, ...props }: any) => (
  <meshPhysicalMaterial
    color={color}
    transmission={0.95} // High transmission for glass effect
    opacity={opacity}
    metalness={0.1}
    roughness={0.15} // Slight frost
    ior={1.5}
    thickness={0.5}
    clearcoat={1}
    attenuationTint="#ffffff"
    attenuationDistance={0.5}
    transparent
    {...props}
  />
);

// --- 3D OFFICE ASSETS ---

// 1. Server Rack with Blinking Lights
const ServerRack = (props: any) => {
    const [blink, setBlink] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => setBlink(b => !b), 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <group {...props}>
            {/* Frame */}
            <Box args={[1.5, 4, 1.5]} castShadow receiveShadow>
                <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
            </Box>
            {/* Servers */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
                <group key={i} position={[0, -1.5 + i * 0.6, 0.76]}>
                    <Box args={[1.3, 0.5, 0.05]}>
                        <meshStandardMaterial color="#334155" metalness={0.5} />
                    </Box>
                    {/* Blink Lights */}
                    <mesh position={[-0.5, 0, 0.05]}>
                        <sphereGeometry args={[0.04]} />
                        <meshBasicMaterial color={blink && i % 2 === 0 ? "#22c55e" : "#0f172a"} toneMapped={false} />
                    </mesh>
                    <mesh position={[-0.35, 0, 0.05]}>
                         <sphereGeometry args={[0.04]} />
                        <meshBasicMaterial color={!blink && i % 3 === 0 ? "#38bdf8" : "#0f172a"} toneMapped={false} />
                    </mesh>
                </group>
            ))}
            {/* Ventilation Glow */}
            <pointLight position={[0, 0, 0]} color="#38bdf8" intensity={1} distance={3} />
        </group>
    )
}

// 2. Ergonomic Chair
const ErgonomicChair = (props: any) => {
    return (
        <group {...props}>
             {/* Base Wheels */}
             <group position={[0, 0.2, 0]}>
                 <Cylinder args={[0.4, 0.4, 0.1, 5]}><meshStandardMaterial color="#0f172a" /></Cylinder>
                 <Cylinder args={[0.05, 0.05, 0.6]}><meshStandardMaterial color="#94a3b8" metalness={0.8} /></Cylinder>
             </group>
             {/* Seat */}
             <Box args={[1.2, 0.15, 1.2]} position={[0, 1, 0]} castShadow>
                 <meshStandardMaterial color="#334155" roughness={0.9} />
             </Box>
             {/* Backrest */}
             <group position={[0, 1.8, 0.5]} rotation={[-0.1, 0, 0]}>
                 <Box args={[1, 1.6, 0.1]} castShadow>
                     <meshStandardMaterial color="#334155" roughness={0.9} />
                 </Box>
                 {/* Headrest */}
                 <Box args={[0.6, 0.4, 0.1]} position={[0, 1, 0.1]}>
                      <meshStandardMaterial color="#334155" />
                 </Box>
             </group>
             {/* Armrests */}
             <Box args={[0.1, 0.8, 0.8]} position={[0.6, 1.4, 0]}><meshStandardMaterial color="#1e293b" /></Box>
             <Box args={[0.1, 0.8, 0.8]} position={[-0.6, 1.4, 0]}><meshStandardMaterial color="#1e293b" /></Box>
        </group>
    )
}

// 3. Acoustic Wall Panels
const AcousticPanels = (props: any) => {
    return (
        <group {...props}>
            <Box args={[2, 2, 0.1]} position={[-1.1, 1.1, 0]}><meshStandardMaterial color="#475569" roughness={1} /></Box>
            <Box args={[2, 2, 0.1]} position={[1.1, 1.1, 0]}><meshStandardMaterial color="#334155" roughness={1} /></Box>
            <Box args={[2, 2, 0.1]} position={[-1.1, -1.1, 0]}><meshStandardMaterial color="#334155" roughness={1} /></Box>
            <Box args={[2, 2, 0.1]} position={[1.1, -1.1, 0]}><meshStandardMaterial color="#475569" roughness={1} /></Box>
        </group>
    )
}

// --- 3D OFFICE ENVIRONMENT BACKGROUND ---
const OfficeRoom = () => {
  return (
    <group position={[0, -1.2, -4]}>
       {/* Room Shell */}
       <group>
           {/* Floor - Carpet Texture feel */}
           <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
               <planeGeometry args={[30, 30]} />
               <meshStandardMaterial color="#e2e8f0" roughness={0.9} />
           </mesh>
           {/* Back Wall - Matte Darker Grey for contrast */}
           <mesh position={[0, 5, -8]} receiveShadow>
               <planeGeometry args={[30, 20]} />
               <meshStandardMaterial color="#f1f5f9" roughness={0.5} />
           </mesh>
           {/* Side Wall (Left) */}
           <mesh position={[-12, 5, 0]} rotation={[0, Math.PI/2, 0]} receiveShadow>
               <planeGeometry args={[30, 20]} />
               <meshStandardMaterial color="#f8fafc" roughness={0.5} />
           </mesh>
       </group>

       {/* --- IT INFRASTRUCTURE --- */}
       
       {/* Server Rack in Corner */}
       <ServerRack position={[-6, 0, -6]} rotation={[0, 0.5, 0]} />

       {/* Acoustic Panels on Back Wall */}
       <AcousticPanels position={[-4, 3, -7.9]} scale={[0.8, 0.8, 1]} />
       <AcousticPanels position={[4, 2, -7.9]} scale={[0.8, 0.8, 1]} />

       {/* Ambient Strip Light on Wall */}
       <mesh position={[0, 6, -7.8]}>
           <boxGeometry args={[12, 0.1, 0.1]} />
           <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={2} toneMapped={false} />
       </mesh>


       {/* --- WORKSTATION --- */}
       
       {/* Main Desk */}
       <group position={[0, -1, -4]}>
           {/* Desktop */}
           <Box args={[9, 0.2, 3.5]} castShadow receiveShadow>
               <meshStandardMaterial color="#ffffff" roughness={0.2} />
           </Box>
           
           {/* Legs */}
           <Cylinder args={[0.1, 0.1, 2]} position={[-4, -1, 1.2]} castShadow><meshStandardMaterial color="#64748b" metalness={0.6} /></Cylinder>
           <Cylinder args={[0.1, 0.1, 2]} position={[4, -1, 1.2]} castShadow><meshStandardMaterial color="#64748b" metalness={0.6} /></Cylinder>
           <Cylinder args={[0.1, 0.1, 2]} position={[-4, -1, -1.2]} castShadow><meshStandardMaterial color="#64748b" metalness={0.6} /></Cylinder>
           <Cylinder args={[0.1, 0.1, 2]} position={[4, -1, -1.2]} castShadow><meshStandardMaterial color="#64748b" metalness={0.6} /></Cylinder>
           
           {/* --- DUAL MONITOR SETUP --- */}
           <group position={[0, 0.1, 0]}>
               {/* 1. Main Monitor (Horizontal) */}
               <group position={[-0.8, 0, 0]}>
                   <Box args={[0.6, 0.05, 0.6]} position={[0, 0.025, -0.5]}>
                        <meshStandardMaterial color="#1e293b" />
                   </Box>
                   <Box args={[0.15, 0.8, 0.05]} position={[0, 0.4, -0.7]} rotation={[-0.05, 0, 0]}>
                        <meshStandardMaterial color="#1e293b" />
                   </Box>
                   <group position={[0, 0.9, -0.6]} rotation={[-0.05, 0, 0]}>
                        <Box args={[3.4, 2.0, 0.1]} castShadow>
                            <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.2} />
                        </Box>
                        <mesh position={[0, 0, 0.06]}>
                            <planeGeometry args={[3.2, 1.8]} />
                            <meshBasicMaterial color="#020617" />
                        </mesh>
                        {/* Code Lines Effect */}
                        <mesh position={[0, 0, 0.07]}>
                            <planeGeometry args={[3.0, 1.6]} />
                            <meshBasicMaterial color="#38bdf8" alphaMap={null} transparent opacity={0.1} />
                        </mesh>
                   </group>
               </group>

               {/* 2. Sub Monitor (Vertical - Developer Style) */}
               <group position={[2.2, 0, 0.2]} rotation={[0, -0.3, 0]}>
                    <Box args={[0.5, 0.05, 0.5]} position={[0, 0.025, -0.5]}>
                         <meshStandardMaterial color="#1e293b" />
                    </Box>
                    <Box args={[0.15, 0.9, 0.05]} position={[0, 0.45, -0.7]}>
                         <meshStandardMaterial color="#1e293b" />
                    </Box>
                    <group position={[0, 1.1, -0.6]}>
                         <Box args={[1.4, 2.4, 0.1]} castShadow>
                             <meshStandardMaterial color="#0f172a" metalness={0.5} />
                         </Box>
                         <mesh position={[0, 0, 0.06]}>
                             <planeGeometry args={[1.2, 2.2]} />
                             <meshBasicMaterial color="#1e293b" />
                         </mesh>
                         {/* Glow from screen */}
                         <pointLight position={[0, 0, 0.5]} distance={1.5} intensity={1} color="#6366f1" />
                    </group>
               </group>

               {/* Mechanical Keyboard */}
               <group position={[-0.6, 0.05, 0.8]} rotation={[-0.05, 0, 0]}>
                    <Box args={[1.4, 0.08, 0.5]} castShadow>
                         <meshStandardMaterial color="#cbd5e1" />
                    </Box>
                    {/* Keys */}
                    <Box args={[1.3, 0.09, 0.4]}><meshStandardMaterial color="#1e293b" /></Box>
               </group>

               {/* Mouse & Pad */}
               <mesh rotation={[-Math.PI/2, 0, 0]} position={[0.8, 0.01, 0.8]}>
                   <planeGeometry args={[0.8, 0.7]} />
                   <meshStandardMaterial color="#1e293b" />
               </mesh>
               <group position={[0.8, 0.05, 0.8]}>
                    <Box args={[0.2, 0.08, 0.35]} castShadow>
                         <meshStandardMaterial color="#ffffff" />
                    </Box>
               </group>

               {/* Coffee Mug */}
               <group position={[1.5, 0.15, 1.2]}>
                   <Cylinder args={[0.12, 0.1, 0.25, 16]}>
                       <meshStandardMaterial color="#f43f5e" />
                   </Cylinder>
                   <Torus args={[0.08, 0.02, 8, 16]} position={[0.12, 0, 0]}>
                       <meshStandardMaterial color="#f43f5e" />
                   </Torus>
                   {/* Steam */}
                   <Sparkles position={[0, 0.3, 0]} count={5} scale={0.3} size={2} speed={0.5} opacity={0.5} color="#ffffff" />
               </group>
           </group>

           {/* Chair behind desk */}
           <ErgonomicChair position={[-0.6, -1.25, 2.5]} rotation={[0, -0.2, 0]} />
       </group>

       {/* Bookshelf on Left (Refined) */}
       <group position={[-7, 1.5, -5]} rotation={[0, 0.4, 0]}>
           <Box args={[3.5, 6, 1]} castShadow receiveShadow>
               <meshStandardMaterial color="#f1f5f9" />
           </Box>
           {/* Shelves */}
           <Box args={[3.3, 0.1, 0.9]} position={[0, 1, 0]}><meshStandardMaterial color="#cbd5e1" /></Box>
           <Box args={[3.3, 0.1, 0.9]} position={[0, -1, 0]}><meshStandardMaterial color="#cbd5e1" /></Box>
           {/* Tech Books */}
           <Box args={[0.2, 0.8, 0.7]} position={[-1, 1.5, 0]}><meshStandardMaterial color="#3b82f6" /></Box>
           <Box args={[0.2, 0.7, 0.7]} position={[-0.7, 1.45, 0]}><meshStandardMaterial color="#1d4ed8" /></Box>
           <Box args={[0.15, 0.85, 0.7]} position={[-0.4, 1.52, 0]}><meshStandardMaterial color="#ffffff" /></Box>
           {/* Storage Box */}
           <Box args={[0.8, 0.6, 0.8]} position={[1, -0.6, 0]}><meshStandardMaterial color="#94a3b8" /></Box>
       </group>
    </group>
  )
}

// --- TECH WAVE PARTICLE SYSTEM (Background for Hero) ---
const ParticleWave = () => {
  const count = 1500; 
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color('#38bdf8'); // Sky Blue
    const color2 = new THREE.Color('#e2e8f0'); // Slate 200

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40; 
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; 
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5; 

      const mixedColor = Math.random() > 0.5 ? color1 : color2;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, mouse.y * 0.05, 0.05);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, time * 0.02 + mouse.x * 0.05, 0.05);
    }
  });

  return (
    <points ref={ref}>
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
      <PointMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// --- INTERACTIVE DEV BOT ---
const DevBot = () => {
  const headRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (headRef.current) {
      const targetX = mouse.x * 0.8;
      const targetY = mouse.y * 0.8;
      
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.1);
    }
  });

  return (
    <group ref={headRef}>
      <Sphere args={[1, 64, 64]}>
        <meshPhysicalMaterial 
            color="#ffffff" 
            metalness={0.4} 
            roughness={0.2} 
            clearcoat={1} 
            transmission={0.2}
        />
      </Sphere>
      
      <Sphere args={[0.88, 64, 64]} position={[0, 0, 0.25]} scale={[1, 0.85, 1]}>
         <meshStandardMaterial color="#0f172a" roughness={0.1} metalness={0.9} />
      </Sphere>

      <group position={[0, 0.1, 1.05]}>
          <Sphere args={[0.18, 32, 32]} position={[-0.35, 0, 0]}>
            <meshBasicMaterial color="#38bdf8" toneMapped={false} />
            <pointLight color="#38bdf8" distance={1} intensity={2} />
          </Sphere>
          <Sphere args={[0.18, 32, 32]} position={[0.35, 0, 0]}>
            <meshBasicMaterial color="#38bdf8" toneMapped={false} />
            <pointLight color="#38bdf8" distance={1} intensity={2} />
          </Sphere>
      </group>

      <Float speed={4} rotationIntensity={0} floatIntensity={0}>
        <Torus args={[1.4, 0.05, 16, 64]} rotation={[1.5, 0, 0]}>
             <meshStandardMaterial color="#94a3b8" emissive="#38bdf8" emissiveIntensity={0.5} />
        </Torus>
      </Float>
      
      <Cylinder args={[0.2, 0.2, 0.5, 32]} rotation={[0, 0, 1.57]} position={[1.05, 0, 0]}>
         <meshStandardMaterial color="#e2e8f0" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.2, 0.2, 0.5, 32]} rotation={[0, 0, 1.57]} position={[-1.05, 0, 0]}>
         <meshStandardMaterial color="#e2e8f0" metalness={0.8} roughness={0.2} />
      </Cylinder>
    </group>
  );
}

// --- FLOATING DEV ELEMENTS ---
const FloatingDevElements = () => {
   const group = useRef<THREE.Group>(null);
   const fontUrl = 'https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_bold.typeface.json';
   
   useFrame(({clock}) => {
      if(group.current) {
          group.current.rotation.y = clock.getElapsedTime() * 0.15;
      }
   });

   return (
       <group ref={group}>
           <group position={[2.2, 0.5, 0]} rotation={[0, -1.5, 0]}>
                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <Text3D font={fontUrl} size={0.5} height={0.1} bevelEnabled bevelSize={0.02}>
                        {"< / >"}
                        <VisionGlass color="#60a5fa" opacity={0.9} />
                    </Text3D>
                </Float>
           </group>

           <group position={[-2.2, -0.5, 1]} rotation={[0, 1.5, 0]}>
               <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                    <Text3D font={fontUrl} size={0.6} height={0.1} bevelEnabled bevelSize={0.02}>
                        {"{ }"}
                        <VisionGlass color="#c084fc" opacity={0.9} />
                    </Text3D>
               </Float>
           </group>
       </group>
   )
}

// --- MAIN INTERACTIVE CONTAINER ---
const VisionContainer = ({ children }: { children?: React.ReactNode }) => {
    const ref = useRef<THREE.Group>(null);
    const { mouse } = useThree();
    
    useFrame(() => {
        if(ref.current) {
             ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -mouse.y * 0.1, 0.05);
             ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouse.x * 0.1, 0.05);
        }
    });
    return <group ref={ref}>{children}</group>;
}

// --- EXPORTED SCENES ---

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 14], fov: 40 }}>
        <ambientLight intensity={0.8} />
        <ParticleWave />
        <fog attach="fog" args={['#ffffff', 8, 25]} />
      </Canvas>
    </div>
  );
};

export const IdeaOrbScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 rounded-[2.5rem] overflow-hidden bg-slate-50">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        {/* Background Color Base */}
        <color attach="background" args={['#f8fafc']} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 8, 5]} angle={0.5} penumbra={1} intensity={10} castShadow shadow-bias={-0.0001} color="#ffffff" />
        <pointLight position={[-5, 2, -2]} intensity={2} color="#38bdf8" />
        
        {/* Environment - Indoor Feel */}
        <Environment preset="city" blur={0.8} />
        
        <Suspense fallback={null}>
            <VisionContainer>
                {/* Foreground: The Dev Bot & UI Elements */}
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.2, 0.2]}>
                    <DevBot />
                </Float>
                
                <FloatingDevElements />
                
                {/* Background: 3D Office Room */}
                <OfficeRoom />
            </VisionContainer>
        </Suspense>
        
        <Sparkles count={30} scale={8} size={2} speed={0.4} opacity={0.3} color="#38bdf8" position={[0,0,2]} />
      </Canvas>
    </div>
  );
}
