import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'

import { marked } from "marked";
import style from "./style.module.css"
import { BaseUrl } from "../../utils/BaseUrl"
// /api/faqs
import Head from 'next/head';

export async function getStaticProps() {
    try {

        const res = await fetch(
            `${BaseUrl}/faqs?populate[0]=seo`
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

const faq = (props) => {
    const pageData = props.data;
    var htmlData = marked.parse(props.data.markdownData)
    return (
        <div>
            <Head>


                <title>{pageData.seo.title}</title>
                <meta name="description" content={pageData.seo.description} />
            </Head>
            <Header />
            <div data-aos="fade-up" className="px-20 py-32">
                <div className="text-[4rem] text-default font-guthen font-medium mb-2">FAQ&apos;s</div>
                <div className={style.markdownWrapper} dangerouslySetInnerHTML={{ __html: htmlData }}></div>

            </div>
            <Footer />
        </div>
    )
}

export default faq
