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
import Earth from './Earth'
import Moon from './Moon'
import Saturn from './Saturn'

const WebDesing = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
            <Saturn />
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    )
}

export default WebDesing  //gltf-pipeline -i model.gltf -o modelDraco.gltf -d    gltf-pipeline -i scene.gltf -o model.gltf -d      cd C:\Users\azaha\OneDrive\Desktop\3d  npx gltfjsx model.gltf --transform