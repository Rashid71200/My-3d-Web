
import { Canvas } from '@react-three/fiber';

import React, { Suspense } from "react";
//import { Sphere } from 'react-simple-maps';
import styled from "styled-components"
import Navbar from './Navbar'
import { OrbitControls, Sphere, Stage } from "@react-three/drei";
import Earth from './Earth'
import Moon from './Moon'
import Saturn from './Saturn'


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
aling-items: center;
justify-content: space-between;
scroll-snap-align: top;
`

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
flex:2;
padding: 0px 0px 0px 70px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px
`;

const Title = styled.h1`
font-size: 74px;

`;

const WhatIdo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Line = styled.img`
height: 5px;

`;

const Subtitle = styled.h2`
color: #da4ea2;
`;

const Desc = styled.p`
font-size: 24px;
color: lightgray;
`;



const Right = styled.div`
flex:3;
position: relative;
`;
const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
  100%{
    transform: translateY(20px);
  }
}
`;

const Button2 = styled.button`
width: 100px;
padding: 10px;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`;


const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatIdo>
            <Line src="./img/line.png" />
            <Subtitle>What we Do</Subtitle>
          </WhatIdo>
          <Desc>we enjoy creating delightful, human-centered digital expriences.</Desc>
        <Button2>Learn More</Button2>
        </Left>
        <Right>
             
             <Canvas>
             <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <ambientLight intensity={1.5}/>
            <directionalLight position={[3,2,1]}/>
            
              <Moon />
            
            
            <OrbitControls enableZoom={false}/>
            
        </Canvas>
            
             
            <Img src="./img/moon1.png" /> 
        </Right>
      </Container>
    </Section>
  )
}

export default Hero