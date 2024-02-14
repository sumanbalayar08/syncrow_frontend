"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,6496];
exports.modules = {

/***/ 2994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        external_aos_default().refresh();
        external_aos_default().init({
            duration: 300
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "googleAnalyticsScriptImport",
                strategy: "lazyOnload",
                src: `https://www.googletagmanager.com/gtag/js?id=${"G-LVZE0PP403"}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "googleAnalyticsInit",
                strategy: "lazyOnload",
                children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${"G-LVZE0PP403"}', {
        page_path: window.location.pathname,
        });
    `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "ZohoCRMTrackingCodeScript",
                src: "https://crm.zoho.com/crm/javascript/zcga.js"
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__(2994));
module.exports = __webpack_exports__;

})();