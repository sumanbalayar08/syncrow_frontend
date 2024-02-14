import Header from '../../components/header';
import Footer from '../../components/footer';
import { BaseUrl } from '../../utils/BaseUrl';
import Head from 'next/head';
import style from "./style.module.css"
import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { blogDateModifier } from '../../utils/DateModifiers';

// /api/blogs-pages
// /api/blogs
export async function getStaticProps() {
    try {

        const res = await fetch(
            `${BaseUrl}/blogs-pages?populate[0]=seo`
        );
        const blogRes = await fetch(
            `${BaseUrl}/blogs?populate[0]=thumbnail&sort[0]=publishedDateTime%3Adesc`
        );
        const response = await res.json();
        const blogResponse = await blogRes.json();
        console.log(response)
        console.log(blogResponse)
        var data = response.data[0].attributes;
        var blogData = blogResponse;
        return {
            props: {
                data,
                blogData
            },
            revalidate: 1
        };
    }
    catch (e) {
        console.log(e)
    }
}
const Blogs = (props) => {
    const [blogs, setBlogs] = useState([])
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const pageData = props.data;

    const [isLoadmoreLoading, setIsLoadMoreLoading] = useState(false)

    // infinte scrolling function
    const observer = useRef()
    const lastItemRef = useCallback(node => {
        if (isLoadmoreLoading) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(async entries => {
            if (entries[0].isIntersecting) {
                console.log("Last is visible")
                if (page < pageCount) {
                    console.log("calling next")
                    setIsLoadMoreLoading(true)
                    const blogRes = await fetch(
                        `${BaseUrl}/blogs?populate[0]=thumbnail&sort[0]=publishedDateTime%3Adesc`
                    );
                    const res = await blogRes.json();

                    setBlogs(blogs => {
                        var oldBlogs = blogs;
                        for (let i = 0; i < res.data.length; i++) {
                            const blog = res.data[i];
                            oldBlogs = [...oldBlogs, blog]
                        }
                        return [...oldBlogs]
                    })
                    setPage(res.meta.pagination.page)
                    setPageCount(res.meta.pagination.pageCount)
                    setIsLoadMoreLoading(false)
                }
            }
        })
        if (node) observer.current.observe(node)
    }, [page, pageCount, isLoadmoreLoading])
    useEffect(() => {
        setBlogs(props.blogData.data)
        setPage(props.blogData.meta.pagination.page)
        setPageCount(props.blogData.meta.pagination.pageCount)
    }, [props])
    return (
        <div>
            <Head>
                <title>{pageData.seo.title}</title>
                <meta name="description" content={pageData.seo.description} />
            </Head>
            <Header />

            <div data-aos="fade-up" className="min-h-[100vh] pt-[6rem] lg:pt-[12vh] pb-[15vh] px-[1rem] lg:px-[5rem]">
                <h1 className="font-guthen text-[4rem] font-medium text-default">Our Latest Blogs</h1>
                <div className='w-[100%] flex flex-wrap py-[2rem]'>

                    {
                        blogs.map((blog, index) => {

                            if (index + 1 === blogs.length) {
                                return (
                                    <Link key={index} href={`/blog/${blog.attributes.slug}`}>
                                        <a data-aos="fade-up" ref={lastItemRef} className='w-[100%] lg:mx-[.5rem] mediumLarge:mx-[1%] my-[1rem] lg:w-[32%] mediumLarge:w-[23%] rounded-[.3rem] cursor-pointer shadow-blogCardWithouthover hover:shadow-blogCardWithhover transition-all duration-[.2s]'>
                                            <img className='w-[100%] h-[12rem] rounded-t-[.3rem] object-cover' src={blog.attributes.thumbnail.data.attributes.url} alt="..." />
                                            <div className='p-[1rem]'>
                                                <p className='font-[aftika-bold] text-[.8rem] opacity-50 capitalize'>{blog.attributes.category}</p>
                                                <h3 className={`${style.blogHeading} font-[aftika-bold] my-[.5rem] text-[1.5rem] leading-[2rem]`}>{blog.attributes.heading}</h3>
                                                <div className='w-[45%] h-[1px] bg-[#c4c4c4]'></div>
                                                <div className='w-[100%] mt-[.5rem]'>
                                                    <p className='font-[aftika-regular] opacity-80 text-ellipsis whitespace-nowrap w-[100%] overflow-hidden'>{blog.attributes.authorName}</p>
                                                    <p className='font-[aftika-regular] opacity-40 text-[.8rem]'>{blogDateModifier(blog.attributes.publishedDateTime)}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                )
                            }
                            else {

                                return (
                                    <Link key={index} href={`/blog/${blog.attributes.slug}`}>
                                        <a data-aos="fade-up" className='w-[100%] lg:mx-[.5rem] mediumLarge:mx-[1%] my-[1rem] lg:w-[32%] mediumLarge:w-[23%] rounded-[.3rem] cursor-pointer shadow-blogCardWithouthover hover:shadow-blogCardWithhover transition-all duration-[.2s]'>
                                            <img className='w-[100%] h-[12rem] rounded-t-[.3rem] object-cover' src={blog.attributes.thumbnail.data.attributes.url} alt="..." />
                                            <div className='p-[1rem]'>
                                                <p className='font-[aftika-bold] text-[.8rem] opacity-50 capitalize'>{blog.attributes.category}</p>
                                                <h3 className={`${style.blogHeading} font-[aftika-bold] my-[.5rem] text-[1.5rem] leading-[2rem]`}>{blog.attributes.heading}</h3>
                                                <div className='w-[45%] h-[1px] bg-[#c4c4c4]'></div>
                                                <div className='w-[100%] mt-[.5rem]'>
                                                    <p className='font-[aftika-regular] opacity-80 text-ellipsis whitespace-nowrap w-[100%] overflow-hidden'>{blog.attributes.authorName}</p>
                                                    <p className='font-[aftika-regular] opacity-40 text-[.8rem]'>{blogDateModifier(blog.attributes.publishedDateTime)}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                )
                            }

                        })
                    }
                </div>

                {/* for load more  */}
                {
                    isLoadmoreLoading
                    &&
                    <div className='flex justify-center items-center'>
                        <div className={style.loader}>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}


export default Blogs;