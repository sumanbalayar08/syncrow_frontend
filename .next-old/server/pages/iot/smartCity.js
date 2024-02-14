"use strict";
(() => {
var exports = {};
exports.id = 5726;
exports.ids = [5726,1088,7454,7121,7568,8516,5825,6496];
exports.modules = {

/***/ 6610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ City)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7964);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6151);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_BaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(392);





async function getStaticProps() {
    const res = await fetch(`${_utils_BaseUrl__WEBPACK_IMPORTED_MODULE_4__/* .BaseUrl */ .J}/smart-city-pages?populate[0]=sec1BgDesktop,sec1MobileBg,Seo`);
    const response = await res.json();
    var data = response.data[0].attributes;
    return {
        props: {
            data
        },
        revalidate: 1
    };
}
function City({ data  }) {
    // console.log(data)
    const guthen = "Guthen Bloots Personal Use";
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: data.Seo.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: data.Seo.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "https://ik.imagekit.io/jason7531/syncrow/common/Group_1_rkAObjd65.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642343317149"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                        children: "@import url(https://fonts.cdnfonts.com/css/guthen-bloots-personal-use);"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                color: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: "block lg:hidden absolute mt-[5rem] -z-10",
                src: data.sec1MobileBg.data.attributes.url,
                alt: "..."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                "data-aos": "fade-up",
                className: "relative lg:h-[100vh] h-[100%] flex lg:flex-row flex-col items-center justify-center lg:justify-end lg:text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "hidden lg:block absolute -z-10",
                        src: data.sec1BgDesktop.data.attributes.url,
                        alt: "..."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `relative lg:absolute lg:py-[10vh] -z-10 bg-cover lg:top-0 lg:min-h-[100%] lg:w-[100%] bg-bottom h-[45vh] mt-[10vh] lg:mt-0 w-[100%]  lg:left-0`
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lg:w-[60%] py-[4rem] lg:py-0 flex flex-col justify-center items-center h-[100%]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.5
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
                                className: "w-[100%] text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "lg:text-[3rem] text-[2.7rem] leading-[2.5rem] lg:leading-[2.8rem] font-[aftika-semibold] lg:font-[aftika-bold]",
                                        children: data.sec1Heading11
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "lg:text-[3rem] text-[2.7rem] leading-[2.5rem] font-[aftika-semibold] lg:leading-[2.8rem] lg:font-[aftika-bold]",
                                        children: data.sec1Heading12
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            fontFamily: `${guthen}`
                                        },
                                        className: "text-blue-700 lg:text-[9rem] text-[7rem] leading-[3.5rem] lg:leading-[4.5rem]",
                                        children: data.sec1Heading13
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "lg:text-[4.5rem] mt-[1.5rem] text-[3rem] leading-[2.5rem] font-[aftika-semibold] lg:leading-[3.8rem] lg:font-[aftika-bold]",
                                        children: data.sec1Heading14
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                initial: "hidden",
                                whileinview: "visible",
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.5
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
                                className: "w-[100%] flex justify-center items-center px-[10%] text-center lg:text-left lg:px-0 lg:pl-[10%] mt-[2rem]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "lg:w-[50%] font-[aftika-extra-light] text-[.8rem]",
                                    children: data.sec1Desc
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-evenly flex-wrap lg:flex-nowrap lg:px-[5%] py-[3rem] lg:py-0 lg:my-[3rem]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        "data-aos": "fade-up",
                        initial: "hidden",
                        whileinview: "visible",
                        viewport: {
                            once: false
                        },
                        transition: {
                            duration: 0.5
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
                        className: "my-[1rem] lg:my-0 px-[2%] w-[45%] lg:w-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    fontFamily: `${guthen}`
                                },
                                className: "text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]",
                                children: data.sec2PartaHeading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-[aftika-bold] tracking-wider",
                                children: data.sec2PartaSubHeading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-[aftika-extra-light] font-bold pt-[.8rem]",
                                children: data.sec2PartaDesc
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
                            duration: 0.5
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
                        className: "my-[1rem] lg:my-0 px-[2%] w-[45%] lg:w-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    fontFamily: `${guthen}`
                                },
                                className: "text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]",
                                children: data.sec2PartbHeading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-[aftika-bold] tracking-wider",
                                children: data.sec2PartbSubHeading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-[aftika-extra-light] font-bold pt-[.8rem]",
                                children: data.sec2PartbDesc
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
                            duration: 0.5
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
                        className: "my-[1rem] lg:my-0 px-[2%] w-[45%] lg:w-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    fontFamily: `${guthen}`
                                },
                                className: "text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]",
                                children: data.sec2PartcHeading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-[aftika-bold] tracking-wider",
                                children: data.sec2PartcSubHeading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-[aftika-extra-light] font-bold pt-[.8rem]",
                                children: data.sec2PartcDesc
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
                            duration: 0.5
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
                        className: "my-[1rem] lg:my-0 px-[2%] w-[45%] lg:w-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    fontFamily: `${guthen}`
                                },
                                className: "text-blue-700 text-[2.4rem] leading-[2.2rem] lg:text-[3.5rem] lg:leading-[3.2rem]",
                                children: data.sec2PartdHeading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-[aftika-bold] tracking-wider",
                                children: data.sec2PartdSubHeading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-[aftika-extra-light] font-bold pt-[.8rem]",
                                children: data.sec2PartdDesc
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    }));
};


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,3602,4149], () => (__webpack_exec__(6610)));
module.exports = __webpack_exports__;

})();