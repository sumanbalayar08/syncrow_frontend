import Head from "next/head";
import Footer from "../../components/footer"
import Header from "../../components/header";
import { BaseUrl } from "../../utils/BaseUrl";
// /api/thank-you-pages

export async function getStaticProps() {
    try {

        const res = await fetch(
            `${BaseUrl}/thank-you-pages?populate[0]=seo`
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
const ThankYou = (props) => {
    const pageData = props.data
    return (
        <div>

            <Head>
                <title>{pageData.seo.title}</title>
                <meta name="description" content={pageData.seo.description} />
            </Head>
            <Header />
            <div className="min-h-[100vh] px-[1rem] flex-col flex justify-center items-center">
                <h3 className="font-guthen text-default text-[5rem] text-center">{pageData.thankYouHeading}</h3>
                <p className="text-center font-[aftika-semiBold] text-[1.2rem]">{pageData.subHeading}</p>

            </div>
            <Footer />
        </div>
    )
}

export default ThankYou;