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
            `${BaseUrl}/privacy-policies?populate[0]=seo`
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



const PrivacyPolicy = (props) => {
    var htmlData = marked.parse(props.data.markdownData)
    const pageData = props.data;
    return (
        <div>
            <Head>
                <title>{pageData.seo.title}</title>
                <meta name="description" content={pageData.seo.description} />
            </Head>
            <Header />
            <div data-aos="fade-up" className="min-h-[100vh] pt-[6rem] lg:pt-[12vh] pb-[15vh] px-[1rem] lg:px-[5rem]">
                <h1 className="font-guthen text-[4rem] font-medium text-default">Privacy Policy</h1>
                <div className={style.markdownWrapper} dangerouslySetInnerHTML={{ __html: htmlData }}></div>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy;