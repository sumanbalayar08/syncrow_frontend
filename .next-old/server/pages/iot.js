"use strict";
(() => {
var exports = {};
exports.id = 1938;
exports.ids = [1938,1088,7454,7121,7568,8516,5825,6496];
exports.modules = {

/***/ 3309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ IOT)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7964);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6151);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_BaseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(392);






async function getStaticProps() {
    const res = await fetch(`${_utils_BaseUrl__WEBPACK_IMPORTED_MODULE_5__/* .BaseUrl */ .J}/iot-pages?populate[0]=sec1Bg,sec2Bg,sec3Bg,sec4Bg,Seo`);
    const response = await res.json();
    var data = response.data[0].attributes;
    return {
        props: {
            data
        },
        revalidate: 1
    };
}
function IOT({ data  }) {
    const guthen = "Guthen Bloots Personal Use";
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                color: "black"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex mx-8 tablet:mx-16 items-center tablet:items-start gap-0 middle:gap-12 flex-col middle:flex-row",
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
                        className: "flex-1 middle:mt-52 mt-44",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: "text-4xl tablet:text-6xl middle:text-8xl font-semibold leading-none capitalize desktop:w-3/5",
                                children: [
                                    data.sec1Heading11,
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-default text-5xl tablet:text-7xl middle:text-9xl font-normal leading-3",
                                        style: {
                                            fontFamily: "Guthen Bloots Personal Use"
                                        },
                                        children: [
                                            "\xa0 ",
                                            data.sec1Heading12,
                                            " \xa0"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-4xl tablet:text-6xl middle:text-8xl font-semibold leading-none capitalize desktop:w-3/5",
                                children: data.sec1Heading13
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                        className: "flex-1 middle:mt-52 mt-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "tablet:w-5/6 w-full text-lg text-black font-normal tablet:text-left text-center",
                            children: [
                                data.sec1Desc1,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                data.sec1Desc2
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tablet:mx-8 w-[100%] mx-8 mt-10 tablet:mt-28",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: data.sec1Bg.data.attributes.url,
                    alt: data.sec1BgAlt,
                    className: "w-[95vw] object-cover"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tablet:mx-16 my-20",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-8 flex middle:items-start items-center middle:flex-row middle:gap-0 gap-10 flex-col",
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
                                className: "flex-1 flex items-center flex-col mt-32 z-0 ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "hidden md:block",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-3xl font-[aftika-semibold] mb-12 ml-20",
                                                children: data.sec2Heading11
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-default text-10xl desktop:text-11xl font-normal leading-3",
                                                    style: {
                                                        fontFamily: `Guthen Bloots Personal Use`
                                                    },
                                                    children: data.sec2Heading12
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-4xl font-[aftika-semibold] ml-[252px]",
                                                children: data.sec2Heading13
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "md:hidden",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-3xl font-[aftika-bold] font-bold mb-8 ml-4",
                                                children: data.sec2Heading11
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-default text-8xl font-normal leading-3",
                                                    style: {
                                                        fontFamily: `Guthen Bloots Personal Use`
                                                    },
                                                    children: data.sec2Heading12
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-4xl font-semibold ml-20 mt-2",
                                                children: data.sec2Heading13
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        href: "/smart-home-iot-solutions",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "text-white bg-default w-44 laptop:text-lg desktop:text-xl rounded-md py-2 mt-10",
                                            children: data.sec2Button
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                className: "flex-1 flex justify-center middle:justify-end",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-lg text-black w-5/6 tablet:text-left z-10 tracking-wide text-center",
                                    children: [
                                        data.sec2Desc1,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        data.sec2Desc2
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        "data-aos": "fade-up",
                        className: "-mt-0 laptop:-mt-[30%] relative -z-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: data.sec2Bg.data.attributes.url,
                            alt: data.sec2BgAlt,
                            width: "100%"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mb-32",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                        className: "flex items-center justify-center laptop:hidden ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-3xl font-[aftika-bold] font-bold mb-8 ml-4",
                                    children: data.sec3Heading11
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-default text-8xl font-normal leading-3",
                                        style: {
                                            fontFamily: `Guthen Bloots Personal Use`
                                        },
                                        children: data.sec3Heading12
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-4xl font-semibold ml-20 mt-2",
                                    children: data.sec3Heading13
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-8 tablet:mx-16 my-10 flex justify-center laptop:flex-row flex-col-reverse laptop:gap-14 gap-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                className: "flex-initial laptop:w-1/3 w-full",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-lg font-semibold text-black laptop:mt-16 mt-0 tablet:text-left tracking-wide text-center",
                                    children: [
                                        data.sec3Desc1,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        data.sec3Desc2,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        data.sec3Desc3
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                "data-aos": "fade-up",
                                className: "flex-1 flex items-center justify-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: data.sec3Bg.data.attributes.url,
                                    alt: data.sec3BgAlt,
                                    width: "100%",
                                    height: "100%",
                                    className: "desktop:w-4/5"
                                })
                            })
                        ]
                    }),
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
                        className: "mx-8 tablet:mx-16 absolute -bottom-20 right-24 laptop:block hidden",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-3xl font-[aftika-semibold] mb-12 ml-16",
                                children: data.sec3Heading11
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-default text-10xl desktop:text-11xl font-normal leading-3",
                                    style: {
                                        fontFamily: `Guthen Bloots Personal Use`
                                    },
                                    children: data.sec3Heading12
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-4xl font-[aftika-semibold] ml-44",
                                children: data.sec3Heading13
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                href: "/iot/industrial-iot-solutions",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "text-white bg-default w-44 laptop:text-lg desktop:text-xl rounded-md py-2 mt-10",
                                    children: data.sec2Button
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tablet:mx-16 my-20",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-8 flex middle:items-start items-center middle:flex-row middle:gap-0 gap-10 flex-col",
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
                                className: "flex-1 flex items-center flex-col mt-32 z-0 ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-default text-[9rem] font-normal leading-[7rem]",
                                            style: {
                                                fontFamily: `Guthen Bloots Personal Use`
                                            },
                                            children: data.sec4Heading11
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[1.5rem] lg:text-right lg:w-[40%] font-[aftika-bold]",
                                        children: data.sec4Heading12
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        href: "/iot/smartCity",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "text-white bg-default w-44 laptop:text-lg desktop:text-xl rounded-md py-2 mt-10",
                                            children: data.sec2Button
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                className: "flex-1 flex justify-center middle:justify-end",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-lg text-black w-5/6 tablet:text-left tracking-wide text-center",
                                    children: [
                                        data.sec4Desc1,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        data.sec4Desc2
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        "data-aos": "fade-up",
                        className: "-mt-0 laptop:-mt-10 relative middle:-mt-20 -z-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: data.sec4Bg.data.attributes.url,
                            alt: data.sec4BgAlt,
                            width: "100%"
                        })
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,3602,4149], () => (__webpack_exec__(3309)));
module.exports = __webpack_exports__;

})();