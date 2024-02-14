import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import { BaseUrl } from "../utils/BaseUrl";

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${BaseUrl}/about-pages?populate[0]=sec1Bg,sec4LeftImg,sec3DesktopBg,sec3MobileBg,Seo,TeamSecimg1,TeamDirImg1,TeamDirImg2`
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

const About = (props) => {
  const guthen = "Guthen Bloots Personal Use";
  const pageData = props;
  // console.log(pageData.data.Seo.title)
  return (
    <>
      <Head>
        <title>{pageData.data.Seo.title}</title>
        <meta name="description" content={pageData.data.Seo.description} />
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

      <div className=" flex flex-col pt-10 md:pt-0 lg:flex-row justify-center lg:justify-evenly bg-[#00000050] text-white lg:items-center min-h-[100vh] relative">
        <img
          className="absolute w-full h-full -z-10 object-cover"
          src={pageData.data.sec1Bg.data.attributes.url}
          alt=""
        />
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
          className="lg:w-[30%]"
        >
          <h3
            style={{ fontFamily: `${guthen}` }}
            className="lg:text-[9rem] text-center lg:text-left lg:leading-[8rem] text-[4rem] leading-[3.8rem] pt-[5rem] lg:pt-0"
          >
            {pageData.data.sec1Heading}
          </h3>
          <p className="lg:text-[4rem] lg:leading-[3.5rem] lg:pl-[3rem] lg:-mt-[1rem] text-center text-[1.5rem]  lg:text-left px-[2rem] lg:px-0">
            {pageData.data.sec1SubHeading}
          </p>
        </div>
        <div data-aos="fade-up" className="lg:w-[30%] mt-[2rem] lg:mt-0">
          <p
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className=" font-thin lg:font-medium py-[.5rem] lg:py-0 text-center lg:text-left px-[2rem] lg:px-0"
          >
            {pageData.data.sec1Desc1}
          </p>
          <br />
          <p
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className=" font-thin lg:font-medium py-[.5rem] lg:py-0 text-center lg:text-left px-[2rem] lg:px-0"
          >
            {pageData.data.sec1Desc2}
          </p>
          <br />
          <p
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className=" font-thin lg:font-medium py-[.5rem] lg:py-0 text-center lg:text-left px-[2rem] lg:px-0"
          >
            {pageData.data.sec1Desc3}
          </p>
        </div>
      </div>

      {/* page 2 */}
      <div className="text-white bg-blue-700 py-[5vh] px-[9vw] lg:py-[10vh] lg:px-[10vw]">
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
          className="text-left lg:text-[3rem] text-[2rem]  font-medium lg:leading-[3rem] "
        >
          {pageData.data.sec2Text}
        </p>
      </div>

      {/* page 3 */}
      <div className="relative bg-[#000] lg:bg-[#00000000] z-0 text-white lg:min-h-[120vh] min-h-[100vh] flex flex-col lg:flex-row lg:justify-center">
        {/* desktop img  */}
        <img
          className="absolute hidden lg:block lg:w-full lg:h-[130%] lg:top-0 lg:left-0 -z-40"
          src={pageData.data.sec3DesktopBg.data.attributes.url}
          alt={pageData.data.sec3DesktopBgAlt}
        />
        {/* mobile image  */}
        <img
          className="absolute block lg:hidden min-h-[30vh] lg:w-full lg:h-full lg:top-0 lg:left-0 -z-10"
          src={pageData.data.sec3MobileBg.data.attributes.url}
          alt={pageData.data.sec3DesktopBgAlt}
        />
        <div className="lg:w-[20vw] flex flex-col justify-center">
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
            className="pt-[5vh] lg:py-0 h-[30vh] lg:h-auto"
          >
            <p className="lg:text-[3rem] text-[1.5rem] font-medium  text-center lg:text-left">
              {pageData.data.sec3Heading1}
            </p>
            <h3
              style={{ fontFamily: `${guthen}` }}
              className="lg:text-[6rem] text-center lg:text-left lg:leading-[5rem] text-[3.5rem] leading-[3.2rem]"
            >
              {pageData.data.sec3SubHeading1}
            </h3>
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
            className="text-center mt-[10rem] lg:mt-0 lg:text-left p-[2rem] lg:p-0"
          >
            <p className="lg:pt-[2rem]">{pageData.data.sec3Text11}</p>
            <p className="pt-[1rem] lg:pt-0">{pageData.data.sec3Text12}</p>
          </div>
        </div>
        <div className="lg:w-[60vw] lg:py-[4rem] py-[3rem] flex lg:h-[85vh] flex-wrap justify-center items-start">
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
            className="lg:w-[29vw] w-[45%] lg:px-[2rem] px-[.5rem] py-[.5rem] lg:py-0"
          >
            <p className="font-medium font-guthen mb-[.5rem] text-[1.5rem]  lg:text-[3rem]">
              {pageData.data.sec3Heading2}
            </p>
            <p className="text-[.7rem] lg:text-[.8rem]">
              {pageData.data.sec3Text2}
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
            className="lg:w-[29vw] w-[45%] lg:px-[2rem] px-[.5rem] py-[.5rem] lg:py-0"
          >
            <p className="font-medium font-guthen mb-[.5rem] text-[1.5rem]  lg:text-[3rem]">
              {pageData.data.sec3Heading3}
            </p>
            <p className="text-[.7rem] lg:text-[.8rem]">
              {pageData.data.sec3Text3}
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
            className="lg:w-[29vw] w-[45%] lg:px-[2rem] px-[.5rem] py-[.5rem] lg:py-0"
          >
            <p className="font-medium font-guthen mb-[.5rem] text-[1.5rem]  lg:text-[3rem]">
              {pageData.data.sec3Heading4}
            </p>
            <p className="text-[.7rem] lg:text-[.8rem]">
              {pageData.data.sec3Text4}
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
            className="lg:w-[29vw] w-[45%] lg:px-[2rem] px-[.5rem] py-[.5rem] lg:py-0"
          >
            <p className="font-medium font-guthen mb-[.5rem] text-[1.5rem]  lg:text-[3rem]">
              {pageData.data.sec3Heading5}
            </p>
            <p className="text-[.7rem] lg:text-[.8rem]">
              {pageData.data.sec3Text5}
            </p>
          </div>
        </div>
      </div>

    {/* Team */}

    <div className="relative bg-[#fff] lg:bg-[#fff] z-0 lg:min-h-[120vh] min-h-[100vh] flex flex-col team-area">
      {/* desktop img  */}
      {/* <img
          className="absolute hidden lg:block lg:w-full lg:h-[130%] lg:top-0 lg:left-0 -z-40"
          src={pageData.data.TeamSecimg1.data.attributes.url}
          alt={pageData.data.TeamSecimg1}
        /> */}
        {/* mobile image  */}
        {/* <img
          className="absolute block lg:hidden min-h-[30vh] lg:w-full lg:h-full lg:top-0 lg:left-0 -z-10"
          src={pageData.data.TeamSecimg1.data.attributes.url}
          alt={pageData.data.TeamSecimg1}
        /> */}
        <div>
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
            className="pt-[5vh] lg:py-0 lg:h-auto"
          >
            <h3 className="font-medium lg:text-left team-sec-heading">
              {pageData.data.TeamSecHeading}
            </h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center">
          <div className="flex-1">
            {/* desktop img  */}
            <img
            className="absolute hidden lg:block lg:top-0 lg:left-0 -z-40 dir-img1"
            src={pageData.data.TeamDirImg1.data.attributes.url}
            alt={pageData.data.TeamDirImg1}
          />
          {/* mobile image  */}
          <img
            className="absolute block lg:hidden lg:top-0 lg:left-0 -z-10 dir-img1"
            src={pageData.data.TeamDirImg1.data.attributes.url}
            alt={pageData.data.TeamDirImg1}
          />
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
                className="lg:px-[2rem] px-[.5rem] py-[.5rem] lg:py-0 team-cont-sec"
              >
                <p className="font-medium mb-[-0.8rem] dir-title">
                  {pageData.data.TeamSecName1}
                </p>
                <p className="font-medium mb-[1.5rem] dir-desig">
                  {pageData.data.TeamSecDesig1}
                </p>
                <p className="dir-descri">
                  {pageData.data.TeamSecdescri1}
                </p>
                <p className="dir-descri">
                  {pageData.data.TeamSecdescri2}
                </p>
                <p className="dir-descri">
                  {pageData.data.TeamSecdescri3}
                </p>
                <p className="dir-descri">
                  {pageData.data.TeamSecdescri4}
                </p>
            </div>
          </div>
          <div className="flex-1">
            {/* desktop img  */}
            <img
            className="absolute hidden lg:block lg:top-0 lg:right-0 -z-40 dir-img1"
            src={pageData.data.TeamDirImg2.data.attributes.url}
            alt={pageData.data.TeamDirImg2}
          />
          {/* mobile image  */}
          <img
            className="absolute block lg:hidden min-h-[30vh] lg:top-0 lg:left-0 -z-10 dir-img1"
            src={pageData.data.TeamDirImg2.data.attributes.url}
            alt={pageData.data.TeamDirImg2}
          />
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
                className="lg:px-[2rem] px-[.5rem] py-[.5rem] lg:py-0 team-cont-sec"
              >
                <p className="font-medium mb-[-0.8rem] dir-title">
                  {pageData.data.TeamSecName2}
                </p>
                <p className="font-medium mb-[1.5rem] dir-desig">
                  {pageData.data.TeamSecDesig2}
                </p>
                <p className="dir-descri">
                  {pageData.data.TeamSecdescri5}
                </p>
                <p className="dir-descri">
                  {pageData.data.TeamSecdescri6}
                </p>
                <p className="dir-descri">
                  {pageData.data.TeamSecdescri7}
                </p>
                <p className="dir-descri">
                  {pageData.data.TeamSecdescri8}
                </p>
            </div>
          </div>
        </div>
          
    </div>
            
    {/* <div className="directors-img">
      <img
        className="object-contain"
        src={pageData.data.TeamSecimg1.data.attributes.url}
        alt={pageData.data.TeamSecimg1}
      /></div> */}

      {/* page 4 */}
      <div
        id="syncrowMember"
        className="flex lg:flex-row flex-col-reverse justify-center lg:h-[36vh] lg:mt-[20%] items-center lg:items-end"
      >
        <div
          data-aos="fade-up"
          className="lg:w-[40%] lg:flex lg:justify-center lg:items-center"
        >
          <img
            className="object-cover h-[65vh]"
            src={pageData.data.sec4LeftImg.data.attributes.url}
            alt={pageData.data.sec4LeftImgAlt}
          />
        </div>
        <div
          data-aos="fade-up"
          className="lg:w-[40%] mt-[5rem] mb-[3rem] lg:mb-0 px-[2rem] lg:pb-[10vh] lg:px-0 lg:mt-0"
        >
          <h3
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            style={{ fontFamily: `${guthen}` }}
            className="font-medium lg:text-[6rem] text-center lg:text-left lg:leading-[5rem] text-[3rem] leading-[2.8rem] text-blue-700"
          >
            {pageData.data.sec4Heading}
          </h3>
          <p
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:text-[2rem] lg:leading-[1.8rem] text-[2rem] text-center lg:text-left font-bold text-black"
          >
            {pageData.data.sec4SubHeading}
          </p>
          <p
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:w-[60%] text-[#000] text-center lg:text-left mt-[1rem] lg:mt-0 py-[1rem]"
          >
            {pageData.data.sec4Text11}
          </p>
          <p
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="lg:w-[60%] text-[#000] text-center lg:text-left py-[1rem]"
          >
            {pageData.data.sec4Text12}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
