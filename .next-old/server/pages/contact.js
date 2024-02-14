(() => {
var exports = {};
exports.id = 9335;
exports.ids = [9335,1088,7454,7121,7568,8516,5825,6496];
exports.modules = {

/***/ 4418:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "style_loader__1fnLi",
	"spin": "style_spin__Snb1w"
};


/***/ }),

/***/ 3253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contact),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/header.js + 3 modules
var header = __webpack_require__(7964);
// EXTERNAL MODULE: ./components/form.js
var components_form = __webpack_require__(963);
// EXTERNAL MODULE: ./components/footer.js
var footer = __webpack_require__(6151);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./pages/contact/style.module.css
var style_module = __webpack_require__(4418);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./utils/BaseUrl.js
var BaseUrl = __webpack_require__(392);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./pages/contact/index.js

/* eslint-disable @next/next/no-img-element */ 









// /api/contact-uses



async function getStaticProps() {
    try {
        const res = await fetch(`${BaseUrl/* BaseUrl */.J}/contact-uses?populate[0]=seo`);
        const response = await res.json();
        // console.log(response)
        var data = response.data[0].attributes;
        return {
            props: {
                data
            },
            revalidate: 1
        };
    } catch (e) {
        console.log(e);
    }
}
function Contact({ data  }) {
    const { 0: name , 1: setName  } = (0,external_react_.useState)("");
    const { 0: phone , 1: setPhone  } = (0,external_react_.useState)("");
    const { 0: email1 , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: company , 1: setCompany  } = (0,external_react_.useState)("");
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)("");
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const validation = ()=>{
        var isValid = true;
        if (!name) {
            alert("Please enter first & last name");
            isValid = false;
        } else if (name && name.trim().split(" ").length < 2) {
            alert("First and last name should contain atleast two words.");
            isValid = false;
        } else if (!phone) {
            alert("Please enter phone number");
            isValid = false;
        } else if (!email1) {
            alert("Please enter email address");
            isValid = false;
        } else if (email1 && !validateEmail(email1)) {
            alert("Please enter a valid email address");
            isValid = false;
        } else if (!message.trim()) {
            alert("Please enter message");
            isValid = false;
        }
        return isValid;
    };
    const submitContact = async (event)=>{
        event.preventDefault();
        // console.log(name.split(" "))
        if (validation()) {
            setIsLoading(true);
            const res = await external_axios_default().post('https://ext.syncrow.ae/contact', {
                method: 'POST',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": name,
                    "company": company,
                    "email": email1,
                    "message": "Contact: " + message,
                    "phone": phone
                })
            });
            // console.log(res.status)
            if (res.status === 201 || res.status === 200 || res.status === 202) {
                setIsLoading(false);
                confirm("Your contact request has been sent successfully!");
                router_default().push("/contact/thank-you");
            } else {
                confirm('Your contact request has not been sent!');
                window.location.href = '/';
                setIsLoading(false);
            }
        }
    };
    // console.log(data)
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: data.seo.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: data.seo.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {
                color: "black"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " px-[2rem] lg:px-[5rem] pt-[7rem] pb-[3rem]",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col lg:flex-row lg:items-stretch",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-[100%] lg:w-[50%]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-[100%] h-[65vh] lg:h-[55vh] pr-2 object-cover mb-[2rem]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: data.gmapUrl,
                                        width: "100%",
                                        height: "100%",
                                        allowFullScreen: "",
                                        loading: "lazy",
                                        referrerPolicy: "no-referrer-when-downgrade"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    "data-aos": "fade-up",
                                    className: "text-[1.2rem] lg:text-[1.7rem] font-[aftika-semibold] my-[.5rem] font-extrabold",
                                    children: "Let's connect"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    "data-aos": "fade-up",
                                    href: `mailto:${data.email}`,
                                    className: "flex items-center my-[1rem]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineMail, {
                                            className: "mr-4 text-[1.5rem]"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "lg:text-[1.1rem] font-extrabold",
                                            children: data.email
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    "data-aos": "fade-up",
                                    href: `tel:${data.telephone}`,
                                    className: "flex items-center my-[1rem]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "mr-4 w-[1.5rem]",
                                            src: "/telephone.png",
                                            alt: "..."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "lg:text-[1.1rem] font-extrabold",
                                            children: data.telephone
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    "data-aos": "fade-up",
                                    href: `tel:${data.mobile}`,
                                    className: "flex items-center my-[1rem]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiPhoneCall, {
                                            className: "mr-4 text-[1.5rem]"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "lg:text-[1.1rem] font-extrabold",
                                            children: data.mobile
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    className: "flex items-center my-[1rem]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdOutlineLocationOn, {
                                            className: "mr-4 text-[1.5rem]"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "lg:text-[1.1rem] font-extrabold",
                                            children: data.address
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            "data-aos": "fade-up",
                            onSubmit: submitContact,
                            className: "max-h-[100%] py-[2rem] flex justify-center items-center bg-[#f5f5f5] w-[100%] lg:min-w-[550px] lg:max-w-[650px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-[80%] h-max mx-auto",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-[1.2rem] lg:text-[1.7rem] font-[aftika-semibold] my-[.5rem] font-extrabold",
                                            children: "Send us a message"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-[100%] mb-[1rem]",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "text-[.8rem] lg:text-[1rem]",
                                                    children: [
                                                        "First & Last Name ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    value: name,
                                                    onChange: (e)=>setName(e.target.value)
                                                    ,
                                                    className: "w-[100%] h-[2.5rem] px-[.7rem] outline-none rounded-md border-2 border-[#e7dfdf]",
                                                    type: "text"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-[48%] mb-[1rem]",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "text-[.8rem] lg:text-[1rem]",
                                                            children: [
                                                                "Phone number ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            value: phone,
                                                            onChange: (e)=>setPhone(e.target.value)
                                                            ,
                                                            className: "w-[100%] h-[2.5rem] px-[.7rem] outline-none rounded-md border-2 border-[#e7dfdf]",
                                                            type: "text"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-[48%] mb-[1rem]",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "text-[.8rem] lg:text-[1rem]",
                                                            children: [
                                                                "Email address ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            value: email1,
                                                            onChange: (e)=>setEmail(e.target.value)
                                                            ,
                                                            className: "w-[100%] h-[2.5rem] px-[.7rem] outline-none rounded-md border-2 border-[#e7dfdf]",
                                                            type: "text"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-[100%] mb-[1rem]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-[.8rem] lg:text-[1rem]",
                                                    children: "Company name (optional)"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    value: company,
                                                    onChange: (e)=>setCompany(e.target.value)
                                                    ,
                                                    className: "w-[100%] h-[2.5rem] px-[.7rem] outline-none rounded-md border-2 border-[#e7dfdf]",
                                                    type: "text"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-[100%] mb-[1rem]",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "text-[.8rem] lg:text-[1rem]",
                                                    children: [
                                                        "Message ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                    value: message,
                                                    onChange: (e)=>setMessage(e.target.value)
                                                    ,
                                                    placeholder: "Your message here...",
                                                    className: "px-[.7rem] outline-none py-[.5rem] w-[100%] h-[7rem] rounded-md border-2 border-[#e7dfdf]",
                                                    type: "text"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }),
                                                " Fields required"
                                            ]
                                        }),
                                        isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            className: "bg-default flex justify-center items-center text-white mt-[1rem] px-[1.5rem] cursor-pointer py-[.5rem] rounded-lg w-[12rem] h-[2.5rem]",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (style_module_default()).loader
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: "bg-default text-white mt-[1rem] px-[1.5rem] cursor-pointer py-[.5rem] rounded-lg w-[12rem] h-[2.5rem]",
                                            children: "Contact us Now!"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "hidden",
                                    id: "zc_gad",
                                    name: "zc_gad",
                                    value: ""
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {})
        ]
    }));
};


/***/ }),

/***/ 392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ BaseUrl)
/* harmony export */ });
const BaseUrl = "https://cms.syncrow.ae/api";



/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1189:
/***/ ((module) => {

"use strict";
module.exports = require("react-lottie");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,3602,4149,963], () => (__webpack_exec__(3253)));
module.exports = __webpack_exports__;

})();