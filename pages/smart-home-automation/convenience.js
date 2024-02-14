import Header from "../../components/header";
import Footer from "../../components/footer";
import ContactButtons from "../../components/contactButtons";
import BlueBox from "../../components/blueBox";
import Head from "next/head";
import parse from "html-react-parser";
import Lottie from "react-lottie";
import chatAnimation from "../../pages/lotties/chat.json";
import contactAnimation from "../../pages/lotties/1.json";
import convinienceAnimation from "../../pages/lotties/convinience.json";
import Link from "next/link";
import bulbAnimation from "../lotties/bulb.json";
import batteryAnimation from "../lotties/battery.json";
import energyAnimation from "../lotties/energy-saving.json";
import contactExpertAnimation from "../lotties/ask-your-expert.json";
import { BaseUrl } from "../../utils/BaseUrl";

// `${BaseUrl}/convenience-pages`

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${BaseUrl}/convenience-pages?populate[0]=sec2Bg,sec4Bg,sec5Bg,seo`
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

export default function Accessibility(props) {
  const pageData = props.data;
  const guthen = "Guthen Bloots Personal Use";
  const contactExpertOptions = {
    loop: true,
    autoplay: true,
    animationData: contactExpertAnimation,
    renderedSettings: {
      // preserveAspectRatio:'xMidYMid slice'
    },
  };
  const convinienceOptions = {
    loop: true,
    autoplay: true,
    animationData: convinienceAnimation,
    renderedSettings: {
      // preserveAspectRatio:'xMidYMid slice'
    },
  };
  const bulbOptions = {
    loop: true,
    autoplay: true,
    animationData: bulbAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //   const energyOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: energyAnimation,
  //     rendererSettings: {
  //       preserveAspectRatio: 'xMidYMid slice',
  //     },
  //   };
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
        className="h-full middle:block hidden"
        style={{ background: "#D9D9D9" }}
      >
        <Header color="black" />
        <div className="flex pt-36 tablet:mx-20 mx-8">
          <div data-aos="fade-up" className="pl-10 flex-initial w-5/12">
            <div className=" px-2  text-ft">
              <div className="laptop:text-base desktop:text-xl tablet:w-11/12">
                <h1
                  initial="hidden"
                  whileinview="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="text-5xl laptop:text-7xl desktop:text-7xl text-default"
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
                  className="px-10 tablet:px-0 text-tiny tablet:text-lg text-black font-[aftika-light] tracking-wide leading-7"
                >
                  {pageData.sec1Desc1}
                </p>

                <br />

                <div className="relative laptop:text-base desktop:text-lg font-normal -mt-10 tablet:mt-0 tablet:-ml-10">
                  <div className="flex items-center mb-2">
                    <button
                      initial="hidden"
                      whileinview="visible"
                      viewport={{ once: false }}
                      transition={{ duration: 0.4 }}
                      variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                      }}
                    >
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
                        className="tablet:absolute tablet:ml-5 top-2 left-16 cursor-pointer text-base tracking-wide leading-7"
                      >
                        Ask our Expert
                      </span>
                    </Link>
                  </div>
                  <div className="flex items-center mb-10">
                    <button
                      initial="hidden"
                      whileinview="visible"
                      viewport={{ once: false }}
                      transition={{ duration: 0.4 }}
                      variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                      }}
                    >
                      <Lottie
                        options={contactExpertOptions}
                        width={"40px"}
                        height={"40px"}
                      />
                    </button>
                    <span className="tablet:absolute tablet:ml-5 left-16">
                      <Link href="/bundles?page=type">
                        <span
                          initial="hidden"
                          whileinview="visible"
                          viewport={{ once: false }}
                          transition={{ duration: 0.4 }}
                          variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                          }}
                          className="cursor-pointer text-base  tracking-wide leading-7"
                        >
                          Choose your bundle
                        </span>
                      </Link>{" "}
                      <span
                        initial="hidden"
                        whileinview="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.4 }}
                        variants={{
                          visible: { opacity: 1, scale: 1 },
                          hidden: { opacity: 0, scale: 0 },
                        }}
                        className="cursor-pointer text-base tracking-wide leading-7"
                      >
                        or{" "}
                      </span>
                      <Link href="/build?page=type">
                        <span
                          initial="hidden"
                          whileinview="visible"
                          viewport={{ once: false }}
                          transition={{ duration: 0.4 }}
                          variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                          }}
                          className="cursor-pointer text-base  tracking-wide leading-7"
                        >
                          Design your own
                        </span>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Lottie options={convinienceOptions} className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* mobile responsive */}
      <div className="h-full middle:hidden block">
        <Header color="white" />
        <div className="flex flex-col items-center justify-center">
          <div className="flex-1 mt-16 -mb-8 small:mt-32 small:mb-2 flex justify-center items-center w-full">
            <Lottie
              options={convinienceOptions}
              className="w-full border-2 border-blue-500 object-contain"
              width="160vw"
              height="40vh"
            />
          </div>
          <div data-aos="fade-up" className="flex-1 bg-black text-white">
            <div className=" px-[2rem]  text-center flex items-center justify-center">
              <div className="laptop:text-base desktop:text-xl small:w-10/12 w-full mt-12">
                <h2
                  className="text-6xl laptop:text-6xl desktop:text-7xl leading-none"
                  style={{ fontFamily: `${guthen}` }}
                >
                  {pageData.sec1Heading}
                </h2>
                <br />
                <p className="laptop:text-3xl desktop:text-3xl text-xl font-bold ">
                  {pageData.sec1Desc1}
                </p>
                <br />
                <div className="relative laptop:text-base desktop:text-lg font-normal mt-2 space-y-2 tablet:mt-0 tablet:-ml-10 mb-4">
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

      {/* page 2*/}

      <div
        id="climateControl"
        className="tablet:mx-20  flex middle:mb-0 mb-10 middle:mt-12 mt-10 items-center middle:flex-row flex-col"
      >
        <div className="flex-initial w-full small:w-11/12 h-98 laptop:h-100 middle:w-5/12 flex items-end">
          <img
            src={pageData.sec2Bg.data.attributes.url}
            className="w-full h-99 object-cover"
            alt={pageData.sec2BgAlt}
          />
        </div>
        <div
          data-aos="fade-up"
          className="flex-1 flex flex-col middle:mt-0 mt-12 middle:items-start items-center"
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
            className="leading-none"
          >
            <span
              className="text-7xl desktop:text-8xl text-default font-thin"
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
            className="font-bold tracking-wide -mt-4 text-4xl"
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
            className=" font-[aftika-light] tracking-wide leading-7 text-base text-black mt-6 middle:text-left text-center"
          >
            {pageData.sec2Desc1}
            <br />
            <br />
            <span id="smartLightingPrev">{pageData.sec2Desc2}</span>
          </p>
        </div>
      </div>

      {/* page3 */}

      <div
        id="smartLighting"
        className="bg-default tablet:px-20 px-8  pt-10 small:py-20 flex middle:flex-row flex-col-reverse pb-10 items-center"
      >
        <div
          data-aos="fade-up"
          className="flex-1 flex flex-col text-white middle:pl-20 middle:items-start items-center"
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
            className="font-semibold tracking-wide -mt-10 text-4xl"
          >
            {pageData.sec3Subheading}
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
            className="mt-10  font-[aftika-light] tracking-wide leading-7 text-base middle:text-left text-center"
          >
            {pageData.sec3Desc1}
            <br />
            <br />
            {pageData.sec3Desc2}
          </p>
        </div>
        <div className="flex-1 laptop:block hidden">
          <Lottie options={bulbOptions} width={"30vw"} height={"55vh"} />
        </div>
        <div className="flex-1 laptop:hidden block">
          <Lottie options={bulbOptions} width={"80vw"} height={"55vh"} />
        </div>
      </div>

      {/* page 4 */}
      <div id="homeConvenience">
        <div
          className="h-screen w-screen middle:flex items-center justify-end tablet:px-20 px-8 hidden"
          style={{
            background: `url(${pageData.sec4Bg.data.attributes.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div data-aos="fade-up" className="w-1/3">
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
                className="text-7xl desktop:text-8xl text-default font-thin"
                style={{ fontFamily: `${guthen}` }}
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
              className="font-semibold tracking-wide -mt-10 text-4xl"
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
              className="mt-6  font-[aftika-light] tracking-wide leading-7 text-base middle:text-left text-center"
            >
              {pageData.sec4Desc1}
              <br />
              <br />
              {pageData.sec4Desc2}
            </p>
          </div>
        </div>

        {/* medium responsive */}

        <div className="h-auto middle:hidden flex flex-col items-center justify-end">
          <div className="w-screen h-5/12">
            <img
              src={pageData.sec4Bg.data.attributes.url}
              width="100%"
              alt={pageData.sec4BgAlt}
            />
          </div>
          <div
            data-aos="fade-up"
            className="w-full text-center -mt-16 tablet:px-20 px-8"
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
                className="text-7xl desktop:text-8xl text-default font-thin"
                style={{ fontFamily: `${guthen}` }}
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
              className="font-semibold tracking-wide -mt-10 text-4xl"
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
              className="mt-6  font-[aftika-light] tracking-wide leading-7 text-base middle:text-left text-center"
            >
              {pageData.sec4Desc1}
              <br />
              <br />
              {pageData.sec4Desc2}
            </p>
          </div>
        </div>
      </div>
      {/* medium responsive */}

      {/* page 5 */}
      <div id="heater">
        <div className="h-screen relative overflow-hidden w-screen middle:flex items-center tablet:px-20 px-8 hidden">
          <img
            className="absolute -z-10 top-0 object-right-top left-0 object-cover w-[100%] h-[100%]"
            src={pageData.sec5Bg.data.attributes.url}
            alt={pageData.sec5BgAlt}
          />
          <div data-aos="fade-up" className="w-1/3">
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
                className="text-7xl desktop:text-8xl text-default font-thin"
                style={{ fontFamily: `${guthen}` }}
              >
                {pageData.sec5Heading}
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
              className="font-semibold tracking-wide -mt-10 text-4xl"
            >
              {pageData.sec5SubHeading}
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
              className="mt-6  font-[aftika-light] tracking-wide leading-7 text-base middle:text-left text-center"
            >
              {pageData.sec5Desc1}
            </p>
          </div>
        </div>

        {/* medium responsive */}

        <div className="h-auto middle:hidden flex flex-col items-center justify-end">
          <br />
          <br />
          <div className="w-screen h-5/12">
            <img
              src={pageData.sec5Bg.data.attributes.url}
              width="100%"
              alt={pageData.sec5BgAlt}
            />
          </div>
          <div
            data-aos="fade-up"
            className="w-full text-center -mt-16 tablet:px-20 px-8"
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
                className="text-7xl desktop:text-8xl text-default font-thin"
                style={{ fontFamily: `${guthen}` }}
              >
                {pageData.sec5Heading}
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
              className="font-semibold tracking-wide -mt-10 text-4xl"
            >
              {pageData.sec5SubHeading}
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
              className="mt-6  font-[aftika-light] tracking-wide leading-7 text-base middle:text-left text-center"
            >
              {pageData.sec5Desc1}
            </p>
          </div>
          <br />
          <br />
        </div>
      </div>
      {/* medium responsive */}

      {/* page 5 */}

      {/* <div className="tablet:mx-20 mx-8 items-center middle:flex hidden">
            <div className="flex-1 middle:pl-20">
                <h1  initial="hidden"
                    whileinview="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}  ><span className='text-7xl desktop:text-8xl text-default font-thin'
            style={{ fontFamily: `${guthen}` }}>Energy</span></h1>
                <h1  initial="hidden"
                    whileinview="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}   className='font-semibold tracking-wide -mt-10 text-4xl'>Efficiency</h1>
                <p  initial="hidden"
                    whileinview="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}   className="mt-6  font-[aftika-light] tracking-wide leading-7 text-base middle:text-left text-center">Smart Home Automation allows everyone to contribute towards a better environment. Our intelligent sensors allow you to save energy whenever you are not at home. And if that’s not enough, you also gain insights into your energy consumption and can personalize schedules accordingly.
                <br /><br />
                Take a step towards a greener lifestyle with intelligent automation.</p>
            </div>
            <div className="flex-initial w-5/12">
            <Lottie options={energyOptions} />
            </div>
        </div>

        <div className="middle:hidden flex flex-col items-center justify-center mt-10 tablet:mx-20 mx-8 pb-10">
            <div>
            <h1><span className='text-7xl desktop:text-8xl text-default font-thin'
            style={{ fontFamily: `${guthen}` }}>Energy</span></h1>
                <h1 className='font-semibold tracking-wide -mt-10 text-4xl'>Efficiency</h1>
            </div>
            <div className="flex-initial w-10/12 tablet:w-7/12">
            <Lottie options={energyOptions} />
            </div>
            <div>
            <p className="mt-6 text-lg tracking-wide font-semibold leading-8 middle:text-left text-center">Smart Home Automation allows everyone to contribute towards a better environment. Our intelligent sensors allow you to save energy whenever you are not at home. And if that’s not enough, you also gain insights into your energy consumption and can personalize schedules accordingly.
                <br /><br />
                Take a step towards a greener lifestyle with intelligent automation.</p>
            </div>
        </div> */}

      <Footer />
    </div>
  );
}
