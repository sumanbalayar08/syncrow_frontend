import React, { useState } from "react"
import Link from "next/link"
import axios from "axios"
import style from "./headerStyles.module.css"
const FormNew = ({ data, router }) => {
    // console.log(data)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const resetFields = () => {
        setName("")
        setPhone("")
        setEmail("")
        setCompany("")
        setMessage("")
    }

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



    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (data.formtype === "bundle") {
                if (validation()) {
                    setIsLoading(true)
                    const res = await axios.post('https://ext.syncrow.ae/', {
                        method: 'POST',
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "Name": name,
                            "company_name": company,
                            "bundle_type": data.type,
                            "property_size": data.bhk,
                            "Email": email,
                            "message": message,
                            "Phone": phone,
                        })
                    })

                    setIsLoading(false)
                    if (res.status === 201 || res.status === 200 || res.status === 202) {
                        confirm("Your bundle request has been sent successfully!");
                        router.push("/bundles/thank-you")
                    } else {
                        confirm('Your bundle request has not been sent!');
                        window.location.href = '/';
                    }
                }
            } else if (data.formtype === "contact") {
                const res = await axios.post('https://ext.syncrow.ae/contact', {
                    method: 'POST',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "name": event.target.name.value,
                        "company": event.target.company.value,
                        "email": event.target.email.value,
                        "message": event.target.message.value,
                        "phone": event.target.phone.value,
                    })
                })
                // console.log(res.status)
                if (res.status === 201 || res.status === 200 || res.status === 202) {
                    confirm("Your contact request has been sent successfully!");
                    router.push("/contact/thank-you")
                } else {
                    confirm('Your contact request has not been sent!');
                    window.location.href = '/';
                }
            } else {

                if (validation()) {

                    setIsLoading(true)
                    const res = await axios.post('https://ext.syncrow.ae/build', {
                        method: 'POST',
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "name": name,
                            "company": company,
                            "property_type": data.type,
                            "emailaddress": email,
                            "spaces": String(data.spaces),
                            "area": String(data.area),
                            "message": message,
                            "phone": phone,
                            "items": data.items,
                        })
                    })

                    setIsLoading(false)
                    // console.log(res.status)
                    if (res.status === 201 || res.status === 200 || res.status === 202) {
                        confirm("Your build request has been sent successfully!");
                        router.push("/build/thank-you")
                    } else {
                        confirm('Your build request has not been sent!');
                        window.location.href = '/';
                    }
                }
            }
        } catch (e) {
            // console.log("e", e);
        }
    }
    return (
        <div style={{ background: "#F5F5F5" }} className="px-8 py-8">
            <form onSubmit={handleSubmit}>
                <div className="border-b-2 border-blue-300">
                    <p className="uppercase font-[aftika-bold] text-black text-base">Details</p>
                </div>
                <div className="flex flex-col mt-6 mb-2">
                    <label className="text-black font-[aftika-light] text-tiny mb-1">First &amp; Last Name <span className="text-red-500 -ml-1">*</span></label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="outline-none rounded-md py-1 text-black pl-1" id="name" name="name" />
                </div>
                <div className="flex gap-4 mb-2 tablet:flex-row flex-col">
                    <div className="flex flex-col flex-1">
                        <label className="text-black font-[aftika-light] text-tiny mb-1" >Phone Number <span className="text-red-500 -ml-1">*</span></label>
                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="outline-none rounded-md py-1 text-black pl-1" id="phone" name="phone" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="text-black font-[aftika-light] text-tiny mb-1" >Email Address <span className="text-red-500 -ml-1">*</span></label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="outline-none rounded-md py-1 text-black pl-1" id="email" name="email" />
                    </div>
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-black font-[aftika-light] text-tiny mb-1" >Company Name (optional)</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="rounded-md py-1 text-black outline-none pl-1 " id="company" name="company" />
                </div>
                <div className="flex flex-col mb-10">
                    <label className="text-black font-[aftika-light] text-tiny mb-1" >Message <span className="text-red-500 -ml-1">*</span></label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message here..." className="rounded-md py-1 text-black outline-none pt-1 pl-1" id="message" name="message"></textarea>
                    <p className="text-black font-[aftika-light] mt-1"><span className="text-red-500 mr-1">*</span>Fields required</p>
                </div>
                <div className="flex justify-between gap-4">
                    {/* <Link href="/build/thankyou">
                        
                    </Link> */}
                    {
                        isLoading
                            ?
                            <button className="bg-default uppercase flex justify-center items-center text-white desktop:w-48 w-36 desktop:h-10 h-8 rounded-lg" type="button">
                                <div className={style.loader}></div>
                            </button>
                            :
                            <button className="bg-default uppercase text-white desktop:w-48 w-36 desktop:h-10 h-8 rounded-lg" type="submit">
                                Submit
                            </button>
                    }
                    <button onClick={() => resetFields()} className="bg-default uppercase text-white desktop:w-48 w-36 desktop:h-10 h-8 rounded-lg" type="button">
                        Reset
                    </button>
                </div>

                <input type='hidden' id="zc_gad" name="zc_gad" value="" />

            </form >
        </div >
    )
}

export default FormNew;