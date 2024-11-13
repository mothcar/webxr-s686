import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./Box";
import "./App.css";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-3.6, 0, 0]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Box position={[3.6, 0, 0]} />
      </Canvas>
      <h1>Vite + React</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
