import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [3, 3, 5] }}>
        <OrbitControls />
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
