import Link from "next/link";
import Head from "next/head";

// components
import Header from "../../components/header";
import ContactButtons from "../../components/contactButtons";
import Footer from "../../components/footer";
import { BaseUrl } from "../../utils/BaseUrl";

// /api/smart-home-automation-pages

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${BaseUrl}/smart-home-automation-pages?populate[0]=sec1Bg,sec2Bg,seo`
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

const Homepage = (props) => {
  const pageData = props.data;
  const guthen = "Guthen Bloots Personal Use";

  return (
    <main>
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
      {/* <div className="md:hidden h-16 bg-black text-white flex items-center justify-center">
        Fix navigation for mobile design
      </div>
      <div className="hidden md:block">
      </div> */}

      <Header color="black" />

      {/* ====== HERO section ======*/}

      {/* ===== Middle Section ===== */}

      <section className="min-h-screen relative flex flex-col md:flex-row">
        <div
          className="h-72 bg-right bg-cover mt-[5rem] lg:mt-0 md:absolute md:inset-0 md:min-h-screen md:-z-10"
          style={{
            backgroundImage: `url('${pageData.sec1Bg.data.attributes.url}')`,
          }}
        />
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center  md:items-start md:pl-10 md:basis-1/2 lg:pl-32"
        >
          <h2
            className="bg-black md:bg-transparent  w-full md:w-fit h-56 md:h-fit flex flex-col items-center justify-center md:items-start leading-tight mb-4 md:mb-0 "
            style={{ fontFamily: `${guthen}` }}
          >
            <span
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="text-5xl lg:text-7xl text-white md:text-black leading-none"
            >
              {pageData.sec1Heading1}
            </span>
            <span
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="text-5xl lg:text-7xl text-blue-700"
            >
              {pageData.sec1Heading2}
            </span>
          </h2>

          <p
            initial="hidden"
            whileinview="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="w-10/12 my-4 tracking-wide leading-7"
          >
            {pageData.sec1Desc1}
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
            className="w-10/12 tracking-wide leading-7"
          >
            {pageData.sec1Desc2}
          </p>
        </div>

        <div
          data-aos="fade-up"
          className=" my-16 flex justify-center items-center md:basis-1/2 md:items-end md:my-0 md:mb-10"
        >
          <div className="w-10/12">
            <h2 className="font-[aftika-bold] pb-6 md:pb-0 tracking-wide text-base mb-2">
              Get a feel of how <em> Syncrow</em> upgrades your home to a
              smarter living experience.
            </h2>
            <ContactButtons />
          </div>
        </div>
      </section>
      {/* page 2 */}
      <section className="flex flex-col md:flex-row relative items-center  md:min-h-screen ">
        <div
          className="w-full h-96 bg-left bg-cover md:absolute md:-z-10 md:min-h-screen"
          style={{
            backgroundImage: `url('${pageData.sec2Bg.data.attributes.url}')`,
          }}
        />
        <div data-aos="fade-up" className="md:basis-1/2"></div>
        <div
          data-aos="fade-up"
          className="h-56 flex items-center justify-center bg-black w-screen md:bg-transparent md:w-fit md:pr-4"
        >
          <h1
            className="flex flex-col text-center md:text-left w-fit md:text-6xl text-white leading-tight "
            style={{ fontFamily: `${guthen}` }}
          >
            <span
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="text-5xl  lg:text-7xl"
            >
              {pageData.sec2Heading1}
            </span>
            <span
              initial="hidden"
              whileinview="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="text-5xl  lg:text-7xl text-blue-700 md:text-white "
            >
              {pageData.sec2Heading2}
            </span>
          </h1>
        </div>
      </section>

      {/*====== Why upgrade section ======*/}
      <section>
        <div className="flex items-center justify-center py-16 bg-blue-700">
          <h2
            data-aos="fade-up"
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
                hidden: { opacity: 0, scale: 0 },
              }}
              className="text-5xl lg:text-7xl mb- md:-mb-10 -ml-28 text-center"
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
                hidden: { opacity: 0, scale: 0 },
              }}
              className="text-6xl lg:text-10xl -ml-10 text-center"
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
                hidden: { opacity: 0, scale: 0 },
              }}
              className="text-5xl lg:text-7xl text-center"
            >
              To a smarter home?
            </span>
          </h2>
        </div>
        <div className="hidden md:flex justify-around  lg:px-24 xl:px-36">
          <DownArrow />
          <DownArrow />
          <DownArrow />
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row items-center gap-24lg:px-24 xl:px-36 pt-8 pb-36 md:pb-24 md:gap-0 md:justify-around  bg-blue-700 md:bg-white"
        >
          <UpgradeLink
            title="Convenience"
            href="/smart-home-automation/convenience"
          />
          <UpgradeLink
            title="Security"
            href="/smart-home-automation/security"
          />
          <UpgradeLink
            title="Accessibility"
            href="/smart-home-automation/accessibility"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Homepage;

const DownArrow = () => (
  <div
    className="w-0 h-0 border-blue-700"
    style={{
      borderLeft: "50px solid transparent",
      borderRight: "50px solid transparent",
      borderTop: "50px solid rgb(29 78 216)",
    }}
  />
);
const UpgradeLink = ({ title, href }) => {
  const guthen = "Guthen Bloots Personal Use";
  return (
    <div className="flex flex-col items-center justify-center w-40 md:mt-10">
      <h3
        initial="hidden"
        whileinview="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="lg:text-7xl text-5xl text-white md:text-slate-500"
        style={{ fontFamily: `${guthen}` }}
      >
        {title}
      </h3>
      <Link href={href} passHref>
        <button
          initial="hidden"
          whileinview="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="bg-white md:bg-blue-700  md:text-white rounded-md  px-6 py-1"
        >
          Know More
        </button>
      </Link>
    </div>
  );
};
