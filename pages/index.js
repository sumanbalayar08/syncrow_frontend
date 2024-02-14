/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Header from "../components/header";
import Footer from "../components/footer";
import ProvideConvenience from "../components/ProvideConvenience";
import Head from "next/head";
import Lottie from "react-lottie";
import circleAnimation from "./lotties/circle.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Link from "next/link";
import {
  Link as ScrollLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import "swiper/css";
import "swiper/css/pagination";
import HomeBanner from "../components/HomeBanner";
import styles from "../styles/Home.module.css";
import AutomateHome from "../components/AutomateHome";
import Salesiq from "./salesiq";

import { marked } from "marked";
import style from "./style.module.css";
import { BaseUrl } from "../utils/BaseUrl";

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${BaseUrl}/home-pages?populate[0]=carousel,section2Img,worryLessElements,seo,sec5StarterImg&populate[1]=carousel.bannerImg,carousel.redirectElement,worryLessElements.image,sec5Girl`
    );
    const testimonialsRes = await fetch(
      `${BaseUrl}/testimonials?populate[0]=img`
    );
    const response = await res.json();
    const testimonialsResponse = await testimonialsRes.json();
    var data = response.data[0].attributes;
    var testimonialData = testimonialsResponse.data;
    return {
      props: {
        data,
        testimonialData,
      },
      revalidate: 1,
    };
  } catch (e) {
    console.log(e);
  }
}

export default function Home({ data, testimonialData }) {
  const [active, setActive] = useState(0);
  const [page, setpage] = useState(0);

  const section5StarterData = {
    sec5Girl: data.sec5Girl,
    sec5StarterHeading: data.sec5StarterHeading,
    sec5StarterSubHeading: data.sec5StarterSubHeading,
    sec5StarterImg: data.sec5StarterImg,
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: circleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  var changePage = (option) => {
    var newpage = page;
    if (option === "next") {
      newpage = page + 1;
      setpage(newpage);
      scroller.scrollTo(newpage.toString(), {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    } else if (option === "prev") {
      newpage = page - 1;
      setpage(newpage);
      scroller.scrollTo(newpage.toString(), {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };
  useEffect(() => {
    changePage();
  });
  const guthen = "Guthen Bloots Personal Use";

  // console.log(data)
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <link
          rel="icon"
          href="https://ik.imagekit.io/jason7531/syncrow/common/Group_1_rkAObjd65.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642343317149"
        />
        <style>
          @import
          url(https://fonts.cdnfonts.com/css/guthen-bloots-personal-use);
        </style>
      </Head>

      {/* <Salesiq widgetCode={"5d136296e304ee64ead63634da3bd69f3b95c4131260019df2489d69ced4eb0ffa14704ef2df77eda1b54c0e181d4d05"} domain={"https://salesiq.zoho.com/widget"} /> */}

      <Element name="0">
        <div className="h-screen relative">
          <Header color="white" />

          <div className="">
            <Carousel
              infiniteLoop
              autoPlay={false}
              showStatus={false}
              showIndicators={true}
              showArrows={false}
              showThumbs={false}
              swipeable={false}
              renderArrowPrev={(clickHandler, hasPrev, labelPrev) => {
                return (
                  <button
                    className="text-white text-[1.5rem] lg:text-[2rem] absolute z-10 lg:left-[5%]  left-[2%] top-[50%]"
                    onClick={clickHandler}
                  >
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                );
              }}
              renderArrowNext={(clickHandler, hasPrev, labelPrev) => {
                return (
                  <button
                    className="text-white text-[1.5rem] lg:text-[2rem] absolute z-10 lg:right-[5%] right-[2%] top-[50%]"
                    onClick={clickHandler}
                  >
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                );
              }}
            >
              {data.carousel.map((element, index) => {
                return (
                  <div
                    key={index}
                    className="w-[100%] h-[100vh] max-h-1500 relative flex justify-center items-center"
                  >
                    <img
                      style={{
                        objectPosition: `${element.bannerImgMobileAdjustmentInPercentage}`,
                      }}
                      className={`hidden lg:block -z-10 absolute w-[100%] h-[100%] object-cover`}
                      src={element.bannerImg.data.attributes.url}
                      alt="..."
                    />

                    <div className="flex flex-col lg:pt-[20vh] items-end w-[100%] lg:w-[80%] text-white p-[2rem] lg:p-0">
                      <div className="flex items-center w-[100%] lg:mb-0 mb-[3rem]">
                        <p
                          style={{ fontFamily: `${guthen}` }}
                          className="text-[3rem] lg:w-[50%] lg:text-right lg:text-[7rem] "
                        >
                          Effortlessly
                        </p>
                        <span className="text-[1rem] lg:text-[3rem] items-center lg:w-[50%] lg:text-left lg:leading-none lg:pt-8 tracking-wide text-left pl-3 font-light ">
                          smart,
                          <br />
                          convenient
                        </span>
                      </div>
                      <div className="flex lg:w-[50%] flex-col lg:pl-3 lg:pt-8">
                        <p className="text-[2.3rem] leading-tight tracking-widest mb-5 text-left font-semibold">
                          {element.heading2}
                        </p>
                        <p className="text-left text-[.9rem] font-[aftika-extra-light] tracking-wide lg:pb-2">
                          {element.heading3}
                        </p>
                        <p className="text-left font-bold tracking-widest">
                          {element.redirectElement.map((data, index) => {
                            return (
                              <Link key={index} href={data.redirectLink}>
                                <a>
                                  <span>{data.heading}</span>
                                  {index + 1 !==
                                    element.redirectElement.length && (
                                    <span className="text-blue-900 mx-[.8rem]">
                                      |
                                    </span>
                                  )}
                                </a>
                              </Link>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </Element>

      {/*page2*/}
      <Element name="1">
        <div className="relative flex flex-col-reverse lg:flex-col lg:justify-center text-white lg:max-h-[1200px] lg:min-h-[100vh] w-[100%] lg:pl-[10%] lg:pt-[5%]">
          {/* desktop img */}
          <img
            className="relative lg:absolute h-[80vh] lg:h-[100%] lg:-z-10 lg:top-0 lg:left-0 w-[100%] object-cover"
            src={data.section2Img.data.attributes.url}
            alt="..."
          />
          {/* mobile img */}
          {/* <img className="block lg:hidden relative lg:h-[100%] lg:-z-10 w-[100%] object-cover" src="/home-upgrade-m.png" alt="..." /> */}
          <div className="relative p-[2rem] bg-[#616A6B] lg:bg-[#00000000] lg:p-0">
            <p
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              style={{ fontFamily: `${guthen}` }}
              data-aos="fade-up"
              className=" lg:text-[6rem] text-[4rem] text-center lg:text-left"
            >
              Upgrade
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
              className=" lg:text-[1.3rem] text-[1rem] font-[aftika-light] tracking-wide text-center lg:text-left lg:w-[50%]"
            >
              your space and enjoy the benefits of{" "}
              <span
                style={{ fontFamily: `${guthen}` }}
                className="lg:text-[1.6rem] px-[.7rem]"
              >
                Upgraded
              </span>{" "}
              security, safety and energy efficiency conveniently from a single
              hub.
            </p>
          </div>
        </div>
      </Element>

      {/* page4 */}
      <Element name="3">
        <AutomateHome />
      </Element>

      {/*page5*/}

      {/* <Element name="4"></Element> */}

      {/*page5*/}
      {/*page3*/}
      <Element name="2">
        <div className="tablet:mx-20 -mt-5 mx-10 mb-24">
          <div className="laptop:flex items-center justify-center mb-2 hidden">
            <h1 data-aos="fade-up" className="tablet:text-4xl text-3xl">
              {" "}
              <span
                className="tablet:text-7xl text-5xl"
                style={{ fontFamily: `Guthen Bloots Personal Use` }}
              >
                Worry
              </span>{" "}
              less with wireless
            </h1>
          </div>
          <div
            data-aos="fade-up"
            className="flex laptop:hidden items-baseline justify-center mb-2 mt-16"
          >
            <span className="font-guthen mr-[.5rem] tablet:text-7xl extrasmall:text-6xl text-6xl">
              Worry
            </span>
            <h1 className="text-[.9rem] flex justify-center items-center">
              less with wireless
            </h1>
          </div>
          {/* desktop */}

          <div
            data-aos="fade-up"
            className="gap-8 middle:flex hidden desktop:mx-56"
          >
            {data.worryLessElements.map((element, index) => {
              var htmlData = marked.parse(element.data);
              return (
                <div key={index} className="tablet:w-1/3 w-full">
                  <img
                    src={element.image.data.attributes.url}
                    className="w-full desktop:h-98 h-80 object-cover rounded-t-3xl"
                    alt=""
                  />
                  <div className="bg-blue-700 -mt-2 rounded-b-3xl desktop:h-85 mediumLarge:h-98  medium:h-99 relative  h-[580px] xs:h-[510px]">
                    <h2 className="uppercase pt-6 pb-2 text-white px-8 text-3xl font-semibold">
                      {element.heading}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: htmlData }}
                      className={
                        "px-8 text-white " +
                        style.worryLessMarkdownMobileWrapper
                      }
                    ></div>

                    <Link href="/contact">
                      <button className="capitalize mx-8 bg-white text-blue-700 rounded-lg py-2 px-6 my-8 absolute bottom-0  font-[aftika-bold]">
                        ask an expert
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* mobile */}
          </div>

          <div
            data-aos="fade-up"
            className="middle:hidden flex middle:rounded-none rounded-b-3xl"
          >
            <Swiper
              modules={[Pagination]}
              className={`${styles.swiper} mySwiper`}
              pagination={{
                dynamicBullets: true,
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className}">${index}</span>`;
                },
              }}
            >
              {data.worryLessElements.map((element, index) => {
                var htmlData = marked.parse(element.data);
                return (
                  <SwiperSlide key={index} className="pb-[2rem]">
                    <div className="flex items-center justify-center rounded-2xl">
                      <div className="relative w-full tablet:w-3/4 h-full rounded-b-3xl">
                        <img
                          src={element.image.data.attributes.url}
                          className="w-full"
                          alt=""
                        />
                        <div className="bg-blue-700 -mt-2 rounded-b-3xl flex flex-col items-center h-[580px] xs:h-[510px]">
                          <h2 className="uppercase py-10 text-white px-8 text-[1.6rem] font-semibold tracking-wide">
                            {element.heading}
                          </h2>
                          <div
                            dangerouslySetInnerHTML={{ __html: htmlData }}
                            className={
                              "px-8 text-white text-center text-[.9rem] " +
                              style.worryLessMarkdownMobileWrapper
                            }
                          ></div>

                          <Link href="/contact">
                            <button className="capitalize mx-8 bg-white text-blue-700 rounded-lg py-2 px-6 my-2 absolute bottom-0  font-[aftika-bold]">
                              ask an expert
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Element>

      <Element name="4">
        {/* desktop  */}
        <ProvideConvenience data={section5StarterData} />
      </Element>

      {/*page6 testimonials*/}
      <Element name="5">
        {" "}
        <div
          data-aos="fade-up"
          className="testimonials mt-60 mb-14 container px-4 md:px-24 mx-auto "
        >
          <span
            data-aos="fade-up"
            className="text-5xl text-center md:text-right mb-5"
            style={{ fontFamily: `${guthen}` }}
          >
            Testimonials
          </span>

          <Swiper
            modules={[Pagination]}
            pagination={{
              dynamicBullets: true,
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}">${index}</span>`;
              },
            }}
            // showsPagination={true}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            // onSlideChange={() => console.log("slide change")}
            className="grid grid-cols-3 gap-5 "
          >
            {testimonialData &&
              testimonialData.map((element, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="laptop:text-sm pb-[2rem] leading-6 desktop:text-base"
                  >
                    <img
                      src={element.attributes.img.data.attributes.url}
                      alt="..."
                    />
                    <br />
                    <span className="">{element.attributes.text}</span>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </Element>
      <Footer />
    </div>
  );
}
