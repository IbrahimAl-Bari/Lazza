import React from 'react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import gsap from 'gsap';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {

        const scrollToSection = (className) => {
            const element = document.querySelector(`.${className}`);
            if (element) {
                // Get the actual position accounting for ScrollTrigger pins
                const yPos = element.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: yPos,
                    behavior: 'smooth'
                });
            }
        };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleRedirect = () => {
        window.open('https://lazza.sa/pages/106257', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={"fixed top-0 w-screen flex justify-center h-10 z-100"}>
        <div className={"absolute top-3 flex justify-evenly rounded-4xl w-125 max-sm:w-80 h-10 bg-[#EE4C25]"}>

            <div className={"flex justify-center w-[50%] max-sm:w-30"}>
                <img src="/logo.svg" alt=""/>
            </div>

            <div className={"flex justify-evenly w-[50%]"}>
                <img onClick={scrollToTop}className={"w-7 hover:scale-125 duration-200 max-sm:w-5 cursor-pointer"} src="/house.svg" alt=""/>
                <img onClick={handleRedirect} className={"w-7 hover:scale-125 duration-200 max-sm:w-5 cursor-pointer"} src="/phone.svg" alt=""/>
                <img  onClick={() => scrollToSection('show3')} className={"w-7 hover:scale-125 duration-200 max-sm:w-5 cursor-pointer"} src="/table.svg" alt=""/>
            </div>

        </div>
        </div>
    )
}
export default Navbar
