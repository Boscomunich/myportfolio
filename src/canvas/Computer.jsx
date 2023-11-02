import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader  from './Loader'


const Computer = () => {
    const computer = useGLTF('../desktop_pc/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={2} groundColor="black"/>
            <pointLight 
            intensity={2}
            />
            <spotLight 
            position={[-20, 100, 10]}
            angle={0.12}
            penumbra={1}
            intensity={2}
            castShadow
            shadow-mapSize={1024}/>
            <primitive object={computer.scene}
            scale={0.75}
            position={[0, -0.25, -2]}
            rotation={[-0.01, 0, -0.1]}/>
        </mesh>
    );
};


const ComputerCanvas = () => {
    return (
        <Canvas frameloop="demand"
        shadows
        camera={{position: [20, 3, 0], fov:25}}
        gl={{preserveDrawingBuffer: true}}>
            <Suspense fallback={<Loader/>} >
                <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}/>
                <Computer/>
            </Suspense>
            <Preload all/>
        </Canvas>
    );
};

export default ComputerCanvas;
