import React from "react";
import Head from "next/head";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Lottie from "react-lottie";
import chartAnimation from "../lotties/chart.json";
import { BaseUrl } from "../../utils/BaseUrl";

// /api/efficiency-pages

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${BaseUrl}/efficiency-pages?populate[0]=sec1Bg,sec2Bg,sec2Elements,sec3Bg,seo`
    );

    const response = await res.json();
    console.log(response);
    var data = response.data[0].attributes;
    return {
      props: {
        data,
      },
      revalidate: 1,
    };
  } catch (e) {
    console.log(e);
  }
}

export default function Efficiency(props) {
  const pageData = props.data;
  // console.log(pageData)
  const guthen = "Guthen Bloots Personal Use";
  const chartOptions = {
    loop: true,
    autoplay: true,
    animationData: chartAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>{pageData.seo.title}</title>
        <meta name="description" content={pageData.seo.description} />
        <link
          rel="icon"
          href="https://ik.imagekit.io/jason7531/syncrow/common/Group_1_rkAObjd65.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642343317149"
        />
        <style>
          @import
          url(https://fonts.cdnfonts.com/css/guthen-bloots-personal-use);
        </style>
      </Head>
      {/* < page1 > */}
      <div>
        <div
          className="h-screen bg-cover bg-center tablet:px-8 middle:block hidden"
          style={{
            backgroundImage: `url('${pageData.sec1Bg.data.attributes.url}')`,
          }}
        >
          <Header color="black" />
          <div className="flex">
            <div
              data-aos="fade-up"
              className="pt-52 flex-1 z-0 medium:mx-16 mx-4"
            >
              <div className="flex flex-col items-start">
                <h1
                  initial="hidden"
                  whileinview="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                >
                  <span
                    className="text-black text-7xl  font-normal"
                    style={{ fontFamily: "Guthen Bloots Personal Use" }}
                  >
                    {pageData.sec1Heading1}
                  </span>
                </h1>
                <h2
                  initial="hidden"
                  whileinview="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                >
                  <span
                    className="text-default text-7xl  font-normal leading-10"
                    style={{ fontFamily: "Guthen Bloots Personal Use" }}
                  >
                    {pageData.sec1Heading2}
                  </span>
                </h2>
              </div>
            </div>
            <div data-aos="fade-up" className="pt-52 flex-1">
              <div className=" flex items-end justify-end">
                <p
                  initial="hidden"
                  whileinview="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="w-3/5  font-[aftika-light] tracking-wide leading-7 text-base text-black mr-4"
                >
                  {pageData.sec1Desc1}
                  <br />
                  <br />
                  {pageData.sec1Desc2}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center medium:mt-80 mt-44">
            <h2
              data-aos="fade-up"
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <span
                className="text-black text-7xl  font-normal leading-tight"
                style={{ fontFamily: "Guthen Bloots Personal Use" }}
              >
                {pageData.sec2Heading1}
              </span>
            </h2>
            <h2
              data-aos="fade-up"
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <span
                className="text-default text-7xl  font-normal leading-tight"
                style={{ fontFamily: "Guthen Bloots Personal Use" }}
              >
                {pageData.sec2Heading2}
              </span>
            </h2>
          </div>
        </div>
        {/* mobile */}
        <div
          data-aos="fade-up"
          className="middle:hidden h-96 object-fill block bg-cover bg-center "
          style={{
            backgroundImage: `url('${pageData.sec1Bg.data.attributes.url}')`,
          }}
        >
          <Header />
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col relative -z-10 items-center justify-center middle:hidden"
        >
          <h2 className="text-5xl text-center font-guthen text-[#000] tablet:mt-0">
            {pageData.sec1Heading1}
          </h2>
          <h2 className="text-5xl text-center font-guthen text-blue-700 tablet:mt-0">
            {pageData.sec1Heading2}
          </h2>
          <p className=" font-[aftika-light] tracking-wide leading-7 text-base text-black w-4/5 tablet:w-3/6 text-center mt-8">
            {pageData.sec1Desc1}
            <br />
            <br />

            {pageData.sec1Desc2}
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="mx-8 tablet:mx-16 flex flex-col items-center justify-center middle:hidden mt-10"
        >
          <h2 className="text-5xl tablet:text-left font-guthen text-center">
            {pageData.sec2Heading1}
          </h2>
          <h2 className="text-5xl tablet:flex text-blue-700 font-guthen text-center">
            {pageData.sec2Heading2}
          </h2>
        </div>
        {/* mobile */}
      </div>
      {/* page2 */}
      <div className="flex middle:flex-row flex-col-reverse middle:mt-60 mt-10 tablet:mx-16 mx-8 items-center">
        <div className="flex-1 middle:mt-0 mt-6">
          <h2
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="middle:text-left text-center middle:block hidden"
          >
            <span
              className="text-default text-6xl font-normal leading-3"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}
            >
              {pageData.sec2Heading3}
            </span>
          </h2>
          <h2
            data-aos="fade-up"
            className="middle:hidden block text-default font-guthen text-6xl text-center leading-10"
          >
            {pageData.sec2Heading3}
          </h2>
          <h2
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="text-4xl capitalize font-semibold middle:text-left text-center"
          >
            {pageData.sec2Heading4}
          </h2>
          <ul
            data-aos="fade-up"
            className="list-disc ml-6 mt-4 marker:text-default"
          >
            {pageData.sec2Elements.map((element, index) => {
              return (
                <li
                  initial="hidden"
                  key={index}
                  whileinview="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="laptop:mb-0 mb-4  font-[aftika-light] tracking-wide leading-7 text-base"
                >
                  {element.elementData}
                </li>
              );
            })}
          </ul>
        </div>
        <div data-aos="fade-up" className="flex-1">
          <img
            src={pageData.sec2Bg.data.attributes.url}
            height="80%"
            width="80%"
            alt={pageData.sec2BgAlt}
          />
        </div>
      </div>
      {/* page3 */}
      <div className="flex tablet:mt-0 -mt-36 ">
        <div
          data-aos="fade-up"
          className="flex-1 flex items-center justify-end "
        >
          <img
            src={pageData.sec3Bg.data.attributes.url}
            className="w-11/12 middle:w-9/12"
            alt={pageData.sec3BgAlt}
          />
        </div>
        <div
          data-aos="fade-up"
          className="flex-1 mt-[480px]  tablet:-ml-28 -ml-16 middle:ml-0 middle:mt-56"
        >
          <h2
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <span
              className="text-default text-5xl tablet:text-6xl font-normal leading-tight"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}
            >
              {pageData.sec3Heading}
            </span>
          </h2>
          <h2
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="text-xl tablet:text-3xl text-black font-semibold leading-8 laptop:ml-0 -ml-10"
          >
            {pageData.sec3SubHeading}
          </h2>
          <p
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="tablet:w-10/12  text-black tablet:mt-8 mt-4  font-[aftika-light] tracking-wide leading-7 text-base middle:text-left text-center laptop:ml-0 -ml-16 w-full"
          >
            {pageData.sec3Desc1}
          </p>
        </div>
      </div>
      {/* page4 */}
      <div className="flex tablet:mx-16 mx-8 items-center my-10 middle:flex-row flex-col-reverse">
        <div data-aos="fade-up" className="flex-1 hidden middle:block">
          <h2
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <span
              className="text-default text-7xl  font-normal leading-3"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}
            >
              {pageData.sec4Heading}
            </span>
          </h2>
          <h2
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="text-3xl font-semibold"
          >
            {pageData.sec4SubHeading}
          </h2>
          <p
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="mt-6 w-4/5  font-[aftika-light] tracking-wide leading-7 text-base text-black"
          >
            {pageData.sec4Desc1}
            <br />
            <br />
            {pageData.sec4Desc2}
          </p>
        </div>
        {/* mobile */}
        <div
          data-aos="fade-up"
          className="middle:hidden flex justify-center items-center flex-col"
        >
          <h2 className="text-default text-5xl tablet:text-7xl font-guthen font-normal leading-10">
            {pageData.sec4Heading}
          </h2>
          <h2 className="text-4xl font-semibold mt-2">
            {pageData.sec4SubHeading}
          </h2>
          <p className="mt-6 w-4/5  font-[aftika-light] tracking-wide leading-7 text-base text-black text-center">
            {pageData.sec4Desc1}
            <br />
            <br />
            {pageData.sec4Desc2}
          </p>
        </div>
        {/* mobile */}
        <div data-aos="fade-up" className="flex-1">
          <Lottie options={chartOptions} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
