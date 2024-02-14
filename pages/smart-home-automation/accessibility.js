import Header from "../../components/header";
import Footer from "../../components/footer";
import ContactButtons from "../../components/contactButtons";
import BlueBox from "../../components/blueBox";
import Head from "next/head";
import parse from "html-react-parser";
import Lottie from "react-lottie";
import chatAnimation from "../../pages/lotties/chat.json";
import contactAnimation from "../../pages/lotties/1.json";
import accessibilityAnimation from "../../pages/lotties/accessibility.json";
import contactExpertAnimation from "../../pages/lotties/ask-your-expert.json";
import Link from "next/link";
import multimediaAnimation from "../../pages/lotties/multimedia.json";
import { BaseUrl } from "../../utils/BaseUrl";

// /api/accessibility-pages

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${BaseUrl}/accessibility-pages?populate[0]=sec3Bg,sec3BgMobile,seo`
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
  const accessibilityOptions = {
    loop: true,
    autoplay: true,
    animationData: accessibilityAnimation,
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
  const multimediaOptions = {
    loop: true,
    autoplay: true,
    animationData: multimediaAnimation,
    renderedSettings: {
      // preserveAspectRatio:'xMidYMid slice'
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

      {/* page1 */}
      <div
        className="h-auto middle:block hidden"
        style={{ background: "#D9D9D9" }}
      >
        <Header color="white" />
        <div className="flex pt-36 tablet:mx-20 mx-8">
          <div className="pl-10 flex-initial w-1/2">
            <div className=" px-2  text-ft">
              <div className="laptop:text-base desktop:text-xl tablet:w-11/12">
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
                  className="text-5xl laptop:text-7xl desktop:text-7xl text-default"
                  style={{ fontFamily: `${guthen}` }}
                >
                  {pageData.sec1Heading}
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
                  className="px-10 tablet:px-0  font-[aftika-light] tracking-wide leading-7 text-base text-black"
                >
                  {pageData.sec1Desc1}
                </p>
                <br />

                <div
                  data-aos="fade-up"
                  className="relative laptop:text-base desktop:text-lg font-normal -mt-10 tablet:mt-0 tablet:-ml-10"
                >
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
                        className="tablet:absolute font-[aftika-light] tracking-wide leading-7 text-base tablet:ml-5 top-2 left-16 cursor-pointer"
                      >
                        Ask our Expert
                      </span>
                    </Link>
                  </div>
                  <div className="flex items-center">
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
                        <span
                          initial="hidden"
                          whileinview="visible"
                          viewport={{ once: false }}
                          transition={{ duration: 0.4 }}
                          variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                          }}
                          className="cursor-pointer  font-[aftika-light] tracking-wide leading-7 text-base"
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
                        className="cursor-pointer  font-[aftika-light] tracking-wide leading-7 text-base"
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
                          className="cursor-pointer  font-[aftika-light] tracking-wide leading-7 text-base"
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
          <div
            className="-mt-14 ml-10 pt-3 bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/logoSmall.png")`,
              backgroundSize: "40px 40px",
            }}
          >
            <Lottie
              options={accessibilityOptions}
              className="-z-20"
              height="75vh"
              width="100%"
            />
          </div>
        </div>
      </div>

      {/* mobile responsive */}
      <div className="h-full middle:hidden block">
        <Header color="black" />
        <div className="flex flex-col items-center justify-center">
          <div
            className="flex-1 mt-32 mb-2 flex justify-center items-center w-full pt-2 bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/logoSmall.png")`,
              backgroundSize: "30px 30px",
            }}
          >
            <Lottie
              options={accessibilityOptions}
              className="w-full border-2 border-blue-500 object-contain"
              width="160vw"
              height="40vh"
            />
          </div>
          <div data-aos="fade-up" className="flex-1 bg-black text-white">
            <div className=" px-2  text-center flex items-center justify-center">
              <div className="laptop:text-base desktop:text-xl small:w-10/12 w-full mt-12">
                <span
                  className="text-6xl laptop:text-6xl desktop:text-7xl leading-none"
                  style={{ fontFamily: `${guthen}` }}
                >
                  {pageData.sec1Heading}
                </span>
                <br />
                <span className="laptop:text-3xl desktop:text-3xl text-xl font-bold leading-none">
                  {pageData.page1_subtitle}
                </span>
                <br />
                <br />
                <br />
                <p className=" font-[aftika-light] tracking-wide leading-7 text-base px-10 tablet:px-0 ">
                  {pageData.sec1Desc1}
                </p>
                <br />

                <div className="relative laptop:text-base desktop:text-lg space-y-2 font-normal tablet:mt-0 tablet:-ml-10 mb-6">
                  <div className="flex items-center small:mt-0 mt-4">
                    <button>
                      <Lottie
                        options={contactExpertOptions}
                        width={"40px"}
                        height={"40px"}
                      />
                    </button>{" "}
                    <Link href="/contact">
                      <span className="tablet:absolute tablet:ml-5  font-[aftika-light] tracking-wide leading-7 text-base ml-2 top-6 left-16 cursor-pointer text-left">
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
        id="multimedia"
        className="tablet:px-20 px-8 flex middle:flex-row flex-col items-center bg-default text-white"
      >
        <div className="middle:h-99 h-60 md:h-100 middle:w-112">
          <Lottie options={multimediaOptions} width={"100%"} height="80%" />
        </div>
        <div
          data-aos="fade-up"
          className="middle:text-left text-center middle:mb-0 mb-10"
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
              className="text-6xl desktop:text-8xl text-white font-thin"
              style={{ fontFamily: `${guthen}` }}
            >
              {pageData.sec2Heading}
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
            className="mt-4 text-base tracking-wide middle:text-left middle:w-7/12 text-center"
          >
            {pageData.sec2Desc1}
          </p>
        </div>
      </div>
      {/* page3 */}
      <div id="homeAccessibility">
        <div
          className="h-screen w-screen middle:flex items-center justify-end tablet:px-20 px-8 hidden"
          style={{
            background: `url(${pageData.sec3Bg.data.attributes.url})`,
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
              className="mt-6  font-[aftika-light] tracking-wide leading-7 text-basemiddle:text-left text-center"
            >
              {pageData.sec3Desc1}
            </p>
          </div>
        </div>

        {/* medium responsive */}

        <div className="h-auto middle:hidden flex flex-col items-center justify-end">
          <div className="w-screen h-5/12">
            <img
              src={pageData.sec3BgMobile.data.attributes.url}
              width="100%"
              alt={pageData.sec3BgAlt}
            />
          </div>
          <div
            data-aos="fade-up"
            className="w-full text-center -mt-16 tablet:px-20 px-8 middle:mb-0 mb-10"
          >
            <h2>
              <span
                className="text-7xl desktop:text-8xl text-default font-thin"
                style={{ fontFamily: `${guthen}` }}
              >
                {pageData.sec3Heading}
              </span>
            </h2>
            <h2 className="font-semibold tracking-wide -mt-10 text-4xl">
              {pageData.sec3SubHeading}
            </h2>
            <p className="mt-6  font-[aftika-light] tracking-wide leading-7 text-base middle:text-left text-center">
              {pageData.sec3Desc1}
            </p>
          </div>
        </div>
      </div>
      {/* medium responsive */}

      <Footer />
    </div>
  );
}
