import React, { useState, useEffect } from 'react';


import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";


function Progress(props) {
  const [w, setW] = useState('w-0');

  var percentage = 0;
  useEffect(() => {
    if (props.active === 2) {
      setW(35)
    } else if (props.active === 3) {
      setW(35)
    } else if (props.active === 4) {
      setW(68)
    } else if (props.active === 6) {
      setW(100)
    } else {
      setW(0)
    }
  }, [props.active]);
  return (
    <div className='relative top-16'>
      {/* <div className='laptop:w-101 desktop:w-102 laptop:h-7 border-dashed border border-slate-500 rounded-3xl mx-auto'>
        <div className='w-full h-full '>
          <div className='grid grid-cols-4 justify-between items-center grid-rows-1 laptop:w-98 desktop:w-102'>

            <div className='rounded-full bg-default relative h-6 w-6 bottom-0 left-0'></div>
            <div className='rounded-full bg-default relative h-6 w-6 bottom-0 left-12'></div>
            <div className='rounded-full bg-default h-6 w-6 relative bottom-0 left-20'></div>
            <div className='rounded-full bg-default h-6 w-6 relative bottom-0 left-[126px]'></div>
          </div>
        </div>
        <div
          className={`${w} h-7 -mt-7 left-1 bg-default rounded-3xl relative`}
        ></div>
      </div> */}
      <ProgressBar
        percent={w}
        filledBackground="#023DFE"
        height={20}
      >
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div
              className="w-[20px] bg-default ml-[20px] h-[20px]  rounded-xl"
            >

            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div
              className="w-[20px] bg-default h-[20px]  rounded-xl"
            >

            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div
              className="w-[20px] bg-default h-[20px]  rounded-xl"
            >

            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div
              className="w-[20px] bg-default mr-[20px] h-[20px]  rounded-xl"
            >

            </div>
          )}
        </Step>
      </ProgressBar>
      <div className='laptop:w-[30rem] desktop:w-104 flex justify-between my-3 px-[0rem] laptop:text-base desktop:text-xl font-bold mx-auto'>
        <span className="">Type</span>
        <span className="pl-[12%]">Size</span>
        <span className="pl-[12%]">Devices</span>
        <span className="">Installation</span>
      </div>
    </div>
  );
}

export default Progress;
