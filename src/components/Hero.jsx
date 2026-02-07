import React from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls, useGLTF} from "@react-three/drei";


function Model() {
    const { scene } = useGLTF('/Cup.glb');
    return <primitive object={scene} scale={1} position={[0, 0, 0]} rotation={[Math.PI / 6 , 1 , 0.2]}/>;
}

const Hero = () => {
    return (
        <div className={"h-screen w-screen show flex items-center "}>

            <div className={"px-5"}>
                {"COFFEE".split("").map((letter, i) => (
                    <p key={i} className="letter">
                        {letter}
                    </p>
                ))}
            </div>


            <div className={"h-screen bean1 w-screen absolute -z-5"}>
                <img className={"absolute bottom-5 right-20"} src="/bean1.svg" alt=""/>
                <img className={"absolute top-70 right-50"} src="/bean2.svg" alt=""/>
                <img className={"absolute top-10 right-20"} src="/bean3.svg" alt=""/>
            </div>

            <div className={"h-screen bean2 w-screen absolute -z-5"}>
                <img className={"absolute top-10 left-50"} src="/bean4.svg" alt=""/>
                <img className={"absolute bottom-30 left-5"} src="/bean5.svg" alt=""/>
                <img className={"absolute bottom-20 left-70"} src="/bean6.svg" alt=""/>
            </div>


            <div className={"h-screen w-screen absolute left-30 -z-3"}>
                <div className={'w-150 text1 text-[80px] opacity-50 absolute bottom-5'}>من الحبة إلى الكوب… بإتقان</div>
                <div className={"text-[24px] text2 absolute opacity-50 bottom-5 right-40"}>الفخامة، تُسكب</div>
            </div>

            <div className={"h-screen w-screen absolute flex justify-center items-center z-0"}>
                <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
                    {/* Base light */}
                    <ambientLight intensity={0.5} />

                    {/* Main light -front */}
                    <directionalLight position={[5, 5, 5]} intensity={1} />

                    <directionalLight position={[-5 , 0, 0]} intensity={1} />
                    <directionalLight position={[5 , 0 , -10]} intensity={0.5} />
                    <directionalLight position={[-5 , -10 , 3]} intensity={0.5} />

                    <Model />

                    <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
            </div>

        </div>
    )
}
export default Hero
