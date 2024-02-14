import React, { useState, useEffect } from 'react'
import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"
import Page4 from "./Page4"
import Page5 from "./Page5"
import Page6 from "./Page6"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { useRouter } from "next/router"
import Head from 'next/head'
import { BaseUrl } from '../../utils/BaseUrl'



export async function getStaticProps() {

  try {
    const res = await fetch(
      `${BaseUrl}/build-you-own-pages?populate[0]=seo`
    );

    const response = await res.json();

    var data = response.data[0].attributes;
    return {
      props: {
        data
      },
      revalidate: 1
    };
  }
  catch (e) {
    console.log(e)

  }

}
export default function Index(props) {
  const pageData = props.data;

  const router = useRouter();
  const [active, setActive] = useState(0);
  const [type, setType] = useState("");
  const [spaces, setSpaces] = useState(0);
  const [area, setArea] = useState(0);
  const [items, setItems] = useState([]);
  const [apartment, setApartment] = useState(false);
  const [villa, setVilla] = useState(false);
  const [office, setOffice] = useState(false);

  useEffect(() => {

    if (router.query.page === "type" && active !== 0) {
      setActive(1)
    }
    else if (router.query.page === "size" && active !== 0) {
      setActive(2)
    }
    else if (router.query.page === "devices" && active !== 0) {
      setActive(3)
    }
    else if (router.query.page === "installation" && active !== 0) {
      setActive(4)
    }
    else if (!router.query.page) {
      router.push("/build?page=type")
      setActive(1)
    }
    else {

      router.push("/build?page=type")
      setActive(1)
    }

  }, [router, active])
  return (
    <div className="w-full">
      <Head>
        <title>{pageData.seo.title}</title>
        <meta name="description" content={pageData.seo.description} />
      </Head>
      <Header />
      {(active === 1) ? <Page1 active={active} setActive={setActive} apartment={apartment} setApartment={setApartment} villa={villa} office={office} setOffice={setOffice} setVilla={setVilla} setType={setType} /> : ""}
      {(active === 2 && apartment) ? <Page2 active={active} setActive={setActive} setType={setType} /> : ""}
      {(active === 2 && villa) ? <Page3 active={active} setActive={setActive} setType={setType} /> : ""}
      {(active === 2 && office) ? <Page4 active={active} setActive={setActive} setSpaces={setSpaces} setArea={setArea} /> : ""}
      {active === 3 ? <Page5 active={active} setActive={setActive} apartment={apartment} villa={villa} office={office} setItems={setItems} /> : ""}
      {active === 4 ? <Page6 active={active} setActive={setActive} data={{ "spaces": spaces, "area": area, "formtype": "build", "items": items.join(","), "type": type }} /> : ""}
      <Footer />
    </div>
  );
}
