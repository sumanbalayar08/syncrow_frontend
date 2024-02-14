import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/header";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Footer from "../../components/footer";
import Convenience from "./Convenience";
import Energy from "./Energy";
import Safety from "./Safety";
import SmartHome from "./SmartHome";
import Page4 from "./Page4";
import { useRouter } from "next/router";
import Head from "next/head";
import { BaseUrl } from "../../utils/BaseUrl";

export async function getStaticProps() {
  try {
    const res = await fetch(`${BaseUrl}/bundles-pages?populate[0]=seo`);

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

function Index(props) {
  const pageData = props.data;
  const router = useRouter();
  const [active, setActive] = useState(1);
  const [bhk, setBhk] = useState("");
  const [type, setType] = useState("");
  const [convenience, setConvenience] = useState(false);
  const [safety, setSafety] = useState(false);
  const [energy, setEnergy] = useState(false);
  const [smartHome, setSmartHome] = useState(false);

  useEffect(() => {
    console.log("Router changed", active);

    if (router.query.page === "type" && active !== 0) {
      setActive(1);
    } else if (router.query.page === "service" && active !== 0) {
      setActive(2);
    } else if (router.query.page === "devices" && active !== 0) {
      const serviceType = localStorage.getItem("serviceType");

      console.log("serviceType", serviceType);

      if (serviceType) {
        switch (serviceType) {
          case "convenience":
            console.log("convenience");

            setEnergy(false);
            setSafety(false);
            setSmartHome(false);
            setConvenience(true);
            break;

          case "safety":
            console.log("safety");
            setConvenience(false);
            setEnergy(false);
            setSmartHome(false);
            setSafety(true);
            break;

          case "energy":
            console.log("energy");
            setSafety(false);
            setConvenience(false);
            setSmartHome(false);
            setEnergy(true);
            break;
          case "smartHome":
            console.log("smartHome");
            setSafety(false);
            setConvenience(false);         
            setEnergy(false);
            setSmartHome(true);
            break;

          default:
            break;
        }
      }

      setActive(3);
    } else if (router.query.page === "installation" && active !== 0) {
      setActive(4);
    } else if (!router.query.page) {
      console.log(
        "redirecting to type if page param is not exist?",
        router.query.page
      );
      // router.push("/bundles?page=type");
      setActive(1);
    } else {
      console.log("why here?");
      console.log("router.query.page", router.query.page);
      // router.push("/bundles?page=type");
      setActive(1);
    }
  }, [router, active]);

  const handleSetActive = useCallback(
    (value) => {
      console.log("handleSetActive", value);
      setActive(value);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [active]
  );

  return (
    <>
      <Head>
        <title>{pageData.seo.title}</title>
        <meta name="description" content={pageData.seo.description} />
      </Head>
      <Navbar />
      {active == 1 ? (
        <Page1 active={active} setActive={handleSetActive} setBhk={setBhk} />
      ) : (
        ""
      )}
      {active == 2 ? (
        <Page2
          active={active}
          setType={setType}
          setActive={handleSetActive}
          setConvenience={setConvenience}
          convenience={convenience}
          energy={energy}
          setEnergy={setEnergy}
          smartHome={smartHome}
          setSmartHome={setSmartHome}
          safety={safety}
          setSafety={setSafety}
        />
      ) : (
        ""
      )}
      {active == 3 && convenience ? (
        <Convenience active={active} setActive={handleSetActive} />
      ) : null}

      {active == 3 && safety ? (
        <Safety active={active} setActive={handleSetActive} />
      ) : (
        ""
      )}
      {active == 3 && energy ? (
        <Energy active={active} setActive={handleSetActive} />
      ) : (
        ""
      )}
      {active == 3 && smartHome ? (
        <SmartHome active={active} setActive={handleSetActive} />
      ) : (
        ""
      )}
      {active == 4 ? (
        <Page4
          active={active}
          setActive={handleSetActive}
          data={{ bhk: bhk, type: type, formtype: "bundle" }}
        />
      ) : (
        ""
      )}
      <Footer />
    </>
  );
}

export default Index;
