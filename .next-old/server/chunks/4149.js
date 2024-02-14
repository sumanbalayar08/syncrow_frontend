exports.id = 4149;
exports.ids = [4149];
exports.modules = {

/***/ 6048:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "headerStyles_loader__Qwnul",
	"spin": "headerStyles_spin__JxU0p"
};


/***/ }),

/***/ 6151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);

/* eslint-disable @next/next/no-img-element */ 

const Footer = ()=>{
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: show2 , 1: setShow2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let automateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let automateRef2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    // useEffect(() => {
    //   let handler = (e) => {
    //     if (!automateRef.current.contains(e.target)) {
    //       setShow(false);
    //     }
    //   }
    //   document.addEventListener("mousedown", handler);
    //   return () => {
    //     document.removeEventListener("mousedown", handler);
    //   }
    // })
    // useEffect(() => {
    //   let handler2 = (e) => {
    //     if (!automateRef2.current.contains(e.target)) {
    //       setShow2(false);
    //     }
    //   }
    //   document.addEventListener("mousedown", handler2);
    //   return () => {
    //     document.removeEventListener("mousedown", handler2);
    //   }
    // })
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "px-4 md:px-24 mx-auto p-5 w-full",
        style: {
            background: "#D9D9D9"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "block tablet:hidden mb-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "my-2 text-black font-semibold tablet:font-normal text-center tablet:text-default text-base",
                        children: [
                            " ",
                            "SUBSCRIBE FOR LATEST UPDATES"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "w-80 h-10 rounded-3xl outline-default pl-2",
                                type: "email",
                                placeholder: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "w-44 p-2 bg-default text-white font-bold rounded-md",
                                children: "SUBMIT"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "md:flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-3 text-default text-xs gap-10",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/smart-home-automation",
                                            className: "text-base",
                                            children: "Why Us"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/about",
                                            className: "text-base",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/efficiency",
                                            className: "text-base",
                                            children: "Efficiency"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/bundles?page=type",
                                            className: "text-base",
                                            children: "Bundles"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/build?page=type",
                                            className: "text-base",
                                            children: "Build Your Own"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/faq",
                                            className: "text-base",
                                            children: "FAQs"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/privacyPolicy",
                                            className: "text-base",
                                            children: "Privacy Policy"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/termsAndConditions",
                                            className: "text-base",
                                            children: "Terms & Conditions"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/about#syncrowMember",
                                            className: "text-base",
                                            children: "Careers"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/blogs",
                                            className: "text-base",
                                            children: "Blogs"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2 text-base",
                                        children: "Automate"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/smart-home-automation",
                                            className: "text-base",
                                            children: "Home / Villa"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/office-automation",
                                            className: "text-base",
                                            children: "Workspace"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2 text-base",
                                        children: "IoT Solutions"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/smart-home-iot-solutions",
                                            className: "text-base",
                                            children: "Residential"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/iot/smartCity",
                                            className: "text-base",
                                            children: "Smart Cities"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "my-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/iot/industrial-iot-solutions",
                                            className: "text-base",
                                            children: "Industrials"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "tablet:block hidden",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "my-2 text-black font-semibold tablet:font-normal tablet:text-default text-sm",
                                children: [
                                    " ",
                                    "SUBSCRIBE FOR LATEST UPDATES"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "w-52 laptop:w-96 h-10 rounded-md outline-default pl-2",
                                        type: "email",
                                        placeholder: "Email"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "w-28 p-2 bg-default text-white font-bold rounded-md",
                                        children: "SUBMIT"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "my-4 md:flex items-center justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-xs font-semibold text-center",
                        children: "ALL RIGHTS RESERVED"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "md:flex gap-5 text-center items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "my-3",
                                children: "FOLLOW US ON"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                className: "inline-block mr-3 md:mr-0",
                                href: "https://www.facebook.com/Syncrow.IoT ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://ik.imagekit.io/jason7531/syncrow/common/Icon_ionic-logo-facebook_SQk3lI2c3Ix1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642340585967",
                                    alt: "",
                                    className: "laptop:w-6 desktop:w-8"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "inline-block mr-3 md:mr-0",
                                href: "https://www.instagram.com/syncrow_solutions/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://ik.imagekit.io/jason7531/syncrow/common/Icon_ionic-logo-instagram_V5sYLIb2F.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642340586321",
                                    alt: "",
                                    className: "laptop:w-6 desktop:w-8"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "inline-block mr-3 md:mr-0",
                                rel: "noreferrer",
                                href: "https://www.linkedin.com/company/syncrowiot",
                                target: "_blank",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://ik.imagekit.io/jason7531/syncrow/common/Icon_ionic-logo-linkedin_4vB6QScALH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642340586695",
                                    alt: "",
                                    className: "laptop:w-6 desktop:w-8"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 7964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-lottie"
var external_react_lottie_ = __webpack_require__(1189);
var external_react_lottie_default = /*#__PURE__*/__webpack_require__.n(external_react_lottie_);
;// CONCATENATED MODULE: ./pages/lotties/telephone.json
const telephone_namespaceObject = JSON.parse('{"v":"5.7.4","fr":29.9700012207031,"ip":0,"op":108.00000439893,"w":2000,"h":2000,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Mail/Icons algemeen Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":16,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[-120]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[-182.818]},{"t":25.0000010182709,"s":[-190]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":14,"s":[1748.886,1038.059,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":16,"s":[1476.886,1018.059,0],"to":[0,0,0],"ti":[170.667,38.667,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":21,"s":[1400.886,666.059,0],"to":[-170.667,-38.667,0],"ti":[158,-20,0]},{"t":25.0000010182709,"s":[452.886,786.059,0]}],"ix":2,"l":2},"a":{"a":0,"k":[257.944,84.66,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":14,"s":[570.588,570.588,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":16,"s":[553.514,599.021,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":21,"s":[267.081,128.825,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":23,"s":[333.44,62.667,100]},{"t":25.0000010182709,"s":[0,0,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":15,"s":[{"i":[[19.898,13.377],[0,0],[0,-10.29],[0,0],[-15.401,0],[0,0],[0,0],[0,15.401],[0,0],[8.541,-5.741],[0,0]],"o":[[0,0],[-8.54,-5.741],[0,0],[0,15.401],[0,0],[0,0],[15.401,0],[0,0],[0,-10.29],[0,0],[-19.897,13.377]],"v":[[-32.905,0.027],[-108.818,-51.008],[-128.847,-40.339],[-128.847,28.863],[-100.96,56.749],[-0.564,56.749],[100.961,56.749],[128.847,28.863],[128.847,-40.339],[108.818,-51.008],[32.905,0.027]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":17,"s":[{"i":[[19.898,13.377],[0,0],[0,-10.29],[0,0],[-15.401,0],[0,0],[0,0],[0,15.401],[0,0],[8.541,-5.741],[0,0]],"o":[[0,0],[-8.54,-5.741],[0,0],[0,15.401],[0,0],[0,0],[15.401,0],[0,0],[0,-10.29],[0,0],[-19.897,13.377]],"v":[[-32.905,0.027],[-110.775,-62.268],[-128.105,-47.818],[-129.492,14.707],[-104.223,40.581],[-2.205,48.619],[100.961,56.749],[128.847,28.863],[128.847,-40.339],[108.818,-51.008],[32.905,0.027]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":18,"s":[{"i":[[19.898,13.377],[0,0],[0,-10.29],[0,0],[-15.401,0],[-32.028,0.824],[0,0],[0,15.401],[0,0],[8.541,-5.741],[0,0]],"o":[[0,0],[-8.54,-5.741],[0,0],[0,15.401],[0,0],[32.028,-0.824],[15.401,0],[0,0],[0,-10.29],[0,0],[-19.897,13.377]],"v":[[-32.905,0.027],[-108.818,-51.008],[-128.847,-40.339],[-128.847,28.863],[-100.96,56.749],[41.569,65.999],[100.961,56.749],[128.847,28.863],[128.847,-40.339],[108.818,-51.008],[32.905,0.027]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[{"i":[[19.898,13.377],[0,0],[0,-10.29],[0,0],[-15.401,0],[0,0],[0,0],[0,15.401],[0,0],[8.541,-5.741],[0,0]],"o":[[0,0],[-8.54,-5.741],[0,0],[0,15.401],[0,0],[0,0],[15.401,0],[0,0],[0,-10.29],[0,0],[-19.897,13.377]],"v":[[-32.905,0.026],[-108.818,-51.008],[-128.847,-40.339],[-125.812,38.35],[-95.73,70.181],[6.299,39.026],[109.476,7.519],[127.164,-16.513],[128.523,-53.021],[108.818,-51.008],[41.295,-13.128]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":21,"s":[{"i":[[19.898,13.377],[0,0],[0,-10.29],[0,0],[-15.401,0],[0,0],[0,0],[0,15.401],[0,0],[8.541,-5.741],[0,0]],"o":[[0,0],[-8.54,-5.741],[0,0],[0,15.401],[0,0],[0,0],[15.401,0],[0,0],[0,-10.29],[0,0],[-19.897,13.377]],"v":[[-32.905,0.027],[-108.818,-51.008],[-128.847,-40.339],[-128.847,28.863],[-100.96,56.749],[-0.564,56.749],[100.961,56.749],[128.847,28.863],[128.847,-40.339],[108.818,-51.008],[32.905,0.027]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":22,"s":[{"i":[[19.898,13.377],[0,0],[0,-10.29],[0,0],[-15.401,0],[-54.755,2.499],[0,0],[0,15.401],[0,0],[8.541,-5.741],[0,0]],"o":[[0,0],[-8.54,-5.741],[0,0],[0,15.401],[0,0],[54.755,-2.499],[15.401,0],[0,0],[0,-10.29],[0,0],[-19.897,13.377]],"v":[[-26.009,-30.772],[-109.448,-88.567],[-128.847,-40.339],[-128.847,28.863],[-100.96,56.749],[-1.551,111.095],[100.961,56.749],[125.022,6.853],[128.847,-40.339],[109.58,-89.692],[27.196,-30.218]],"c":true}]},{"t":24.00000097754,"s":[{"i":[[19.898,13.377],[0,0],[0,-10.29],[0,0],[-15.401,0],[-33.892,0.111],[0,0],[0,15.401],[0,0],[8.541,-5.741],[0,0]],"o":[[0,0],[-8.54,-5.741],[0,0],[0,15.401],[0,0],[33.892,-0.111],[15.401,0],[0,0],[0,-10.29],[0,0],[-19.897,13.377]],"v":[[-26.009,-30.772],[-109.448,-88.567],[-128.847,-40.339],[-128.847,28.863],[-100.96,56.749],[2.172,49.089],[100.961,56.749],[125.022,6.853],[128.847,-40.339],[109.58,-89.692],[27.196,-30.218]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[129.097,112.321],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":15,"s":[{"i":[[15.73,10.575],[0,0],[-10.97,0],[0,0],[0,0],[9.105,-6.121],[0,0]],"o":[[0,0],[-9.105,-6.121],[0,0],[0,0],[10.971,0],[0,0],[-15.731,10.575]],"v":[[-26.014,35.837],[-118.611,-21.094],[-111.919,-46.413],[6.535,-46.413],[111.918,-46.413],[118.117,-26.081],[26.014,35.837]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":18,"s":[{"i":[[15.73,10.575],[0,0],[-10.97,0],[-48.469,3.11],[0,0],[9.105,-6.121],[0,0]],"o":[[0,0],[-9.105,-6.121],[0,0],[48.469,-3.11],[10.971,0],[0,0],[-19.088,7.18]],"v":[[-26.014,35.837],[-118.611,-21.094],[-111.919,-46.413],[34.104,-22.696],[111.786,-30.568],[117.917,-8.861],[26.964,42.783]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[{"i":[[15.73,10.575],[0,0],[-10.97,0],[0,0],[0,0],[9.105,-6.121],[0,0]],"o":[[0,0],[-9.105,-6.121],[0,0],[0,0],[10.971,0],[0,0],[-19.088,7.18]],"v":[[-26.014,35.837],[-118.611,-21.094],[-111.919,-46.413],[2.025,-31.066],[103.396,-17.414],[117.273,0.064],[26.964,42.783]],"c":true}]},{"t":22.0000008960784,"s":[{"i":[[15.73,10.575],[0,0],[-10.97,0],[-42.557,4.463],[0,0],[9.105,-6.121],[0,0]],"o":[[0,0],[-9.105,-6.121],[0,0],[42.557,-4.463],[10.971,0],[0,0],[-19.088,7.18]],"v":[[-26.014,35.837],[-118.611,-21.094],[-111.919,-46.413],[2.903,20.668],[103.396,-17.414],[117.273,0.064],[26.964,42.783]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[129.097,46.663],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":30.0000012219251,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Mail/Icons algemeen Outlines 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1012.727,1070.99,0],"ix":2,"l":2},"a":{"a":0,"k":[128.926,90.431,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":41,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":46,"s":[662.05,662.05,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":48,"s":[480,480,100]},{"t":50.0000020365418,"s":[570.588,570.588,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[19.898,13.377],[0,0],[0,-10.29],[0,0],[-15.401,0],[0,0],[0,0],[0,15.401],[0,0],[8.541,-5.741],[0,0]],"o":[[0,0],[-8.54,-5.741],[0,0],[0,15.401],[0,0],[0,0],[15.401,0],[0,0],[0,-10.29],[0,0],[-19.897,13.377]],"v":[[-32.905,0.027],[-108.818,-51.008],[-128.847,-40.339],[-128.847,28.863],[-100.96,56.749],[-0.564,56.749],[100.961,56.749],[128.847,28.863],[128.847,-40.339],[108.818,-51.008],[32.905,0.027]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[129.097,112.321],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[15.73,10.575],[0,0],[-10.97,0],[0,0],[0,0],[9.105,-6.121],[0,0]],"o":[[0,0],[-9.105,-6.121],[0,0],[0,0],[10.971,0],[0,0],[-15.731,10.575]],"v":[[-26.014,35.837],[-118.611,-21.094],[-111.919,-46.413],[6.535,-46.413],[111.918,-46.413],[118.117,-26.081],[26.014,35.837]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[129.097,46.663],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":41.0000016699642,"op":193.000007861051,"st":12.00000048877,"bm":0}],"markers":[]}');
;// CONCATENATED MODULE: ./pages/lotties/script.json
const script_namespaceObject = JSON.parse('{"v":"5.4.4","fr":60,"ip":0,"op":180,"w":200,"h":200,"nm":"pay-billls (empty state)","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"no-bills-yet copy Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[100,100,0],"ix":2},"a":{"a":0,"k":[36,43.5,0],"ix":1},"s":{"a":0,"k":[204.616,204.616,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[33.128,42.261],[54.555,42.261]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.8941176470588236,0.8941176470588236,0.8941176470588236,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0],"e":[100]},{"t":103}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[42.054,66.521],[54.556,66.521]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.8941176470588236,0.8941176470588236,0.8941176470588236,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":92,"s":[0],"e":[100]},{"t":120}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[42.054,58.695],[54.979,58.695]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.8941176470588236,0.8941176470588236,0.8941176470588236,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":92,"s":[0],"e":[100]},{"t":111}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[7.49,62.655],[14.779,62.655]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":64,"s":[0],"e":[100]},{"t":75}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[33.128,66.521],[37.085,66.521]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.8941176470588236,0.8941176470588236,0.8941176470588236,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":86,"s":[0],"e":[100]},{"t":114}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[33.128,58.695],[37.085,58.695]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.8941176470588236,0.8941176470588236,0.8941176470588236,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":84,"s":[0],"e":[100]},{"t":92}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":3,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[33.128,50.087],[61.222,50.087]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.8941176470588236,0.8941176470588236,0.8941176470588236,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":83,"s":[0],"e":[100]},{"t":102}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":3,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[33.128,33.652],[61.222,33.652]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":78,"s":[0],"e":[100]},{"t":94}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.8941176470588236,0.8941176470588236,0.8941176470588236,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":3,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.618,-0.616],[0,0],[0,0],[0.619,-0.617],[0,0],[0,0],[0.406,0],[0.318,-0.317],[0,0],[0,0],[0,0],[0.018,0.211],[0,0.07],[0.035,0.159],[0.018,0.07],[0.071,0.193],[0.017,0.018],[0.088,0.194],[0.018,0.07],[0.089,0.141],[0.035,0.071],[0.106,0.158],[0.018,0.018],[0,0],[0,0],[0,-2.254]],"o":[[0,0],[0,0],[-0.619,-0.616],[0,0],[0,0],[-0.618,-0.617],[0,0],[0,0],[-0.319,-0.317],[-0.407,0],[0,0],[0,0],[0,0],[0,-0.229],[0,-0.07],[-0.018,-0.159],[-0.018,-0.07],[-0.035,-0.194],[0,-0.018],[-0.071,-0.211],[-0.018,-0.053],[-0.07,-0.141],[-0.035,-0.053],[-0.089,-0.158],[-0.017,-0.017],[0,0],[0,0],[2.262,0],[0,0]],"v":[[22.007,28.076],[20.327,29.749],[14.887,24.326],[12.624,24.326],[7.182,29.749],[1.794,24.344],[-0.469,24.344],[-5.911,29.749],[-11.352,24.326],[-12.482,23.85],[-13.613,24.326],[-19.055,29.749],[-20.734,28.076],[-20.734,-25.647],[-20.77,-26.316],[-20.788,-26.509],[-20.857,-26.985],[-20.894,-27.178],[-21.053,-27.777],[-21.07,-27.813],[-21.299,-28.411],[-21.37,-28.587],[-21.583,-29.01],[-21.671,-29.186],[-21.971,-29.679],[-22.007,-29.732],[-22.007,-29.749],[17.906,-29.749],[22.007,-25.664]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":73,"s":[0],"e":[100]},{"t":127}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[46.743,52.464],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":3,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-4.015],[0,0],[2.261,0],[0,2.254],[0,0],[0,0],[0,0]],"o":[[-4.028,0],[0,0],[0,2.254],[-2.262,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-7.51,-12.079],[-14.807,-4.807],[-14.807,24.352],[-18.906,28.438],[-23.005,24.352],[-23.005,-28.438],[23.005,-28.438],[23.005,-12.079]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":49,"s":[0],"e":[100]},{"t":108}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[26.22,34.218],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":3,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0}],"markers":[]}');
;// CONCATENATED MODULE: ./pages/lotties/message.json
const message_namespaceObject = JSON.parse('{"v":"5.7.0","fr":30,"ip":0,"op":150,"w":500,"h":500,"nm":"3 - Chatting","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Controller","hd":true,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Color","np":3,"mn":"ADBE Color Control","ix":1,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[1,1,1,1],"ix":1}}]},{"ty":5,"nm":"Color 2","np":3,"mn":"ADBE Color Control","ix":2,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.0941176489,0.525490224361,0.921568632126,1],"ix":1}}]},{"ty":5,"nm":"Color 3","np":3,"mn":"ADBE Color Control","ix":3,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.04705882445,0.941176474094,0.882352948189,1],"ix":1}}]},{"ty":5,"nm":"Color 4","np":3,"mn":"ADBE Color Control","ix":4,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[1,1,1,1],"ix":1}}]}],"shapes":[],"ip":150,"op":150,"st":0,"bm":0,"hidden":0},{"ddd":0,"ind":2,"ty":4,"nm":"Text 1","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[126.395,105.206,0],"ix":2},"a":{"a":0,"k":[331.857,279.956,0],"ix":1},"s":{"a":0,"k":[146,146,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4,4],[104,4]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3,"x":"var $bm_rt;\\ntry {\\n    $bm_rt = thisComp.layer(\'Controller\').effect(\'Color\')(\'ADBE Color Control-0001\');\\n} catch (e) {\\n    $bm_rt = value;\\n}"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":1,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":0,"s":[100]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":20,"s":[70]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":40,"s":[100]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":60,"s":[0]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":120,"s":[0]},{"t":146,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[332.031,243.956],"ix":2},"a":{"a":0,"k":[54,4],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"l4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4,4],[104,4]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3,"x":"var $bm_rt;\\ntry {\\n    $bm_rt = thisComp.layer(\'Controller\')(\'Effects\')(\'Color\')(\'ADBE Color Control-0001\');\\n} catch (e) {\\n    $bm_rt = value;\\n}"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":1,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":2,"s":[60]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":22,"s":[30]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":42,"s":[60]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":62,"s":[0]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":122,"s":[0]},{"t":148,"s":[60]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[332.031,279.956],"ix":2},"a":{"a":0,"k":[54,4],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"l5","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4,4],[104,4]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3,"x":"var $bm_rt;\\ntry {\\n    $bm_rt = thisComp.layer(\'Controller\')(\'Effects\')(\'Color\')(\'ADBE Color Control-0001\');\\n} catch (e) {\\n    $bm_rt = value;\\n}"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":1,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":4,"s":[80]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":24,"s":[50]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":44,"s":[80]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":124,"s":[0]},{"t":150,"s":[80]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[332.031,315.956],"ix":2},"a":{"a":0,"k":[54,4],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"l6","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Dialog Mask","parent":6,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[125.661,143.164,0],"ix":2},"a":{"a":0,"k":[125.661,143.164,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-16.108],[0,0],[-16.107,0],[0,0],[-5.447,-7.87],[0,0],[0,0],[0,0],[16.108,0],[0,0]],"o":[[0,0],[0,16.108],[0,0],[9.571,0],[0,0],[0,0],[0,0],[0,-16.108],[0,0],[-16.107,0]],"v":[[-125.411,-113.749],[-125.411,37.911],[-96.246,67.078],[57.631,67.078],[81.611,79.643],[125.411,142.915],[125.411,67.078],[125.411,-113.749],[96.245,-142.914],[-96.246,-142.914]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.922000002394,0.922000002394,0.922000002394,1],"ix":4,"x":"var $bm_rt;\\ntry {\\n    $bm_rt = thisComp.layer(\'Controller\').effect(\'Color 2\')(\'ADBE Color Control-0001\');\\n} catch (e) {\\n    $bm_rt = value;\\n}"},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[125.661,143.164],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":65,"op":125,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Dialog 1","tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":20,"s":[-2]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":40,"s":[2]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":65,"s":[-25]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":95,"s":[0]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":120,"s":[15]},{"t":149,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.8,"y":0},"t":40,"s":[210,220.00000000000003,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.8,"y":0},"t":65,"s":[160,180,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.8,"y":0},"t":95,"s":[210,229.99999999999997,0],"to":[0,0,0],"ti":[-41,-41,0]},{"i":{"x":0.5,"y":1},"o":{"x":0.8,"y":0},"t":120,"s":[180,352,0],"to":[51,-15,0],"ti":[0,0,0]},{"t":149,"s":[210,220.00000000000003,0]}],"ix":2},"a":{"a":0,"k":[125.661,143.165,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.5,0.5,0.5],"y":[1,1,1]},"o":{"x":[0.5,0.5,0.5],"y":[0,0,0]},"t":0,"s":[100,100,100]},{"i":{"x":[0.2,0.2,0.2],"y":[1,1,1]},"o":{"x":[0.5,0.5,0.5],"y":[0,0,0]},"t":20,"s":[85,85,100]},{"i":{"x":[0.2,0.2,0.2],"y":[1,1,1]},"o":{"x":[0.8,0.8,0.8],"y":[0,0,0]},"t":40,"s":[120,120,100]},{"i":{"x":[0.2,0.2,0.2],"y":[1,1,1]},"o":{"x":[0.8,0.8,0.8],"y":[0,0,0]},"t":65,"s":[80,80,100]},{"i":{"x":[0.2,0.2,0.2],"y":[1,1,1]},"o":{"x":[0.8,0.8,0.8],"y":[0,0,0]},"t":95,"s":[100,100,100]},{"i":{"x":[0.5,0.5,0.5],"y":[1,1,1]},"o":{"x":[0.8,0.8,0.8],"y":[0,0,0]},"t":120,"s":[85,85,100]},{"t":149,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-16.107],[0,0],[0,0],[0,0],[-9.57,0],[0,0],[0,16.107],[0,0],[16.108,0]],"o":[[-16.108,0],[0,0],[0,0],[0,0],[5.448,-7.869],[0,0],[16.108,0],[0,0],[0,-16.107],[0,0]],"v":[[-96.246,-142.915],[-125.411,-113.75],[-125.411,67.077],[-125.411,142.915],[-81.612,79.642],[-57.632,67.077],[96.245,67.077],[125.411,37.912],[125.411,-113.75],[96.245,-142.915]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.00784313725490196,0.23921568627450981,0.996078431372549,1],"ix":4,"x":"var $bm_rt;\\ntry {\\n    $bm_rt = thisComp.layer(\'Controller\').effect(\'Color 3\')(\'ADBE Color Control-0001\');\\n} catch (e) {\\n    $bm_rt = value;\\n}"},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[125.661,143.165],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Text 2","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[125.395,105.206,0],"ix":2},"a":{"a":0,"k":[331.857,279.956,0],"ix":1},"s":{"a":0,"k":[146,146,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4,4],[104,4]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3,"x":"var $bm_rt;\\ntry {\\n    $bm_rt = thisComp.layer(\'Controller\')(\'Effects\')(\'Color\')(\'ADBE Color Control-0001\');\\n} catch (e) {\\n    $bm_rt = value;\\n}"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":1,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":57,"s":[0]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":77,"s":[100]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":97,"s":[70]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":114,"s":[100]},{"t":130,"s":[0]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[332.031,243.956],"ix":2},"a":{"a":0,"k":[54,4],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"l4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4,4],[104,4]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.00784313725490196,0.23921568627450981,0.996078431372549,1],"ix":3,"x":"var $bm_rt;\\ntry {\\n    $bm_rt = thisComp.layer(\'Controller\')(\'Effects\')(\'Color\')(\'ADBE Color Control-0001\');\\n} catch (e) {\\n    $bm_rt = value;\\n}"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":1,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":59,"s":[0]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":79,"s":[60]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":99,"s":[30]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":116,"s":[60]},{"t":132,"s":[0]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[332.031,279.956],"ix":2},"a":{"a":0,"k":[54,4],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"l5","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[4,4],[104,4]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3,"x":"var $bm_rt;\\ntry {\\n    $bm_rt = thisComp.layer(\'Controller\')(\'Effects\')(\'Color\')(\'ADBE Color Control-0001\');\\n} catch (e) {\\n    $bm_rt = value;\\n}"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":1,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":61,"s":[0]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":81,"s":[80]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":101,"s":[50]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":118,"s":[80]},{"t":134,"s":[0]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[332.031,315.956],"ix":2},"a":{"a":0,"k":[54,4],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"l6","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":-9,"op":150,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Dialog 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":2,"s":[0]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[0]},"t":22,"s":[2]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":42,"s":[-2]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":67,"s":[15]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":97,"s":[0]},{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.8],"y":[0]},"t":122,"s":[15]},{"t":149,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.8,"y":0},"t":42,"s":[290,280,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.8,"y":0},"t":67,"s":[340,320,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.8,"y":0},"t":97,"s":[290,270,0],"to":[0,0,0],"ti":[-57.5,10.5,0]},{"i":{"x":0.5,"y":1},"o":{"x":0.8,"y":0},"t":122,"s":[330,200,0],"to":[25.5,57.5,0],"ti":[0,0,0]},{"t":149,"s":[290,280,0]}],"ix":2},"a":{"a":0,"k":[125.661,143.164,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.5,0.5,0.5],"y":[1,1,1]},"o":{"x":[0.5,0.5,0.5],"y":[0,0,0]},"t":2,"s":[100,100,100]},{"i":{"x":[0.2,0.2,0.2],"y":[1,1,1]},"o":{"x":[0.5,0.5,0.5],"y":[0,0,0]},"t":22,"s":[85,85,100]},{"i":{"x":[0.2,0.2,0.2],"y":[1,1,1]},"o":{"x":[0.8,0.8,0.8],"y":[0,0,0]},"t":42,"s":[120,120,100]},{"i":{"x":[0.2,0.2,0.2],"y":[1,1,1]},"o":{"x":[0.8,0.8,0.8],"y":[0,0,0]},"t":67,"s":[80,80,100]},{"i":{"x":[0.2,0.2,0.2],"y":[1,1,1]},"o":{"x":[0.8,0.8,0.8],"y":[0,0,0]},"t":97,"s":[100,100,100]},{"i":{"x":[0.5,0.5,0.5],"y":[1,1,1]},"o":{"x":[0.8,0.8,0.8],"y":[0,0,0]},"t":122,"s":[85,85,100]},{"t":149,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[10,2]],"o":[[-10,-2]],"v":[[467.661,87.164]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3,"x":"var $bm_rt;\\ntry {\\n    $bm_rt = thisComp.layer(\'Controller\').effect(\'Color 4\')(\'ADBE Color Control-0001\');\\n} catch (e) {\\n    $bm_rt = value;\\n}"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":true},{"ty":"fl","c":{"a":0,"k":[0.9137254901960784,0.9137254901960784,0.9137254901960784,1],"ix":4,"x":"var $bm_rt;\\ntry {\\n    $bm_rt = thisComp.layer(\'Controller\')(\'Effects\')(\'Color 2\')(\'ADBE Color Control-0001\');\\n} catch (e) {\\n    $bm_rt = value;\\n}"},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-16.108],[0,0],[-16.107,0],[0,0],[-5.447,-7.87],[0,0],[0,0],[0,0],[16.108,0],[0,0]],"o":[[0,0],[0,16.108],[0,0],[9.571,0],[0,0],[0,0],[0,0],[0,-16.108],[0,0],[-16.107,0]],"v":[[-125.411,-113.749],[-125.411,37.911],[-96.246,67.078],[57.631,67.078],[81.611,79.643],[125.411,142.915],[125.411,67.078],[125.411,-113.749],[96.245,-142.914],[-96.246,-142.914]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9137254901960784,0.9137254901960784,0.9137254901960784,1],"ix":4,"x":"var $bm_rt;\\ntry {\\n    $bm_rt = thisComp.layer(\'Controller\')(\'Effects\')(\'Color 2\')(\'ADBE Color Control-0001\');\\n} catch (e) {\\n    $bm_rt = value;\\n}"},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[125.661,143.164],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0}],"markers":[]}');
// EXTERNAL MODULE: ./pages/salesiq.js
var salesiq = __webpack_require__(3602);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/headerStyles.module.css
var headerStyles_module = __webpack_require__(6048);
var headerStyles_module_default = /*#__PURE__*/__webpack_require__.n(headerStyles_module);
;// CONCATENATED MODULE: ./components/header.js












function Header({ color  }) {
    const router = (0,router_.useRouter)();
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const { 0: showIOT , 1: setShowIOT  } = (0,external_react_.useState)(false);
    const { 0: active , 1: setActive  } = (0,external_react_.useState)("");
    const { 0: activeIOT , 1: setActiveIOT  } = (0,external_react_.useState)("");
    const { 0: showCol , 1: setShowCol  } = (0,external_react_.useState)(false);
    const { 0: menu , 1: setMenu  } = (0,external_react_.useState)(false);
    const { 0: showAutomate , 1: setShowAutomate  } = (0,external_react_.useState)(false);
    const { 0: showIOTMenu , 1: setShowIOTMenu  } = (0,external_react_.useState)(false);
    const { 0: scroll , 1: setScroll  } = (0,external_react_.useState)(10);
    // for request a quote
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
            alert("Please enter full name");
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
        if (validation()) {
            setIsLoading(true);
            const res = await external_axios_default().post("https://ext.syncrow.ae/contact", {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: event.target.name.value,
                    company: event.target.company.value,
                    email: event.target.email.value,
                    message: "Request Quote: " + event.target.message.value,
                    phone: event.target.phone.value
                })
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
        animationData: telephone_namespaceObject,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const messageOptions = {
        loop: true,
        autoplay: true,
        animationData: message_namespaceObject,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const scriptOptions = {
        loop: true,
        autoplay: true,
        animationData: script_namespaceObject,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    let menuRef = (0,external_react_.useRef)();
    let automateMenuRef = (0,external_react_.useRef)();
    let iotMenuRef = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let handler = (e)=>{
            if (!menuRef.current.contains(e.target)) {
                setMenu(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return ()=>{
            document.removeEventListener("mousedown", handler);
        };
    });
    (0,external_react_.useEffect)(()=>{
        let handler = (e)=>{
            if (!automateMenuRef.current.contains(e.target)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return ()=>{
            document.removeEventListener("mousedown", handler);
        };
    });
    (0,external_react_.useEffect)(()=>{
        let handler = (e)=>{
            if (!iotMenuRef.current.contains(e.target)) {
                setShowIOT(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return ()=>{
            document.removeEventListener("mousedown", handler);
        };
    });
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY < 10;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, [
        scroll
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "https://ik.imagekit.io/jason7531/syncrow/common/Group_1_rkAObjd65.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642343317149"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
                        integrity: "sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==",
                        crossOrigin: "anonymous",
                        referrerPolicy: "no-referrer"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `cursor-pointer lg:flex fixed top-0 py-6 medium:px-20  px-10 right-0 left-0 z-10 justify-between items-center hidden ${scroll ? "" : "bg-white text-black shadow-lg z-40 transition ease-in-out duration-500"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "cursor-pointer",
                            children: scroll && color === "white" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "https://ik.imagekit.io/jason7531/syncrow/common/Group_3_vfnoGgNCF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642484105062",
                                alt: ""
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/black-logo.png",
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-8 relative mt-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    ref: automateMenuRef,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: `${scroll && color == "white" ? "text-white" : "text-black"} text-base tracking-wide relative cursor-pointer`,
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                setShow(!show);
                                            },
                                            children: [
                                                "Automate",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-solid fa-angle-down pl-4"
                                                })
                                            ]
                                        }),
                                        show ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bg-white w-44 grid grid-cols-1 grid-rows-2 text-base absolute -left-[3.8rem] top-[21px] py-1 px-2 pt-10 rounded-lg space-y-1 pb-[10px]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/smart-home-automation",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onMouseOver: ()=>{
                                                            setActive(1);
                                                        },
                                                        onMouseOut: ()=>{
                                                            setActive("");
                                                        },
                                                        className: `${active === 1 ? "bg-black/30" : ""} flex justify-end text-black`,
                                                        children: "Home / Villa"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/office-automation",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onMouseOver: ()=>{
                                                            setActive(3);
                                                        },
                                                        onMouseOut: ()=>{
                                                            setActive("");
                                                        },
                                                        className: `${active === 3 ? "bg-black/30" : ""} flex justify-end text-black`,
                                                        children: "Workspace"
                                                    })
                                                })
                                            ]
                                        }) : ""
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `${scroll && color == "white" ? "text-white" : "text-black"} text-base tracking-wide cursor-pointer`,
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/contact",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `${scroll && color == "white" ? "text-white" : "text-black"} text-base tracking-wide cursor-pointer`,
                                    children: "Contact Us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/efficiency",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `${scroll && color == "white" ? "text-white" : "text-black"} text-base tracking-wide cursor-pointer`,
                                    children: "Efficiency"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/iot",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    ref: iotMenuRef,
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: `${scroll && color == "white" ? "text-white" : "text-black"} text-base tracking-wide relative cursor-pointer`,
                                            children: [
                                                "IoT Solutions",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        setShowIOT(!showIOT);
                                                    },
                                                    className: "fa-solid fa-angle-down pl-4"
                                                })
                                            ]
                                        }),
                                        showIOT ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bg-white w-40 grid grid-cols-1 grid-rows-3 text-base absolute right-0 py-1 px-2 pt-10 rounded-lg space-y-1 pb-[10px]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/smart-home-iot-solutions",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onMouseOver: ()=>{
                                                            setActiveIOT(1);
                                                        },
                                                        onMouseOut: ()=>{
                                                            setActiveIOT("");
                                                        },
                                                        className: `${activeIOT === 1 ? "bg-black/30" : ""} flex justify-end text-black`,
                                                        children: "Residential"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/iot/smartCity",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onMouseOver: ()=>{
                                                            setActive(2);
                                                        },
                                                        onMouseOut: ()=>{
                                                            setActive("");
                                                        },
                                                        className: `${active === 2 ? "bg-black/30" : ""} flex justify-end text-black`,
                                                        children: "Smart Cities"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/iot/industrial-iot-solutions",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onMouseOver: ()=>{
                                                            setActiveIOT(3);
                                                        },
                                                        onMouseOut: ()=>{
                                                            setActiveIOT("");
                                                        },
                                                        className: `${activeIOT === 3 ? "bg-black/30" : ""} flex justify-end text-black`,
                                                        children: "Industrials"
                                                    })
                                                })
                                            ]
                                        }) : ""
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/bundles?page=type",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `${scroll && color == "white" ? "text-white" : "text-black"} text-base tracking-wide cursor-pointer`,
                                    children: "Bundles"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/build?page=type",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-white text-base tracking-wide bg-default pt-3 -pb-10 h-12 px-8 rounded-lg -mt-3 uppercase cursor-pointer",
                                    children: "Build your own"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: menuRef,
                className: "lg:hidden flex flex-col items-center z-30 w-full fixed",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between bg-black w-full py-6 px-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "https://ik.imagekit.io/jason7531/syncrow/common/Group_3_vfnoGgNCF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642484105062",
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mediumLarge:hidden block mt-2",
                                onClick: ()=>setMenu(!menu)
                                ,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/group-3.png",
                                    width: "30px",
                                    height: "30px",
                                    alt: ""
                                })
                            })
                        ]
                    }),
                    menu ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bg-white w-full flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mt-8 mb-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "pt-8 pb-4 font-bold text-black uppercase tracking-widest relative",
                                        children: [
                                            "Automate",
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "w-6 h-6 absolute left-28 top-8",
                                                onClick: ()=>setShowAutomate(!showAutomate)
                                                ,
                                                src: "https://ik.imagekit.io/jason7531/syncrow/common/dropdown-menu-icon-12_0WkYqOl6S.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642271510369",
                                                alt: ""
                                            })
                                        ]
                                    }),
                                    showAutomate ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col -ml-20",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/smart-home-automation",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onMouseOver: ()=>{
                                                        setActive(1);
                                                    },
                                                    onMouseOut: ()=>{
                                                        setActive("");
                                                    },
                                                    className: `${active === 1 ? "bg-black/30" : ""} flex justify-end text-black font-normal`,
                                                    children: "Home / Villa"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/office-automation",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onMouseOver: ()=>{
                                                        setActive(3);
                                                    },
                                                    onMouseOut: ()=>{
                                                        setActive("");
                                                    },
                                                    className: `${active === 3 ? "bg-black/30" : ""} flex justify-end text-black  font-normal`,
                                                    children: "Workspace"
                                                })
                                            })
                                        ]
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "pb-4 font-bold text-black uppercase tracking-widest",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/contact",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "pb-4 font-bold text-black uppercase tracking-widest",
                                    children: "Contact Us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/efficiency",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "pb-4 font-bold text-black uppercase tracking-widest",
                                    children: "Efficiency"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mt-0 mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/iot",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "cursor-pointer pt-8 pb-4 font-bold text-black uppercase tracking-widest relative",
                                            children: [
                                                "IoT Solutions",
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "w-6 h-6 absolute -right-9 top-8",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        setShowIOTMenu(!showIOTMenu);
                                                    },
                                                    src: "https://ik.imagekit.io/jason7531/syncrow/common/dropdown-menu-icon-12_0WkYqOl6S.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642271510369",
                                                    alt: ""
                                                })
                                            ]
                                        })
                                    }),
                                    showIOTMenu ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col -ml-20 ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/smart-home-iot-solutions",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onMouseOver: ()=>{
                                                        setActive(1);
                                                    },
                                                    onMouseOut: ()=>{
                                                        setActive("");
                                                    },
                                                    className: `${active === 1 ? "bg-black/30" : ""} flex justify-end text-black font-normal`,
                                                    children: "Residential"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/iot/smartCity",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onMouseOver: ()=>{
                                                        setActive(2);
                                                    },
                                                    onMouseOut: ()=>{
                                                        setActive("");
                                                    },
                                                    className: `${active === 2 ? "bg-black/30" : ""} flex justify-end text-black font-normal`,
                                                    children: "Smart Cities"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/iot/industrial-iot-solutions",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onMouseOver: ()=>{
                                                        setActive(3);
                                                    },
                                                    onMouseOut: ()=>{
                                                        setActive("");
                                                    },
                                                    className: `${active === 3 ? "bg-black/30" : ""} flex justify-end text-black  font-normal`,
                                                    children: "Industrials"
                                                })
                                            })
                                        ]
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/bundles?page=type",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "pb-4 font-bold text-black uppercase tracking-widest",
                                    children: "Bundles"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/build?page=type",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "pb-8 font-bold text-black uppercase tracking-widest",
                                    children: "Build our own"
                                })
                            })
                        ]
                    }) : ""
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/contact",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "fixed hidden lg:block right-0 top-1/2 z-10 rounded-l-lg shadow-2xl p-2",
                            style: {
                                background: "#023DFE",
                                color: "white"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_lottie_default()), {
                                options: locationOptions,
                                height: "7vh",
                                className: "z-10 middle:w-28 w-32"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "fixed hidden lg:block right-0 top-2/3 z-10 rounded-l-lg shadow-2xl p-2",
                        onClick: ()=>setShowCol(true)
                        ,
                        style: {
                            background: "#023DFE",
                            color: "white"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_lottie_default()), {
                            options: scriptOptions,
                            className: "z-10 middle:w-28 w-32",
                            height: "7vh"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(salesiq["default"], {
                        widgetCode: "5d136296e304ee64ead63634da3bd69f3b95c4131260019df2489d69ced4eb0ffa14704ef2df77eda1b54c0e181d4d05",
                        domain: "https://salesiq.zoho.com/widget"
                    }),
                    showCol ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-1/3 absolute top-36 right-0 desktop:h-104 laptop:h-100 rounded-l-3xl bg-default text-white z-30",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "absolute top-8 right-10",
                                onClick: ()=>setShowCol(false)
                                ,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://cdn-icons-png.flaticon.com/512/66/66847.png",
                                    alt: "",
                                    className: " desktop:w-5 laptop:w-4"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "font-bold desktop:text-2xl laptop:text-xl absolute desktop:top-8 laptop:top-6 left-10",
                                children: "Request a Quote"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: submitContact,
                                className: "desktop:text-xl laptop:text-base absolute desktop:top-16 laptop:top-12 left-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "FullName ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        id: "name",
                                        name: "name",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value)
                                        ,
                                        className: "desktop:h-10 outline-none p-2 laptop:h-7 rounded-md w-full text-black"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "Phone Number ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    "\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "Email Address ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "number",
                                        name: "phone",
                                        id: "phone",
                                        value: phone,
                                        onChange: (e)=>setPhone(e.target.value)
                                        ,
                                        className: "rounded-md outline-none p-2 desktop:h-10 laptop:h-7 text-black"
                                    }),
                                    "\xa0 \xa0",
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "email",
                                        id: "email",
                                        value: email1,
                                        onChange: (e)=>setEmail(e.target.value)
                                        ,
                                        className: "rounded-md p-2 outline-none desktop:h-10 laptop:h-7 text-black"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Company Name (optional)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "company",
                                        id: "company",
                                        value: company,
                                        onChange: (e)=>setCompany(e.target.value)
                                        ,
                                        className: "rounded-md outline-none p-2 desktop:h-10 laptop:h-7 w-full text-black"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "Message ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "message",
                                        id: "message",
                                        value: message,
                                        onChange: (e)=>setMessage(e.target.value)
                                        ,
                                        placeholder: "Your Message here...",
                                        className: "w-full outline-none desktop:h-20 laptop:h-16 rounded-md p-2 text-black"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "text-base",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }),
                                            " Fields required"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "bg-white flex justify-center items-center text-default desktop:w-48 laptop:w-36 desktop:h-10 laptop:h-7 rounded-lg w-[12rem] h-[2.5rem]",
                                        type: "button",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (headerStyles_module_default()).loader
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "bg-white text-default desktop:w-48 laptop:w-36 desktop:h-10 laptop:h-7 rounded-lg w-[12rem] h-[2.5rem]",
                                        type: "submit",
                                        children: "Contact us now!"
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
                    }) : ""
                ]
            })
        ]
    }));
}
/* harmony default export */ const header = (Header);


/***/ })

};
;