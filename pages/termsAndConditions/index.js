import Footer from "../../components/footer";
import Header from "../../components/header";

import { marked } from "marked";
import style from "./style.module.css"
import { BaseUrl } from "../../utils/BaseUrl";
import Head from "next/head";
// /api/privacy-policies


export async function getStaticProps() {
    try {

        const res = await fetch(
            `${BaseUrl}/terms-and-conditions?populate[0]=seo`
        );
        const response = await res.json();
        console.log(response)
        var data = response.data[0].attributes;
        return {
            props: {
                data,
            },

            revalidate: 1
        };
    }
    catch (e) {
        console.log(e)
    }
}
const TermsAndConditions = (props) => {
    const pageData = props.data;
    var htmlData = marked.parse(props.data.markdownData)
    return (

        <div>
            <Head>
                <title>{pageData.seo.title}</title>
                <meta name="description" content={pageData.seo.description} />
            </Head>
            <Header />
            <div data-aos="fade-up" className="min-h-[100vh] pt-[6rem] lg:pt-[12vh] pb-[15vh] px-[1rem] lg:px-[5rem]">
                <p className="font-guthen text-[4rem] text-default">Terms And Conditions</p>
                <div className={style.markdownWrapper} dangerouslySetInnerHTML={{ __html: htmlData }}></div>
            </div>
            <Footer />
        </div>
    )
}

export default TermsAndConditions;