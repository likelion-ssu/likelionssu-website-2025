import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import vertexShader from "./shaders/vertex.glsl?raw";
import fragmentShader from "./shaders/fragment.glsl?raw";

function Model() {
  const gltf = useLoader(GLTFLoader, "/models/model.gltf");
  const matcapTexture = useLoader(THREE.TextureLoader, "/models/0101.png");
  const materialRef = useRef();
  const clock = new THREE.Clock();

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      matcapTexture: { value: matcapTexture }
    },
    vertexShader,
    fragmentShader,
    transparent: true
  });

  gltf.scene.traverse(child => {
    if (child instanceof THREE.Mesh) {
      child.material = shaderMaterial;
    }
  });

  useFrame(() => {
    if (shaderMaterial.uniforms && shaderMaterial.uniforms.uTime) {
      shaderMaterial.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return <primitive object={gltf.scene} position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />;
}

export default function ThreeScene() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "transparent" }}>
      <Canvas
        camera={{ position: [0, 0, 25], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true }}
      >
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <Model />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
