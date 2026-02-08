import Navbar from "./components/Navbar.jsx";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import Bean from "./components/Bean.jsx";
import {Canvas} from "@react-three/fiber";
import {useEffect} from "react";
import Model from "./components/Model.jsx";

gsap.registerPlugin(ScrollTrigger);


const App = () => {



    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);



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
                end: "+=2000",
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
    });



    // RETURN RETURN RETURN RETURN RETURN RETURN RETURN RETURN RETURN RETURN RETURN RETURN



    return (
        <>


            <div className={"bg w-screen h-screen -z-10 fixed"} />


            <Navbar />


            <div className="fixed top-0 left-0 w-screen h-screen z-40">

                <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 2.5], fov: 50 }}>

                    <ambientLight intensity={0.5} />

                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <directionalLight position={[-5, 0, 0]} intensity={1} />
                    <directionalLight position={[5, 0, -10]} intensity={0.5} />
                    <directionalLight position={[-5, -10, 3]} intensity={0.5} />

                    <Model />

                </Canvas>

            </div>


            <Bean />


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


                <div className={"h-screen w-screen absolute left-10 -z-3"}>
                    <div className={'w-150 text1 text-[100px] flex text-center opacity-50 absolute bottom-5'}>قهوة على مزاجك</div>
                    <div className={"text-[24px] text2 absolute opacity-50 bottom-5 right-20"}>...جودة تُحس</div>
                </div>


            </div>


            <div className={"h-screen w-screen show2 flex items-center"}>


                <div className={"px-5"}>
                    {"ARABIC".split("").map((letter, i) => (
                        <p key={i} className="letter2">
                            {letter}
                        </p>
                    ))}
                </div>


                <div className={"h-screen bean3 w-screen absolute -z-5"}>
                    <img className={"absolute top-20 right-50"} src="/bean7.svg" alt=""/>
                    <img className={"absolute bottom-20 right-20"} src="/bean8.svg" alt=""/>
                    <img className={"absolute bottom-5 right-100"} src="/bean9.svg" alt=""/>
                </div>


                <div className={"text-[150px] text3 absolute opacity-30 flex justify-center h-screen w-screen items-center"}>ثقة الكوب</div>


                <div className={"h-screen bean4 w-screen absolute -z-5"}>
                    <img className={"absolute top-30 left-100"} src="/bean10.svg" alt=""/>
                    <img className={"absolute bottom-10 left-20"} src="/bean11.svg" alt=""/>
                    <img className={"absolute top-20 left-20"} src="/bean12.svg" alt=""/>
                </div>


            </div>
        </>
    )
}
export default App