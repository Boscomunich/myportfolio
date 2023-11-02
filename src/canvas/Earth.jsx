import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from './Loader'

const Earth = () => {
    const earth = useGLTF('./Planet/scene.gltf')
    return (
        <mesh>
            <ambientLight intensity={1.25}/>
            <directionalLight position={[0, 0, 0.05]}/>
            <primitive
            object={earth.scene}
            scale={3.5}
            position-y={0}
            rotation-y={0}/>
        </mesh>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
        shadows
        frameloop='demand'
        gl={{preserveDrawingBuffer:true}}
        camera={{
            position: [-4, 3, 6], fov:45
        }}>
            <Suspense fallback={<Loader/>}>
                <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}/>
                <Earth/>
            </Suspense>
        </Canvas>
    )
}

export default EarthCanvas;