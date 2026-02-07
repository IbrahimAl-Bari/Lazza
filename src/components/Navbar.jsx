import React from 'react'

const Navbar = () => {
    return (
        <div className={"fixed top-0 w-screen flex justify-center h-10 z-100"}>
        <div className={"absolute top-3 flex justify-evenly rounded-4xl w-125 max-sm:w-80 h-10 bg-[#EE4C25]"}>

            <div className={"flex justify-center w-[50%] max-sm:w-30"}>
                <img src="/logo.svg" alt=""/>
            </div>

            <div className={"flex justify-evenly w-[50%]"}>
                <img className={"w-7 hover:scale-125 duration-200 max-sm:w-5"} src="/house.svg" alt=""/>
                <img className={"w-7 hover:scale-125 duration-200 max-sm:w-5"} src="/phone.svg" alt=""/>
                <img className={"w-7 hover:scale-125 duration-200 max-sm:w-5"} src="/table.svg" alt=""/>
            </div>

        </div>
        </div>
    )
}
export default Navbar
