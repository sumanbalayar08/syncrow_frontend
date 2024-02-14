import Header from "../../components/header";
import Footer from "../../components/footer";
import ContactButtons from "../../components/contactButtons";
import BlueBox from "../../components/blueBox";
import Head from "next/head";
import phoneAnimation from "../lotties/phone.json";
import exclaimAnimation from "../lotties/exclamation.json";
import Lottie from "react-lottie";
import parse from "html-react-parser";
import chatAnimation from "../lotties/chat.json";
import contactAnimation from "../lotties/1.json";
import happinessAnimation from "../lotties/happinessBegins.json";
import securityAnimation from "../lotties/security.json";
import Link from "next/link";
import contactExpertAnimation from "../lotties/ask-your-expert.json";
import { BaseUrl } from "../../utils/BaseUrl";
import fingerprintAnimation from "../lotties/fingerPrintAnimation.json";
import { useEffect, useState } from "react";
// /api/security-pages

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${BaseUrl}/security-pages?populate[0]=sec3Bg,sec5Bg,seo`
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

export default function Security(props) {
  const [windowInnerWidth, setWindowInnerWidth] = useState("");
  const pageData = props.data;
  const guthen = "Guthen Bloots Personal Use";
  const phoneOptions = {
    loop: true,
    autoplay: true,
    animationData: phoneAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const exclaimOptions = {
    loop: true,
    autoplay: true,
    animationData: exclaimAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const chatOptions = {
    loop: true,
    autoplay: true,
    animationData: chatAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const contactOptions = {
    loop: true,
    autoplay: true,
    animationData: contactAnimation,
    renderedSettings: {
      // preserveAspectRatio:'xMidYMid slice'
    },
  };
  const securityOptions = {
    loop: true,
    autoplay: true,
    animationData: securityAnimation,
    renderedSettings: {
      // preserveAspectRatio:'xMidYMid slice'
    },
  };
  const happinessOptions = {
    loop: true,
    autoplay: true,
    animationData: happinessAnimation,
    renderedSettings: {
      // preserveAspectRatio:'xMidYMid slice'
    },
  };
  const contactExpertOptions = {
    loop: true,
    autoplay: true,
    animationData: contactExpertAnimation,
    renderedSettings: {
      // preserveAspectRatio:'xMidYMid slice'
    },
  };
  const fingerPrintOptions = {
    loop: true,
    autoplay: true,
    animationData: fingerprintAnimation,
    renderedSettings: {
      // preserveAspectRatio:'xMidYMid slice'
    },
  };

  useEffect(() => {
    setWindowInnerWidth(window.innerWidth);
    window &&
      window.addEventListener("resize", (data) => {
        setWindowInnerWidth(data.target.screen.width);
      });
  });
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

      {/* page1 */}
      <div
        className="h-auto middle:block hidden"
        style={{ background: "#D9D9D9" }}
      >
        <Header color="black" />
        <div className="flex pt-36 medium:mx-20 mx-10">
          <div
            data-aos="fade-up"
            className="middle:flex-initial middle:w-5/12 flex-1"
          >
            <div className=" px-2  text-ft">
              <div className="laptop:text-base desktop:text-xl middle:w-11/12 w-full mt-12">
                <h1
                  initial="hidden"
                  whileinview="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="text-6xl laptop:text-6xl desktop:text-7xl text-default leading-none"
                  style={{ fontFamily: `${guthen}` }}
                >
                  {pageData.sec1Heading}
                </h1>
                <br />
                <p
                  initial="hidden"
                  whileinview="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="laptop:text-3xl desktop:text-3xl font-bold leading-none"
                >
                  {pageData.sec1SubHeading}
                </p>
                <br />

                <p
                  initial="hidden"
                  whileinview="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className=" font-[aftika-light] tracking-wide leading-7 text-base px-10 tablet:px-0"
                >
                  {pageData.sec1Desc1}
                </p>
                <br />

                <div className="relative laptop:text-base desktop:text-lg font-normal -mt-10 tablet:mt-0">
                  <div className="flex items-center mb-2">
                    <button>
                      <Lottie
                        options={contactExpertOptions}
                        width={"40px"}
                        height={"40px"}
                      />
                    </button>{" "}
                    <Link href="/contact">
                      <span
                        initial="hidden"
                        whileinview="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.4 }}
                        variants={{
                          visible: { opacity: 1, scale: 1 },
                          hidden: { opacity: 0, scale: 0 },
                        }}
                        className="tablet:absolute  font-[aftika-light] tracking-wide leading-7 text-base tablet:ml-5 top-2 left-16 cursor-pointer"
                      >
                        Ask our Expert
                      </span>
                    </Link>
                  </div>
                  <div className="flex items-center mb-2">
                    <button>
                      <Lottie
                        options={contactExpertOptions}
                        width={"40px"}
                        height={"40px"}
                      />
                    </button>
                    <span
                      initial="hidden"
                      whileinview="visible"
                      viewport={{ once: false }}
                      transition={{ duration: 0.4 }}
                      variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                      }}
                      className="tablet:absolute tablet:ml-5 left-16"
                    >
                      <Link href="/bundles?page=type">
                        <span className="cursor-pointer  font-[aftika-light] tracking-wide leading-7 text-base">
                          Choose your bundle
                        </span>
                      </Link>{" "}
                      <span className="cursor-pointer  font-[aftika-light] tracking-wide leading-7 text-base">
                        or{" "}
                      </span>
                      <Link href="/build?page=type">
                        <span className="cursor-pointer  font-[aftika-light] tracking-wide leading-7 text-base">
                          Design your own
                        </span>
                      </Link>
                    </span>
                  </div>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-12">
            <Lottie options={securityOptions} width="40vw" height="50vh" />
          </div>
        </div>
      </div>

      {/* mobile responsive */}
      <div className="h-full middle:hidden block">
        <Header color="white" />
        <div className="flex flex-col items-center justify-center">
          <div className="flex-1 mt-40 mb-10 flex justify-center items-center">
            <Lottie options={securityOptions} width="30vw" height="30vh" />
          </div>
          <div data-aos="fade-up" className="flex-1 bg-black text-white">
            <div className="  text-center flex items-center justify-center">
              <div className="laptop:text-base px-[2rem] desktop:text-xl small:w-10/12 w-full mt-12">
                <h2
                  className="text-6xl laptop:text-6xl desktop:text-7xl leading-none"
                  style={{ fontFamily: `${guthen}` }}
                >
                  {pageData.sec1Heading}
                </h2>
                <br />
                <p className="laptop:text-3xl desktop:text-3xl text-xl font-bold leading-none">
                  {pageData.sec1SubHeading}
                </p>
                <br />
                <br />
                <br />
                <p className=" font-[aftika-light] tracking-wide leading-7 text-base tablet:px-0">
                  {pageData.sec1Desc1}
                </p>
                <br />

                <div className="relative laptop:text-base space-y-2 desktop:text-lg font-normal -mt-10 tablet:mt-0 tablet:-ml-10 mb-6">
                  <div className="flex items-center small:mt-0 mt-4">
                    <button>
                      <Lottie
                        options={contactExpertOptions}
                        width={"40px"}
                        height={"40px"}
                      />
                    </button>{" "}
                    <Link href="/contact">
                      <span className="tablet:absolute tablet:ml-5 ml-2 left-16 cursor-pointer font-[aftika-light] tracking-wide leading-7 text-base text-left">
                        Ask our Expert
                      </span>
                    </Link>
                  </div>
                  <div className="flex items-center tablet:-mt-6 -mt-8">
                    <button>
                      <Lottie
                        options={contactExpertOptions}
                        width={"40px"}
                        height={"40px"}
                      />
                    </button>
                    <span className="tablet:absolute tablet:ml-5 left-16 ml-2 text-left">
                      <Link href="/bundles?page=type">
                        <span className="cursor-pointer  font-[aftika-light] tracking-wide leading-7 text-base">
                          Choose your bundle
                        </span>
                      </Link>{" "}
                      <span className="cursor-pointer  font-[aftika-light] tracking-wide leading-7 text-base">
                        or{" "}
                      </span>
                      <Link href="/build?page=type">
                        <span className="cursor-pointer  font-[aftika-light] tracking-wide leading-7 text-base">
                          Design your own
                        </span>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile responsive */}

      {/* page2 */}

      <div
        id="intelligence"
        className="tablet:px-20 px-8 bg-default flex middle:flex-row flex-col items-center"
      >
        <div className="flex-1 lg:h-[25rem] overflow-hidden">
          {windowInnerWidth > 990 ? (
            <Lottie
              options={fingerPrintOptions}
              width="100%"
              height="55rem"
              style={{ marginTop: "-10rem" }}
            />
          ) : (
            <Lottie
              options={fingerPrintOptions}
              width="100%"
              // height="20rem"
              style={{ marginTop: "-3rem", marginBottom: "-5rem" }}
            />
          )}
        </div>
        <div
          data-aos="fade-up"
          className="flex-1 middle:text-left text-center middle:mb-0 mb-16"
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
              className="text-7xl desktop:text-8xl text-white font-thin"
              style={{ fontFamily: `${guthen}` }}
            >
              {pageData.sec2Heading}
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
            className="font-semibold tracking-wide  text-white tablet:-mt-10 -mt-6 text-4xl"
          >
            {pageData.sec2SubHeading}
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
            className=" font-[aftika-light] tracking-wide leading-7 text-base text-white mt-6 middle:text-left text-center"
          >
            {pageData.sec2Desc1}
          </p>
        </div>
      </div>

      {/* page3 */}
      <div id="monitor">
        <div
          className=" middle:flex hidden w-screen h-100 tablet:px-20 px-8 items-center justify-start pt-20 pb-44"
          style={{
            background: `url(${pageData.sec3Bg.data.attributes.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div data-aos="fade-up" className="flex flex-col w-5/12">
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
                className="text-7xl desktop:text-8xl text-black font-thin"
                style={{ fontFamily: `${guthen}` }}
              >
                {pageData.sec3Heading}
              </span>
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
              className="mt-4  font-[aftika-light] tracking-wide leading-7 text-base text-left "
            >
              {pageData.sec3Desc1}
              <br />
              <br />
              {pageData.sec3Desc2}
            </p>
          </div>
        </div>

        <div className="middle:hidden flex flex-col">
          <div className="w-screen h-[20rem] tablet:h-102">
            <img
              style={{
                objectPosition: `${pageData.sec3BgMobileAdjustmentInPercentage}`,
              }}
              src={pageData.sec3Bg.data.attributes.url}
              className="w-screen object-cover h-[20rem] tablet:h-102"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col tablet:mx-20 mx-8 items-center justify-center -mt-12"
          >
            <h2>
              <span
                className="text-7xl desktop:text-8xl text-black font-thin"
                style={{ fontFamily: `${guthen}` }}
              >
                {pageData.sec3Heading}
              </span>
            </h2>
            <p className="mt-4  font-[aftika-light] tracking-wide leading-7 text-base text-center ">
              {pageData.sec3Desc1}
              <br />
              <br />
              {pageData.sec3Desc2}
            </p>
          </div>
        </div>
      </div>

      {/* page4 */}
      <div id="protection">
        <div className="my-10 items-center tablet:mx-20 mx-8 middle:flex hidden">
          <div className="flex-1 -mt-40">
            <Lottie options={phoneOptions} width={"100%"} height="80%" />
          </div>
          <div data-aos="fade-up" className="flex-1 text-left">
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
                className="text-7xl desktop:text-8xl text-black font-thin text-left"
                style={{ fontFamily: `${guthen}` }}
              >
                {pageData.sec4Heading}
              </span>
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
              className="mt-4  font-[aftika-light] tracking-wide leading-7 text-base text-left "
            >
              {pageData.sec4Desc1}
              <br />
              <br />
              {pageData.sec4Desc2}
            </p>
          </div>
        </div>

        <div className="middle:hidden flex flex-col tablet:mx-20 mx-8 mt-10">
          <div className="flex-1 flex items-center justify-center">
            <Lottie options={phoneOptions} width={"100%"} height="80%" />
          </div>
          <div
            data-aos="fade-up"
            className="flex-1 text-center mb-10 mt-10 tablet:-mt-56 laptop:-mt-72 z-10"
          >
            <h2>
              <span
                className="text-7xl desktop:text-8xl text-default font-thin text-center"
                style={{ fontFamily: `${guthen}` }}
              >
                {pageData.sec4Heading}
              </span>
            </h2>
            <p className="tablet:mt-36  font-[aftika-light] tracking-wide leading-7 text-base text-center ">
              {pageData.sec4Desc1}
              <br />
              <br />
              {pageData.sec4Desc2}
            </p>
          </div>
        </div>
      </div>
      {/* page5 */}
      <div id="doorLock">
        <div className=" middle:flex relative hidden w-screen h-100 tablet:px-20 px-8 items-center justify-start pt-20 pb-44">
          <img
            className="absolute w-[100%] h-[100%] -z-10 top-0 object-cover left-0"
            src={pageData.sec5Bg.data.attributes.url}
            alt={pageData.sec5BgAlt}
          />
          <div data-aos="fade-up" className="flex flex-col w-5/12">
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
                className="text-7xl desktop:text-8xl text-black font-thin"
                style={{ fontFamily: `${guthen}` }}
              >
                {pageData.sec5Heading}
              </span>
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
              className="mt-4  font-[aftika-light] tracking-wide leading-7 text-base text-left "
            >
              {pageData.sec5Desc1}
            </p>
          </div>
        </div>

        <div className="middle:hidden flex flex-col pb-4">
          <div className="w-screen h-100 tablet:h-102">
            <img
              src={pageData.sec5Bg.data.attributes.url}
              alt={pageData.sec5BgAlt}
              className="w-screen h-70 tablet:h-102"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col tablet:mx-20 mx-8 items-center justify-center -mt-48"
          >
            <h2>
              <span
                className="text-7xl desktop:text-8xl text-black font-thin"
                style={{ fontFamily: `${guthen}` }}
              >
                {pageData.sec5Heading}
              </span>
            </h2>
            <p className="mt-4  font-[aftika-light] tracking-wide leading-7 text-base text-center ">
              {pageData.sec5Desc1}
            </p>
          </div>
        </div>
      </div>

      {/* page6 */}
      <div id="happiness">
        <div className="py-10 items-center tablet:px-20 bg-cyan-100 px-8 middle:flex hidden">
          <div className="flex-1 -mt-20">
            <Lottie options={happinessOptions} width={"100%"} height="80%" />
          </div>
          <div data-aos="fade-up" className="flex-1 text-left">
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
                className="text-7xl desktop:text-8xl text-blue-600 font-thin text-left"
                style={{ fontFamily: `${guthen}` }}
              >
                {pageData.sec6Heading}
              </span>
            </h2>
            <span
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="laptop:text-3xl desktop:text-3xl font-bold leading-none"
            >
              {pageData.sec6SubHeading}
            </span>
            <p
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="mt-4  font-[aftika-light] tracking-wide leading-7 text-base text-left "
            >
              {pageData.sec6Desc1}
            </p>
          </div>
        </div>

        <div className="middle:hidden flex flex-col tablet:px-20 px-8 bg-cyan-100 pt-10">
          <div className="flex-1 flex items-center justify-center">
            <Lottie options={happinessOptions} width={"100%"} height="80%" />
          </div>
          <div
            data-aos="fade-up"
            className="flex-1 text-center mb-10 mt-10 tablet:-mt-56 laptop:-mt-72 z-10"
          >
            <h2>
              <span
                className="text-7xl desktop:text-8xl text-default font-thin text-center"
                style={{ fontFamily: `${guthen}` }}
              >
                {pageData.sec6Heading}
              </span>
            </h2>
            <h2>
              <span className="text-3xl desktop:text-8xl font-thin text-center">
                {pageData.sec6SubHeading}
              </span>
            </h2>
            <p className="tablet:mt-36  font-[aftika-light] tracking-wide leading-7 text-base text-center ">
              {pageData.sec6Desc1}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
