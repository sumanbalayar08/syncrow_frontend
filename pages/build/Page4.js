import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Progress from "../../components/progress";
import { useRouter } from "next/router"

function Page4({ active, setActive, setSpaces, setArea }) {
  const router = useRouter()
  const [value, setValue] = useState({ value: 1000 });
  const [value2, setValue2] = useState({ value: 5 });
  return (
    <div className="flex flex-col">
      <div className="laptop:flex hidden items-center justify-center gap-4 pt-44 px-10 ">
        <div className="flex-1 border-2 border-default rounded-xl h-80 relative flex flex-col justify-center">
          <div className="w-4 h-4 rounded-full bg-default absolute left-4 top-4 "></div>
          <div className="flex items-center justify-center -mt-10">
            <h1 className="text-default uppercase font-[aftika-semibold] text-lg">
              Area
            </h1>
          </div>
          <div className="px-20 pt-8 input-range">
            <InputRange
              maxValue={10000}
              minValue={0}
              value={value.value}
              onChange={(value) => {
                setValue({ value: value });
                setArea(value);
              }}
            />
          </div>
        </div>

        <div className="flex-1 border-2 border-default rounded-xl h-80 relative flex flex-col justify-center">
          <div className="w-4 h-4 rounded-full bg-default absolute left-4 top-4"></div>
          <div className="flex items-center justify-center -mt-10">
            <h1 className="text-default font-[aftika-semibold] text-lg">
              Number of Spaces
            </h1>
          </div>
          <div className="px-20 pt-8">
            <InputRange
              maxValue={20}
              minValue={0}
              value={value2.value}
              onChange={value => {
                setValue2({ value: value });
                setSpaces(value);
              }} />

          </div>
        </div>
      </div>

      {/* mobile responsive */}
      <div className="laptop:hidden grid grid-cols-1 pt-44 gap-32">
        <div>
          <div className="flex items-center justify-center -mt-10">
            <h1 className="text-default uppercase font-[aftika-semibold] text-lg">
              Area
            </h1>
          </div>
          <div className="px-20 pt-8 input-range">
            <InputRange
              maxValue={10000}
              minValue={0}
              value={value.value}
              onChange={(value) => setValue({ value: value })}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center -mt-10">
            <h1 className="text-default font-[aftika-semibold] text-lg">
              Number of Spaces
            </h1>
          </div>
          <div className="px-20 pt-8">
            <InputRange
              maxValue={10}
              minValue={1}
              value={value2.value}
              steps={1}
              limitMin={1}
              limitMax={100}
              onChange={value => setValue2({ value: value })}
            />
          </div>
        </div>

      </div>
      {/* mobile responsive */}

      {/* bottom part */}

      <div className="flex justify-center laptop:justify-between items-center px-10 mb-28">
        <div className="laptop:flex hidden">
          <Progress active={active} />
        </div>
        <div className="mt-20 laptop:mt-10 flex small:flex-row flex-col gap-4">
          <button
            className="bg-gray-400 rounded-xl py-2 px-20 text-white small:mr-6"
            onClick={() => router.back()}
          >
            Back
          </button>
          <button
            className="bg-default rounded-xl py-2 px-20 text-white"
            onClick={() => { setActive(3); router.push("/build?page=devices") }}
          >
            Next
          </button>
        </div>
      </div>

      {/* bottom part */}
    </div>
  );
}

export default Page4;
