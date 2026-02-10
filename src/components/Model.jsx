import React, {useRef} from 'react'
import {OrbitControls, useGLTF} from "@react-three/drei";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    useGSAP(() => {
        if (modelref.current) {
            gsap.to(modelref.current.position,
                {
                    x: 5,
                    scrollTrigger: {
                        trigger: ".show3",
                        start: "top bottom",
                        end: "+=100",
                        scrub: 2,
                    },
                    ease: "power1.in"
                }
            );
        }
    }, []);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".show2",
            start: "top center",

            onEnter: () => {
                const controls = controlsRef.current;
                if (!controls) return;

                controls.autoRotate = false;

                const state = {
                    azimuth: controls.getAzimuthalAngle(),
                    polar: controls.getPolarAngle(),
                };

                gsap.to(state, {
                    azimuth: 0,
                    polar: Math.PI / 2,
                    duration: 1,
                    ease: "power2.out",
                    onUpdate: () => {
                        controls.setAzimuthalAngle(state.azimuth);
                        controls.setPolarAngle(state.polar);
                        controls.update();
                    },
                });
            },

            onLeaveBack: () => {
                const controls = controlsRef.current;
                if (controls) {
                    controls.autoRotate = true;
                }
            },
        });
    }, []);




    return (
        <>
            <primitive
                object={scene}
                ref={modelref}
                position={[0, 0, 0]}
                rotation={[Math.PI / 6, 1, 0.2]}
            />
            <OrbitControls
                ref={controlsRef}
                enableZoom={false}
                enablePan={false}
                enableRotate={false}

                // if he wants rotate by user
                // enableRotate={true}

                autoRotate
                autoRotateSpeed={0.4}
                enableDamping
                dampingFactor={0.08}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
            />
        </>
    );
}
export default Model
