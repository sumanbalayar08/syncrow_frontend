import React from "react";
import Link from "next/link";

function StarterBundle({ data }) {
  return (
    <div className=" ">
      <div className=" middle:block bg-[#E3E3E3] hidden mt-52 middle:mt-20 desktop:-mt-48 -mb-44 mediumLarge:h-72 h-52 relative"></div>
      <div className="middle:hidden block small:mb-0 -mb-40">
        <div className="ml-6">
          <img
            src={data.sec5StarterImg.data.attributes.url}
            className="extraSmall:h-60 h-48 "
            alt=""
          />
        </div>
        <div className="mt-10 px-8">
          <h1 className="text-4xl font-[aftika-bold] leading-none tracking-widest">
            {data.sec5StarterHeading}
          </h1>
          <h1 className="middle:text-xl font-[aftika-semibold] tracking-wide text-lg">
            {data.sec5StarterSubHeading}
          </h1>
          <div>
            <Link href="/bundles?page=type">
              <a>
                <button className="bg-default rounded-lg text-white font-[aftika-extra-light] tracking-wide text-tiny py-2 px-4 mt-4 mr-4">
                  Know More
                </button>
              </a>
            </Link>

            <Link href="/build?page=type">
              <a>
                <button className="bg-default rounded-lg text-white font-[aftika-extra-light] tracking-wide text-tiny py-2 px-4 mt-4">
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

export default StarterBundle;
