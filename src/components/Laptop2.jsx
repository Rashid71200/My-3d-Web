/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 model.gltf --transform
Author: JonParrish (https://sketchfab.com/JonParrish)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/laptop-free-download-9eb033212e384f9c94ad3d22e8b4215e
Title: Laptop | Free Download
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/laptop2.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Laptop} position={[-38.16, 3.22, -55.43]} rotation={[-2.03, -1.03, -2.09]} scale={[0.93, 0.9, 0.65]} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Laptop} position={[-38.73, 3.22, 0.06]} rotation={[-Math.PI / 2, 1.09, Math.PI / 2]} scale={[0.93, 0.9, 0.65]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/laptop2.glb')
