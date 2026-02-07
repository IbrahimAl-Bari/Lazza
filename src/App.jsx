import Navbar from "./components/Navbar.jsx";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import Bean from "./components/Bean.jsx";
import Hero from "./components/Hero.jsx";
import React from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


const App = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".beans", // Parent container
                start: "top top",
                end: "+=1500",
                scrub: 2,
                pin: true,
            }
        });

        tl.to(".beanleft", {
            scale: 1.3,
            ease: "power1.in",
        })
            .to(".beanright", {
                scale: 1.3,
                ease: "power1.in",
            }, "<");
        tl.to(".beanleft", {
            x: -100,
            scale: 2,
            rotation: -30,
            ease: "power1.inOut",
        })
            .to(".beanright", {
                x: 100,
                scale: 2,
                rotation: 30,
                ease: "power1.inOut",
            }, "<");

        tl.to(".beanleft", {
            x: -300,
            scale: 5,
            ease: "power1.inOut",
        })
            .to(".beanright", {
                x: 300,
                scale: 5,
                ease: "power1.inOut",
            }, "<");
        tl.to(".beanleft", {
            x: -1100,
            scale: 10,
            ease: "power1.inOut",
        })
            .to(".beanright", {
                x: 1000,
                scale: 10,
                ease: "power1.inOut",
            }, "<");
    });


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".show",
                start: "top top",
                end: "+=2000",
                scrub: 2,
                pin: true,
            }
        });

        tl
            .from(".bean2", { x: -500 })
            .from(".bean1", { x: 500 }, "<")
            .from(".letter", { x: -100, stagger: 0.2 })
            .from(".text2", { x: 200 }, "<")
            .from(".text1", { y: 300, scale: 0.5, opacity: 0.1 }, "<");

    });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".show2",
                start: "top top",
                end: "+=1000",
                scrub: 2,
                pin: true,
            }
        });

        tl
            .from(".bean3", { x: 500 }, "<")
            .from(".bean4", { x: -600 })

    });

    return (
        <>
        <div className={"bg w-screen h-screen -z-10 fixed"} />
        <Navbar />

           <Bean />
            <Hero />

            <div className={"h-screen w-screen show2"}>

                <div className={"h-screen bean3 w-screen absolute -z-5"}>
                    <img className={"absolute bottom-5 right-20"} src="/bean7.svg" alt=""/>
                    <img className={"absolute top-70 right-50"} src="/bean8.svg" alt=""/>
                    <img className={"absolute top-10 right-20"} src="/bean9.svg" alt=""/>
                </div>

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
