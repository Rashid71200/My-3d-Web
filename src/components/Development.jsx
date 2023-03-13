import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Chair from './Chair'

import Apple from './Apple'
import Asus from './Asus'
import Comp from './Comp'
import Laptop1 from './Laptop1'
import Laptop2 from './Laptop2'
import Laptop3 from './Laptop3'
import Pc1 from './Pc1'
import Phone1 from './Phone1'

const Development = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
            <Asus />
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    )
}

export default Development