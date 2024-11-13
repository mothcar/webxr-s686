import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = (props) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [clicked, setClick] = useState(false);

  useFrame(
    () => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01)
  );

  return (
      <mesh
        {...props}
        ref={meshRef}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => setClick(!clicked)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
  );
};

export default Box;
