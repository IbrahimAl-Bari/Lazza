import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Carousel() {
    const products = [
        { id: 1, name: "بانكو", smprice: 48, bgprice: 192 },
        { id: 2, name: "مونتي", smprice: 61, bgprice: 244 },
        { id: 3, name: "ماما بيتي", smprice: 44, bgprice: 176 },
        { id: 4, name: "قوجي", smprice: 52, bgprice: 208 },
        { id: 5, name: "فيصل عبدوش", smprice: 69, bgprice: 276 },
        { id: 6, name: "شاكيسو", smprice: 63, bgprice: 252 },
        { id: 7, name: "سيلدا", smprice: 53, bgprice: 212 },
        { id: 8, name: "سيدامو", smprice: 58, bgprice: 232 },
        { id: 9, name: "تشلشلي", smprice: 62, bgprice: 248 },
        { id: 10, name: "بيبري", smprice: 63, bgprice: 252 },
        { id: 11, name: "أكسيلسو", smprice: 38, bgprice: 152 },
        { id: 12, name: "السلفادور", smprice: 38, bgprice: 152 },
    ];


    const [centerIndex, setCenterIndex] = useState(0);
    const carouselRef = useRef(null);
    const containerRef = useRef(null);

    const [kg , setkg] = useState(false);
    const togglesm = () => {
        setkg(false)

        const rece = document.querySelector(".bgc")
        rece.style.border = "1px solid white";

        const rece2 = document.querySelector(".smc")
        rece2.style.border = "3px solid white";
    }
    const togglebg = () => {
        setkg(true)

        const rece = document.querySelector(".bgc")
        rece.style.border = "3px solid white";

        const rece2 = document.querySelector(".smc")
        rece2.style.border = "1px solid white";
    }


    const goNext = () => {
        setCenterIndex((prev) => (prev + 1) % products.length);
    };

    const goPrev = () => {
        setCenterIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    useEffect(() => {

        if (!carouselRef.current || !containerRef.current) return;

        const firstItem = carouselRef.current.children[0];
        const gap = parseInt(getComputedStyle(carouselRef.current).gap || "16");
        const itemWidth = firstItem.offsetWidth + gap;


        const containerWidth = containerRef.current.offsetWidth;
        const x = -centerIndex * itemWidth + containerWidth / 2 - firstItem.offsetWidth / 2;

        gsap.to(carouselRef.current, {
            x: x,
            duration: 0.5,
            ease: "power1.out",
        });
    }, [centerIndex]);

    const handleRedirect = () => {
        window.open('https://lazza.sa', '_blank', 'noopener,noreferrer');
    };


    return (
        <div className="flex flex-col items-center overflow-hidden justify-center w-full h-screen z-60">


            <div className="h-screen w-screen flex absolute justify-center items-end mb-20 max-md:mb-40 max-xs:mb-60 max-xs:mr-10 z-80">

                <button className={'w-10 max-md:w-8 button cursor-pointer relative right-20'} onClick={goPrev}>
                    <img className={"hover:scale-110 duration-200"} src="/arrow.svg" alt="prev" />
                </button>

                <h3 dir="rtl" className="text-2xl button px-5 absolute">{products[centerIndex].name}</h3>

                <button className={"w-10 max-md:w-8 button cursor-pointer relative left-20"} onClick={goNext}>
                    <img src="/arrow.svg" alt="next" className="rotate-180 hover:scale-110 duration-200" />
                </button>

            </div>



            <div ref={containerRef} className="w-full h-screen flex items-center absolute top-10 max-xs:top-0">

                <div ref={carouselRef} className="flex gap-10 z-100">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`z-100 box shrink-0 min-w-40 w-[30vw] max-w-60 aspect-square square rounded-4xl transition-transform duration-500 flex items-center justify-center  ${
                                index === centerIndex ? "scale-125 rounded-[3rem] shadow-2xl" : "scale-90"
                            }`}
                        >
                            {product.name}
                        </div>
                    ))}
                </div>

            </div>

            <div className={'w-screen h-screen absolute flex max-xs:justify-center items-end'}>

                <div className={'w-100  m-5 z-90 weight flex items-center gap-10 max-sm:gap-5 '}>
                    <div onClick={togglesm} className={"cursor-pointer smc z-60 w-15 h-15 max-md:w-10 max-md:h-10 max-md:text-xs circle flex justify-center items-center text-sm hover:border-4  hover:scale-110 duration-200"}>250 G</div>
                    <div onClick={togglebg} className={"cursor-pointer bgc z-60 w-20 h-20 max-md:w-15 max-md:h-15 max-md:text-md circle flex justify-center items-center text-xl hover:border-4  hover:scale-110 duration-200"}>1 Kg</div>
                </div>


                <div className={'w-screen m-5 flex items-center justify-end'}>
                    <div className={"w-15 h-15 square max-md:h-10 max-md:w-15 max-xs:w-10 max-xs:text-sm buy flex justify-evenly mr-5 items-center text-xl"}>
                        {kg ? (products[centerIndex].bgprice) : (products[centerIndex].smprice)}
                        <img src="/ryal.svg" alt=""/>
                    </div>
                    <div className={"w-30 h-15 max-md:h-10 max-md:w-20 max-md:text-xl square buy flex justify-center mr-20 items-center text-3xl z-90"}><button onClick={handleRedirect} className={"w-full h-full cursor-pointer z-89 hover:scale-125 duration-200"}>Order</button></div>
                </div>

            </div>


        </div>
    );
}
