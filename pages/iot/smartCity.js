import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import { BaseUrl } from "../../utils/BaseUrl";

export async function getStaticProps() {
  const res = await fetch(
    `${BaseUrl}/smart-city-pages?populate[0]=sec1BgDesktop,sec1MobileBg,Seo`
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

export default function City({ data }) {
  // console.log(data)
  const guthen = "Guthen Bloots Personal Use";
  return (
    <div>
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
      <Header color={"white"} />
      {/* page 1 */}
      <img
        className="block lg:hidden absolute mt-[5rem] -z-10"
        src={data.sec1MobileBg.data.attributes.url}
        alt="..."
      />
      <div
        data-aos="fade-up"
        className="relative lg:h-[100vh] h-[100%] flex lg:flex-row flex-col items-center justify-center lg:justify-end lg:text-white"
      >
        <img
          className="hidden lg:block absolute -z-10"
          src={data.sec1BgDesktop.data.attributes.url}
          alt="..."
        />

        <div
          className={`relative lg:absolute lg:py-[10vh] -z-10 bg-cover lg:top-0 lg:min-h-[100%] lg:w-[100%] bg-bottom h-[45vh] mt-[10vh] lg:mt-0 w-[100%]  lg:left-0`}
        ></div>
        <div className="lg:w-[60%] py-[4rem] lg:py-0 flex flex-col justify-center items-center h-[100%]">
          <div
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="w-[100%] text-center"
          >
            <p className="lg:text-[3rem] text-[2.7rem] leading-[2.5rem] lg:leading-[2.8rem] font-[aftika-semibold] lg:font-[aftika-bold]">
              {data.sec1Heading11}
            </p>
            <p className="lg:text-[3rem] text-[2.7rem] leading-[2.5rem] font-[aftika-semibold] lg:leading-[2.8rem] lg:font-[aftika-bold]">
              {data.sec1Heading12}
            </p>
            <p
              style={{ fontFamily: `${guthen}` }}
              className="text-blue-700 lg:text-[9rem] text-[7rem] leading-[3.5rem] lg:leading-[4.5rem]"
            >
              {data.sec1Heading13}
            </p>
            <p className="lg:text-[4.5rem] mt-[1.5rem] text-[3rem] leading-[2.5rem] font-[aftika-semibold] lg:leading-[3.8rem] lg:font-[aftika-bold]">
              {data.sec1Heading14}
            </p>
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
            className="w-[100%] flex justify-center items-center px-[10%] text-center lg:text-left lg:px-0 lg:pl-[10%] mt-[2rem]"
          >
            <p className="lg:w-[50%] font-[aftika-extra-light] text-[.8rem]">
              {data.sec1Desc}
            </p>
          </div>
        </div>
      </div>
      {/* page 2 */}
      <div className="flex justify-evenly flex-wrap lg:flex-nowrap lg:px-[5%] py-[3rem] lg:py-0 lg:my-[3rem]">
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
          className="my-[1rem] lg:my-0 px-[2%] w-[45%] lg:w-auto"
        >
          <p
            style={{ fontFamily: `${guthen}` }}
            className="text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]"
          >
            {data.sec2PartaHeading}
          </p>
          <p className="font-[aftika-bold] tracking-wider">
            {data.sec2PartaSubHeading}
          </p>
          <p className="font-[aftika-extra-light] font-bold pt-[.8rem]">
            {data.sec2PartaDesc}
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
            hidden: { opacity: 0, scale: 0 },
          }}
          className="my-[1rem] lg:my-0 px-[2%] w-[45%]  lg:w-auto"
        >
          <p
            style={{ fontFamily: `${guthen}` }}
            className="text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]"
          >
            {data.sec2PartbHeading}
          </p>
          <p className="font-[aftika-bold] tracking-wider">
            {data.sec2PartbSubHeading}
          </p>
          <p className="font-[aftika-extra-light] font-bold pt-[.8rem]">
            {data.sec2PartbDesc}
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
            hidden: { opacity: 0, scale: 0 },
          }}
          className="my-[1rem] lg:my-0 px-[2%]  w-[45%] lg:w-auto"
        >
          <p
            style={{ fontFamily: `${guthen}` }}
            className="text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]"
          >
            {data.sec2PartcHeading}
          </p>
          <p className="font-[aftika-bold] tracking-wider">
            {data.sec2PartcSubHeading}
          </p>
          <p className="font-[aftika-extra-light] font-bold pt-[.8rem]">
            {data.sec2PartcDesc}
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
            hidden: { opacity: 0, scale: 0 },
          }}
          className="my-[1rem] lg:my-0 px-[2%]  w-[45%] lg:w-auto"
        >
          <p
            style={{ fontFamily: `${guthen}` }}
            className="text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]"
          >
            {data.sec2PartdHeading}
          </p>
          <p className="font-[aftika-bold] tracking-wider">
            {data.sec2PartdSubHeading}
          </p>
          <p className="font-[aftika-extra-light] font-bold pt-[.8rem]">
            {data.sec2PartdDesc}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
