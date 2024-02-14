import React, { useState } from "react";
import lightingkAnimation from "../../pages/lotties/bulb-animation.json";
import doorlockAnimation from "../../pages/lotties/doorlock.json";
import interactiveHubAnimation from "../../pages/lotties/interactiveHub.json";
import curtainsAnimation from "../../pages/lotties/curtain.json";
import mediaAnimation from "../../pages/lotties/media.json";
import alarmAnimation from "../../pages/lotties/alarm.json";
import airConditionAnimation from "../../pages/lotties/airCondition.json";
import heaterAnimation from "../../pages/lotties/heater.json";
import messageAnimation from "../../pages/lotties/icon1.json";
import cameraAnimation from "../../pages/lotties/cctv-animation.json";
import energyAnimation from "../../pages/lotties/energy-saving.json";
import Lottie from "react-lottie";

import { useRouter } from "next/router"
function SmartHome({ active, setActive }) {
  const router = useRouter();

  const doorlockOptions = {
    loop: true,
    autoplay: true,
    animationData: doorlockAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const interactiveHubOptions = {
    loop: true,
    autoplay: true,
    animationData: interactiveHubAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const curtainsOptions = {
    loop: true,
    autoplay: true,
    animationData: curtainsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mediaOptions = {
    loop: true,
    autoplay: true,
    animationData: mediaAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const messageOptions = {
    loop: true,
    autoplay: true,
    animationData: messageAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const heaterOptions = {
    loop: true,
    autoplay: true,
    animationData: heaterAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const alarmOptions = {
    loop: true,
    autoplay: true,
    animationData: alarmAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const airConditionOptions = {
    loop: true,
    autoplay: true,
    animationData: airConditionAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lightingOptions = {
    loop: true,
    autoplay: true,
    animationData: lightingkAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const cameraOptions = {
    loop: true,
    autoplay: true,
    animationData: cameraAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const energyOptions = {
    loop: true,
    autoplay: true,
    animationData: energyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [tick1, setTick1] = useState(true);
  const [tick2, setTick2] = useState(true);
  const [tick3, setTick3] = useState(true);
  const [tick4, setTick4] = useState(true);
  const [tick5, setTick5] = useState(true);
  const [tick6, setTick6] = useState(true);
  const [tick7, setTick7] = useState(true);
  const [tick8, setTick8] = useState(true);
  const [tick9, setTick9] = useState(true);
  const [tick10, setTick10] = useState(true);
  const guthen = 'Guthen Bloots Personal Use';
  return (
    <div className="flex flex-col pt-32">
      <div className="tablet:px-10 px-8 mb-12" >
        <h1 className='text-7xl desktop:text-8xl text-default font-thin'
          style={{ fontFamily: `${guthen}` }}>Bundles</h1>
        <h2 className="text-xl tracking-wide leading-none -mt-6 font-[aftika-bold]">Complete Smart Home Experience</h2>
      </div>
      <div className="grid grid-cols-1 laptop:grid-cols-3 justify-around items-center px-10 gap-4">
        <div onClick={() => router.push("/smart-home-automation/convenience#smartLighting")} className="bg-default  rounded-xl  flex flex-col items-center h-80 extraSmall:h-96  justify-center relative">
          {/* <div className="w-8 h-8 rounded-lg bg-white absolute top-4 left-4">
          {tick1?<h1 className="text-xl text-default font-[aftika-bold] pl-2 pt-0">✓</h1>:''}
        </div> */}
          <Lottie
            options={lightingOptions}
            height={"200px"}
            width={"200px"}
            className="z-10 middle:w-28 w-32"
          />
          <h1 className="text-xl w-10/12 text-center  uppercase font-[aftika-bold] text-white tracking-widest">
            Lightning
          </h1>
          {/* <button onClick={()=>setTick1(!tick1)} className="bg-white text-default rounded-lg py-2 text-tiny px-14 uppercase mt-2">
          {tick1?'Unselect':'Select'}
          </button> */}
        </div>
        <div onClick={() => router.push("/smart-home-automation/accessibility#multimedia")} className="bg-default   rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative">
          {/* <div className="w-8 h-8 rounded-lg bg-white absolute top-4 left-4">
        {tick2?<h1 className="text-xl text-default font-[aftika-bold] pl-2 pt-0">✓</h1>:''}
        </div> */}
          <Lottie
            options={mediaOptions}
            height={"200px"}
            width={"200px"}
            className="z-10 middle:w-28 w-32"
          />
          <h1 className="text-xl w-10/12 text-center  uppercase font-[aftika-bold] text-white tracking-widest">
            Media
          </h1>
          {/* <button onClick={()=>setTick2(!tick2)} className="bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2">
          {tick2?'Unselect':'Select'}
          </button> */}
        </div>
        <div onClick={() => router.push("/smart-home-automation/convenience#climateControl")} className="bg-default  rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative">
          {/* <div className="w-8 h-8 rounded-lg bg-white absolute top-4 left-4">
        {tick3?<h1 className="text-xl text-default font-[aftika-bold] pl-2 pt-0">✓</h1>:''}
        </div> */}
          <Lottie
            options={airConditionOptions}
            height={"200px"}
            width={"200px"}
            className="z-10 middle:w-28 w-32"
          />
          <h1 className="text-xl w-10/12 text-center  uppercase font-[aftika-bold] text-white tracking-widest">
            Air Conditioner
          </h1>
          {/* <button onClick={()=>setTick3(!tick3)} className="bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2">
          {tick3?'Unselect':'Select'}
          </button> */}
        </div>
        <div onClick={() => router.push("/smart-home-automation/security#protection")} className="bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative">
          {/* <div className="w-8 h-8 rounded-lg bg-white absolute top-4 left-4">
        {tick4?<h1 className="text-xl text-default font-[aftika-bold] pl-2 pt-0">✓</h1>:''}
        </div> */}
          <Lottie
            options={alarmOptions}
            height={"200px"}
            width={"200px"}
            className="z-10 middle:w-44 w-32"
          />
          <h1 className="text-xl w-10/12 text-center  uppercase font-[aftika-bold] text-white tracking-widest">
            Alarm
          </h1>
          {/* <button onClick={()=>setTick4(!tick4)} className="bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2">
          {tick4?'Unselect':'Select'}
          </button> */}
        </div>
        <div onClick={() => router.push("/smart-home-automation/convenience#homeConvenience")} className="bg-default   rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative">
          {/* <div className="w-8 h-8 rounded-lg bg-white absolute top-4 left-4">
        {tick5?<h1 className="text-xl text-default font-[aftika-bold] pl-2 pt-0">✓</h1>:''}
        </div> */}
          <Lottie
            options={curtainsOptions}
            height={"200px"}
            width={"200px"}
            className="z-10 middle:w-28 w-32"
          />
          <h1 className="text-xl w-10/12 text-center  uppercase font-[aftika-bold] text-white tracking-widest">
            Curtains
          </h1>
          {/* <button onClick={()=>setTick5(!tick5)} className="bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2">
          {tick5?'Unselect':'Select'}
          </button> */}
        </div>
        <div onClick={() => router.push("/smart-home-automation/accessibility#homeAccessibility")} className=" bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative">
          {/* <div className="w-8 h-8 rounded-lg bg-white absolute top-4 left-4">
        {tick6?<h1 className="text-xl text-default font-[aftika-bold] pl-2 pt-0">✓</h1>:''}
        </div> */}
          <Lottie
            options={interactiveHubOptions}
            height={"200px"}
            width={"200px"}
            className="z-10 middle:w-28 w-32"
          />
          <h1 className="text-xl w-10/12 text-center  uppercase font-[aftika-bold] text-white tracking-widest">
            Interactive Hub
          </h1>
          {/* <button onClick={()=>setTick6(!tick6)} className="bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2">
          {tick6?'Unselect':'Select'}
          </button> */}
        </div>
        <div onClick={() => router.push("/smart-home-automation/security#doorLock")} className="bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative">
          {/* <div className="w-8 h-8 rounded-lg bg-white absolute top-4 left-4">
        {tick7?<h1 className="text-xl text-default font-[aftika-bold] pl-2 pt-0">✓</h1>:''}
        </div> */}
          <Lottie
            options={doorlockOptions}
            height={"200px"}
            width={"120px"}
            className="z-10 middle:w-28 w-32"
          />
          <h1 className="text-xl w-10/12 text-center  uppercase font-[aftika-bold] text-white tracking-widest">
            Doorlock
          </h1>
          {/* <button onClick={()=>setTick7(!tick7)} className="bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2">
          {tick7?'Unselect':'Select'}
          </button> */}
        </div>
        <div onClick={() => router.push("/smart-home-automation/convenience#heater")} className="  bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative">
          {/* <div className="w-8 h-8 rounded-lg bg-white absolute top-4 left-4">
        {tick8?<h1 className="text-xl text-default font-[aftika-bold] pl-2 pt-0">✓</h1>:''}
        </div> */}
          <Lottie
            options={heaterOptions}
            height={"200px"}
            width={"200px"}
            className="z-10 middle:w-28 w-32"
          />
		  
          <h1 className="text-xl w-10/12 text-center  uppercase font-[aftika-bold] text-white tracking-widest">
            Heater
          </h1>
          {/* <button  onClick={()=>setTick8(!tick8)} className="bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2">
          {tick8?'Unselect':'Select'}
          </button> */}
        </div>
        <div onClick={() => router.push("/smart-home-automation/security#monitor")} className="bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative">
          {/* <div className="w-8 h-8 rounded-lg bg-white absolute top-4 left-4">
        {tick9?<h1 className="text-xl text-default font-[aftika-bold] pl-2 pt-0">✓</h1>:''}
        </div> */}
          <Lottie
            options={cameraOptions}
            height={"200px"}
            width={"200px"}
            className="z-10 middle:w-28 w-32"
          />
          <h1 className="text-xl w-10/12 text-center  uppercase font-[aftika-bold] text-white tracking-widest">
            Camera
          </h1>
          {/* <button onClick={()=>setTick9(!tick9)} className="bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2">
          {tick9?'Unselect':'Select'}
          </button> */}
        </div>
        <div onClick={() => router.push("/efficiency")} className=" bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative">
          {/* <div className="w-8 h-8 rounded-lg bg-white absolute top-4 left-4">
        {tick10?<h1 className="text-xl text-default font-[aftika-bold] pl-2 pt-0">✓</h1>:''}
        </div> */}
          <Lottie
            options={energyOptions}
            height={"200px"}
            width={"200px"}
            className="z-10 middle:w-28 w-32"
          />
          <h1 className="text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest">
            Energy Saving & Monitoring
          </h1>
          {/* <button onClick={()=>setTick10(!tick10)} className="bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2">
            {tick10?'Unselect':'Select'}
          </button> */}
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-center laptop:justify-end items-center px-10 mb-28">
        <div className="mt-10 flex small:flex-row flex-col gap-6 ">
          <button
            className="bg-gray-400 rounded-xl py-2 px-20 text-white "
            onClick={() => router.back()}
          >
            Back
          </button>
          <button
            className="bg-gray-400 rounded-xl py-2 px-20 text-white"
            onClick={() => router.push("/bundles?page=installation")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmartHome;
