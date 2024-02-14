"use strict";
exports.id = 4269;
exports.ids = [4269];
exports.modules = {

/***/ 4269:
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




function Page1({ active , setActive , apartment , setApartment , villa , setVilla , office , setOffice , setType  }) {
    const { 0: firstBoxHover , 1: setFirstBoxHover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: secondBoxHover , 1: setSecondBoxHover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: thirdBoxHover , 1: setThirdBoxHover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleApartmentClick = ()=>{
        setApartment(!apartment);
        setVilla(false);
        setOffice(false);
    };
    const handleVillaClick = ()=>{
        setVilla(!villa);
        setOffice(false);
        setApartment(false);
    };
    const handleOfficeClick = ()=>{
        setOffice(!office);
        setVilla(false);
        setApartment(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 tablet:grid-cols-3 px-10 items-center pt-44 gap-4 w-full justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>{
                            handleApartmentClick();
                            setType("apartment");
                            if (!apartment) {
                                setActive(2);
                                router.push("/build?page=size");
                            }
                        },
                        className: `flex justify-between items-center  rounded-xl h-60 extraSmall:h-80   relative border-2 border-default text-default ${firstBoxHover ? 'bg-default text-white' : ''} ${apartment ? 'bg-default text-white' : ''}`,
                        onMouseOver: ()=>setFirstBoxHover(true)
                        ,
                        onMouseOut: ()=>setFirstBoxHover(false)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `w-4 h-4 bg-default rounded-full top-4 left-4 absolute ${firstBoxHover ? 'bg-white' : ''} ${apartment ? 'bg-white' : ''}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: `${apartment ? 'text-white' : ''} ${firstBoxHover ? 'text-white' : ''} text-xl uppercase font-[aftika-semibold]`,
                                    children: "Apartment"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>{
                            handleVillaClick();
                            setType("villa");
                            if (!villa) {
                                setActive(2);
                                router.push("/build?page=size");
                            }
                        },
                        className: `flex justify-between items-center   rounded-xl h-60 extraSmall:h-80 text-default border-2 border-default relative ${secondBoxHover ? 'bg-default text-white' : ''} ${villa ? 'bg-default text-white' : ''}`,
                        onMouseOver: ()=>setSecondBoxHover(true)
                        ,
                        onMouseOut: ()=>setSecondBoxHover(false)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `w-4 h-4 bg-default ${secondBoxHover ? 'bg-white' : ''} ${villa ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: `${villa ? 'text-white' : ''} ${secondBoxHover ? 'text-white' : ''} uppercase text-xl font-[aftika-semibold]`,
                                    children: "Villa"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>{
                            handleOfficeClick();
                            setType("office");
                            if (!office) {
                                setActive(2);
                                router.push("/build?page=size");
                            }
                        },
                        className: `flex justify-between items-center rounded-xl h-60 extraSmall:h-80 relative text-default border-2 border-default ${thirdBoxHover ? 'bg-default text-white' : ''} ${office ? 'bg-default text-white' : ''} `,
                        onMouseOver: ()=>setThirdBoxHover(true)
                        ,
                        onMouseOut: ()=>setThirdBoxHover(false)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `w-4 h-4 bg-default ${thirdBoxHover ? 'bg-white' : ''} ${office ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${office ? 'text-white' : ''} ${thirdBoxHover ? 'text-white' : ''} flex items-center justify-center mx-auto`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "uppercase text-xl font-[aftika-semibold]",
                                    children: "Office"
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
                        className: "mt-10 "
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page1);


/***/ })

};
;