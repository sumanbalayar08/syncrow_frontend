import Header from '../../components/header';
import Footer from '../../components/footer';
import { BaseUrl } from '../../utils/BaseUrl';
import style from "./style.module.css"
import Head from 'next/head';
// /api/blogs
import { marked } from 'marked';
import { blogDateModifier } from '../../utils/DateModifiers';
export async function getServerSideProps(context) {
    console.log(context.params.slug)
    try {
        const blogRes = await fetch(
            `${BaseUrl}/blogs?populate[0]=bannerImg,mobileBannerImg,seo&filters[slug][$eq]=${context.params.slug}`
        );
        const blogResponse = await blogRes.json();
        console.log(blogResponse)
        var data = blogResponse.data[0].attributes;
        return {
            props: {
                data
            }
        }
    }
    catch (e) {
        console.log(e)
        return {
            redirect: {
                permanent: true,
                destination: "/",
            },
        }
    }
}



const Blog = (props) => {
    const pageData = props.data;
    const htmlContent = marked.parse(pageData.markdownData)
    return (
        <div>

            <Head>
                <title>{pageData.seo.title}</title>
                <meta name="description" content={pageData.seo.description} />
            </Head>
            <Header />
            <div data-aos="fade-up" className="min-h-[100vh] pt-[7rem] lg:pt-[12vh] pb-[15vh] px-[1rem] lg:px-[5rem]">
                <img className='w-[100%] object-contain lg:block hidden' src={pageData.bannerImg.data.attributes.url} alt="..." />
                <img className='w-[100%] object-contain lg:hidden block' src={pageData.mobileBannerImg.data.attributes.url} alt="..." />
                <h1 className='mt-[2rem] text-[3rem] leading-[3.7rem] font-[aftika-bold] mb-[1rem]'>{pageData.heading}</h1>
                <div className={`${style.markdownWrapper}`} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>

                <div className='w-[70%] lg:w-[30%] h-[1px] bg-[#c4c4c4] mt-[3rem]'></div>
                <div className='w-[100%] mt-[1rem]'>
                    <p className='font-[aftika-regular] opacity-80 text-ellipsis whitespace-nowrap w-[100%] overflow-hidden'>{pageData.authorName}</p>
                    <p className='font-[aftika-regular] opacity-40 text-[.8rem]'>{blogDateModifier(pageData.publishedDateTime)}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Blog;