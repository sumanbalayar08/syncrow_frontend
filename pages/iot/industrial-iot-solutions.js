import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import { BaseUrl } from "../../utils/BaseUrl";
import Lottie from "react-lottie";
import IndustrialIotSolutionSec3 from "../lotties/industrial-iot-solution-sec3.json";
export async function getStaticProps() {
  const res = await fetch(
    `${BaseUrl}/industrial-pages?populate[0]=sec1Bg,sec3Bg,sec4BgDesktop,sec4BgMobile,sec4Logo,Seo`
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

export default function Industry({ data }) {
  // console.log(data.sec5PartaHeading);
  const guthen = "Guthen Bloots Personal Use";

  const IndustrialIotSolutionSec3Option = {
    loop: true,
    autoplay: true,
    animationData: IndustrialIotSolutionSec3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

      <div className="h-auto relative">
        <Header />
        {/* page 1 */}
        <div
          data-aos="fade-up"
          className="lg:min-h-[100vh] flex lg:flex-row flex-col justify-center items-center"
        >
          <div className="relative w-[100%] pt-[10vh] lg:w-[42%] lg:mr-[5%]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src={data.sec1Bg.data.attributes.url}
              alt={data.sec1BgAlt}
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
              className="lg:absolute -mt-[20%] lg:-mt-0 mb-[1rem] w-[100%] lg:w-[210%] lg:bottom-[-20%]"
            >
              <p className="font-[aftika-bold] text-center lg:text-left w-[100%] text-[2rem]  lg:text-[4rem] lg:leading-[2rem]">
                {data.sec1Heading11}
              </p>
              <div className="flex lg:flex-row flex-col lg:items-center lg:pl-[10%]">
                <p
                  style={{ fontFamily: `${guthen}` }}
                  className="text-blue-700 text-[4rem] leading-[4.3rem] text-center lg:text-left lg:text-[7rem] lg:leading-[8rem]"
                >
                  {data.sec1Heading12}
                </p>
                <p className="font-[aftika-bold] text-[2rem] leading-[1.8rem] text-center lg:text-left lg:text-[4rem]">
                  {data.sec1Heading13}
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
            className="relative lg:w-[42%] w-[80%] text-center "
          >
            <p className="lg:w-[80%] py-[1rem]">{data.sec1Desc1}</p>
            <p className="lg:w-[80%] py-[1rem]">{data.sec1Desc2}</p>
          </div>
        </div>

        {/* page 2 */}
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
          className="flex items-center flex-col mt-[5rem] px-[10%] lg:px-[25%]"
        >
          <p className="font-[aftika-bold] mb-[1rem] text-[1.3rem] lg:text-[1.5rem] w-[100%] text-center">
            {data.sec2Heading}
          </p>
          <ul className="w-[80%] list-disc">
            <li className="text-blue-700 text-[1.4rem]">
              <span className="text-black text-[1rem] pb-[.5rem]">
                {data.sec2Desc1}
              </span>
            </li>
            <li className="text-blue-700 text-[1.4rem]">
              <span className="text-black text-[1rem] pb-[.5rem]">
                {data.sec2Desc2}
              </span>
            </li>
            <li className="text-blue-700 text-[1.4rem]">
              <span className="text-black text-[1rem] pb-[.5rem]">
                {data.sec2Desc3}
              </span>
            </li>
            <li className="text-blue-700 text-[1.4rem]">
              <span className="text-black text-[1rem] pb-[.5rem]">
                {data.sec2Desc4}
              </span>
            </li>
            <li className="text-blue-700 text-[1.4rem]">
              <span className="text-black text-[1rem] pb-[.5rem]">
                {data.sec2Desc5}
              </span>
            </li>
          </ul>
        </div>

        {/* page 3 */}
        <div
          data-aos="fade-up"
          className="flex flex-col lg:flex-row mt-[3rem] w-[100%] justify-center items-center"
        >
          <div className="lg:w-[40%]">
            <Lottie options={IndustrialIotSolutionSec3Option} />
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
            className="lg:w-[50%] px-[2rem] lg:px-0 text-center lg:text-left lg:pr-[10%]"
          >
            <p className="mb-[1rem]">{data.sec3Desc1}</p>
            <p className="mb-[1rem]">{data.sec3Desc2}</p>
            <ul className="list-disc pl-[25%] lg:pl-[1.5rem] mb-[1rem]">
              <li className="text-blue-700 text-[1.5rem] text-left leading-[1.4rem]">
                <span className="text-black text-[1rem]">
                  {data.sec3Point1}
                </span>
              </li>
              <li className="text-blue-700 text-[1.5rem] text-left leading-[1.4rem]">
                <span className="text-black text-[1rem]">
                  {data.sec3Point2}
                </span>
              </li>
              <li className="text-blue-700 text-[1.5rem] text-left leading-[1.4rem]">
                <span className="text-black text-[1rem]">
                  {data.sec3Point3}
                </span>
              </li>
            </ul>
            <p>{data.sec3Desc3}</p>
          </div>
        </div>

        {/* page 4 */}
        <div className="mt-[4rem]">
          <div data-aos="fade-up" className="relative lg:min-h-[100vh]">
            <div className="relative lg:absolute -z-10 lg:w-[100%] h-[70vh] lg:pl-10  lg:h-[100%] bg-cover ">
              <img
                className="absolute w-[100%] h-[100%] -z-10 object-cover"
                src={data.sec4BgDesktop.data.attributes.url}
              />
              <div
                initial="hidden"
                whileinview="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                className=" mb-[2.5rem] lg:mb-0 w-[100%] flex flex-col md:flex-row pt-10 justify-center lg:justify-start lg:relative bottom-5 lg:pt-[4rem]"
              >
                <div className="flex items-center justify-center">
                  <img
                    className="w-[20%] h-[40%] md:w-[60%] md:pl-4 lg:px-0 md:h-[60%]"
                    src={data.sec4Logo.data.attributes.url}
                    alt={data.sec4LogoAlt}
                  />
                </div>
                <div className="pt-8 md:pt-0">
                  <p className="font-[aftika-bold] text-[2rem] leading-[1rem] text-center md:text-left lg:text-[2.5rem] lg:leading-[1.5rem]">
                    {data.sec4Heading11}
                  </p>
                  <p className="font-[aftika-bold] text-[4rem] text-center md:text-left lg:text-[5rem]">
                    {data.sec4Heading12}
                  </p>
                  <p className="font-[aftika-bold] text-[2rem] leading-[2rem] text-center md:text-left lg:text-[2.5rem] lg:leading-[1.5rem]">
                    {data.sec4Heading13}
                  </p>
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
                className="hidden w-[100%] pt-[10%] h-[100%] lg:flex"
              >
                <div className="w-[30%] mx-[5%]">
                  <p
                    style={{ fontFamily: `${guthen}` }}
                    className="text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]"
                  >
                    {data.sec4PartaHeading}
                  </p>
                  <p className="font-[aftika-bold] tracking-wider">
                    {data.sec4PartaSubHeading}
                  </p>
                  <p className="font-[aftika-extra-light] font-bold pt-[.8rem]">
                    {data.sec4PartaDesc}
                  </p>
                </div>

                <div className="w-[25%]">
                  <p
                    style={{ fontFamily: `${guthen}` }}
                    className="text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]"
                  >
                    {data.sec4PartbHeading}
                  </p>
                  <p className="font-[aftika-bold] tracking-wider">
                    {data.sec4PartbSubHeading}
                  </p>
                  <p className="font-[aftika-extra-light] font-bold pt-[.8rem]">
                    {data.sec4PartbDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* desktop  */}
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
            className="hidden lg:flex py-[5rem]"
          >
            <div className="w-[30%] mx-[5%]">
              <p
                style={{ fontFamily: `${guthen}` }}
                className="text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]"
              >
                {data.sec5PartaHeading}
              </p>
              <p className="font-[aftika-bold] tracking-wider">
                {data.sec5PartaSubHeading}
              </p>
              <p className="font-[aftika-extra-light] font-bold pt-[.8rem]">
                {data.sec5PartaDesc}
              </p>
            </div>

            <div className="w-[50%]">
              <p
                style={{ fontFamily: `${guthen}` }}
                className="text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]"
              >
                {data.sec5PartbHeading}
              </p>
              <p className="font-[aftika-bold] tracking-wider">
                {data.sec5PartbSubHeading}
              </p>
              <p className="font-[aftika-extra-light] font-bold pt-[.8rem]">
                {data.sec5PartbDesc}
                <br />
                <br />
                {data.sec5PartbDesc2}
              </p>
            </div>
          </div>
          {/* mobile  */}
          <div data-aos="fade-up" className="block lg:hidden py-[2rem]">
            <div
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex justify-center"
            >
              <div className="w-[50%]">
                <p
                  style={{ fontFamily: `${guthen}` }}
                  className="text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]"
                >
                  {data.sec5PartaHeading}
                </p>
                <p className="font-[aftika-bold] text-[.8rem] tracking-wider">
                  {data.sec5PartaSubHeading}
                </p>
                <p className="font-[aftika-extra-light] text-[.8rem] font-bold pt-[.8rem]">
                  {data.sec5PartaDesc}
                </p>
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
              className="flex justify-evenly py-[3rem]"
            >
              <div className="w-[40%]">
                <div className="w-[100%]">
                  <p
                    style={{ fontFamily: `${guthen}` }}
                    className="text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]"
                  >
                    {data.sec5PartbHeading}
                  </p>
                  <p className="font-[aftika-bold] text-[.8rem] tracking-wider">
                    {data.sec5PartbSubHeading}
                  </p>
                  <p className="font-[aftika-extra-light] text-[.8rem] font-bold pt-[.8rem]">
                    {data.sec5PartbDesc}
                    <br />
                    <br />
                    {data.sec5PartbDesc2}
                  </p>
                </div>
              </div>
              <div className="w-[40%]">
                <div className="w-[100%]">
                  <p
                    style={{ fontFamily: `${guthen}` }}
                    className="text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]"
                  >
                    {data.sec4PartbHeading}
                  </p>
                  <p className="font-[aftika-bold] text-[.8rem] tracking-wider">
                    {data.sec4PartbSubHeading}
                  </p>
                  <p className="font-[aftika-extra-light] text-[.8rem] font-bold pt-[.8rem]">
                    {data.sec4PartbDesc}
                  </p>
                </div>
                <div className="w-[100%] mt-[40%] mx-[5%]">
                  <p
                    style={{ fontFamily: `${guthen}` }}
                    className="text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]"
                  >
                    {data.sec5PartaHeading}
                  </p>
                  <p className="font-[aftika-bold] text-[.8rem] tracking-wider">
                    {data.sec5PartaSubHeading}
                  </p>
                  <p className="font-[aftika-extra-light] text-[.8rem] font-bold pt-[.8rem]">
                    {data.sec5PartaDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
