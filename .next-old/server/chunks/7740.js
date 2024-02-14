"use strict";
exports.id = 7740;
exports.ids = [7740];
exports.modules = {

/***/ 7740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4044);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function Page2({ active , setActive , setType  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: bed1Hover , 1: setBed1Hover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: bed2Hover , 1: setBed2Hover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: bed3Hover , 1: setBed3Hover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: bed4Hover , 1: setBed4Hover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: bed1 , 1: setBed1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: bed2 , 1: setBed2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: bed3 , 1: setBed3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: bed4 , 1: setBed4  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 laptop:grid-cols-4 px-10 items-center pt-44 gap-4 w-full justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>{
                            setBed1(!bed1);
                            setType("1 Bedroom Apartment");
                            setActive(3);
                            router.push("/build?page=devices");
                        },
                        className: `flex border-2 border-default text-default justify-between items-center ${bed1Hover ? 'bg-default text-white' : ''} ${bed1 ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`,
                        onMouseOver: ()=>setBed1Hover(true)
                        ,
                        onMouseOut: ()=>setBed1Hover(false)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `w-4 h-4 bg-default ${bed1 ? 'bg-white' : ''} ${bed1Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: `${bed1 ? 'text-white' : ''} ${bed1Hover ? 'text-white' : ''}  text-xl uppercase font-[aftika-semibold]`,
                                    children: "1 Bedroom Apartment"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>{
                            setBed2(!bed2);
                            setType("2 Bedroom Apartment");
                            setActive(3);
                            router.push("/build?page=devices");
                        },
                        className: `flex border-2 border-default text-default justify-between items-center ${bed2 ? 'bg-default text-white' : ''} ${bed2Hover ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`,
                        onMouseOver: ()=>setBed2Hover(true)
                        ,
                        onMouseOut: ()=>setBed2Hover(false)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `w-4 h-4 bg-default ${bed2 ? 'bg-white' : ''} ${bed2Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: `${bed2 ? 'text-white' : ''} ${bed2Hover ? 'text-white' : ''} text-xl uppercase font-[aftika-semibold]`,
                                    children: "2 Bedroom Apartment"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>{
                            setBed3(!bed3);
                            setType("3 Bedroom Apartment");
                            setActive(3);
                            router.push("/build?page=devices");
                        },
                        className: `flex border-2 border-default text-default justify-between items-center ${bed3 ? 'bg-default text-white' : ''} ${bed3Hover ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`,
                        onMouseOver: ()=>setBed3Hover(true)
                        ,
                        onMouseOut: ()=>setBed3Hover(false)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `w-4 h-4 bg-default ${bed3 ? 'bg-white' : ''} ${bed3Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: `${bed3 ? 'text-white' : ''} ${bed3Hover ? 'text-white' : ''}  text-xl uppercase font-[aftika-semibold]`,
                                    children: "3 Bedroom Apartment"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>{
                            setBed4(!bed4);
                            setType("4 Bedroom Apartment");
                            setActive(3);
                            router.push("/build?page=devices");
                        },
                        className: `flex border-2 border-default text-default justify-between items-center ${bed4 ? 'bg-default text-white' : ''} ${bed4Hover ? 'bg-default text-white' : ''} rounded-xl h-60 extraSmall:h-80 relative`,
                        onMouseOver: ()=>setBed4Hover(true)
                        ,
                        onMouseOut: ()=>setBed4Hover(false)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `w-4 h-4 bg-default ${bed4 ? 'bg-white' : ''} ${bed4Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: `${bed4 ? 'text-white' : ''} ${bed4Hover ? 'text-white' : ''}  text-xl uppercase font-[aftika-semibold]`,
                                    children: "4 Bedroom Apartment"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-center laptop:justify-between items-center px-10 mb-28",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "laptop:flex hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_progress__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            active: active
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-10 flex small:flex-row flex-col gap-4 justify-center items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "bg-gray-400 rounded-xl py-2 px-20 text-white small:mr-6",
                            onClick: ()=>{
                                router.back();
                            },
                            children: "Back"
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page2);


/***/ })

};
;