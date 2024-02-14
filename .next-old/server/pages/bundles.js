"use strict";
(() => {
var exports = {};
exports.id = 3076;
exports.ids = [3076,5566,8342,5194,8216,9496,1088,7454,7121,7568,2404,8516,5825,6496];
exports.modules = {

/***/ 2596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7964);
/* harmony import */ var _Page1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6888);
/* harmony import */ var _Page2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5029);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6151);
/* harmony import */ var _Convenience__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8991);
/* harmony import */ var _Energy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(595);
/* harmony import */ var _Safety__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6725);
/* harmony import */ var _SmartHome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2660);
/* harmony import */ var _Page4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9864);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_BaseUrl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(392);














async function getStaticProps() {
    try {
        const res = await fetch(`${_utils_BaseUrl__WEBPACK_IMPORTED_MODULE_13__/* .BaseUrl */ .J}/bundles-pages?populate[0]=seo`);
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
function Index(props) {
    const pageData = props.data;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: bhk , 1: setBhk  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: type , 1: setType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: convenience , 1: setConvenience  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: safety , 1: setSafety  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: energy , 1: setEnergy  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: smartHome , 1: setSmartHome  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router.query.page === "type" && active !== 0) {
            setActive(1);
        } else if (router.query.page === "service" && active !== 0) {
            setActive(2);
        } else if (router.query.page === "devices" && active !== 0) {
            setActive(3);
        } else if (router.query.page === "installation" && active !== 0) {
            setActive(4);
        } else if (!router.query.page) {
            router.push("/bundles?page=type");
            setActive(1);
        } else {
            router.push("/bundles?page=type");
            setActive(1);
        }
    }, [
        router,
        active
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            active == 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Page1__WEBPACK_IMPORTED_MODULE_3__["default"], {
                active: active,
                setActive: setActive,
                setBhk: setBhk
            }) : "",
            active == 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Page2__WEBPACK_IMPORTED_MODULE_4__["default"], {
                active: active,
                setType: setType,
                setActive: setActive,
                setConvenience: setConvenience,
                convenience: convenience,
                energy: energy,
                setEnergy: setEnergy,
                smartHome: smartHome,
                setSmartHome: setSmartHome,
                safety: safety,
                setSafety: setSafety
            }) : "",
            active == 3 && convenience ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Convenience__WEBPACK_IMPORTED_MODULE_6__["default"], {
                active: active,
                setActive: setActive
            }) : "",
            active == 3 && safety ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Safety__WEBPACK_IMPORTED_MODULE_8__["default"], {
                active: active,
                setActive: setActive
            }) : "",
            active == 3 && energy ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Energy__WEBPACK_IMPORTED_MODULE_7__["default"], {
                active: active,
                setActive: setActive
            }) : "",
            active == 3 && smartHome ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmartHome__WEBPACK_IMPORTED_MODULE_9__["default"], {
                active: active,
                setActive: setActive
            }) : "",
            active == 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Page4__WEBPACK_IMPORTED_MODULE_10__["default"], {
                active: active,
                setActive: setActive,
                data: {
                    "bhk": bhk,
                    "type": type,
                    "formtype": "bundle"
                }
            }) : "",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


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

/***/ 8946:
/***/ ((module) => {

module.exports = require("react-step-progress-bar");

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,3602,4149,5463,4044,7461,4945,5502,8492,595,6725,2660,8991,5029,6888,9864], () => (__webpack_exec__(2596)));
module.exports = __webpack_exports__;

})();