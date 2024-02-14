import React, { useState } from 'react'

import { useRouter } from "next/router"
function Page1({ active, setActive, setBhk }) {
  const router = useRouter();
  const guthen = 'Guthen Bloots Personal Use';
  const [bhk1click, setBhk1click] = useState(false);
  const [bhk2click, setBhk2click] = useState(false);
  const [bhk3click, setBhk3click] = useState(false);
  const [bhk1, setBhk1] = useState(false);
  const [bhk2, setBhk2] = useState(false);
  const [bhk3, setBhk3] = useState(false);
  const handleBhk1 = () => {
    setBhk1(!bhk1);
    setBhk2(false);
    setBhk3(false);
  }

  const handleBhk2 = () => {
    setBhk2(!bhk2);
    setBhk1(false);
    setBhk3(false);
  }

  const handleBhk3 = () => {
    setBhk3(!bhk3);
    setBhk1(false);
    setBhk2(false);
  }
  const handleBhk1click = () => {
    setBhk1click(!bhk1click);
    setBhk2click(false);
    setBhk3click(false);
  }

  const handleBhk2click = () => {
    setBhk2click(!bhk2click);
    setBhk1click(false);
    setBhk3click(false);
  }

  const handleBhk3click = () => {
    setBhk3click(!bhk3click);
    setBhk1click(false);
    setBhk2click(false);
  }

  return (
    <div className="pt-36 tablet:px-10 px-8">
      <div>
        <h1 className='text-7xl desktop:text-8xl text-default font-thin'
          style={{ fontFamily: `${guthen}` }}>Bundles</h1>
        <h2 className="text-xl tracking-wide leading-none -mt-6 font-[aftika-bold]">Select Type</h2>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-3 pt-12 items-center gap-4 w-full justify-between" >
        <div onClick={() => {
          handleBhk1click();
          setBhk("1 Bedroom");
          setActive(2);
          router.push("/bundles?page=service")
        }} className={`flex justify-between items-center  rounded-xl h-60 extraSmall:h-80   relative border-2 border-default text-default ${bhk1 ? 'bg-default text-white' : ''} ${bhk1click ? 'bg-default text-white' : ''} `} onMouseOver={() => setBhk1(true)} onMouseOut={() => setBhk1(false)} >
          <div className={`w-4 h-4 bg-default rounded-full top-4 left-4 absolute ${bhk1 ? 'bg-white' : ''} `}></div>
          <div className="flex items-center justify-center mx-auto">
            <h2 className={` ${bhk1 ? 'text-white' : ''} ${bhk1click ? 'text-white' : ''} text-xl uppercase font-[aftika-semibold]`}>
              1 Bedroom
            </h2>
          </div>
        </div>

        <div onClick={() => {
          handleBhk2click();
          setBhk("2 Bedroom");
          setActive(2);
          router.push("/bundles?page=service")
        }} className={`flex justify-between items-center   rounded-xl h-60 extraSmall:h-80 text-default border-2 border-default relative ${bhk2 ? 'bg-default text-white' : ''} ${bhk2click ? 'bg-default text-white' : ''} `} onMouseOver={() => setBhk2(true)} onMouseOut={() => setBhk2(false)} >
          <div className={`w-4 h-4 bg-default ${bhk2 ? 'bg-white' : ''} ${bhk2click ? 'bg-white' : ''}  rounded-full top-4 left-4 absolute`}></div>
          <div className="flex items-center justify-center mx-auto">
            <h2 className={` ${bhk2 ? 'text-white' : ''} ${bhk2click ? 'text-white' : ''} text-xl uppercase font-[aftika-semibold]`}>
              2 Bedroom
            </h2>
          </div>
        </div>

        <div onClick={() => {
          handleBhk3click();
          setBhk("3 Bedroom");
          setActive(2);
          router.push("/bundles?page=service")
        }} className={`flex justify-between items-center rounded-xl h-60 extraSmall:h-80 relative text-default border-2 border-default ${bhk3 ? 'bg-default text-white' : ''} ${bhk3click ? 'bg-default text-white' : ''} `} onMouseOver={() => setBhk3(true)} onMouseOut={() => setBhk3(false)}>
          <div className={`w-4 h-4 bg-default ${bhk3 ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
          <div className={` ${bhk3 ? 'text-white' : ''} ${bhk3click ? 'text-white' : ''} text-xl flex items-center justify-center mx-auto`}>
            <h2 className="uppercase font-[aftika-semibold]">
              3 Bedroom
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center pt-6 pb-10">
        {/* <button onClick={() => setActive(2)} className="text-white uppercase bg-gray-400 rounded-lg py-2 px-20">Next</button> */}
      </div>
    </div>
  )
}

export default Page1