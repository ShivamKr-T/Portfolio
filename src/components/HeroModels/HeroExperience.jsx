import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Cute } from './Cute';
import Particles from './Particles';

const HeroExperience = () => {
    const isTablet=useMediaQuery({query:'(max-width:1024px)'});
    const isMobile=useMediaQuery({query:'(max-width:768px)'})
  return (
    <Canvas camera={{position:[5,1,15],fov:45}}>
        <ambientLight intensity={0.2} color='#1a1a40'/>
        <directionalLight position={[5,5,5]} intensity={2}/>

        <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI/5}
            maxPolarAngle={Math.PI/2}
        />

        <Particles count={150}/>
        <group
            scale={isMobile?1.2:1.5} 
            position={[0.5,0,0]}
        >
            <Cute/>
        </group>

    </Canvas>
  )
}

export default HeroExperience