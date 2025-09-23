import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { assets } from '../assets/assets';

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Error in 3D component:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Html center>
          <div className="text-white p-4 bg-red-500/80 rounded-lg backdrop-blur-sm">
            <h2 className="font-bold">3D Model Failed to Load</h2>
            <p className="text-sm">Using fallback visualization</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="mt-2 px-3 py-1 bg-white text-red-500 rounded text-xs"
            >
              Try Again
            </button>
          </div>
        </Html>
      );
    }
    return this.props.children;
  }
}

// Fallback component
function FallbackModel() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.x =
        Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <pointLight position={[5, 5, 5]} intensity={1.5} />
    </group>
  );
}

// Model component with proper error handling
function Model() {
  const modelRef = useRef();
  const modelPath = assets.brick_wall;

  const { scene } = useGLTF(modelPath);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return <primitive ref={modelRef} object={scene} dispose={null} />;
}

// Loader component
function Loader() {
  return (
    <Html center>
      <div className="text-white bg-black/50 p-4 rounded-lg backdrop-blur-sm">
        <div className="w-8 h-8 border-2 border-t-white border-r-white border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-2"></div>
        <p className="text-sm">Loading 3D model...</p>
      </div>
    </Html>
  );
}

// Main Hero component
export default function Hero() {
  const [modelError, setModelError] = useState(false);
  const controlsRef = useRef();

  return (
    <div className="relative m-10 w-auto h-[90vh] bg-gradient-to-b from-blue-900 to-purple-900">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 75 }}
        className="w-full h-full"
      >
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            {modelError ? (
              <FallbackModel />
            ) : (
              <Model onError={() => setModelError(true)} />
            )}

            <OrbitControls
              ref={controlsRef}
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
            />
          </Suspense>
        </ErrorBoundary>
      </Canvas>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
        <div className="text-white text-center bg-black/30 p-4 rounded-lg backdrop-blur-sm">
          <h1 className="text-3xl font-bold mb-2">Architectural Vision</h1>
          <p className="text-sm opacity-80">Drag to rotate • Scroll to zoom</p>
          {modelError && (
            <p className="text-xs mt-2 text-yellow-200">
              Using fallback geometry (model failed to load)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
