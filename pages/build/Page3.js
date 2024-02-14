import React, { useState } from "react";
import Progress from "../../components/progress";
import { useRouter } from "next/router"

function Page3({ active, setActive, setType }) {
  const router = useRouter()
  const [bed2Hover, setBed2Hover] = useState(false);
  const [bed3Hover, setBed3Hover] = useState(false);
  const [bed4Hover, setBed4Hover] = useState(false);
  const [bed5Hover, setBed5Hover] = useState(false);
  const [bed6Hover, setBed6Hover] = useState(false);
  const [bed7Hover, setBed7Hover] = useState(false);

  const [bed2, setBed2] = useState(false);
  const [bed3, setBed3] = useState(false);
  const [bed4, setBed4] = useState(false);
  const [bed5, setBed5] = useState(false);
  const [bed6, setBed6] = useState(false);
  const [bed7, setBed7] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 laptop:grid-cols-3 px-10 items-center pt-44 gap-4 w-full justify-between">
        <div onClick={() => {
          setBed2(!bed2);
          setType("2 Bedroom Villa");
          setActive(3);
          router.push("/build?page=devices")
        }} className={`flex text-default border-2 border-default ${bed2 ? 'bg-default text-white' : ''} justify-between items-center ${bed2Hover ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`} onMouseOver={() => setBed2Hover(true)} onMouseOut={() => setBed2Hover(false)}>
          <div className={`w-4 h-4 bg-default ${bed2 ? 'bg-white' : ''} ${bed2Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
          <div className="flex items-center justify-center mx-auto">
            <h1 className={`${bed2 ? 'text-white' : ''} ${bed2Hover ? 'text-white' : ''}  text-xl uppercase font-[aftika-semibold]`}>
              2 Bedroom Villa
            </h1>
          </div>
        </div>

        <div onClick={() => {
          setBed3(!bed3);
          setType("3 Bedroom Villa");
          setActive(3);
          router.push("/build?page=devices")
        }} className={`flex text-default border-2 border-default ${bed3 ? 'bg-default text-white' : ''} justify-between items-center ${bed3Hover ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`} onMouseOver={() => setBed3Hover(true)} onMouseOut={() => setBed3Hover(false)}>
          <div className={`w-4 h-4 bg-default ${bed3 ? 'bg-white' : ''} ${bed3Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
          <div className="flex items-center justify-center mx-auto">
            <h1 className={`${bed3 ? 'text-white' : ''} ${bed3Hover ? 'text-white' : ''}  text-xl uppercase font-[aftika-semibold]`}>
              3 Bedroom Villa
            </h1>
          </div>
        </div>

        <div onClick={() => {
          setBed4(!bed4);
          setType("4 Bedroom Villa");
          setActive(3);
          router.push("/build?page=devices")
        }} className={`flex text-default border-2 border-default ${bed4 ? 'bg-default text-white' : ''} justify-between items-center ${bed4Hover ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`} onMouseOver={() => setBed4Hover(true)} onMouseOut={() => setBed4Hover(false)}>
          <div className={`w-4 h-4 bg-default ${bed4 ? 'bg-white' : ''} ${bed4Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
          <div className="flex items-center justify-center mx-auto">
            <h1 className={`${bed4 ? 'text-white' : ''} ${bed4Hover ? 'text-white' : ''}  text-xl uppercase font-[aftika-semibold]`}>
              4 Bedroom Villa
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 laptop:grid-cols-3 px-10 items-center pt-10 gap-4 w-full justify-between">
        <div onClick={() => {
          setBed5(!bed5);
          setType("5 Bedroom Villa");
          setActive(3);
          router.push("/build?page=devices")
        }} className={`flex text-default border-2 border-default ${bed5 ? 'bg-default text-white' : ''} justify-between items-center ${bed5Hover ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`} onMouseOver={() => setBed5Hover(true)} onMouseOut={() => setBed5Hover(false)}>
          <div className={`w-4 h-4 bg-default ${bed5 ? 'bg-white' : ''} ${bed5Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
          <div className="flex items-center justify-center mx-auto">
            <h1 className={`${bed5 ? 'text-white' : ''} ${bed5Hover ? 'text-white' : ''}  text-xl uppercase font-[aftika-semibold]`}>
              5 Bedroom Villa
            </h1>
          </div>
        </div>

        <div onClick={() => {
          setBed6(!bed6);
          setType("6 Bedroom Villa");
          setActive(3);
          router.push("/build?page=devices")
        }} className={`flex text-default border-2 border-default ${bed6 ? 'bg-default text-white' : ''} justify-between items-center ${bed6Hover ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`} onMouseOver={() => setBed6Hover(true)} onMouseOut={() => setBed6Hover(false)}>
          <div className={`w-4 h-4 bg-default ${bed6 ? 'bg-white' : ''} ${bed6Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
          <div className="flex items-center justify-center mx-auto">
            <h1 className={`${bed6 ? 'text-white' : ''} ${bed6Hover ? 'text-white' : ''}  text-xl uppercase font-[aftika-semibold]`}>
              6 Bedroom Villa
            </h1>
          </div>
        </div>

        <div onClick={() => {
          setBed7(!bed7);
          setType("7 Bedroom Villa");
          setActive(3);
          router.push("/build?page=devices")
        }} className={`flex text-default border-2 border-default justify-between items-center ${bed7 ? 'bg-default text-white' : ''} ${bed7Hover ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`} onMouseOver={() => setBed7Hover(true)} onMouseOut={() => setBed7Hover(false)}>
          <div className={`w-4 h-4 bg-default ${bed7 ? 'bg-white' : ''} ${bed7Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
          <div className="flex items-center justify-center mx-auto">
            <h1 className={`${bed7 ? 'text-white' : ''} ${bed7Hover ? 'text-white' : ''}  text-xl uppercase font-[aftika-semibold]`}>
              7 Bedroom Villa
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center laptop:justify-between items-center px-10 mb-28">
        <div className="laptop:flex hidden">
          <Progress active={active} />
        </div>
        <div className="mt-10 flex small:flex-row flex-col gap-4">
          <button
            className="bg-gray-400 rounded-xl py-2 px-20 text-white small:mr-6"
            onClick={() => router.back()}
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

export default Page3;
