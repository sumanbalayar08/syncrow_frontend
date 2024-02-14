import React, { useState } from "react";
import Progress from "../../components/progress";
import { useRouter } from "next/router"

function Page2({ active, setActive, setType }) {
  const router = useRouter()

  const [bed1Hover, setBed1Hover] = useState(false);
  const [bed2Hover, setBed2Hover] = useState(false);
  const [bed3Hover, setBed3Hover] = useState(false);
  const [bed4Hover, setBed4Hover] = useState(false);

  const [bed1, setBed1] = useState(false);
  const [bed2, setBed2] = useState(false);
  const [bed3, setBed3] = useState(false);
  const [bed4, setBed4] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 laptop:grid-cols-4 px-10 items-center pt-44 gap-4 w-full justify-between">
        <div onClick={() => {
          setBed1(!bed1)
          setType("1 Bedroom Apartment");
          setActive(3);
          router.push("/build?page=devices")
        }} className={`flex border-2 border-default text-default justify-between items-center ${bed1Hover ? 'bg-default text-white' : ''} ${bed1 ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`} onMouseOver={() => setBed1Hover(true)} onMouseOut={() => setBed1Hover(false)}>
          <div className={`w-4 h-4 bg-default ${bed1 ? 'bg-white' : ''} ${bed1Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>

          <div className="flex items-center justify-center mx-auto">
            <h1 className={`${bed1 ? 'text-white' : ''} ${bed1Hover ? 'text-white' : ''}  text-xl uppercase font-[aftika-semibold]`}>
              1 Bedroom Apartment
            </h1>
          </div>
        </div>

        <div onClick={() => {
          setBed2(!bed2)
          setType("2 Bedroom Apartment");
          setActive(3);
          router.push("/build?page=devices")
        }} className={`flex border-2 border-default text-default justify-between items-center ${bed2 ? 'bg-default text-white' : ''} ${bed2Hover ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`} onMouseOver={() => setBed2Hover(true)} onMouseOut={() => setBed2Hover(false)}>
          <div className={`w-4 h-4 bg-default ${bed2 ? 'bg-white' : ''} ${bed2Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
          <div className="flex items-center justify-center mx-auto">
            <h1 className={`${bed2 ? 'text-white' : ''} ${bed2Hover ? 'text-white' : ''} text-xl uppercase font-[aftika-semibold]`}>
              2 Bedroom Apartment
            </h1>
          </div>
        </div>

        <div
          onClick={() => {
            setBed3(!bed3)
            setType("3 Bedroom Apartment");
            setActive(3);
            router.push("/build?page=devices")
          }} className={`flex border-2 border-default text-default justify-between items-center ${bed3 ? 'bg-default text-white' : ''} ${bed3Hover ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`} onMouseOver={() => setBed3Hover(true)} onMouseOut={() => setBed3Hover(false)}>
          <div className={`w-4 h-4 bg-default ${bed3 ? 'bg-white' : ''} ${bed3Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
          <div className="flex items-center justify-center mx-auto">
            <h1 className={`${bed3 ? 'text-white' : ''} ${bed3Hover ? 'text-white' : ''}  text-xl uppercase font-[aftika-semibold]`}>
              3 Bedroom Apartment
            </h1>
          </div>
        </div>

        <div onClick={() => {
          setBed4(!bed4)
          setType("4 Bedroom Apartment");
          setActive(3);
          router.push("/build?page=devices")
        }} className={`flex border-2 border-default text-default justify-between items-center ${bed4 ? 'bg-default text-white' : ''} ${bed4Hover ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`} onMouseOver={() => setBed4Hover(true)} onMouseOut={() => setBed4Hover(false)}>
          <div className={`w-4 h-4 bg-default ${bed4 ? 'bg-white' : ''} ${bed4Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
          <div className="flex items-center justify-center mx-auto">
            <h1 className={`${bed4 ? 'text-white' : ''} ${bed4Hover ? 'text-white' : ''}  text-xl uppercase font-[aftika-semibold]`}>
              4 Bedroom Apartment
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center laptop:justify-between items-center px-10 mb-28">
        <div className="laptop:flex hidden">
          <Progress active={active} />
        </div>
        <div className="mt-10 flex small:flex-row flex-col gap-4 justify-center items-center">
          <button
            className="bg-gray-400 rounded-xl py-2 px-20 text-white small:mr-6"
            onClick={() => { router.back() }}
          >
            Back
          </button>
          {/* <button
            className="bg-default rounded-xl py-2 px-20 text-white"
            onClick={() => setActive(3)}
          >
            Next
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Page2;
