import Navbar from "./components/Navbar.jsx";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import Bean from "./components/Bean.jsx";
import {Canvas} from "@react-three/fiber";
import {useEffect, useState} from "react";
import Model from "./components/Model.jsx";
import {Carousel} from "./components/Carousel.jsx";


gsap.registerPlugin(ScrollTrigger);

const App = () => {

    const [loading, setLoading] = useState(true);
    const [centerIndex, setCenterIndex] = useState(0);

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    const handleCanvasLoaded = () => {
        setLoading(false);
    };


    // GSAP GSAP GSAP GSAP GSAP GSAP GSAP GSAP GSAP GSAP GSAP GSAP GSAP GSAP GSAP GSAP

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".beans",
                start: "top top",
                end: "+=1500",
                scrub: 2,
                pin: true,
                ease: "power1.in",
            }
        });
        tl
            .to(".beanleft", { scale: 1.3 })
            .to(".beanright", { scale: 1.3 }, "<")
            .to(".beanleft", { x: -100, scale: 2, rotation: -30 })
            .to(".beanright", { x: 100, scale: 2, rotation: 30 }, "<")
            .to(".beanleft", { x: -1100, scale: 10 })
            .to(".beanright", { x: 1000, scale: 10 }, "<");
    });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".show",
                start: "top top",
                end: "+=2500",
                scrub: 2,
                pin: true,
                ease: "power1.in",
            }
        });
        tl
            .from(".bean2", { x: -500 })
            .from(".bean1", { x: 500 }, "<")
            .from(".letter", { x: -100, stagger: 0.2 })
            .from(".text2", { x: 500 }, "<")
            .from(".text1", { y: 300, scale: 0.5, opacity: 0.1 }, "<")
            .from(".fake", { x: 500})
    });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".show2",
                start: "top top",
                end: "+=2000",
                scrub: 2,
                pin: true,
                pinSpacing: true,
                ease: "power1.in",
            }
        });
        tl
            .from(".bean4", { x: -600 })
            .from(".bean3", { x: 500 }, "<")
            .from(".letter2", { x: -100, stagger: 0.2 })
            .from(".text3", { scale: 0 }, "<")
            .from(".fake2", { x: 500})
    });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".show3",
                start: "top top",
                end: "+=3500",
                scrub: 2,
                pin: true,
                pinSpacing: true,
                ease: "power1.in",
            }
        });
        tl
            .from(".text4", {scale: 0})
            .from(".bean6", { x: -600 })
            .from(".bean5", { x: 500 }, "<")
            .from(".letter3", { x: -100, stagger: 0.2 } , "<")
            .from(".button", {y:200, stagger: 0.2})
            .from(".weight", {y: 80, opacity: 0, scale: 0.9, duration: 0.6,}, "-=0.3")
            .from(".buy", {y:100, stagger: 0.2})
    });


    // RETURN  RETURN  RETURN  RETURN  RETURN  RETURN  RETURN  RETURN  RETURN  RETURN  RETURN


    return (
        <>
            <div className="bg w-screen h-screen overflow-hidden -z-10 fixed" />


            <Navbar />


            {loading && (
                <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg z-100 flex items-center justify-center">
                   <div className={"loader"}></div>
                </div>
            )}

            <div className="fixed top-0 left-0 w-screen h-screen z-40 pointer-events-none">
                <Canvas
                    dpr={[1, 2]}
                    camera={{position: [0, 0, 2.5], fov: window.innerWidth < 768 ? 60 : 50}}
                    onCreated={handleCanvasLoaded}>


                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <directionalLight position={[-5, 0, 0]} intensity={1} />
                    <directionalLight position={[5, 0, -10]} intensity={0.5} />
                    <directionalLight position={[-5, -10, 3]} intensity={0.5} />

                    <Model />
                </Canvas>
            </div>


            <Bean />


            <div className="h-screen w-full show overflow-hidden flex items-center">

                <div className={"h-10 w-10 fake absolute hidden -z-10"}></div>

                <div className="px-5">
                    {"COFFEE".split("").map((letter, i) => (
                        <p key={i} className="letter text-[48px] max-xs:text-[30px]">
                            {letter}
                        </p>
                    ))}
                </div>


                <div className="h-screen bean1 w-screen absolute -z-5">
                    <img className="absolute bottom-2 right-5 w-16 sm:bottom-5 sm:right-20 sm:w-24 md:w-32" src="/bean1.svg" alt=""/>
                    <img className="absolute top-40 right-20 w-12 sm:top-70 sm:right-50 sm:w-20 md:w-24" src="/bean2.svg" alt=""/>
                    <img className="absolute top-5 right-10 w-14 sm:top-10 sm:right-20 sm:w-20 md:w-28" src="/bean3.svg" alt=""/>
                </div>


                <div className="h-screen bean2 w-screen absolute -z-5">
                    <img className="absolute top-5 left-20 w-16 sm:top-10 sm:left-50 sm:w-24 md:w-32" src="/bean4.svg" alt=""/>
                    <img className="absolute bottom-20 left-2 w-12 sm:bottom-30 sm:left-5 sm:w-20 md:w-24" src="/bean5.svg" alt=""/>
                    <img className="absolute bottom-10 left-32 w-14 sm:bottom-20 sm:left-70 sm:w-20 md:w-28" src="/bean6.svg" alt=""/>
                </div>


                <div className="h-screen w-screen absolute left-2 sm:left-10 -z-3 flex flex-col justify-end pb-5 sm:pb-10">
                    <div dir="rtl" className=" w-full sm:w-100 max-xs:w-80 text1 text-4xl max-sm:text-5xl md:text-6xl lg:text-[100px] text-center sm:text-right opacity-50">
                        قهوة على مزاجك
                    </div>
                    <div dir="rtl" className=" text-base sm:text-xl md:text-2xl lg:text-[24px] text2 opacity-50 pr-10 text-end sm:text-right mt-2 sm:mt-0 sm:absolute sm:bottom-5 sm:right-10 md:right-20">
                        ...جودة تُحس
                    </div>
                </div>

            </div>


            <div className="h-screen w-full overflow-hidden show2 flex items-center">

                <div className={"h-10 w-10 fake2 absolute hidden -z-10"}></div>

                <div className="px-5">
                    {"ARABIC".split("").map((letter, i) => (
                        <p key={i} className="letter2 text-[48px] max-xs:text-[30px]">
                            {letter}
                        </p>
                    ))}
                </div>


                <div className="h-screen bean3 w-screen absolute -z-5">
                    <img className="absolute top-10 right-20 w-16 sm:top-20 sm:right-50 sm:w-24 md:w-32" src="/bean7.svg" alt=""/>
                    <img className="absolute bottom-10 right-10 w-12 sm:bottom-20 sm:right-20 sm:w-20 md:w-24" src="/bean8.svg" alt=""/>
                    <img className="absolute bottom-2 right-40 w-14 sm:bottom-5 sm:right-100 sm:w-20 md:w-28" src="/bean9.svg" alt=""/>
                </div>


                <div dir="rtl" className="leading-relaxed tracking-normal text-8xl sm:text-8xl md:text-9xl lg:text-[150px] text3 absolute opacity-50 flex justify-center h-screen w-screen items-center px-4 text-center">
                    ثقة الكوب
                </div>


                <div className="h-screen bean4 w-screen absolute -z-5">
                    <img className="absolute top-20 left-40 w-16 sm:top-30 sm:left-100 sm:w-24 md:w-32" src="/bean10.svg" alt=""/>
                    <img className="absolute bottom-5 left-10 w-12 sm:bottom-10 sm:left-20 sm:w-20 md:w-24" src="/bean11.svg" alt=""/>
                    <img className="absolute top-10 left-10 w-14 sm:top-20 sm:left-20 sm:w-20 md:w-28" src="/bean12.svg" alt=""/>
                </div>

            </div>


            <div className={"h-screen w-full show3 overflow-hidden flex items-center z-60"}>

                <div className="leading-relaxed tracking-normal text-8xl sm:text-8xl max-xs:text-7xl md:text-9xl lg:text-[150px] text4 absolute mb-90 opacity-50 flex justify-center h-screen w-screen items-center px-4 text-center">
                  !  إكتشف
                </div>

                <div className="px-5">
                    {"COFFEE".split("").map((letter, i) => (
                        <p key={i} className="letter3 text-[48px] max-xs:text-[30px]">
                            {letter}
                        </p>
                    ))}
                </div>

                <div className="h-screen bean5 w-screen absolute -z-5">
                    <img className="absolute bottom-2 right-5 w-16 sm:bottom-5 sm:right-20 sm:w-24 md:w-32" src="/bean1.svg" alt=""/>
                    <img className="absolute top-40 right-20 w-12 sm:top-70 sm:right-50 sm:w-20 md:w-24" src="/bean2.svg" alt=""/>
                    <img className="absolute top-5 right-10 w-14 sm:top-10 sm:right-20 sm:w-20 md:w-28" src="/bean3.svg" alt=""/>
                </div>


                <div className="h-screen bean6 w-screen absolute -z-5">
                    <img className="absolute top-5 left-20 w-16 sm:top-10 sm:left-50 sm:w-24 md:w-32" src="/bean4.svg" alt=""/>
                    <img className="absolute bottom-20 left-2 w-12 sm:bottom-30 sm:left-5 sm:w-20 md:w-24" src="/bean5.svg" alt=""/>
                    <img className="absolute bottom-10 left-32 w-14 sm:bottom-20 sm:left-70 sm:w-20 md:w-28" src="/bean6.svg" alt=""/>
                </div>

                <Carousel centerIndex={centerIndex} setCenterIndex={setCenterIndex} />

            </div>
        </>
    )
}
export default App