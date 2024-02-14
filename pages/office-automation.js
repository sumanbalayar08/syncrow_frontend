import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import bulbAnimation from "./lotties/bulb-workspace.json";
import Lottie from "react-lottie";
import contactExpertAnimation from "./lotties/ask-your-expert.json";
import Link from "next/link";
import { BaseUrl } from "../utils/BaseUrl";

// /api/workspace-pages

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${BaseUrl}/workspace-pages?populate[0]=sec1Bg,sec2Bg,sec3Bg,sec5Bg,sec6Bg,sec6BgMobile,sec7Bg,sec8Bg,sec9Bg,sec9BgMobile,seo`
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

const Workspace = (props) => {
  const pageData = props.data;
  // console.log(pageData)
  const guthen = "Guthen Bloots Personal Use";
  const bulbOptions = {
    loop: true,
    autoplay: true,
    animationData: bulbAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
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
  return (
    <div>
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
      <Header color="black" />

      {/* page 1 */}
      <div className="relative w-[100%] h-[100vh] max-h-[1500px] overflow-hidden">
        {/* desktop img  */}
        <img
          style={{
            objectPosition: `${pageData.sec1BgMobileAdjustmentInPercentage}`,
          }}
          className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
          src={pageData.sec1Bg.data.attributes.url}
          alt={pageData.sec1BgAlt}
        />
        {/* mobile img  */}
        {/* <img className="block lg:hidden absolute top-0 left-0 w-full h-full -z-10 object-cover" src="/workspace-page-1-m.png" alt="..." /> */}
        <p
          data-aos="fade-up"
          initial="hidden"
          whileinview="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.9 },
          }}
          style={{ fontFamily: `${guthen}` }}
          className=" font-[aftika-semibold] absolute text-[4rem] px-[1rem] lg:px-0 text-center top-[40%] lg:w-[35%] lg:top-[65%] medium:top-[70%] lg:left-[5%]"
        >
          Give your{" "}
          <span className="text-blue-700 lg:text-black">workplace</span> the
          competitive edge it needs
        </p>
      </div>

      {/* page 2 */}

      <div className="relative flex-col lg:flex w-[100%] lg:min-h-[100vh]  justify-between lg:overflow-hidden">
        <img
          style={{
            objectPosition: pageData.sec2BgMobileAdjustmentInPercentage,
          }}
          className="absolute top-0 left-0 w-full h-[600px] lg:h-full -z-10 object-cover"
          src={pageData.sec2Bg.data.attributes.url}
          alt={pageData.sec2BgAlt}
        />
        <div className="lg:w-[58%] w-[100%] h-[600px] lg:min-h-[100vh] lg:h-full relative flex-col justify-center items-center lg:pb-[2rem] lg:pl-[8rem] lg:bg-[#00000065] lg:pt-[10%]">
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="p-[2rem] lg:p-0"
          >
            <h3
              style={{ fontFamily: `${guthen}` }}
              className=" font-medium text-blue-700 text-[2.5rem] lg:text-left text-center lg:text-[4rem]"
            >
              {pageData.sec2Heading1}
            </h3>
            <h3
              style={{ fontFamily: `${guthen}` }}
              className=" font-medium pl-[2rem] text-blue-700 lg:text-white text-[2.5rem] lg:text-left text-center lg:text-[4rem]"
            >
              {pageData.sec2Heading2}
            </h3>
          </div>
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="mt-[5%] lg:w-[80%] p-[2rem] lg:relative absolute bottom-0 lg:p-0 w-[100%] lg:text-[1rem] text-[.9rem] bg-[#00000065] lg:bg-[#00000000]"
          >
            <p className="text-white text-[.9rem] lg:text-[1.2rem] tracking-wide lg:leading-7 font-[aftika-extra-light] lg:text-left text-center">
              {pageData.sec2Desc1}
            </p>
            <p className="pt-[3%] text-[.9rem] lg:text-[1.2rem] tracking-wide lg:leading-7 font-[aftika-extra-light] text-white  lg:text-left text-center">
              {pageData.sec2Desc2}
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          initial="hidden"
          whileinview="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.9 },
          }}
          className="lg:w-[40%] mt-[2rem] lg:mt-0 w-[100%] relative h-max lg:absolute lg:right-0 lg:bottom-[8%] px-[2rem] flex-col justify-start"
        >
          <h3 className=" text-[1.5rem] leading-[1.9rem] font-[aftika-bold] lg:text-[1rem] text-center lg:text-left tracking-wide">
            Make your{" "}
            <span
              style={{ fontFamily: `${guthen}` }}
              className="text-blue-700 text-[3rem]"
            >
              &nbsp;Workspace{" "}
            </span>{" "}
            work for you
          </h3>
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
                <p className="font-normal tracking-wide text-base leading-7 font-[aftika-light]">
                  Ask our expert
                </p>
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
            <p className="font-normal tracking-wide text-base leading-7 font-[aftika-light]">
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

      {/* page 3 */}
      <div className="relative flex-col lg:flex mt-[1rem] lg:mt-0 w-[100%] lg:h-[100vh] justify-between lg:overflow-hidden">
        <img
          className="lg:absolute lg:top-0 lg:left-0 w-full lg:h-full -z-10 object-cover"
          src={pageData.sec3Bg.data.attributes.url}
          alt={pageData.sec3BgAlt}
        />
        <div className="lg:w-[50%] h-[100%] lg:pl-[10%] flex flex-wrap items-center">
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="lg:mt-0 mt-[1rem] p-[2rem] lg:p-0"
          >
            <p className="text-[.9rem] lg:text-left text-center lg:text-[1.2rem]">
              {pageData.sec3Desc1}
            </p>
            <p className="text-[.9rem] lg:text-left text-center lg:text-[1.2rem] mt-[2rem]">
              {pageData.sec3Desc2}
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="flex-col justify-start lg:p-0 p-[2rem] w-full"
          >
            <h3
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.9 },
              }}
              className="font-[aftika-semibold] lg:text-[1.1rem] text-center lg:text-left"
            >
              Make an impression with your
            </h3>
            <h3
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.9 },
              }}
              className="font-[aftika-semibold] lg:text-[1.8rem] text-center lg:text-left"
            >
              <span
                style={{ fontFamily: `${guthen}, Poppins` }}
                className="text-blue-700 text-[3.4rem] lg:text-[4rem]"
              >
                Work
              </span>
              <span className="text-sm font-[aftika-semibold] ">
                &nbsp; and &nbsp;
              </span>{" "}
              <span
                style={{ fontFamily: `${guthen}, Poppins` }}
                className="text-blue-700 text-[3.4rem] lg:text-[4rem]"
              >
                Workplace
              </span>
            </h3>
            <Link href="/contact">
              <a>
                <div
                  initial="hidden"
                  whileinview="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0.9 },
                  }}
                  className="flex mt-[1rem]"
                >
                  <div className="mr-[1rem] flex justify-center items-center">
                    <Lottie
                      options={contactExpertOptions}
                      width={"40px"}
                      height={"40px"}
                    />
                  </div>
                  <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
                    Ask our expert
                  </p>
                </div>
              </a>
            </Link>
            <div
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.9 },
              }}
              className="flex mt-[1rem]"
            >
              <div className="mr-[1rem] flex justify-center items-center">
                <Lottie
                  options={contactExpertOptions}
                  width={"40px"}
                  height={"40px"}
                />
              </div>
              <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
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
      <div className="bg-blue-700 text-white lg:flex flex-auto py-[4rem]">
        <div
          data-aos="fade-up"
          initial="hidden"
          whileinview="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.9 },
          }}
          className="lg:w-[50%] flex justify-center items-center"
        >
          <h2
            className="text-white text-center md:text-left flex flex-col mx-10 leading-none"
            style={{ fontFamily: `${guthen}` }}
          >
            <span
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.9 },
              }}
              className="text-5xl lg:text-7xl -mb-2 lg:-mb-10 -ml-0 text-center"
            >
              Why
            </span>
            <span
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.9 },
              }}
              className="text-6xl lg:text-10xl -ml-0 text-center"
            >
              Upgrade
            </span>
            <span
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.9 },
              }}
              className="text-5xl lg:text-7xl text-center"
            >
              To a smarter home?
            </span>
          </h2>
        </div>
        <div className="lg:w-[50%] flex-col lg:px-[5%] p-[2rem] lg:p-0 mt-[1rem] lg:mt-0 justify-center items-center">
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="text-center lg:text-left mb-[2rem]  leading-7 text-base tracking-wide font-[aftika-light]"
          >
            {pageData.sec4Desc1}
          </p>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="text-center lg:text-left  leading-7 text-base tracking-wide font-[aftika-light]"
          >
            {pageData.sec4Desc2}
          </p>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="text-center lg:text-left mt-[2rem]  leading-7 text-base tracking-wide font-[aftika-light]"
          >
            {pageData.sec4Desc3}
          </p>
        </div>
      </div>

      {/* page 5 */}
      <div className="relative flex flex-wrap lg:min-h-[100vh] lg:justify-end">
        {/* desktop image  */}
        <img
          style={{
            objectPosition: pageData.sec5BgMobileAdjustmentInPercentage,
          }}
          className="lg:absolute lg:top-0 lg:left-0 w-full h-[50vh] lg:h-full -z-10 object-cover"
          src={pageData.sec5Bg.data.attributes.url}
          alt={pageData.sec5BgAlt}
        />
        {/* mobile image  */}
        {/* <img className="block lg:hidden lg:absolute lg:top-0 lg:left-0 w-full h-[50vh] lg:h-full -z-10 object-cover" src="/workspace-page-5-m.png" alt="..." /> */}
        <div className="flex-col my-auto justify-center items-center lg:w-[40%] lg:pt-0 pt-[2rem] lg:pr-[5%]">
          <h1
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            style={{ fontFamily: `${guthen}` }}
            className=" font-[aftika-semibold] px-[2rem] lg:px-0 text-[4.1rem] text-center leading-[4.8rem] lg:text-left text-blue-700"
          >
            {pageData.sec5Heading}
          </h1>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="text-[1.7rem] font-[aftika-bold] -mt-6 text-center lg:text-left"
          >
            {pageData.sec5SubHeading}
          </p>
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="my-[2.5rem]  lg:px-0 px-[2rem]"
          >
            <p className="text-center  leading-7 text-base tracking-wide font-[aftika-light] lg:text-left">
              {pageData.sec5Desc1}
            </p>
            <p className="text-center leading-7 text-base tracking-wide mt-[1.5rem] lg:text-left">
              {pageData.sec5Desc2}
            </p>
          </div>
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="mt-[2.5rem] lg:px-0 px-[2rem] pb-[2rem] lg:pb-0"
          >
            <Link href="/contact">
              <a>
                <div className="flex mt-[1rem]">
                  <div className="mr-[1rem] flex justify-center items-center">
                    {/* lottie */}
                    <Lottie
                      options={contactExpertOptions}
                      width={"40px"}
                      height={"40px"}
                    />
                  </div>
                  <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
                    Ask our expert
                  </p>
                </div>
              </a>
            </Link>
            <div className="flex mt-[1rem]">
              <div className="mr-[1rem] flex justify-center items-center">
                {/* lottie */}
                <Lottie
                  options={contactExpertOptions}
                  width={"40px"}
                  height={"40px"}
                />
              </div>
              <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
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

      {/* page 6 */}
      <div className="relative flex flex-wrap lg:min-h-[100vh] text-white">
        {/* desktop img  */}
        <img
          className="hidden lg:block absolute top-0 left-0 w-full h-full -z-10 object-cover"
          src={pageData.sec6Bg.data.attributes.url}
          alt={pageData.sec6BgAlt}
        />
        <div className="flex flex-col relative justify-center lg:pl-[5%] w-[100%] lg:w-[35%]">
          {/* mobile img  */}
          <img
            className="block lg:hidden absolute top-0 left-0 w-full h-full pb-[10vh] -z-10 object-cover"
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
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="p-[2rem] lg:p-0"
          >
            <p
              style={{ fontFamily: `${guthen}` }}
              className="text-[4rem] text-center lg:text-left mt-[1rem]"
            >
              {pageData.sec6Heading}
            </p>
            <p className="text-[1.8rem] font-[aftika-semibold] text-center lg:text-left leading-[2rem]">
              {pageData.sec6SubHeading}
            </p>
          </div>
          <div className="lg:my-[3rem] lg:bg-[#00000000] bg-[#00000065] lg:p-0 lg:mt-8 mt-[20vh]">
            <h1
              data-aos="fade-up"
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.9 },
              }}
              className="p-[1rem] pt-[2rem] lg:p-0 text-center lg:text-left  leading-7 text-base tracking-wide font-[aftika-light]"
            >
              {pageData.sec6Desc1}
            </h1>
            <p
              data-aos="fade-up"
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.9 },
              }}
              className="text-center lg:text-left mt-[1rem]  leading-7 text-base tracking-wide font-[aftika-light]"
            >
              {pageData.sec6Desc2}
            </p>
            <div
              data-aos="fade-up"
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.9 },
              }}
              className="mt-[2.5rem] lg:px-0 px-[2rem] py-[1rem] lg:py-0 bg-[#000] lg:bg-[#00000000]"
            >
              <Link href="/contact">
                <a>
                  <div className="flex mt-[1rem]">
                    <div className="mr-[1rem] flex justify-center items-center ">
                      <Lottie
                        options={contactExpertOptions}
                        width={"40px"}
                        height={"40px"}
                      />
                    </div>
                    <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
                      Ask our expert
                    </p>
                  </div>
                </a>
              </Link>
              <div className="flex mt-[1rem]">
                <div className="mr-[1rem] flex justify-center items-center ">
                  <Lottie
                    options={contactExpertOptions}
                    width={"40px"}
                    height={"40px"}
                  />
                </div>
                <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
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

      {/* page 7 */}
      <div id="climateControl" className="relative lg:min-h-[100vh]">
        {/* desktop image  */}
        <img
          style={{
            objectPosition: `${pageData.sec7BgMobileAdjustmentInPercentage}`,
          }}
          className="absolute top-0 left-0 w-full lg:min-h-[100vh] min-h-[65vh] max-h-[65vh] -z-10 object-cover"
          src={pageData.sec7Bg.data.attributes.url}
          alt={pageData.sec7BgAlt}
        />
        {/* mobile image  */}
        {/* <img className="block lg:hidden absolute top-0 left-0 w-full lg:min-h-[100vh] min-h-[60vh] max-h-[60vh] -z-10 object-cover" src="/workspace-page-7-m.png" alt="..." /> */}
        <div
          data-aos="fade-up"
          initial="hidden"
          whileinview="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.9 },
          }}
          className="text-white text-center h-[40vh] lg:absolute lg:right-[10%] p-[2rem] lg:p-0 lg:bottom-[-10%]"
        >
          <p
            style={{ fontFamily: `${guthen}` }}
            className="text-[3rem] lg:text-[4rem] pt-[1rem] lg:pt-0 font-medium"
          >
            {pageData.sec7Heading}
          </p>
          <p className="font-semibold text-[1.5rem] -mt-4">
            {pageData.sec7SubHeading}
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col lg:pt-[5rem] mt-[30vh] lg:mt-0  lg:w-[40%] lg:pl-[5rem]"
        >
          <p
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="text-center px-[2rem]  leading-7 text-base tracking-wide font-[aftika-light] lg:px-0 lg:text-left"
          >
            {pageData.sec7Desc1}
          </p>
          <p
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="text-center px-[2rem] lg:px-0 lg:text-left  leading-7 text-base tracking-wide font-[aftika-light]"
          >
            {pageData.sec7Desc2}
          </p>
          <div
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
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
                  <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
                    Ask our expert
                  </p>
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
              <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
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

      {/* page 8 */}

      <div className="relative flex-col lg:flex mt-[1rem] lg:mt-0 w-[100%] lg:h-[100vh] justify-between lg:overflow-hidden">
        {/* dekstop img  */}
        <img
          style={{
            objectPosition: `${pageData.sec8BgMobileAdjustmentInPercentage}`,
          }}
          className="lg:absolute lg:top-0 lg:left-0 w-full h-[40vh] lg:h-full -z-10 object-cover"
          src={pageData.sec8Bg.data.attributes.url}
          alt={pageData.sec8BgAlt}
        />
        {/* mobile img  */}
        {/* <img className="block lg:hidden lg:absolute lg:top-0 lg:left-0 w-full h-[40vh] lg:h-full -z-10 object-cover" src="/workspace-page-8-m.png" alt="..." /> */}
        <div className="lg:w-[50%] h-[100%] lg:pl-[10%] px-[2rem] lg:pb-0 -mt-[5vh] pb-[3rem] lg:pt-0 lg:px-0 flex flex-col flex-wrap justify-center">
          <h3
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            style={{ fontFamily: `${guthen}` }}
            className=" font-[aftika-semibold] text-[4.1rem] text-center lg:text-left"
          >
            {pageData.sec8Heading}
          </h3>
          <h3
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className=" mb-[2rem] lg:mb-0 font-[aftika-bold] lg:text-[1.7rem] lg:leading-[.8rem] leading-[.6rem] text-center lg:text-left"
          >
            {pageData.sec8SubHeading}
          </h3>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="lg:mt-[3rem] text-center lg:text-left  leading-7 text-base tracking-wide font-[aftika-light]"
          >
            {pageData.sec8Desc1}
          </p>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="mt-[1rem]  text-center lg:text-left  leading-7 text-base tracking-wide font-[aftika-light]"
          >
            {pageData.sec8Desc2}
          </p>
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
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
                  <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
                    Ask our expert
                  </p>
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
              <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
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
      <div className="relative flex-col lg:flex mt-[1rem] lg:mt-0 w-[100%] min-h-[100vh] lg:justify-center lg:items-end justify-between lg:overflow-hidden">
        {/* dekstop img  */}
        <img
          className="hidden lg:block absolute top-0 left-0 w-full h-full -z-10 object-cover"
          src={pageData.sec9Bg.data.attributes.url}
          alt="..."
        />
        {/* mobile img  */}
        <img
          className="block lg:hidden absolute top-0 left-0 w-full h-full -z-10 object-cover"
          src={pageData.sec9BgMobile.data.attributes.url}
          alt="..."
        />
        <div className="lg:w-[50%] lg:px-[4rem] h-[100%] lg:pl-[10%] pt-[50vh] lg:pb-0 pb-[3rem] lg:pt-0 flex flex-col flex-wrap justify-center">
          <h3
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            style={{ fontFamily: `${guthen}` }}
            className=" font-[aftika-semibold] lg:text-[4.1rem] text-[4rem] text-center lg:text-left text-blue-700"
          >
            {pageData.sec9Heading}
          </h3>
          <h3
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className=" font-[aftika-bold] lg:text-[1.7rem] text-[1.2rem] leading-[1rem] mb-[1rem] lg:mb-0 text-center lg:text-left"
          >
            {pageData.sec9SubHeading}
          </h3>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="lg:mt-[3rem] px-[2rem] lg:px-0 text-center lg:text-left  leading-7 text-base tracking-wide font-[aftika-light]"
          >
            {pageData.sec9Desc1}
          </p>
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
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
                  <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
                    Ask our expert
                  </p>
                </div>
              </a>
            </Link>
            <div className="flex mt-[1rem]">
              <div className="mr-[1rem] flex justify-center items-center ">
                <Lottie
                  options={contactExpertOptions}
                  width={"40px"}
                  height={"40px"}
                />
              </div>
              <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
                {" "}
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
      <div className="relative lg:min-h-[65vh] lg:justify-start">
        <div className="lg:absolute lg:w-[65%] h-[100%] lg:right-0 lg:top-0">
          <Lottie options={bulbOptions} />
        </div>
        <div className="lg:pt-[5rem] lg:pl-[5rem] pb-[3rem] flex flex-col justify-center lg:w-[50%]">
          <h3
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            style={{ fontFamily: `${guthen}` }}
            className="px-[2rem] lg:px-0 font-[aftika-sembold] lg:text-[4.1rem] text-[3rem] text-center lg:text-left text-blue-700"
          >
            {pageData.sec10Heading}
          </h3>
          <h3
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="px-[2rem] font-[aftika-bold] lg:px-0 lg:text-[1.7rem] leading-[1.8rem] text-[1rem] text-center lg:text-left "
          >
            {pageData.sec10SubHeading}
          </h3>
          <p
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="px-[2rem] mt-20 lg:px-0 my-[3rem] text-center lg:text-left leading-7 text-base tracking-wide font-[aftika-light] z-10"
          >
            {pageData.sec10Desc1}
          </p>
          <div
            data-aos="fade-up"
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="-mt-[1rem] lg:px-0 px-[2rem] pb-[2rem] lg:pb-0"
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
                  <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
                    Ask our expert
                  </p>
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
              <p className="font-normal leading-7 text-base tracking-wide font-[aftika-light]">
                {" "}
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
      <Footer />
    </div>
  );
};

export default Workspace;
