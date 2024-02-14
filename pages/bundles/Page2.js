import React, { useState } from 'react'

import { useRouter } from "next/router"
function Page2({ active, setActive, convenience, setConvenience, energy, setEnergy, safety, setSafety, smartHome, setSmartHome, setType }) {
  const router = useRouter();
 
  const guthen = 'Guthen Bloots Personal Use';
  const [div1Hover, setDiv1Hover] = useState(false);
  const [div2Hover, setDiv2Hover] = useState(false);
  const [div3Hover, setDiv3Hover] = useState(false);
  const [div4Hover, setDiv4Hover] = useState(false);

  const handleDiv1 = () => {
    setDiv1Hover(!div1Hover);
    setDiv2Hover(false);
    setDiv3Hover(false);
  }

  const handleDiv2 = () => {
    setDiv2Hover(!div2Hover);
    setDiv1Hover(false);
    setDiv3Hover(false);
  }

  const handleDiv3 = () => {
    setDiv3Hover(!div3Hover);
    setDiv1Hover(false);
    setDiv2Hover(false);
  }

  const handleDiv4 = () => {
    setDiv4Hover(!div4Hover);
    setDiv1Hover(false);
    setDiv2Hover(false);
  }

  const handleConvenience = () => {
    localStorage.setItem("serviceType", 'convenience');
    setConvenience(!convenience);
    setEnergy(false);
    setSafety(false);
    setSmartHome(false);
  }

  const handleEnergy = () => {
    localStorage.setItem("serviceType", 'energy');
    setEnergy(!energy);
    setConvenience(false);
    setSafety(false);
    setSmartHome(false);

  }
  const handleSafety = () => {
    localStorage.setItem("serviceType", 'safety');
    setSafety(!safety);
    setConvenience(false);
    setEnergy(false);
    setSmartHome(false);
  }
  const handleSmartHome = () => {
    localStorage.setItem("serviceType", 'smartHome');
    setSafety(false);
    setConvenience(false);
    setEnergy(false);
    setSmartHome(!smartHome);
  }

  return (
    <div className="pt-36 tablet:px-10 px-8">
      <div>
        <h1 className='text-7xl desktop:text-8xl text-default font-thin'
          style={{ fontFamily: `${guthen}` }}>Bundles</h1>
        <h2 className="text-xl tracking-wide leading-none -mt-6 font-[aftika-bold]">Select Type</h2>
      </div>
      <div>
        <div className="grid grid-cols-1 tablet:grid-cols-3 pt-12 items-center gap-6 w-full justify-between" >
          <div onClick={() => {
            handleConvenience();
            setType('convenience');
            if (!convenience) {
              setActive(3);
              router.push("bundles?page=devices")
            }
          }} className={`flex justify-between items-center  rounded-2xl h-44 extraSmall:h-80   relative border-2 border-default text-default ${div1Hover ? 'bg-default text-white' : ''} `} onMouseOver={() => setDiv1Hover(true)} onMouseOut={() => setDiv1Hover(false)} >
            <div className={`w-4 h-4 bg-default rounded-full top-4 left-4 absolute ${div1Hover ? 'bg-white' : ''} `}></div>
            <div className="flex items-center justify-center mx-auto">
              <h1 className={` ${div1Hover ? 'text-white' : ''} text-xl uppercase font-[aftika-semibold]`}>
                Convenience
              </h1>
            </div>
          </div>

          <div onClick={() => {
            handleSafety();
            setType('safety');
            if (!safety) {
              setActive(3);
              router.push("bundles?page=devices")
            }
          }} className={`flex justify-between items-center   rounded-2xl h-44 extraSmall:h-80 text-default border-2 border-default relative ${div2Hover ? 'bg-default text-white' : ''} `} onMouseOver={() => setDiv2Hover(true)} onMouseOut={() => setDiv2Hover(false)} >
            <div className={`w-4 h-4 bg-default ${div2Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
            <div className="flex items-center justify-center mx-auto">
              <h1 className={`${div2Hover ? 'text-white' : ''} text-xl uppercase font-[aftika-semibold]`}>
                Security & Safety
              </h1>
            </div>
          </div>

          <div onClick={() => {
            handleEnergy();
            setType('energy');
            if (!energy) {
              setActive(3);
              router.push("bundles?page=devices")
            }
          }} className={`flex justify-between items-center rounded-2xl h-44 extraSmall:h-80 relative text-default border-2 border-default ${div3Hover ? 'bg-default text-white' : ''} `} onMouseOver={() => setDiv3Hover(true)} onMouseOut={() => setDiv3Hover(false)}>
            <div className={`w-4 h-4 bg-default ${div3Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
            <div className={` ${div3Hover ? 'text-white' : ''} text-xl flex items-center justify-center mx-auto`}>
              <h1 className="uppercase font-[aftika-semibold]">
                Energy Saving
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => {
        handleSmartHome();
        setType('smartHome');
        if (!smartHome) {
          setActive(3);
          router.push("bundles?page=devices")
        }
      }} className={`flex justify-between items-center rounded-2xl mt-6 h-40 tablet:h-28 extraSmall:h-80 relative text-default border-2 border-default ${div4Hover ? 'bg-default text-white' : ''} `} onMouseOver={() => setDiv4Hover(true)} onMouseOut={() => setDiv4Hover(false)}>
        <div className={`w-4 h-4 bg-default ${div4Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
        <div className={` ${div4Hover ? 'text-white' : ''} text-xl flex items-center justify-center mx-auto`}>
          <h1 className="uppercase font-[aftika-semibold] px-10 text-center">
            Complete Smart Home Experience
          </h1>
        </div>
      </div>
      <div className="flex small:flex-row flex-col gap-6 justify-end items-center pt-6 pb-10">
        <button onClick={() => router.back()} className="text-white uppercase bg-gray-400 rounded-lg py-2 px-20">Back</button>
        {/* <button onClick={() => setActive(3)} className="text-white uppercase bg-gray-400 rounded-lg py-2 px-20">Next</button> */}
      </div>
    </div>
  )
}

export default Page2