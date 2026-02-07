import React from 'react'

const Bean = () => {
    return (
        <div className={'beans w-screen h-screen flex justify-center items-center'}>
            <img className={"beanleft w-10"} src="/beanleft.svg" alt=""/>
            <img className={"beanright w-10"} src="/beanright.svg" alt=""/>

            <img className={"hidden sed1 absolute"} src="/sed1.svg" alt=""/>
            <img className={"hidden sed2 absolute"} src="/sed2.svg" alt=""/>
            <img className={"hidden sed3 absolute"} src="/sed3.svg" alt=""/>
            <img className={"hidden sed1 absolute"} src="/sed1.svg" alt=""/>
            <img className={"hidden sed2 absolute"} src="/sed2.svg" alt=""/>
            <img className={"hidden sed3 absolute"} src="/sed3.svg" alt=""/>
        </div>
    )
}
export default Bean
