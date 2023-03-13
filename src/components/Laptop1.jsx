

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/laptop1-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.93, 0, -0.31]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Material} />
      </group>
      <mesh geometry={nodes.Object_7.geometry} material={materials['Material.001']} position={[0, 0.13, 0]} />
      <mesh geometry={nodes.Object_9.geometry} material={materials['Material.005']} position={[0, 1.41, -1.34]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/laptop1-transformed.glb')
