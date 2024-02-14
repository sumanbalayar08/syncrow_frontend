import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import Lottie from "react-lottie";
import locationAnimation from "../pages/lotties/telephone.json";
import scriptAnimation from "../pages/lotties/script.json";
import messageAnimation from "../pages/lotties/message.json";

import Salesiq from "../pages/salesiq";
import { useRouter } from "next/router";
import style from "./headerStyles.module.css";

function Header({ color }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showIOT, setShowIOT] = useState(false);
  const [active, setActive] = useState("");
  const [activeIOT, setActiveIOT] = useState("");
  const [showCol, setShowCol] = useState(false);
  const [menu, setMenu] = useState(false);
  const [showAutomate, setShowAutomate] = useState(false);
  const [showIOTMenu, setShowIOTMenu] = useState(false);
  const [scroll, setScroll] = useState(10);

  // for request a quote

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validation = () => {
    var isValid = true;

    if (!name) {
      alert("Please enter full name");
      isValid = false;
    } else if (name && name.trim().split(" ").length < 2) {
      alert("First and last name should contain atleast two words.");
      isValid = false;
    } else if (!phone) {
      alert("Please enter phone number");
      isValid = false;
    } else if (!email) {
      alert("Please enter email address");
      isValid = false;
    } else if (email && !validateEmail(email)) {
      alert("Please enter a valid email address");
      isValid = false;
    } else if (!message.trim()) {
      alert("Please enter message");
      isValid = false;
    }

    return isValid;
  };
  const submitContact = async (event) => {
    event.preventDefault();
    if (validation()) {
      setIsLoading(true);
      const res = await axios.post("https://ext.syncrow.ae/contact", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: event.target.name.value,
          company: event.target.company.value,
          email: event.target.email.value,
          message: "Request Quote: " + event.target.message.value,
          phone: event.target.phone.value,
        }),
      });

      setIsLoading(false);
      // console.log(res.status)
      if (res.status === 201 || res.status === 200 || res.status === 202) {
        confirm("Your Quote request has been sent successfully!");
        router.push("/request-a-quote/thank-you");
      } else {
        confirm("Your Quote request has not been sent!");
        window.location.href = "/";
      }
    }
  };

  // request a quote end

  const locationOptions = {
    loop: true,
    autoplay: true,
    animationData: locationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const messageOptions = {
    loop: true,
    autoplay: true,
    animationData: messageAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scriptOptions = {
    loop: true,
    autoplay: true,
    animationData: scriptAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  let menuRef = useRef();
  let automateMenuRef = useRef();
  let iotMenuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  useEffect(() => {
    let handler = (e) => {
      if (!automateMenuRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    let handler = (e) => {
      if (!iotMenuRef.current.contains(e.target)) {
        setShowIOT(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 10;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, [scroll]);

  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="https://ik.imagekit.io/jason7531/syncrow/common/Group_1_rkAObjd65.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642343317149"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      {/* navbar */}

      <div
        className={`cursor-pointer lg:flex fixed top-0 py-6 medium:px-20  px-10 right-0 left-0 z-10 justify-between items-center hidden ${
          scroll
            ? ""
            : "bg-white text-black shadow-lg z-40 transition ease-in-out duration-500"
        }`}
      >
        <Link href="/">
          <div className="cursor-pointer">
            {scroll && color === "white" ? (
              <img
                src="https://ik.imagekit.io/jason7531/syncrow/common/Group_3_vfnoGgNCF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642484105062"
                alt=""
              />
            ) : (
              <img src="/black-logo.png" alt="" />
            )}
          </div>
        </Link>

        <div className="flex  gap-8 relative mt-2">
          <Link href="">
            <div ref={automateMenuRef}>
              <span
                className={`${
                  scroll && color == "white" ? "text-white" : "text-black"
                } text-base tracking-wide relative cursor-pointer`}
                onClick={(e) => {
                  e.preventDefault();
                  setShow(!show);
                }}
              >
                Automate
                <i className="fa-solid fa-angle-down pl-4"></i>
              </span>

              {/* automate dropdown */}
              {show ? (
                <div
                  className="bg-white w-44 grid grid-cols-1 grid-rows-2 text-base absolute -left-[3.8rem] top-[21px] py-1 px-2
                                  pt-10 rounded-lg space-y-1 pb-[10px]"
                >
                  <Link href="/smart-home-automation">
                    <a
                      onMouseOver={() => {
                        setActive(1);
                      }}
                      onMouseOut={() => {
                        setActive("");
                      }}
                      className={`${
                        active === 1 ? "bg-black/30" : ""
                      } flex justify-end text-black`}
                    >
                      Home / Villa
                    </a>
                  </Link>
                  <Link href="/office-automation">
                    <a
                      onMouseOver={() => {
                        setActive(3);
                      }}
                      onMouseOut={() => {
                        setActive("");
                      }}
                      className={`${
                        active === 3 ? "bg-black/30" : ""
                      } flex justify-end text-black`}
                    >
                      Workspace
                    </a>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </Link>

          {/* automate dropdown */}

          <Link href="/about">
            <span
              className={`${
                scroll && color == "white" ? "text-white" : "text-black"
              } text-base tracking-wide cursor-pointer`}
            >
              About
            </span>
          </Link>
          <Link href="/contact">
            <span
              className={`${
                scroll && color == "white" ? "text-white" : "text-black"
              } text-base tracking-wide cursor-pointer`}
            >
              Contact Us
            </span>
          </Link>
          <Link href="/efficiency">
            <span
              className={`${
                scroll && color == "white" ? "text-white" : "text-black"
              } text-base tracking-wide cursor-pointer`}
            >
              Efficiency
            </span>
          </Link>

          <Link href="/iot">
            <div ref={iotMenuRef} className="relative">
              <span
                className={`${
                  scroll && color == "white" ? "text-white" : "text-black"
                } text-base tracking-wide relative cursor-pointer`}
              >
                IoT Solutions
                <i
                  onClick={(e) => {
                    e.preventDefault();
                    setShowIOT(!showIOT);
                  }}
                  className="fa-solid fa-angle-down pl-4"
                ></i>
              </span>

              {/* automate dropdown */}
              {showIOT ? (
                <div
                  className="bg-white w-40 grid grid-cols-1 grid-rows-3 text-base absolute right-0 py-1 px-2
                                  pt-10 rounded-lg space-y-1 pb-[10px]"
                >
                  <Link href="/smart-home-iot-solutions">
                    <a
                      onMouseOver={() => {
                        setActiveIOT(1);
                      }}
                      onMouseOut={() => {
                        setActiveIOT("");
                      }}
                      className={`${
                        activeIOT === 1 ? "bg-black/30" : ""
                      } flex justify-end text-black`}
                    >
                      Residential
                    </a>
                  </Link>
                  <Link href="/iot/smartCity">
                    <a
                      onMouseOver={() => {
                        setActive(2);
                      }}
                      onMouseOut={() => {
                        setActive("");
                      }}
                      className={`${
                        active === 2 ? "bg-black/30" : ""
                      } flex justify-end text-black`}
                    >
                      Smart Cities
                    </a>
                  </Link>
                  <Link href="/iot/industrial-iot-solutions">
                    <a
                      onMouseOver={() => {
                        setActiveIOT(3);
                      }}
                      onMouseOut={() => {
                        setActiveIOT("");
                      }}
                      className={`${
                        activeIOT === 3 ? "bg-black/30" : ""
                      } flex justify-end text-black`}
                    >
                      Industrials
                    </a>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </Link>
          <Link href="/bundles?page=type">
            <span
              className={`${
                scroll && color == "white" ? "text-white" : "text-black"
              } text-base tracking-wide cursor-pointer`}
            >
              Bundles
            </span>
          </Link>
          <Link href="/build?page=type">
            <span className="text-white text-base tracking-wide bg-default pt-3 -pb-10 h-12 px-8 rounded-lg -mt-3 uppercase cursor-pointer">
              Build your own
            </span>
          </Link>
        </div>
      </div>

      {/* mobile navbar */}

      <div
        ref={menuRef}
        className="lg:hidden flex flex-col items-center z-30 w-full fixed"
      >
        <div className="flex justify-between bg-black w-full py-6 px-10">
          <Link href="/">
            <div>
              <img
                src="https://ik.imagekit.io/jason7531/syncrow/common/Group_3_vfnoGgNCF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642484105062"
                alt=""
              />
            </div>
          </Link>
          <div
            className="mediumLarge:hidden block mt-2"
            onClick={() => setMenu(!menu)}
          >
            <img src="/group-3.png" width="30px" height="30px" alt="" />
          </div>
        </div>
        {menu ? (
          <div className="bg-white w-full flex flex-col items-center justify-center">
            <div className="mt-8 mb-4">
              <span className="pt-8 pb-4 font-bold text-black uppercase tracking-widest relative">
                Automate
                <img
                  className="w-6 h-6 absolute left-28 top-8"
                  onClick={() => setShowAutomate(!showAutomate)}
                  src="https://ik.imagekit.io/jason7531/syncrow/common/dropdown-menu-icon-12_0WkYqOl6S.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642271510369"
                  alt=""
                />
              </span>
              {showAutomate ? (
                <div className="flex flex-col -ml-20">
                  <Link href="/smart-home-automation">
                    <a
                      onMouseOver={() => {
                        setActive(1);
                      }}
                      onMouseOut={() => {
                        setActive("");
                      }}
                      className={`${
                        active === 1 ? "bg-black/30" : ""
                      } flex justify-end text-black font-normal`}
                    >
                      Home / Villa
                    </a>
                  </Link>

                  <Link href="/office-automation">
                    <a
                      onMouseOver={() => {
                        setActive(3);
                      }}
                      onMouseOut={() => {
                        setActive("");
                      }}
                      className={`${
                        active === 3 ? "bg-black/30" : ""
                      } flex justify-end text-black  font-normal`}
                    >
                      Workspace
                    </a>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>

            <Link href="/about">
              <span className="pb-4 font-bold text-black uppercase tracking-widest">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className="pb-4 font-bold text-black uppercase tracking-widest">
                Contact Us
              </span>
            </Link>
            <Link href="/efficiency">
              <span className="pb-4 font-bold text-black uppercase tracking-widest">
                Efficiency
              </span>
            </Link>

            <div className="mt-0 mb-4">
              <Link href="/iot">
                <span className="cursor-pointer pt-8 pb-4 font-bold text-black uppercase tracking-widest relative">
                  IoT Solutions
                  <img
                    className="w-6 h-6 absolute -right-9 top-8"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowIOTMenu(!showIOTMenu);
                    }}
                    src="https://ik.imagekit.io/jason7531/syncrow/common/dropdown-menu-icon-12_0WkYqOl6S.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642271510369"
                    alt=""
                  />
                </span>
              </Link>
              {showIOTMenu ? (
                <div className="flex flex-col -ml-20 ">
                  <Link href="/smart-home-iot-solutions">
                    <a
                      onMouseOver={() => {
                        setActive(1);
                      }}
                      onMouseOut={() => {
                        setActive("");
                      }}
                      className={`${
                        active === 1 ? "bg-black/30" : ""
                      } flex justify-end text-black font-normal`}
                    >
                      Residential
                    </a>
                  </Link>
                  <Link href="/iot/smartCity">
                    <a
                      onMouseOver={() => {
                        setActive(2);
                      }}
                      onMouseOut={() => {
                        setActive("");
                      }}
                      className={`${
                        active === 2 ? "bg-black/30" : ""
                      } flex justify-end text-black font-normal`}
                    >
                      Smart Cities
                    </a>
                  </Link>
                  <Link href="/iot/industrial-iot-solutions">
                    <a
                      onMouseOver={() => {
                        setActive(3);
                      }}
                      onMouseOut={() => {
                        setActive("");
                      }}
                      className={`${
                        active === 3 ? "bg-black/30" : ""
                      } flex justify-end text-black  font-normal`}
                    >
                      Industrials
                    </a>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
            <Link href="/bundles?page=type">
              <span className="pb-4 font-bold text-black uppercase tracking-widest">
                Bundles
              </span>
            </Link>
            <Link href="/build?page=type">
              <span className="pb-8 font-bold text-black uppercase tracking-widest">
                Build our own
              </span>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* mobile navbar */}

      {/* animations */}

      <div className="">
        <Link href="/contact">
          <button
            className="fixed hidden lg:block right-0 top-1/2 z-10 rounded-l-lg shadow-2xl p-2"
            style={{ background: "#023DFE", color: "white" }}
          >
            <Lottie
              options={locationOptions}
              height={"7vh"}
              className="z-10 middle:w-28 w-32"
            />
          </button>
        </Link>

        <button
          className="fixed hidden lg:block right-0 top-2/3 z-10 rounded-l-lg shadow-2xl p-2"
          onClick={() => setShowCol(true)}
          style={{ background: "#023DFE", color: "white" }}
        >
          <Lottie
            options={scriptOptions}
            className="z-10 middle:w-28 w-32"
            height={"7vh"}
          />
        </button>

        <Salesiq
          widgetCode={
            "5d136296e304ee64ead63634da3bd69f3b95c4131260019df2489d69ced4eb0ffa14704ef2df77eda1b54c0e181d4d05"
          }
          domain={"https://salesiq.zoho.com/widget"}
        />

        {showCol ? (
          <div className="w-1/3 absolute top-36 right-0 desktop:h-104 laptop:h-100 rounded-l-3xl bg-default text-white z-30">
            <button
              className="absolute top-8 right-10"
              onClick={() => setShowCol(false)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/66/66847.png"
                alt=""
                className=" desktop:w-5 laptop:w-4"
              />
            </button>

            <span className="font-bold desktop:text-2xl laptop:text-xl absolute desktop:top-8 laptop:top-6 left-10">
              Request a Quote
            </span>
            <form
              onSubmit={submitContact}
              className="desktop:text-xl laptop:text-base absolute desktop:top-16 laptop:top-12 left-10"
            >
              <br />
              <span>
                FullName <span className="text-red-500">*</span>
              </span>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="desktop:h-10 outline-none p-2 laptop:h-7 rounded-md w-full text-black"
              />
              <br />
              <br />
              <span>
                Phone Number <span className="text-red-500">*</span>
              </span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;
              <span>
                Email Address <span className="text-red-500">*</span>
              </span>
              <br />
              <input
                type="number"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-md outline-none p-2 desktop:h-10 laptop:h-7 text-black"
              />
              &nbsp; &nbsp;
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md p-2 outline-none desktop:h-10 laptop:h-7 text-black"
              />
              <br />
              <br />
              <span>Company Name (optional)</span>
              <br />
              <input
                type="text"
                name="company"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="rounded-md outline-none p-2 desktop:h-10 laptop:h-7 w-full text-black"
              />
              <br />
              <br />
              <span>
                Message <span className="text-red-500">*</span>
              </span>
              <br />
              <input
                type="text"
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message here..."
                className="w-full outline-none desktop:h-20 laptop:h-16 rounded-md p-2 text-black"
              />
              <br />
              <span className="text-base">
                <span className="text-red-500">*</span> Fields required
              </span>
              <br />
              <br />
              {isLoading ? (
                <button
                  className="bg-white flex justify-center items-center text-default desktop:w-48 laptop:w-36 desktop:h-10 laptop:h-7 rounded-lg w-[12rem] h-[2.5rem]"
                  type="button"
                >
                  <div className={style.loader}></div>
                </button>
              ) : (
                <button
                  className="bg-white text-default desktop:w-48 laptop:w-36 desktop:h-10 laptop:h-7 rounded-lg w-[12rem] h-[2.5rem]"
                  type="submit"
                >
                  Contact us now!
                </button>
              )}
              <input type="hidden" id="zc_gad" name="zc_gad" value="" />
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
