(() => {
var exports = {};
exports.id = 1055;
exports.ids = [1055,1088,7454,7121,7568,8516,5825,6496];
exports.modules = {

/***/ 3102:
/***/ ((module) => {

// Exports
module.exports = {
	"blogHeading": "style_blogHeading__hpXuv",
	"loader": "style_loader__kQmCU",
	"spin": "style_spin__2NkJP"
};


/***/ }),

/***/ 8773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7964);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6151);
/* harmony import */ var _utils_BaseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(392);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3102);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var _utils_DateModifiers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9465);









// /api/blogs-pages
// /api/blogs
async function getStaticProps() {
    try {
        const res = await fetch(`${_utils_BaseUrl__WEBPACK_IMPORTED_MODULE_6__/* .BaseUrl */ .J}/blogs-pages?populate[0]=seo`);
        const blogRes = await fetch(`${_utils_BaseUrl__WEBPACK_IMPORTED_MODULE_6__/* .BaseUrl */ .J}/blogs?populate[0]=thumbnail&sort[0]=publishedDateTime%3Adesc`);
        const response = await res.json();
        const blogResponse = await blogRes.json();
        console.log(response);
        console.log(blogResponse);
        var data = response.data[0].attributes;
        var blogData = blogResponse;
        return {
            props: {
                data,
                blogData
            },
            revalidate: 1
        };
    } catch (e) {
        console.log(e);
    }
}
const Blogs = (props)=>{
    const { 0: blogs1 , 1: setBlogs  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const { 0: pageCount , 1: setPageCount  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const pageData = props.data;
    const { 0: isLoadmoreLoading , 1: setIsLoadMoreLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    // infinte scrolling function
    const observer = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const lastItemRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((node)=>{
        if (isLoadmoreLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(async (entries)=>{
            if (entries[0].isIntersecting) {
                console.log("Last is visible");
                if (page < pageCount) {
                    console.log("calling next");
                    setIsLoadMoreLoading(true);
                    const blogRes = await fetch(`${_utils_BaseUrl__WEBPACK_IMPORTED_MODULE_6__/* .BaseUrl */ .J}/blogs?populate[0]=thumbnail&sort[0]=publishedDateTime%3Adesc`);
                    const res = await blogRes.json();
                    setBlogs((blogs)=>{
                        var oldBlogs = blogs;
                        for(let i = 0; i < res.data.length; i++){
                            const blog = res.data[i];
                            oldBlogs = [
                                ...oldBlogs,
                                blog
                            ];
                        }
                        return [
                            ...oldBlogs
                        ];
                    });
                    setPage(res.meta.pagination.page);
                    setPageCount(res.meta.pagination.pageCount);
                    setIsLoadMoreLoading(false);
                }
            }
        });
        if (node) observer.current.observe(node);
    }, [
        page,
        pageCount,
        isLoadmoreLoading
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setBlogs(props.blogData.data);
        setPage(props.blogData.meta.pagination.page);
        setPageCount(props.blogData.meta.pagination.pageCount);
    }, [
        props
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: pageData.seo.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: pageData.seo.description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                "data-aos": "fade-up",
                className: "min-h-[100vh] pt-[6rem] lg:pt-[12vh] pb-[15vh] px-[1rem] lg:px-[5rem]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "font-guthen text-[4rem] font-medium text-default",
                        children: "Blogs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[100%] flex flex-wrap py-[2rem]",
                        children: blogs1.map((blog, index)=>{
                            if (index + 1 === blogs1.length) {
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    href: `/blog/${blog.attributes.slug}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        "data-aos": "fade-up",
                                        ref: lastItemRef,
                                        className: "w-[100%] lg:mx-[.5rem] mediumLarge:mx-[1%] my-[1rem] lg:w-[32%] mediumLarge:w-[23%] rounded-[.3rem] cursor-pointer shadow-blogCardWithouthover hover:shadow-blogCardWithhover transition-all duration-[.2s]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "w-[100%] h-[12rem] rounded-t-[.3rem] object-cover",
                                                src: blog.attributes.thumbnail.data.attributes.url,
                                                alt: "..."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-[1rem]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-[aftika-bold] text-[.8rem] opacity-50 capitalize",
                                                        children: blog.attributes.category
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: `${(_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().blogHeading)} font-[aftika-bold] my-[.5rem] text-[1.5rem] leading-[2rem]`,
                                                        children: blog.attributes.heading
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[45%] h-[1px] bg-[#c4c4c4]"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "w-[100%] mt-[.5rem]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "font-[aftika-regular] opacity-80 text-ellipsis whitespace-nowrap w-[100%] overflow-hidden",
                                                                children: blog.attributes.authorName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "font-[aftika-regular] opacity-40 text-[.8rem]",
                                                                children: (0,_utils_DateModifiers__WEBPACK_IMPORTED_MODULE_8__/* .blogDateModifier */ .h)(blog.attributes.publishedDateTime)
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, index));
                            } else {
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    href: `/blog/${blog.attributes.slug}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        "data-aos": "fade-up",
                                        className: "w-[100%] lg:mx-[.5rem] mediumLarge:mx-[1%] my-[1rem] lg:w-[32%] mediumLarge:w-[23%] rounded-[.3rem] cursor-pointer shadow-blogCardWithouthover hover:shadow-blogCardWithhover transition-all duration-[.2s]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "w-[100%] h-[12rem] rounded-t-[.3rem] object-cover",
                                                src: blog.attributes.thumbnail.data.attributes.url,
                                                alt: "..."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-[1rem]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-[aftika-bold] text-[.8rem] opacity-50 capitalize",
                                                        children: blog.attributes.category
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: `${(_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().blogHeading)} font-[aftika-bold] my-[.5rem] text-[1.5rem] leading-[2rem]`,
                                                        children: blog.attributes.heading
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[45%] h-[1px] bg-[#c4c4c4]"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "w-[100%] mt-[.5rem]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "font-[aftika-regular] opacity-80 text-ellipsis whitespace-nowrap w-[100%] overflow-hidden",
                                                                children: blog.attributes.authorName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "font-[aftika-regular] opacity-40 text-[.8rem]",
                                                                children: (0,_utils_DateModifiers__WEBPACK_IMPORTED_MODULE_8__/* .blogDateModifier */ .h)(blog.attributes.publishedDateTime)
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, index));
                            }
                        })
                    }),
                    isLoadmoreLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().loader)
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs);


/***/ }),

/***/ 392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ BaseUrl)
/* harmony export */ });
const BaseUrl = "https://cms.syncrow.ae/api";



/***/ }),

/***/ 9465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ blogDateModifier)
/* harmony export */ });
const months = [
    "January",
    "February",
    "March",
    "April",
    'May',
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const blogDateModifier = (date)=>{
    return `${months[new Date(date).getMonth()]} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`;
};



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
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,3602,4149], () => (__webpack_exec__(8773)));
module.exports = __webpack_exports__;

})();