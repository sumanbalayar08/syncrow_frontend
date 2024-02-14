import { useState } from "react";
import Lottie from 'react-lottie';
import bulbAnimation from "../pages/lotties/bulb-animation.json"
import musicAnimation from "../pages/lotties/media-animation.json"
import temperatureAnimation from "../pages/lotties/temperature-animation.json"
import cctvAnimation from "../pages/lotties/cctv-animation.json"
import securityAnimation from "../pages/lotties/security-animation.json"
import curtainAnimation from "../pages/lotties/curtain-animation.json"

const AutomateHome = () => {
    const homeTypes = [
        "/default-home.png",
        "/home-bulb-img.png",
        "/home-music-img.png",
        "/home-temperature-img.png",
        "/default-home.png",
        "/home-curtain-img.png"
    ]

    // this could be from 0-5 
    // 0 - default state
    // 1 - bulb animation 
    // 2 - music animation
    // 3 - temperature animation 
    // 4 - security animation 
    // 5 - curtain animation 
    const [activeAnimation, setActiveAnimation] = useState(0)


    const bulbOptions = {
        loop: true,
        autoplay: true,
        animationData: bulbAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
        },
    };
    const musicOptions = {
        loop: true,
        autoplay: true,
        animationData: musicAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
        },
    };
    const temperatureOptions = {
        loop: true,
        autoplay: true,
        animationData: temperatureAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
        },
    };
    const cctvOptions = {
        loop: true,
        autoplay: true,
        animationData: cctvAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
        },
    };
    const securityOptions = {
        loop: true,
        autoplay: true,
        animationData: securityAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
        },
    };
    const curtainOptions = {
        loop: true,
        autoplay: true,
        animationData: curtainAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
        },
    };

    const guthen = 'Guthen Bloots Personal Use';
    return (
        <div className="lg:min-h-[100vh] pt-[3rem] flex  flex-col-reverse lg:flex-row lg:justify-center items-center lg:px-[10%]">
            {/* mobile functionality wrapper */}
            <div className="relative flex flex-col tablet:h-[100vh] h-[60vh] w-[80%] lg:w-[40%]">
                <div data-aos="fade-up" className="lg:h-[20vh] flex flex-col justify-end items-center lg:items-start lg:pl-[10%] desktop:-mb-8">
                    <p style={{ fontFamily: `${guthen}` }} className="text-[4rem] leading-[3rem]">Control Your</p>
                    <p style={{ fontFamily: `${guthen}` }} className="text-[4rem] leading-[3rem] text-blue-700">Home</p>
                </div>
                <div data-aos="fade-up" className="lg:h-[600px] h-[100%] overflow-hidden lg:w-[25vw] relative">
                    <img className="hidden lg:w-[25vw] lg:block absolute h-[100%] object-contain" src="/home-component-phone.png" alt="..." />
                    <div className="absolute lg:right-[9vw] lg:bottom-[20%] top-[16%] lg:left-[4vw]">
                        <div className="-mt-[1.5rem] lg:mt-0 flex flex-col justify-center items-center h-[30%]">
                            <img className="hidden lg:block object-contain w-[20%] mt-2" src="/logo.png" alt="" />
                            <p className="font-bold lg:leading-[.8rem] text-[1rem] leading-[1rem] lg:text-[.8rem] mt-2">Syncrow</p>
                            <p className="font-bold lg:leading-[.8rem] text-[1rem] leading-[1rem] lg:text-[.8rem] pt-1">Home Automation</p>
                        </div>
                        <div className="h-[70%] flex justify-center items-center flex-wrap">
                            <img onClick={() => { activeAnimation !== 1 ? setActiveAnimation(1) : setActiveAnimation(0) }} className={`cursor-pointer object-contain my-[.5rem] lg:my-0 w-[22%] lg:w-[4vw] mx-[10%] lg:mx-[5%] filter grayscale hover:grayscale-[0.3] ${activeAnimation === 1 ? 'filter-none' : ''}`} src="/mobile-bulb-icon.png" alt="" />
                            <img onClick={() => { activeAnimation !== 2 ? setActiveAnimation(2) : setActiveAnimation(0) }} className={`cursor-pointer object-contain my-[.5rem] lg:my-0 w-[22%] lg:w-[4vw] mx-[10%] lg:mx-[5%] filter grayscale hover:grayscale-[0.3] ${activeAnimation === 2 ? 'filter-none' : ''}`} src="/mobile-music-icon.png" alt="" />
                            <img onClick={() => { activeAnimation !== 3 ? setActiveAnimation(3) : setActiveAnimation(0) }} className={`cursor-pointer object-contain my-[.5rem] lg:my-0 w-[22%] lg:w-[4vw] mx-[10%] lg:mx-[5%] filter grayscale hover:grayscale-[0.3] ${activeAnimation === 3 ? 'filter-none' : ''}`} src="/mobile-temperature-icon.png" alt="" />
                            <img onClick={() => { activeAnimation !== 4 ? setActiveAnimation(4) : setActiveAnimation(0) }} className={`cursor-pointer object-contain my-[.5rem] lg:my-0 w-[22%] lg:w-[4vw] mx-[10%] lg:mx-[5%] filter grayscale hover:grayscale-[0.3] ${activeAnimation === 4 ? 'filter-none' : ''}`} src="/mobile-security-icon.png" alt="" />
                            <img onClick={() => { activeAnimation !== 5 ? setActiveAnimation(5) : setActiveAnimation(0) }} className={`cursor-pointer object-contain my-[.5rem] lg:my-0 w-[22%] lg:w-[4vw] mx-[10%] lg:mx-[5%] filter grayscale hover:grayscale-[0.3] ${activeAnimation === 5 ? 'filter-none' : ''}`} src="/mobile-curtain-icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* house wrapper  */}
            <div data-aos="fade-up" className="relative w-[80%] lg:w-[60%] ">
                <img className="block" src={homeTypes[activeAnimation]} alt="" />
                {/* <img className="block lg:hidden" src={"/default-home.png"} alt="" /> */}
                <div className="block">

                    {
                        activeAnimation === 1
                        &&
                        <div className="bg-white shadow-md rounded-[50%] absolute w-[5rem] top-[15%] left-[5%] h-[5rem]">
                            <Lottie options={bulbOptions} />
                        </div>
                    }
                    {
                        activeAnimation === 2
                        &&
                        <div className="bg-white shadow-md rounded-[50%] absolute w-[5rem] top-[28%] right-[9%] h-[5rem]">
                            <Lottie options={musicOptions} />
                        </div>
                    }
                    {
                        activeAnimation === 3
                        &&

                        <div className="bg-white shadow-md rounded-[50%] absolute w-[4.5rem] top-[14%] right-[28%] h-[4.5rem]">
                            <Lottie options={temperatureOptions} />
                        </div>
                    }
                    {
                        activeAnimation === 4
                        &&
                        <>
                            <div className="bg-white shadow-md rounded-[50%] p-[.6rem] absolute w-[5rem] top-[52%] right-[37%] h-[5rem]">
                                <Lottie options={securityOptions} />
                            </div>
                            <div className="bg-white shadow-md rounded-[50%] absolute w-[5rem] p-[.6rem] top-[33%] right-[17%] h-[5rem]">
                                <Lottie options={cctvOptions} />
                            </div>
                        </>
                    }

                    {
                        activeAnimation === 5
                        &&

                        <div className="bg-white shadow-md rounded-[50%] absolute w-[6rem] p-[.6rem] top-[15%] right-[32%] h-[6rem]">
                            <Lottie options={curtainOptions} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AutomateHome;