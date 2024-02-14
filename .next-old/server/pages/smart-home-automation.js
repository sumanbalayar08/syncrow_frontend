"use strict";
(() => {
var exports = {};
exports.id = 5994;
exports.ids = [5994,1088,7454,7121,7568,8516,5825,6496];
exports.modules = {

/***/ 4051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7964);
/* harmony import */ var _components_contactButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1950);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6151);
/* harmony import */ var _utils_BaseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(392);



// components




// /api/smart-home-automation-pages
async function getStaticProps() {
    try {
        const res = await fetch(`${_utils_BaseUrl__WEBPACK_IMPORTED_MODULE_6__/* .BaseUrl */ .J}/smart-home-automation-pages?populate[0]=sec1Bg,sec2Bg,seo`);
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
const Homepage = (props)=>{
    const pageData = props.data;
    const guthen = "Guthen Bloots Personal Use";
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: pageData.seo.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: pageData.seo.description
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: "black"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "min-h-screen relative flex flex-col md:flex-row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-72 bg-right bg-cover mt-[5rem] lg:mt-0 md:absolute md:inset-0 md:min-h-screen md:-z-10",
                        style: {
                            backgroundImage: `url('${pageData.sec1Bg.data.attributes.url}')`
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        "data-aos": "fade-up",
                        className: "flex flex-col justify-center items-center md:items-start md:pl-10 md:basis-1/2 lg:pl-32",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "bg-black md:bg-transparent w-full md:w-fit h-56 md:h-fit flex flex-col items-center justify-center md:items-start leading-tight mb-4 md:mb-0 ",
                                style: {
                                    fontFamily: `${guthen}`
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                        className: "text-5xl lg:text-7xl text-white md:text-black leading-none",
                                        children: pageData.sec1Heading1
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                        className: "text-5xl lg:text-7xl text-blue-700",
                                        children: pageData.sec1Heading2
                                    })
                                ]
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
                                className: "w-10/12 my-4 tracking-wide leading-7",
                                children: pageData.sec1Desc1
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
                                className: "w-10/12 tracking-wide leading-7",
                                children: pageData.sec1Desc2
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        "data-aos": "fade-up",
                        className: " my-16 flex justify-center items-center md:basis-1/2 md:items-end md:my-0 md:mb-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-10/12",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "font-[aftika-bold] pb-6 md:pb-0 tracking-wide text-base mb-2",
                                    children: [
                                        "Get a feel of how ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                            children: " Syncrow"
                                        }),
                                        " upgrades your home to a smarter living experience."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_contactButtons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "flex flex-col md:flex-row relative items-center md:min-h-screen ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-96 bg-left bg-cover md:absolute md:-z-10 md:min-h-screen",
                        style: {
                            backgroundImage: `url('${pageData.sec2Bg.data.attributes.url}')`
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        "data-aos": "fade-up",
                        className: "md:basis-1/2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        "data-aos": "fade-up",
                        className: "h-56 flex items-center justify-center bg-black w-screen md:bg-transparent md:w-fit md:pr-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "flex flex-col text-center md:text-left w-fit md:text-6xl text-white leading-tight ",
                            style: {
                                fontFamily: `${guthen}`
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                    className: "text-5xl lg:text-7xl",
                                    children: pageData.sec2Heading1
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                    className: "text-5xl lg:text-7xl text-blue-700 md:text-white ",
                                    children: pageData.sec2Heading2
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center justify-center py-16 bg-blue-700",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            "data-aos": "fade-up",
                            className: "text-white text-center md:text-left flex flex-col mx-10 leading-none",
                            style: {
                                fontFamily: `${guthen}`
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                    className: "text-5xl lg:text-7xl mb- md:-mb-10 -ml-28 text-center",
                                    children: "Why"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                    className: "text-6xl lg:text-10xl -ml-10 text-center",
                                    children: "Upgrade"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                    className: "text-5xl lg:text-7xl text-center",
                                    children: "To a smarter home?"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hidden md:flex justify-around lg:px-24 xl:px-36",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DownArrow, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DownArrow, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DownArrow, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        "data-aos": "fade-up",
                        className: "flex flex-col md:flex-row items-center gap-24lg:px-24 xl:px-36 pt-8 pb-36 md:pb-24 md:gap-0 md:justify-around bg-blue-700 md:bg-white",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UpgradeLink, {
                                title: "Convenience",
                                href: "/smart-home-automation/convenience"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UpgradeLink, {
                                title: "Security",
                                href: "/smart-home-automation/security"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UpgradeLink, {
                                title: "Accessibility",
                                href: "/smart-home-automation/accessibility"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);
const DownArrow = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-0 h-0 border-blue-700",
        style: {
            borderLeft: "50px solid transparent",
            borderRight: "50px solid transparent",
            borderTop: "50px solid rgb(29 78 216)"
        }
    })
;
const UpgradeLink = ({ title , href  })=>{
    const guthen = "Guthen Bloots Personal Use";
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center justify-center w-40 md:mt-10",
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
                className: "lg:text-7xl text-5xl text-white md:text-slate-500",
                style: {
                    fontFamily: `${guthen}`
                },
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: href,
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
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
                    className: "bg-white md:bg-blue-700 md:text-white rounded-md px-6 py-1",
                    children: "Know More"
                })
            })
        ]
    }));
};


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
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,3602,4149,7413,1950], () => (__webpack_exec__(4051)));
module.exports = __webpack_exports__;

})();