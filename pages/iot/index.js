import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import Head from "next/head";
import { BaseUrl } from "../../utils/BaseUrl";
export async function getStaticProps() {
  const res = await fetch(
    `${BaseUrl}/iot-pages?populate[0]=sec1Bg,sec2Bg,sec3Bg,sec4Bg,Seo`
  );
  const response = await res.json();
  var data = response.data[0].attributes;
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
export default function IOT({ data }) {
  const guthen = "Guthen Bloots Personal Use";
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>{data.Seo.title}</title>
        <meta name="description" content={data.Seo.description} />
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
      <Header color="black"></Header>

      <div className="flex mx-8 tablet:mx-16 items-center tablet:items-start gap-0 middle:gap-12 flex-col middle:flex-row">
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
          className="flex-1  middle:mt-52 mt-44"
        >
          <h1 className="text-4xl tablet:text-6xl middle:text-8xl font-semibold leading-none capitalize desktop:w-3/5">
            {data.sec1Heading11}
            <span
              className="text-default text-5xl tablet:text-7xl middle:text-9xl font-normal leading-3"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}
            >
              &nbsp; {data.sec1Heading12} &nbsp;
            </span>
          </h1>
          <h1 className="text-4xl tablet:text-6xl middle:text-8xl font-semibold leading-none capitalize desktop:w-3/5">
            {data.sec1Heading13}
          </h1>
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
          className="flex-1 middle:mt-52 mt-10"
        >
          <p className="tablet:w-5/6 w-full text-lg text-black font-normal tablet:text-left text-center">
            {data.sec1Desc1}
            <br />
            <br />
            {data.sec1Desc2}
          </p>
        </div>
      </div>

      <div className="tablet:mx-8  w-[100%] mx-8 mt-10 tablet:mt-28">
        <img
          src={data.sec1Bg.data.attributes.url}
          alt={data.sec1BgAlt}
          className="w-[95vw] object-cover"
        />
      </div>
      {/* page2 */}
      <div className="tablet:mx-16 my-20">
        <div className="mx-8 flex middle:items-start items-center middle:flex-row middle:gap-0 gap-10 flex-col">
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
            className="flex-1 flex items-center flex-col mt-32 z-0 "
          >
            <div className="hidden md:block">
              <h1 className="text-3xl font-[aftika-semibold] mb-12 ml-20">
                {data.sec2Heading11}
              </h1>
              <h1>
                <span
                  className="text-default text-10xl  desktop:text-11xl font-normal leading-3"
                  style={{ fontFamily: `Guthen Bloots Personal Use` }}
                >
                  {data.sec2Heading12}
                </span>
              </h1>
              <h1 className="text-4xl font-[aftika-semibold] ml-[252px]">
                {data.sec2Heading13}
              </h1>
            </div>
            <div className="md:hidden">
              <h1 className="text-3xl font-[aftika-bold] font-bold mb-8 ml-4">
                {data.sec2Heading11}
              </h1>
              <h1>
                <span
                  className="text-default text-8xl font-normal leading-3"
                  style={{ fontFamily: `Guthen Bloots Personal Use` }}
                >
                  {data.sec2Heading12}
                </span>
              </h1>
              <h1 className="text-4xl  font-semibold ml-20 mt-2">
                {data.sec2Heading13}
              </h1>
            </div>
            <Link href={"/smart-home-iot-solutions"}>
              <button className="text-white bg-default w-44 laptop:text-lg desktop:text-xl rounded-md py-2 mt-10">
                {data.sec2Button}
              </button>
            </Link>
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
            className="flex-1 flex justify-center middle:justify-end"
          >
            <p className="text-lg text-black w-5/6 tablet:text-left z-10 tracking-wide text-center">
              {data.sec2Desc1}
              <br />
              <br />
              {data.sec2Desc2}
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="-mt-0 laptop:-mt-[30%] relative -z-10"
        >
          <img
            src={data.sec2Bg.data.attributes.url}
            alt={data.sec2BgAlt}
            width="100%"
          />
        </div>
      </div>

      {/* page3 */}
      <div className="relative mb-32">
        {/* responsive */}
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
          className="flex items-center justify-center laptop:hidden "
        >
          <div className="">
            <h1 className="text-3xl font-[aftika-bold] font-bold mb-8 ml-4">
              {data.sec3Heading11}
            </h1>
            <h1>
              <span
                className="text-default text-8xl font-normal leading-3"
                style={{ fontFamily: `Guthen Bloots Personal Use` }}
              >
                {data.sec3Heading12}
              </span>
            </h1>
            <h1 className="text-4xl  font-semibold ml-20 mt-2">
              {data.sec3Heading13}
            </h1>
          </div>
        </div>
        {/* responsive */}
        <div className="mx-8 tablet:mx-16 my-10 flex justify-center laptop:flex-row flex-col-reverse laptop:gap-14 gap-6">
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
            className="flex-initial laptop:w-1/3 w-full"
          >
            <p className="text-lg font-semibold text-black laptop:mt-16 mt-0 tablet:text-left tracking-wide text-center">
              {data.sec3Desc1}
              <br />
              <br />
              {data.sec3Desc2}
              <br />
              <br />
              {data.sec3Desc3}
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="flex-1 flex items-center justify-center"
          >
            <img
              src={data.sec3Bg.data.attributes.url}
              alt={data.sec3BgAlt}
              width="100%"
              height="100%"
              className="desktop:w-4/5"
            />
          </div>
        </div>
        <div
          initial="hidden"
          whileinview="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="mx-8 tablet:mx-16 absolute -bottom-20 right-24 laptop:block hidden"
        >
          <h1 className="text-3xl font-[aftika-semibold] mb-12 ml-16">
            {data.sec3Heading11}
          </h1>
          <h1>
            <span
              className="text-default text-10xl  desktop:text-11xl font-normal leading-3"
              style={{ fontFamily: `Guthen Bloots Personal Use` }}
            >
              {data.sec3Heading12}
            </span>
          </h1>
          <h1 className="text-4xl font-[aftika-semibold] ml-44">
            {data.sec3Heading13}
          </h1>
          <Link href={"/iot/industrial-iot-solutions"}>
            <button className="text-white bg-default w-44 laptop:text-lg desktop:text-xl rounded-md py-2 mt-10">
              {data.sec2Button}
            </button>
          </Link>
        </div>
      </div>
      <div className="tablet:mx-16 my-20">
        <div className="mx-8 flex middle:items-start items-center middle:flex-row middle:gap-0 gap-10 flex-col">
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
            className="flex-1 flex items-center flex-col mt-32 z-0 "
          >
            <h1>
              <span
                className="text-default text-[9rem] font-normal leading-[7rem]"
                style={{ fontFamily: `Guthen Bloots Personal Use` }}
              >
                {data.sec4Heading11}
              </span>
            </h1>
            <h1 className="text-[1.5rem]  lg:text-right lg:w-[40%] font-[aftika-bold]">
              {data.sec4Heading12}
            </h1>
            <Link href={"/iot/smartCity"}>
              <button className="text-white bg-default w-44 laptop:text-lg desktop:text-xl rounded-md py-2 mt-10">
                {data.sec2Button}
              </button>
            </Link>
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
            className="flex-1 flex justify-center middle:justify-end"
          >
            <p className="text-lg text-black w-5/6 tablet:text-left  tracking-wide text-center">
              {data.sec4Desc1}
              <br />
              <br />
              {data.sec4Desc2}
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="-mt-0 laptop:-mt-10 relative middle:-mt-20 -z-10"
        >
          <img
            src={data.sec4Bg.data.attributes.url}
            alt={data.sec4BgAlt}
            width="100%"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
