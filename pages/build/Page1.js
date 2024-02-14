import React, { useState } from "react";
import Progress from "../../components/progress";
import { useRouter } from "next/router"

function Page1({ active, setActive, apartment, setApartment, villa, setVilla, office, setOffice, setType }) {

  const [firstBoxHover, setFirstBoxHover] = useState(false);
  const [secondBoxHover, setSecondBoxHover] = useState(false);
  const [thirdBoxHover, setThirdBoxHover] = useState(false);

  const router = useRouter()

  const handleApartmentClick = () => {

    setApartment(!apartment)
    setVilla(false);
    setOffice(false);
  }

  const handleVillaClick = () => {
    setVilla(!villa);
    setOffice(false);
    setApartment(false);
  }

  const handleOfficeClick = () => {
    setOffice(!office);
    setVilla(false);
    setApartment(false);
  }

  return (
    <>
      <div className="grid grid-cols-1 tablet:grid-cols-3 px-10 items-center pt-44 gap-4 w-full justify-between" >
        <div onClick={() => {
          handleApartmentClick();
          setType("apartment");
          if (!apartment) {
            setActive(2);
            router.push("/build?page=size")
          }
        }} className={`flex justify-between items-center  rounded-xl h-60 extraSmall:h-80   relative border-2 border-default text-default ${firstBoxHover ? 'bg-default text-white' : ''} ${apartment ? 'bg-default text-white' : ''}`} onMouseOver={() => setFirstBoxHover(true)} onMouseOut={() => setFirstBoxHover(false)} >
          <div className={`w-4 h-4 bg-default rounded-full top-4 left-4 absolute ${firstBoxHover ? 'bg-white' : ''} ${apartment ? 'bg-white' : ''}`}></div>
          <div className="flex items-center justify-center mx-auto">
            <h1 className={`${apartment ? 'text-white' : ''} ${firstBoxHover ? 'text-white' : ''} text-xl uppercase font-[aftika-semibold]`}>
              Apartment
            </h1>
          </div>
        </div>

        <div onClick={() => {
          handleVillaClick();
          setType("villa");
          if (!villa) {
            setActive(2);
            router.push("/build?page=size")
          }
        }} className={`flex justify-between items-center   rounded-xl h-60 extraSmall:h-80 text-default border-2 border-default relative ${secondBoxHover ? 'bg-default text-white' : ''} ${villa ? 'bg-default text-white' : ''}`} onMouseOver={() => setSecondBoxHover(true)} onMouseOut={() => setSecondBoxHover(false)} >
          <div className={`w-4 h-4 bg-default ${secondBoxHover ? 'bg-white' : ''} ${villa ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
          <div className="flex items-center justify-center mx-auto">
            <h1 className={`${villa ? 'text-white' : ''} ${secondBoxHover ? 'text-white' : ''} uppercase text-xl font-[aftika-semibold]`}>
              Villa
            </h1>
          </div>
        </div>

        <div onClick={() => {
          handleOfficeClick();
          setType("office");
          if (!office) {
            setActive(2);
            router.push("/build?page=size")
          }
        }} className={`flex justify-between items-center rounded-xl h-60 extraSmall:h-80 relative text-default border-2 border-default ${thirdBoxHover ? 'bg-default text-white' : ''} ${office ? 'bg-default text-white' : ''} `} onMouseOver={() => setThirdBoxHover(true)} onMouseOut={() => setThirdBoxHover(false)}>
          <div className={`w-4 h-4 bg-default ${thirdBoxHover ? 'bg-white' : ''} ${office ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`}></div>
          <div className={`${office ? 'text-white' : ''} ${thirdBoxHover ? 'text-white' : ''} flex items-center justify-center mx-auto`}>
            <h1 className="uppercase text-xl font-[aftika-semibold]">
              Office
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center laptop:justify-between items-center px-10 mb-28">
        <div className="laptop:flex hidden">
          <Progress active={active} />
        </div>
        <div className="mt-10 ">
          {/* <button
            className="bg-default rounded-xl py-2 px-20 text-white"
            onClick={() => setActive(2)}
          >
            Next
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Page1;
