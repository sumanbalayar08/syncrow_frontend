"use strict";
(() => {
var exports = {};
exports.id = 5881;
exports.ids = [5881,5566,8342,5194,9239,8216,9496,1088,7454,7121,7568,2404,8516,5825,6496];
exports.modules = {

/***/ 9123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Page1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4269);
/* harmony import */ var _Page2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7740);
/* harmony import */ var _Page3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5001);
/* harmony import */ var _Page4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4015);
/* harmony import */ var _Page5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7678);
/* harmony import */ var _Page6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8021);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7964);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6151);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_BaseUrl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(392);













async function getStaticProps() {
    try {
        const res = await fetch(`${_utils_BaseUrl__WEBPACK_IMPORTED_MODULE_12__/* .BaseUrl */ .J}/build-you-own-pages?populate[0]=seo`);
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
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: type , 1: setType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: spaces , 1: setSpaces  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: area , 1: setArea  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: apartment , 1: setApartment  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: villa , 1: setVilla  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: office , 1: setOffice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router.query.page === "type" && active !== 0) {
            setActive(1);
        } else if (router.query.page === "size" && active !== 0) {
            setActive(2);
        } else if (router.query.page === "devices" && active !== 0) {
            setActive(3);
        } else if (router.query.page === "installation" && active !== 0) {
            setActive(4);
        } else if (!router.query.page) {
            router.push("/build?page=type");
            setActive(1);
        } else {
            router.push("/build?page=type");
            setActive(1);
        }
    }, [
        router,
        active
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            active === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Page1__WEBPACK_IMPORTED_MODULE_2__["default"], {
                active: active,
                setActive: setActive,
                apartment: apartment,
                setApartment: setApartment,
                villa: villa,
                office: office,
                setOffice: setOffice,
                setVilla: setVilla,
                setType: setType
            }) : "",
            active === 2 && apartment ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Page2__WEBPACK_IMPORTED_MODULE_3__["default"], {
                active: active,
                setActive: setActive,
                setType: setType
            }) : "",
            active === 2 && villa ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Page3__WEBPACK_IMPORTED_MODULE_4__["default"], {
                active: active,
                setActive: setActive,
                setType: setType
            }) : "",
            active === 2 && office ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Page4__WEBPACK_IMPORTED_MODULE_5__["default"], {
                active: active,
                setActive: setActive,
                setSpaces: setSpaces,
                setArea: setArea
            }) : "",
            active === 3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Page5__WEBPACK_IMPORTED_MODULE_6__["default"], {
                active: active,
                setActive: setActive,
                apartment: apartment,
                villa: villa,
                office: office,
                setItems: setItems
            }) : "",
            active === 4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Page6__WEBPACK_IMPORTED_MODULE_7__["default"], {
                active: active,
                setActive: setActive,
                data: {
                    "spaces": spaces,
                    "area": area,
                    "formtype": "build",
                    "items": items.join(","),
                    "type": type
                }
            }) : "",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
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

/***/ 3984:
/***/ ((module) => {

module.exports = require("react-input-range");

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,3602,4149,5463,4044,7461,4945,5502,8492,7678,5001,7740,4015,4269,8021], () => (__webpack_exec__(9123)));
module.exports = __webpack_exports__;

})();