/* eslint-disable @next/next/no-img-element */
import Header from '../../components/header';
import Form from '../../components/form';
import Footer from '../../components/footer';
import { AiOutlineMail } from "react-icons/ai"
import { FiPhoneCall } from "react-icons/fi"

import { MdOutlineLocationOn } from "react-icons/md"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { useState } from "react"
import axios from 'axios';
import style from "./style.module.css"

// /api/contact-uses
import { BaseUrl } from "../../utils/BaseUrl"
import Head from 'next/head';

import router from "next/router"
export async function getStaticProps() {
  try {

    const res = await fetch(
      `${BaseUrl}/contact-uses?populate[0]=seo`
    );
    const response = await res.json();
    // console.log(response)
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



export default function Contact({ data }) {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)


  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  const validation = () => {
    var isValid = true;
    if (!name) {
      alert("Please enter first & last name")
      isValid = false;
    }
    else if (name && name.trim().split(" ").length < 2) {

      alert("First and last name should contain atleast two words.")
      isValid = false;
    }
    else if (!phone) {
      alert("Please enter phone number")
      isValid = false;
    }
    else if (!email) {
      alert("Please enter email address")
      isValid = false;
    }
    else if (email && !validateEmail(email)) {
      alert("Please enter a valid email address")
      isValid = false;
    }
    else if (!message.trim()) {
      alert("Please enter message")
      isValid = false;
    }

    return isValid;
  }


  const submitContact = async (event) => {
    event.preventDefault();
    // console.log(name.split(" "))
    if (validation()) {

      setIsLoading(true)
      const res = await axios.post('https://ext.syncrow.ae/contact', {
        method: 'POST',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "name": name,
          "company": company,
          "email": email,
          "message": "Contact: " + message,
          "phone": phone,
        })
      })
      // console.log(res.status)
      if (res.status === 201 || res.status === 200 || res.status === 202) {

        setIsLoading(false)
        confirm("Your contact request has been sent successfully!");
        router.push("/contact/thank-you")
      } else {
        confirm('Your contact request has not been sent!');
        window.location.href = '/';
        setIsLoading(false)
      }
    }
  };

  // console.log(data)
  return (
    <div>
      <Head>


        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
      </Head>
      <Header color='black' />
      <div className=" px-[2rem] lg:px-[5rem] pt-[7rem] pb-[3rem]">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="w-[100%] lg:w-[50%]">
            <div className='w-[100%] h-[65vh] lg:h-[55vh] pr-2 object-cover	mb-[2rem]'>
              <iframe src={data.gmapUrl} width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* <img className="" src='https://ik.imagekit.io/jason7531/syncrow/Mask_Group_52_A0jrWxgPslD.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643466245971' alt='...' /> */}
            <p data-aos="fade-up" className='text-[1.2rem] lg:text-[1.7rem]  font-[aftika-semibold] my-[.5rem] font-extrabold'>Let&apos;s connect</p>
            <a data-aos="fade-up" href={`mailto:${data.email}`} className="flex items-center my-[1rem]">
              <AiOutlineMail className='mr-4 text-[1.5rem]' />
              <p className="lg:text-[1.1rem] font-extrabold">{data.email}</p>
            </a>
            <a data-aos="fade-up" href={`tel:${data.telephone}`} className="flex items-center my-[1rem]">
              <img className='mr-4 w-[1.5rem]' src="/telephone.png" alt="..." />
              <p className="lg:text-[1.1rem] font-extrabold">{data.telephone}</p>
            </a>
            <a data-aos="fade-up" href={`tel:${data.mobile}`} className="flex items-center my-[1rem]">
              <FiPhoneCall className='mr-4 text-[1.5rem]' />
              <p className="lg:text-[1.1rem] font-extrabold">{data.mobile}</p>
            </a>
            <div data-aos="fade-up" className="flex items-center my-[1rem]">
              <MdOutlineLocationOn className='mr-4 text-[1.5rem]' />
              <p className="lg:text-[1.1rem] font-extrabold">{data.address}</p>
            </div>
          </div>
          <form data-aos="fade-up" onSubmit={submitContact} className='max-h-[100%] py-[2rem] flex justify-center items-center bg-[#f5f5f5] w-[100%] lg:min-w-[550px] lg:max-w-[650px]'>
            <div className="w-[80%] h-max mx-auto">
              <p className='text-[1.2rem] lg:text-[1.7rem] font-[aftika-semibold] my-[.5rem] font-extrabold'>Send us a message</p>
              <div className='w-[100%] mb-[1rem]'>
                <p className="text-[.8rem] lg:text-[1rem]">First & Last Name <span className='text-red-500'>*</span></p>
                <input value={name} onChange={(e) => setName(e.target.value)} className='w-[100%] h-[2.5rem] px-[.7rem] outline-none rounded-md border-2 border-[#e7dfdf]' type="text" />
              </div>
              <div className="flex justify-between">

                <div className='w-[48%] mb-[1rem]'>
                  <p className="text-[.8rem] lg:text-[1rem]">Phone number <span className='text-red-500'>*</span></p>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} className='w-[100%] h-[2.5rem] px-[.7rem] outline-none rounded-md border-2 border-[#e7dfdf]' type="text" />
                </div>
                <div className='w-[48%] mb-[1rem]'>
                  <p className="text-[.8rem] lg:text-[1rem]">Email address <span className='text-red-500'>*</span></p>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-[100%] h-[2.5rem] px-[.7rem] outline-none rounded-md border-2 border-[#e7dfdf]' type="text" />
                </div>
              </div>
              <div className='w-[100%] mb-[1rem]'>
                <p className="text-[.8rem] lg:text-[1rem]">Company name (optional)</p>
                <input value={company} onChange={(e) => setCompany(e.target.value)} className='w-[100%] h-[2.5rem] px-[.7rem] outline-none rounded-md border-2 border-[#e7dfdf]' type="text" />
              </div>
              <div className='w-[100%] mb-[1rem]'>
                <p className="text-[.8rem] lg:text-[1rem]">Message <span className='text-red-500'>*</span></p>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your message here...' className='px-[.7rem] outline-none py-[.5rem] w-[100%] h-[7rem] rounded-md border-2 border-[#e7dfdf]' type="text"></textarea>
              </div>
              <p><span className='text-red-500'>*</span> Fields required</p>
              {
                isLoading
                  ?
                  <button type='button' className='bg-default flex justify-center items-center text-white mt-[1rem] px-[1.5rem] cursor-pointer py-[.5rem] rounded-lg w-[12rem] h-[2.5rem]'>
                    <div className={style.loader}></div>
                  </button>
                  :
                  <button type='submit' className='bg-default text-white mt-[1rem] px-[1.5rem] cursor-pointer py-[.5rem] rounded-lg w-[12rem] h-[2.5rem]'>Contact us Now!</button>
              }
            </div>

            <input type='hidden' id="zc_gad" name="zc_gad" value="" />

          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
