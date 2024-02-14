import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import buildingAnimation from "./lotties/building.json";
import phoneAnimation from "./lotties/phone.json";
import waterAnimation from "./lotties/water.json";
import exclamationAnimation from "./lotties/exclamation.json";
import contactExpertAnimation from "./lotties/ask-your-expert.json";
import energyAnimation from "./lotties/energy-saving.json";
import coldAnimation from "./lotties/cold-temperature.json";
import Link from "next/link";

import Lottie from "react-lottie";
import { BaseUrl } from "../utils/BaseUrl";

// /api/residential-pages

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${BaseUrl}/residential-pages?populate[0]=sec1Bg,sec2Bg,sec3Bg,sec5Bg,sec6Bg,sec6BgMobile,sec8Bg,sec10Bg,sec10BgMobile,sec11Bg,sec11BgMobile,sec13Bg,sec13BgMobile,seo`
    );

    const response = await res.json();

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

const Apartment = (props) => {
  const pageData = props.data;
  // console.log(pageData)
  const guthen = "Guthen Bloots Personal Use";

  const buildingOptions = {
    loop: true,
    autoplay: true,
    animationData: buildingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const phoneOptions = {
    loop: true,
    autoplay: true,
    animationData: phoneAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const waterOptions = {
    loop: true,
    autoplay: true,
    animationData: waterAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const exclamationOptions = {
    loop: true,
    autoplay: true,
    animationData: exclamationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
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
  const coldOptions = {
    loop: true,
    autoplay: true,
    animationData: coldAnimation,
    renderedSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const energyOptions = {
    loop: true,
    autoplay: true,
    animationData: energyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Head>
        <title>{pageData.seo.title}</title>
        <meta name="description" content={pageData.seo.description} />
        <link
          rel="icon"
          href="https://ik.imagekit.io/jason7531/syncrow/common/Group_1_rkAObjd65.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642343317149"
        />

        {/* guthen font  */}
        <link
          href="https://fonts.cdnfonts.com/css/guthen-bloots-personal-use"
          rel="stylesheet"
        />

        {/* poppins font  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
        {/* fontawesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Header color="white" />

      {/* page 1 */}

      <div className="relative w-[100%] h-[100vh] overflow-hidden">
        <img
          style={{
            objectPosition: `${pageData.sec1BgMobileAdjustmentInPercentage}`,
          }}
          className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
          src={pageData.sec1Bg.data.attributes.url}
          alt={pageData.sec1BgAlt}
        />
        <p
          data-aos="fade-up"
          style={{ fontFamily: `${guthen}` }}
          className="absolute text-[3.5rem]  lg:text-[4rem] font-medium text-center top-[40%] lg:w-[40%] lg:top-[20%] text-white lg:right-[5%]"
        >
          {pageData.sec1Heading}
        </p>
      </div>

      {/* page 2 */}
      <div className="relative w-[100%] lg:min-h-[100vh] flex flex-col lg:flex-row lg:justify-end overflow-hidden lg:pr-[5%]">
        {/* desktop img  */}
        <img
          style={{
            objectPosition: `${pageData.sec2BgMobileAdjustmentInPercentage}`,
          }}
          className="lg:absolute lg:top-0 lg:left-0 h-[51vh] object-left lg:w-full lg:h-full -z-10 object-cover"
          src={pageData.sec2Bg.data.attributes.url}
          alt={pageData.sec2BgAlt}
        />
        {/* mobile img  */}
        {/* <img className="lg:hidden block lg:absolute lg:top-0 lg:left-0 h-[51vh] object-left lg:w-full lg:h-full -z-10 object-cover" src="/apartments-page-2-m.png" alt="..." /> */}
        <div className="bg-[#000] lg:w-[45%] flex flex-col p-[2rem] lg:p-0 justify-center text-white lg:items-start items-center lg:bg-[#00000000]">
          <h3 data-aos="fade-up" className="text-[2rem] leading-[1.8rem]">
            {pageData.sec2Heading}
          </h3>
          <h3
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            style={{ fontFamily: `${guthen}` }}
            className="text-[4rem] lg:mb-[1.5rem] text-center lg:text-left text-white lg:pr-[10%]"
          >
            {pageData.sec2SubHeading}
          </h3>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="py-[.5rem] lg:font-[aftika-extra-light] font-extralight lg:text-left text-center"
          >
            {pageData.sec2Desc1}
          </p>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="py-[.5rem] lg:text-left text-center"
          >
            {pageData.sec2Desc2}
          </p>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="py-[.5rem] lg:text-left text-center"
          >
            {pageData.sec2Desc3}
          </p>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="py-[.5rem] lg:text-left text-center"
          >
            {pageData.sec2Desc4}
          </p>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="py-[.5rem] lg:text-left text-center"
          >
            {pageData.sec2Desc5}
          </p>
        </div>
      </div>
      {/* page 3 */}
      <div className="relative w-[100%] lg:min-h-[100vh] flex flex-col lg:flex-row  overflow-hidden lg:pr-[5%]">
        {/* desktop img  */}
        <img
          style={{
            objectPosition: `${pageData.sec3BgMobileAdjustmentInPercentage}`,
          }}
          className="lg:absolute lg:top-0 lg:left-0 h-[41vh] object-right-top lg:w-full lg:h-full -z-10 object-cover"
          src={pageData.sec3Bg.data.attributes.url}
          alt={pageData.sec3BgAlt}
        />

        <div className="lg:text-white lg:w-[40%] lg:pl-[5%] flex flex-col lg:p-[2rem]  justify-center lg:items-start items-center">
          <h3
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            style={{ fontFamily: `${guthen}` }}
            className="text-[4rem] leading-[4rem] lg:mb-[1rem] p-[2rem] lg:p-0 text-center lg:text-left lg:pr-[10%]"
          >
            Get a Feel of How
          </h3>
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="flex lg:px-0 px-[2rem] items-center"
          >
            <img
              className="object-contain w-[20%] lg:w-auto lg:h-[6rem] pt-[1rem] lg:mr-[2rem] mr-[5%]"
              src="/logo.png"
              alt=""
            />
            <h3 className="text-[3rem] md:text-[4rem] font-bold">syncrow</h3>
          </div>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:text-[2rem] leading-[2rem] lg:font-bold text-center lg:px-0 px-[2rem] lg:text-left "
          >
            upgrades your home to a smarter living experience
          </p>

          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="mt-[2.5rem] lg:px-0 px-[2rem] pb-[2rem] lg:pb-0"
          >
            <Link href="/contact">
              <a>
                <div className="flex mt-[1rem]">
                  <div className="mr-[1rem] flex justify-center items-center">
                    <Lottie
                      options={contactExpertOptions}
                      width={"40px"}
                      height={"40px"}
                    />
                  </div>
                  <p className="font-normal mt-2">Ask our expert</p>
                </div>
              </a>
            </Link>
            <div className="flex mt-[1rem]">
              <div className="mr-[1rem] flex justify-center items-center">
                <Lottie
                  options={contactExpertOptions}
                  width={"40px"}
                  height={"40px"}
                />
              </div>
              <p className="font-normal mt-2">
                <Link href="/bundles?page=type">
                  <a>Choose your bundle</a>
                </Link>{" "}
                <Link href="/build?page=type">
                  <a>Or Design your own.</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* page 4 */}
      <div className="bg-blue-700 w-[100%] text-white lg:min-h-[70vh] p-[2rem] flex flex-col lg:flex-row">
        <div className="lg:w-[50%] flex flex-col justify-center items-center">
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:w-[50%]"
          >
            <Lottie
              options={buildingOptions}
              width={"100%"}
              // height={'40%'}
            />
          </div>
          <h3
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            style={{ fontFamily: `${guthen}` }}
            className="text-[4rem] text-center leading-[4rem] mt-[3rem]"
          >
            {pageData.sec4Heading}
          </h3>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:text-[1.7rem] lg:font-bold text-[2rem]"
          >
            {pageData.sec4SubHeading}
          </p>
        </div>
        <div className="lg:w-[50%] flex flex-col justify-center lg:items-start items-center lg:pr-[10%]">
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:text-left lg:font-[aftika-extra-light] lg:font-extralight text-center py-[.7rem]"
          >
            {pageData.sec4Desc1}
          </p>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:text-left lg:font-[aftika-extra-light] lg:font-extralight text-center py-[.7rem]"
          >
            {pageData.sec4Desc2}
          </p>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:text-left lg:font-[aftika-extra-light] lg:font-extralight text-center py-[.7rem]"
          >
            {pageData.sec4Desc3}
          </p>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:text-left lg:font-[aftika-extra-light] lg:font-extralight text-center py-[.7rem]"
          >
            {pageData.sec4Desc4}
          </p>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:text-left lg:font-[aftika-extra-light] lg:font-extralight text-center py-[.7rem]"
          >
            {pageData.sec4Desc5}
          </p>
        </div>
      </div>

      {/* page 5 */}
      <div className="flex flex-col pt-[4rem]">
        <div className="flex flex-col lg:flex-row lg:justify-evenly lg:px-[10%]">
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:w-[40%] flex flex-col mx-[2rem] lg:p-0 lg:items-start"
          >
            <h3
              style={{ fontFamily: `${guthen}` }}
              className="text-[4rem] text-center leading-[4rem] lg:mt-[3rem] text-blue-700"
            >
              {pageData.sec5Heading}
            </h3>
            <p className="text-center lg:text-left font-bold text-[2rem] leading-[2.5rem]">
              {pageData.sec5SubHeading}
            </p>
          </div>
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:w-[40%] flex items-end"
          >
            <div className="mt-[2.5rem] lg:px-0 px-[2rem] pb-[2rem] lg:pb-0">
              <Link href="/contact">
                <a>
                  <div className="flex mt-[1rem]">
                    <div className="mr-[1rem] flex justify-center items-center">
                      <Lottie
                        options={contactExpertOptions}
                        width={"40px"}
                        height={"40px"}
                      />
                    </div>
                    <p className="font-normal mt-2">Ask our expert</p>
                  </div>
                </a>
              </Link>
              <div className="flex mt-[1rem]">
                <div className="mr-[1rem] flex justify-center items-center">
                  <Lottie
                    options={contactExpertOptions}
                    width={"40px"}
                    height={"40px"}
                  />
                </div>
                <p className="font-normal mt-2">
                  <Link href="/bundles?page=type">
                    <a>Choose your bundle</a>
                  </Link>{" "}
                  <Link href="/build?page=type">
                    <a>Or Design your own.</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <img className='object-contain' src="https://syncrow.s3.ap-south-1.amazonaws.com/Mask_Group_37_a5cd8019a0.png" alt="" /> */}
        <img
          className="object-contain"
          src={pageData.sec5Bg.data.attributes.url}
          alt={pageData.sec5BgAlt}
        />
      </div>

      {/* page 6 */}
      <div className="relative min-h-[80vh] flex lg:justify-end">
        {/* desktop image  */}
        <img
          className="hidden lg:block absolute h-full w-full -z-10 object-cover "
          src={pageData.sec6Bg.data.attributes.url}
          alt={pageData.sec6BgAlt}
        />
        {/* mobile img  */}
        <img
          className=" block lg:hidden absolute h-full w-full -z-10 object-cover "
          src={pageData.sec6BgMobile.data.attributes.url}
          alt={pageData.sec6BgAlt}
        />
        <div
          data-aos="fade-up"
          initial="hidden"
          whileinview="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="lg:w-[40%] lg:pr-[10%] pt-[2rem] lg:px-0  px-[2rem] lg:pt-[10%]"
        >
          <p className="lg:text-left text-sm md:text-md text-center py-[.5rem]">
            {pageData.sec6Desc1}
          </p>
          <p className="lg:text-left text-sm md:text-md text-center py-[.5rem]">
            {pageData.sec6Desc2}
          </p>
        </div>
      </div>

      {/* page 7 */}
      <div className="tablet:mx-20 mx-8 items-center middle:flex hidden">
        <div className="flex-1 middle:pl-20">
          <h1
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
              className="text-7xl desktop:text-8xl text-default font-thin"
              style={{ fontFamily: `${guthen}` }}
            >
              {pageData.sec7Heading}
            </span>
          </h1>
          <h1
            data-aos="fade-up"
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
            {pageData.sec7SubHeading}
          </h1>
          <p
            data-aos="fade-up"
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
            {pageData.sec7Desc1}
            <br />
            <br />
            {pageData.sec7Desc2}
          </p>
        </div>
        <div className="flex-initial w-5/12">
          <Lottie options={energyOptions} />
        </div>
      </div>

      <div className="middle:hidden flex flex-col items-center justify-center mt-10 tablet:mx-20 mx-8 pb-10">
        <div>
          <h1 data-aos="fade-up">
            <span
              className="text-7xl desktop:text-8xl text-default font-thin"
              style={{ fontFamily: `${guthen}` }}
            >
              {pageData.sec7Heading}
            </span>
          </h1>
          <h1
            data-aos="fade-up"
            className="font-semibold tracking-wide -mt-10 text-4xl"
          >
            {pageData.sec7SubHeading}
          </h1>
        </div>
        <div className="flex-initial w-10/12 tablet:w-7/12">
          <Lottie options={energyOptions} />
        </div>
        <div>
          <p
            data-aos="fade-up"
            className="mt-6 text-lg tracking-wide font-semibold leading-8 middle:text-left text-center"
          >
            {pageData.sec7Desc1}
            <br />
            <br />
            {pageData.sec7Desc2}
          </p>
        </div>
      </div>

      {/* page 8 */}
      <div
        id="lighting"
        className="relative lg:min-h-[130vh] h-full flex justify-start items-center"
      >
        <img
          className="absolute -z-10 top-0 h-[30vh] left-0 lg:h-[130vh] lg:object-cover w-full"
          src={pageData.sec8Bg.data.attributes.url}
          alt={pageData.sec8BgAlt}
        />
        <div className="lg:pl-[8.5%] lg:w-[50%] flex flex-col">
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="h-[30vh] pt-[10%] lg:pt-0 px-[2rem] lg:px-0 lg:h-auto"
          >
            <h3
              style={{ fontFamily: `${guthen}` }}
              className="text-[3.5rem] tablet:pl-10 laptop:pl-0 font-medium text-left leading-[4rem] text-blue-700 mt-[3rem]"
            >
              {pageData.sec8Heading}
            </h3>
            <p className="text-left tablet:pl-10 laptop:pl-0 font-bold text-[1rem] lg:text-[2rem] lg:leading-[1.7rem]">
              {pageData.sec8SubHeading}
            </p>
          </div>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="text-center py-[1rem] px-[2rem] lg:px-0 lg:text-left"
          >
            {pageData.sec8Desc1}
          </p>
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="mt-[2.5rem] lg:px-0 px-[2rem] pb-[2rem] lg:pb-0"
          >
            <Link href="/contact">
              <a>
                <div className="flex mt-[1rem]">
                  <div className="mr-[1rem] flex justify-center items-center">
                    <Lottie
                      options={contactExpertOptions}
                      width={"40px"}
                      height={"40px"}
                    />
                  </div>
                  <p className="font-normal mt-2">Ask our expert</p>
                </div>
              </a>
            </Link>
            <div className="flex mt-[1rem]">
              <div className="mr-[1rem] flex justify-center items-center">
                <Lottie
                  options={contactExpertOptions}
                  width={"40px"}
                  height={"40px"}
                />
              </div>
              <p className="font-normal mt-2">
                <Link href="/bundles?page=type">
                  <a>Choose your bundle</a>
                </Link>{" "}
                <Link href="/build?page=type">
                  <a>Or Design your own.</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* page 9 */}
      <div className="relative lg:min-h-[70vh] flex flex-col lg:flex-row">
        <div
          data-aos="fade-up"
          initial="hidden"
          whileinview="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="lg:w-[50%] flex lg:relative absolute -z-10 lg:h-full h-[50vh] justify-center items-center"
        >
          <Lottie
            style={{ width: "80%", objectFit: "contain" }}
            options={phoneOptions}
          />
          <div className="absolute top-20 middle:block hidden  middle:right-16 medium:right-24 mediumLarge:top-28 mediumLarge:right-32 big:right-40 desktop:right-40">
            <Lottie
              options={exclamationOptions}
              style={{ width: "40%", height: "40%" }}
            />
          </div>
        </div>
        <div className="lg:w-[40%] flex justify-center items-start lg:pr-[10%] flex-col">
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="h-[50vh] flex flex-col justify-evenly lg:justify-start lg:h-auto"
          >
            <h3
              style={{ fontFamily: `${guthen}` }}
              className="text-[4rem] text-center lg:text-left leading-[4rem] text-blue-700 mt-[3rem]"
            >
              {pageData.sec9Heading}
            </h3>
            <p className="text-center lg:text-left font-bold text-[2rem] leading-[1.7rem]">
              {pageData.sec9SubHeading}
            </p>
          </div>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="text-center lg:px-0 px-[2rem] lg:text-left mt-[2rem]"
          >
            {pageData.sec9Desc1}
          </p>
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="mt-[2.5rem] lg:px-0 px-[2rem] pb-[2rem] lg:pb-0"
          >
            <Link href="/contact">
              <a>
                <div className="flex mt-[1rem]">
                  <div className="mr-[1rem] flex justify-center items-center">
                    <Lottie
                      options={contactExpertOptions}
                      width={"40px"}
                      height={"40px"}
                    />
                  </div>
                  <p className="font-normal mt-2">Ask our expert</p>
                </div>
              </a>
            </Link>
            <div className="flex mt-[1rem]">
              <div className="mr-[1rem] flex justify-center items-center">
                <Lottie
                  options={contactExpertOptions}
                  width={"40px"}
                  height={"40px"}
                />
              </div>
              <p className="font-normal mt-2">
                <Link href="/bundles?page=type">
                  <a>Choose your bundle</a>
                </Link>{" "}
                <Link href="/build?page=type">
                  <a>Or Design your own.</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* page 10 */}
      <div className="relative lg:min-h-[100vh] flex flex-col lg:flex-row">
        {/* desktop img  */}
        <img
          className="hidden lg:block lg:absolute -z-10 lg:top-0 lg:left-0 lg:w-full h-[70vh] lg:h-full object-cover"
          src={pageData.sec10Bg.data.attributes.url}
          alt={pageData.sec10BgAlt}
        />
        {/* mobile img  */}
        <img
          className="block lg:hidden lg:absolute -z-10 lg:top-0 lg:left-0 lg:w-full h-[70vh] lg:h-full object-cover"
          src={pageData.sec10BgMobile.data.attributes.url}
          alt={pageData.sec10BgAlt}
        />
        <div className="lg:w-[40%] lg:pl-[10%] flex flex-col justify-center">
          <h3
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            style={{ fontFamily: `${guthen}` }}
            className="text-[4rem] px-[2rem] lg:px-0 text-center lg:text-left leading-[4rem] text-blue-700 mt-[3rem]"
          >
            {pageData.sec10Heading}
          </h3>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="text-center lg:text-left px-[2rem] lg:px-0 font-bold text-[2rem] leading-[1.7rem]"
          >
            {pageData.sec10SubHeading}
          </p>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:text-left text-center px-[2rem] lg:px-0 my-[2rem]"
          >
            {pageData.sec10Desc1}
          </p>
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="mt-[2.5rem] lg:px-0 px-[2rem] pb-[2rem] lg:pb-0"
          >
            <Link href="/contact">
              <a>
                <div className="flex mt-[1rem]">
                  <div className="mr-[1rem] flex justify-center items-center">
                    <Lottie
                      options={contactExpertOptions}
                      width={"40px"}
                      height={"40px"}
                    />
                  </div>
                  <p className="font-normal mt-2">Ask our expert</p>
                </div>
              </a>
            </Link>
            <div className="flex mt-[1rem]">
              <div className="mr-[1rem] flex justify-center items-center">
                <Lottie
                  options={contactExpertOptions}
                  width={"40px"}
                  height={"40px"}
                />
              </div>
              <p className="font-normal mt-2">
                <Link href="/bundles?page=type">
                  <a>Choose your bundle</a>
                </Link>{" "}
                <Link href="/build?page=type">
                  <a>Or Design your own.</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* page 11 */}
      <div className="relative lg:min-h-[80vh] flex lg:flex-row lg:justify-end">
        {/* desktop img  */}
        <img
          className="hidden lg:block absolute w-full h-full -z-10 object-cover"
          src={pageData.sec11Bg.data.attributes.url}
          alt={pageData.sec11BgAlt}
        />
        {/* mobile img  */}
        <img
          className=" block lg:hidden absolute w-full h-full -z-10 object-cover"
          src={pageData.sec11BgMobile.data.attributes.url}
          alt={pageData.sec11BgAlt}
        />
        <div className="lg:w-[40%] pt-[20vh] lg:pt-0 lg:pr-[10%]">
          <h3
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            style={{ fontFamily: `${guthen}` }}
            className=" font-medium text-[4rem] px-[2rem] lg:px-0 text-center lg:text-left leading-[4rem] text-blue-700 mt-[3rem]"
          >
            {pageData.sec11Heading}
          </h3>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="text-center lg:text-left px-[2rem] lg:px-0 font-bold text-[2rem] lg:leading-[2rem]"
          >
            {pageData.sec11SubHeading}
          </p>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:text-left text-center px-[2rem] lg:px-0 mb-[1rem] lg:mb-auto lg:my-[2rem]"
          >
            {pageData.sec11Desc1}
          </p>
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:mt-[2.5rem] lg:px-0 px-[2rem] pb-[2rem] lg:pb-0"
          >
            <Link href="/contact">
              <a>
                <div className="flex mt-[1rem]">
                  <div className="mr-[1rem] flex justify-center items-center">
                    <Lottie
                      options={contactExpertOptions}
                      width={"40px"}
                      height={"40px"}
                    />
                  </div>
                  <p className="font-normal mt-2">Ask our expert</p>
                </div>
              </a>
            </Link>
            <div className="flex mt-[1rem]">
              <div className="mr-[1rem] flex justify-center items-center">
                <Lottie
                  options={contactExpertOptions}
                  width={"40px"}
                  height={"40px"}
                />
              </div>
              <p className="font-normal mt-2">
                <Link href="/bundles?page=type">
                  <a>Choose your bundle</a>
                </Link>{" "}
                <Link href="/build?page=type">
                  <a>Or Design your own.</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* page 12  */}

      <div className="relative lg:min-h-[70vh] lg:px-[10%] flex flex-col-reverse lg:flex-row lg:justify-center">
        <div className="lg:w-[50%] lg:pr-[10%]">
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:h-auto h-[47vh]"
          >
            <h3
              style={{ fontFamily: `${guthen}` }}
              className=" font-medium text-[4rem] px-[2rem] lg:px-0 text-center lg:text-left leading-[4rem] text-blue-700 mt-[3rem]"
            >
              {pageData.sec12Heading}
            </h3>
            <p className="text-center lg:text-left px-[2rem] lg:px-0 font-bold text-[1.5rem] leading-[1.7rem]">
              {pageData.sec12SubHeading}
            </p>
          </div>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:text-left text-center px-[2rem] lg:px-0 my-[2rem]"
          >
            {pageData.sec12Desc1}
          </p>
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="mt-[2.5rem] lg:px-0 px-[2rem] pb-[2rem] lg:pb-0"
          >
            <Link href="/contact">
              <a>
                <div className="flex mt-[1rem]">
                  <div className="mr-[1rem] flex justify-center items-center">
                    <Lottie
                      options={contactExpertOptions}
                      width={"40px"}
                      height={"40px"}
                    />
                  </div>
                  <p className="font-normal mt-2">Ask our expert</p>
                </div>
              </a>
            </Link>
            <div className="flex mt-[1rem]">
              <div className="mr-[1rem] flex justify-center items-center">
                <Lottie
                  options={contactExpertOptions}
                  width={"40px"}
                  height={"40px"}
                />
              </div>
              <p className="font-normal mt-2">
                <Link href="/bundles?page=type">
                  <a>Choose your bundle</a>
                </Link>{" "}
                <Link href="/build?page=type">
                  <a>Or Design your own.</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          initial="hidden"
          whileinview="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="lg:w-[40%] lg:relative absolute h-[40vh] lg:h-auto top-[15vh] lg:top-0 w-full pt-[10vh] lg:pt-0 flex justify-center items-center"
        >
          <Lottie
            options={waterOptions}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* page 13 */}
      <div className="relative lg:min-h-[100vh] flex lg:justify-end">
        {/* desktop img  */}
        <img
          className="hidden lg:block absolute w-full -z-10 lg:h-full h-[50vh] object-left object-cover"
          src={pageData.sec13Bg.data.attributes.url}
          alt={pageData.sec13BgAlt}
        />
        {/* mobile img  */}
        <img
          className="block lg:hidden absolute w-full -z-10 lg:h-full h-[27rem] object-left object-cover"
          src={pageData.sec13BgMobile.data.attributes.url}
          alt={pageData.sec13BgAlt}
        />
        <div className="lg:w-[40%] lg:pl-[2rem] text-white lg:pr-[10%] flex flex-col justify-center lg:bg-[#00000065]">
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:h-auto  h-[27rem]"
          >
            <h3
              style={{ fontFamily: `${guthen}` }}
              className="text-blue-700 lg:text-white  font-medium text-[4rem] px-[2rem] lg:px-0 text-center lg:text-left leading-[4rem] mt-[3rem]"
            >
              {pageData.sec13Heading}
            </h3>
            <p className="text-center lg:text-left px-[2rem] lg:px-0 font-bold text-[1.5rem] leading-[1.7rem] text-black lg:text-white">
              {pageData.sec13SubHeading}
            </p>
          </div>
          <div className="bg-[#000] lg:bg-[#00000000]">
            <p
              data-aos="fade-up"
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="lg:text-left text-center p-[2rem] lg:font-[aftika-extra-light] lg:p-0 my-[2rem]"
            >
              {pageData.sec13Desc1}
            </p>
            <div
              data-aos="fade-up"
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="mt-[2.5rem] lg:px-0 px-[2rem] pb-[2rem] lg:pb-0"
            >
              <Link href="/contact">
                <a>
                  <div className="flex mt-[1rem]">
                    <div className="mr-[1rem] flex justify-center items-center">
                      <Lottie
                        options={contactExpertOptions}
                        width={"40px"}
                        height={"40px"}
                      />
                    </div>
                    <p className="font-normal mt-2">Ask our expert</p>
                  </div>
                </a>
              </Link>
              <div className="flex mt-[1rem]">
                <div
                  data-aos="fade-up"
                  className="mr-[1rem] flex justify-center items-center"
                >
                  <Lottie
                    options={contactExpertOptions}
                    width={"40px"}
                    height={"40px"}
                  />
                </div>
                <p className="font-normal mt-2">
                  <Link href="/bundles?page=type">
                    <a>Choose your bundle</a>
                  </Link>{" "}
                  <Link href="/build?page=type">
                    <a>Or Design your own.</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page14 */}

      <div className="py-10 items-center tablet:px-20 bg-cyan-100 px-8 middle:flex hidden">
        <div className="flex-1 ">
          <div data-aos="fade-up" className="h-96">
            <Lottie options={coldOptions} width={"100%"} height={"80%"} />
          </div>
        </div>
        <div className="flex-1 text-left">
          <h1
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
              className="text-7xl desktop:text-8xl text-blue-600 font-thin text-left"
              style={{ fontFamily: `${guthen}` }}
            >
              {pageData.sec14Heading}
            </span>
          </h1>
          <span
            data-aos="fade-up"
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
            {pageData.sec14SubHeading}
          </span>
          <p
            data-aos="fade-up"
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
            {pageData.sec14Desc1}
          </p>
        </div>
      </div>

      <div className="middle:hidden flex flex-col tablet:px-20 px-8 bg-cyan-100">
        <div className="flex-1 flex items-center justify-center">
          <div data-aos="fade-up" className="">
            <Lottie
              options={coldOptions}
              width={"100%"}
              objectFit={"contain"}
              height="80%"
            />
          </div>
        </div>
        <div className="flex-1 text-center mb-10 mt-10 tablet:-mt-56 laptop:-mt-72 z-10">
          <h1 data-aos="fade-up">
            <span
              className="text-7xl desktop:text-8xl text-default font-thin text-center"
              style={{ fontFamily: `${guthen}` }}
            >
              {pageData.sec14Heading}
            </span>
          </h1>
          <h1 data-aos="fade-up">
            <span className="text-3xl desktop:text-8xl font-thin text-center">
              {pageData.sec14SubHeading}
            </span>
          </h1>
          <p
            data-aos="fade-up"
            className="tablet:mt-36  font-[aftika-light] tracking-wide leading-7 text-base text-center "
          >
            {pageData.sec14Desc1}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Apartment;
