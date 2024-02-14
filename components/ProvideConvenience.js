import React from "react";
import StarterBundle from "./StarterBundle";
import Lottie from "react-lottie";
import circleAnimation from "../pages/lotties/circle.json";
import Link from "next/link";

function ProvideConvenience({ data }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: circleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col relative">
      <div className="-mt-44 extraSmall:-mt-72 small:-mt-8 desktop:-mt-32 -mb-44 container px-4 md:px-24 mx-auto flex middle:flex-row flex-col-reverse">
        <div className="middle:mt-0 z-10 -mt-20 extraSmall:-mt-32 desktop:mt-36 flex-1 relative">
          <h2
            data-aos="fade-up"
            className="text-2xl middle:text-3xl font-[aftika-bold] capitalize -mb-12 middle:-mb-16 medium:-mb-20 medium:ml-24 middle:ml-20 ml-12"
          >
            We provide
          </h2>
          <h2 data-aos="fade-up">
            <span
              className="text-8xl middle:text-9xl medium:text-10xl text-default"
              style={{ fontFamily: `Guthen Bloots Personal Use` }}
            >
              Convenience
            </span>
          </h2>
          <h2
            data-aos="fade-up"
            className="text-2xl middle:text-3xl font-[aftika-bold] capitalize medium:-mt-20 middle:-mt-16 -mt-12 absolute right-0"
          >
            to your home
          </h2>
          <div data-aos="fade-up" className="flex items-end flex-col">
            <ul>
              <li className="flex middle:gap-1 gap-4 items-center text-base font-[aftika-bold] tracking-wide middle:leading-7 leading-loose">
                {" "}
                <div className="w-3 h-3 mb-1 bg-default rounded-full"></div>{" "}
                Easy Installation
              </li>
              <li className="flex  middle:gap-1 gap-4 items-center text-base font-[aftika-bold] tracking-wide middle:leading-7 leading-loose">
                {" "}
                <div className="w-3 mb-1 h-3 bg-default rounded-full"></div>
                Affordable Pricing
              </li>
              <li className="flex  middle:gap-1 gap-4 items-center text-base font-[aftika-bold] tracking-wide middle:leading-7 leading-loose">
                {" "}
                <div className="w-3 mb-1 h-3 bg-default rounded-full"></div>Free
                Consultation
              </li>
            </ul>
            <Link data-aos="fade-up" href="/contact">
              <a>
                <button className="bg-default z-40 rounded-lg text-white font-[aftika-extra-light] tracking-wide text-tiny py-2 middle:px-6 px-10 mt-4">
                  Ask an expert
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div data-aos="fade-up" className="relative">
          {/* img */}
          <div className="relative mt-0 middle:-mt-36 medium:-mt-20 medium:-ml-72 middle:-ml-60 -ml-10">
            <div className="tablet:block hidden">
              <Lottie
                className="absolute top-0 "
                options={defaultOptions}
                height={"90vh"}
                width={"70vw"}
              />
            </div>
            <div className="tablet:hidden block">
              <Lottie
                className=" absolute top-0 "
                options={defaultOptions}
                height={"90vh"}
                width={"100vw"}
              />
            </div>
            <img
              className=" z-10 absolute top-32 h-96 extraSmall:h-102 mediumLarge:h-103 left-12 middle:left-1/3"
              src={data.sec5Girl.data.attributes.url}
              alt=""
            />
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="z-10">
        <StarterBundle data={data} />
      </div>

      <div className="hidden absolute top-[45%] medium:top-[55%] w-[80%] left-[5%] items-end z-20 middle:flex">
        <div className="mr-[2rem]">
          {/* img */}
          <img
            src={data.sec5StarterImg.data.attributes.url}
            className="h-80"
            alt=""
          />
        </div>
        <div className="flex justify-end h-44 flex-col">
          <h2 className="text-4xl font-[aftika-bold] leading-none">
            {data.sec5StarterHeading}
          </h2>
          <h2 className="text-xl font-[aftika-semibold] ">
            {data.sec5StarterSubHeading}
          </h2>
          <div>
            <Link href="/bundles?page=type">
              <a>
                <button className="bg-default rounded-lg text-white font-[aftika-extra-light] tracking-wide text-tiny py-2 middle:px-6 px-10 mt-4 mr-4">
                  Know More
                </button>
              </a>
            </Link>
            <Link href="/build?page=type">
              <a>
                <button className="bg-default rounded-lg text-white font-[aftika-extra-light] tracking-wide text-tiny py-2 middle:px-6 px-10 mt-4">
                  Build your own
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProvideConvenience;
