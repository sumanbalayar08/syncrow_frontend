import React from 'react'
import Navbar from "../../components/header"
import Footer from "../../components/footer"

function thankyou() {
  return (
      <div>
        <Navbar />
        <div className="flex laptop:flex-row flex-col pt-28 tablet:pt-44 tablet:px-20 px-8 mb-10">
        <div className="flex-1 items-center flex flex-col justify-center laptop:-ml-20">
            <h1
              className="laptop:text-6xl text-5xl desktop:text-7xl font-normal text-default w-5/6 tracking-wide capitalize text-center"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}
            >
              Our team of experts will get in touch with you soon.
            </h1>
          
          </div>
          <div className="flex-1 bg-gray-300 flex items-center justify-center laptop:mb-0 mb-10">
                <h1 className="text-black font-[aftika-bold] text-xl py-36 px-8 laptop:py-44 text-center">Thankyou for your submission.</h1>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default thankyou