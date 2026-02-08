import React, {useRef} from 'react'
import {OrbitControls, useGLTF} from "@react-three/drei";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

function Model() {

    const controlsRef = useRef(null);
    const modelref = useRef(null);

    const { scene } = useGLTF("/Cup.glb");

    useGSAP(() => {
        if (modelref.current) {
            gsap.fromTo(modelref.current.scale,
                { x: 0, y: 0, z: 0 },
                {
                    x: 1,
                    y: 1,
                    z: 1,
                    scrollTrigger: {
                        trigger: ".show",
                        start: "top top",
                        end: "+=500",
                        scrub: 2,
                    },
                    ease: "power1.in"
                }
            );
        }
    }, []);

    useGSAP(() => {
        if (modelref.current) {
            gsap.to(modelref.current.rotation,
                {
                    z: 1,
                    y: 1.5,
                    scrollTrigger: {
                        trigger: ".show2",
                        start: "top bottom",
                        end: "+=1000",
                        scrub: 2,
                    },
                    ease: "power1.inOut"
                }
            );
        }
    }, []);

    const handleReset = () => {
        if (modelref.current) {
            gsap.to(modelref.current.rotation, {
                x: Math.PI / 6,
                y: 1,
                z: 0.2,
                duration: 1,
                ease: "power2.out"
            });
        }
    };

    return (
        <>
            <primitive
                object={scene}
                ref={modelref}
                position={[0, 0, 0]}
                rotation={[Math.PI / 6, 1, 0.2]}
                onPointerOut={handleReset}
            />
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                ref={controlsRef}
                onEnd={handleReset}  // Reset when user stops dragging
            />
        </>
    );
}
export default Model
