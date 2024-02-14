"use strict";
(() => {
var exports = {};
exports.id = 7580;
exports.ids = [7580,1088,7454,7121,7568,8516,5825,6496];
exports.modules = {

/***/ 3133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6151);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7964);
/* harmony import */ var _utils_BaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(392);





async function getStaticProps() {
    try {
        const res = await fetch(`${_utils_BaseUrl__WEBPACK_IMPORTED_MODULE_4__/* .BaseUrl */ .J}/about-pages?populate[0]=sec1Bg,sec4LeftImg,sec3DesktopBg,sec3MobileBg,Seo,TeamSecimg1`);
        const response = await res.json();
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
const About = (props)=>{
    const guthen = "Guthen Bloots Personal Use";
    const pageData = props;
    // console.log(pageData.data.Seo.title)
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: pageData.data.Seo.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: pageData.data.Seo.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "https://ik.imagekit.io/jason7531/syncrow/common/Group_1_rkAObjd65.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642343317149"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.cdnfonts.com/css/guthen-bloots-personal-use",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
                        integrity: "sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==",
                        crossOrigin: "anonymous",
                        referrerPolicy: "no-referrer"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: "white"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " flex flex-col pt-10 md:pt-0 lg:flex-row justify-center lg:justify-evenly bg-[#00000050] text-white lg:items-center min-h-[100vh] relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "absolute w-full h-full -z-10 object-cover",
                        src: pageData.data.sec1Bg.data.attributes.url,
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        "data-aos": "fade-up",
                        initial: "hidden",
                        whileinview: "visible",
                        viewport: {
                            once: false
                        },
                        transition: {
                            duration: 0.3
                        },
                        variants: {
                            visible: {
                                opacity: 1,
                                scale: 1
                            },
                            hidden: {
                                opacity: 0,
                                scale: 0
                            }
                        },
                        className: "lg:w-[30%]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                style: {
                                    fontFamily: `${guthen}`
                                },
                                className: "lg:text-[9rem] text-center lg:text-left lg:leading-[8rem] text-[4rem] leading-[3.8rem] pt-[5rem] lg:pt-0",
                                children: pageData.data.sec1Heading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "lg:text-[4rem] lg:leading-[3.5rem] lg:pl-[3rem] lg:-mt-[1rem] text-center text-[1.5rem] lg:text-left px-[2rem] lg:px-0",
                                children: pageData.data.sec1SubHeading
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        "data-aos": "fade-up",
                        className: "lg:w-[30%] mt-[2rem] lg:mt-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.3
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: " font-thin lg:font-medium py-[.5rem] lg:py-0 text-center lg:text-left px-[2rem] lg:px-0",
                                children: pageData.data.sec1Desc1
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.3
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: " font-thin lg:font-medium py-[.5rem] lg:py-0 text-center lg:text-left px-[2rem] lg:px-0",
                                children: pageData.data.sec1Desc2
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.3
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: " font-thin lg:font-medium py-[.5rem] lg:py-0 text-center lg:text-left px-[2rem] lg:px-0",
                                children: pageData.data.sec1Desc3
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-white bg-blue-700 py-[5vh] px-[9vw] lg:py-[10vh] lg:px-[10vw]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    "data-aos": "fade-up",
                    initial: "hidden",
                    whileinview: "visible",
                    viewport: {
                        once: false
                    },
                    transition: {
                        duration: 0.3
                    },
                    variants: {
                        visible: {
                            opacity: 1,
                            scale: 1
                        },
                        hidden: {
                            opacity: 0,
                            scale: 0
                        }
                    },
                    className: "text-left lg:text-[3rem] text-[2rem] font-medium lg:leading-[3rem] ",
                    children: pageData.data.sec2Text
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative bg-[#000] lg:bg-[#00000000] z-0 text-white lg:min-h-[120vh] min-h-[100vh] flex flex-col lg:flex-row lg:justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "absolute hidden lg:block lg:w-full lg:h-[130%] lg:top-0 lg:left-0 -z-40",
                        src: pageData.data.sec3DesktopBg.data.attributes.url,
                        alt: pageData.data.sec3DesktopBgAlt
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "absolute block lg:hidden min-h-[30vh] lg:w-full lg:h-full lg:top-0 lg:left-0 -z-10",
                        src: pageData.data.sec3MobileBg.data.attributes.url,
                        alt: pageData.data.sec3DesktopBgAlt
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lg:w-[20vw] flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.3
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "pt-[5vh] lg:py-0 h-[30vh] lg:h-auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "lg:text-[3rem] text-[1.5rem] font-medium text-center lg:text-left",
                                        children: pageData.data.sec3Heading1
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        style: {
                                            fontFamily: `${guthen}`
                                        },
                                        className: "lg:text-[6rem] text-center lg:text-left lg:leading-[5rem] text-[3.5rem] leading-[3.2rem]",
                                        children: pageData.data.sec3SubHeading1
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.3
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "text-center mt-[10rem] lg:mt-0 lg:text-left p-[2rem] lg:p-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "lg:pt-[2rem]",
                                        children: pageData.data.sec3Text11
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "pt-[1rem] lg:pt-0",
                                        children: pageData.data.sec3Text12
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lg:w-[60vw] lg:py-[4rem] py-[3rem] flex lg:h-[85vh] flex-wrap justify-center items-start",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.3
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "lg:w-[29vw] w-[45%] lg:px-[2rem] px-[.5rem] py-[.5rem] lg:py-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-medium font-guthen mb-[.5rem] text-[1.5rem] lg:text-[3rem]",
                                        children: pageData.data.sec3Heading2
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-[.7rem] lg:text-[.8rem]",
                                        children: pageData.data.sec3Text2
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.3
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "lg:w-[29vw] w-[45%] lg:px-[2rem] px-[.5rem] py-[.5rem] lg:py-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-medium font-guthen mb-[.5rem] text-[1.5rem] lg:text-[3rem]",
                                        children: pageData.data.sec3Heading3
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-[.7rem] lg:text-[.8rem]",
                                        children: pageData.data.sec3Text3
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.3
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "lg:w-[29vw] w-[45%] lg:px-[2rem] px-[.5rem] py-[.5rem] lg:py-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-medium font-guthen mb-[.5rem] text-[1.5rem] lg:text-[3rem]",
                                        children: pageData.data.sec3Heading4
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-[.7rem] lg:text-[.8rem]",
                                        children: pageData.data.sec3Text4
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.3
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "lg:w-[29vw] w-[45%] lg:px-[2rem] px-[.5rem] py-[.5rem] lg:py-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-medium font-guthen mb-[.5rem] text-[1.5rem] lg:text-[3rem]",
                                        children: pageData.data.sec3Heading5
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-[.7rem] lg:text-[.8rem]",
                                        children: pageData.data.sec3Text5
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    paddingTop: 250
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "object-contain",
                    src: pageData.data.TeamSecimg1.data.attributes.url,
                    alt: pageData.data.TeamSecimg1
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "syncrowMember",
                className: "flex lg:flex-row flex-col-reverse justify-center lg:h-[72vh] lg:mt-[20%] items-center lg:items-end",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        "data-aos": "fade-up",
                        className: "lg:w-[40%] lg:flex lg:justify-center lg:items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "object-cover h-[65vh]",
                            src: pageData.data.sec4LeftImg.data.attributes.url,
                            alt: pageData.data.sec4LeftImgAlt
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        "data-aos": "fade-up",
                        className: "lg:w-[40%] mt-[5rem] mb-[3rem] lg:mb-0 px-[2rem] lg:pb-[10vh] lg:px-0 lg:mt-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.3
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                style: {
                                    fontFamily: `${guthen}`
                                },
                                className: "font-medium lg:text-[6rem] text-center lg:text-left lg:leading-[5rem] text-[3rem] leading-[2.8rem] text-blue-700",
                                children: pageData.data.sec4Heading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.3
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "lg:text-[2rem] lg:leading-[1.8rem] text-[2rem] text-center lg:text-left font-bold text-black",
                                children: pageData.data.sec4SubHeading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.3
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "lg:w-[60%] text-[#000] text-center lg:text-left mt-[1rem] lg:mt-0 py-[1rem]",
                                children: pageData.data.sec4Text11
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.3
                                },
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    hidden: {
                                        opacity: 0,
                                        scale: 0
                                    }
                                },
                                className: "lg:w-[60%] text-[#000] text-center lg:text-left py-[1rem]",
                                children: pageData.data.sec4Text12
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ BaseUrl)
/* harmony export */ });
const BaseUrl = "https://cms.syncrow.ae/api";



/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1189:
/***/ ((module) => {

module.exports = require("react-lottie");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,3602,4149], () => (__webpack_exec__(3133)));
module.exports = __webpack_exports__;

})();