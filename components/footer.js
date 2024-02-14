/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Footer = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  let automateRef = useRef();
  let automateRef2 = useRef();

  // useEffect(() => {

  //   let handler = (e) => {
  //     if (!automateRef.current.contains(e.target)) {
  //       setShow(false);
  //     }
  //   }
  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   }
  // })

  // useEffect(() => {

  //   let handler2 = (e) => {
  //     if (!automateRef2.current.contains(e.target)) {
  //       setShow2(false);
  //     }
  //   }
  //   document.addEventListener("mousedown", handler2);

  //   return () => {
  //     document.removeEventListener("mousedown", handler2);
  //   }
  // })

  return (
    <footer
      className="px-4 md:px-24 mx-auto p-5 w-full"
      style={{ background: "#D9D9D9" }}
    >
      <div className="block tablet:hidden mb-8">
        <p className="my-2 text-black font-semibold tablet:font-normal text-center tablet:text-default text-base">
          {" "}
          SUBSCRIBE FOR LATEST UPDATES
        </p>
        <div className="flex gap-4">
          <input
            className="w-80 h-10 rounded-3xl outline-default pl-2"
            type="email"
            placeholder="Email"
          />
          <button
            type="submit"
            className="w-44 p-2 bg-default text-white font-bold rounded-md"
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className="md:flex items-start justify-between">
        <div className="grid grid-cols-3 text-default text-xs gap-10">
          {/* Grid col 1 */}
          <ul>
            <li className="my-2">
              <Link href="/smart-home-automation" className="text-base">
                Why Us
              </Link>
            </li>
            <li className="my-2">
              <Link href="/about" className="text-base">
                About
              </Link>
            </li>
            <li className="my-2">
              <Link href="/efficiency" className="text-base">
                Efficiency
              </Link>
            </li>

            <li className="my-2">
              <Link href="/bundles?page=type" className="text-base">
                Bundles
              </Link>
            </li>
            <li className="my-2">
              <Link href="/build?page=type" className="text-base">
                Build Your Own
              </Link>
            </li>
          </ul>

          {/* Grid col 2 */}
          <ul>
            {/* <li className='my-2'>
              <a href='contact' className='text-base'>
                Blogs
              </a>
            </li> */}
            <li className="my-2">
              <Link href="/faq" className="text-base">
                FAQs
              </Link>
            </li>
            <li className="my-2">
              <Link href="/privacyPolicy" className="text-base">
                Privacy Policy
              </Link>
            </li>
            <li className="my-2">
              <Link href="/termsAndConditions" className="text-base">
                Terms & Conditions
              </Link>
            </li>
            <li className="my-2">
              <Link href="/about#syncrowMember" className="text-base">
                Careers
              </Link>
            </li>
            <li className="my-2">
              <Link href="/blogs" className="text-base">
                Blogs
              </Link>
            </li>
          </ul>

          {/* Grid col 3 */}

          <ul>
            <li className="my-2 text-base">
              {/* <Link href='#' className='text-base'> */}
              Automate
              {/* </Link> */}
            </li>
            <li className="my-2">
              <Link href="/smart-home-automation" className="text-base">
                Home / Villa
              </Link>
            </li>
            <li className="my-2">
              <Link href="/office-automation" className="text-base">
                Workspace
              </Link>
            </li>

            <li className="my-2 text-base">
              {/* <Link href='/bundles' className='text-base'> */}
              IoT Solutions
              {/* </Link> */}
            </li>

            <li className="my-2">
              <Link href="/smart-home-iot-solutions" className="text-base">
                Residential
              </Link>
            </li>
            <li className="my-2">
              <Link href="/iot/smartCity" className="text-base">
                Smart Cities
              </Link>
            </li>
            <li className="my-2">
              <Link href="/iot/industrial-iot-solutions" className="text-base">
                Industrials
              </Link>
            </li>
          </ul>
        </div>
        {/* Grid End */}

        <div className="tablet:block hidden">
          <p className="my-2 text-black font-semibold tablet:font-normal tablet:text-default text-sm">
            {" "}
            SUBSCRIBE FOR LATEST UPDATES
          </p>
          <div className="flex gap-2">
            <input
              className="w-52 laptop:w-96 h-10 rounded-md outline-default pl-2"
              type="email"
              placeholder="Email"
            />
            <button
              type="submit"
              className="w-28 p-2 bg-default text-white font-bold rounded-md"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="my-4 md:flex items-center justify-between">
        <p className="text-xs font-semibold text-center">ALL RIGHTS RESERVED</p>
        <div className="md:flex gap-5 text-center items-center">
          <p className="my-3">FOLLOW US ON</p>
          <a
            target="_blank"
            rel="noreferrer"
            className="inline-block mr-3 md:mr-0"
            href="https://www.facebook.com/Syncrow.IoT "
          >
            <img
              src="https://ik.imagekit.io/jason7531/syncrow/common/Icon_ionic-logo-facebook_SQk3lI2c3Ix1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642340585967"
              alt=""
              className="laptop:w-6 desktop:w-8"
            />
          </a>
          <a
            className="inline-block mr-3 md:mr-0"
            href="https://www.instagram.com/syncrow_solutions/"
          >
            <img
              src="https://ik.imagekit.io/jason7531/syncrow/common/Icon_ionic-logo-instagram_V5sYLIb2F.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642340586321"
              alt=""
              className="laptop:w-6 desktop:w-8"
            />
          </a>
          <a
            className="inline-block mr-3 md:mr-0"
            rel="noreferrer"
            href="https://www.linkedin.com/company/syncrowiot"
            target="_blank"
          >
            <img
              src="https://ik.imagekit.io/jason7531/syncrow/common/Icon_ionic-logo-linkedin_4vB6QScALH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642340586695"
              alt=""
              className="laptop:w-6 desktop:w-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
