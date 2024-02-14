"use strict";
exports.id = 6888;
exports.ids = [6888];
exports.modules = {

/***/ 6888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



function Page1({ active , setActive , setBhk  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const guthen = 'Guthen Bloots Personal Use';
    const { 0: bhk1click , 1: setBhk1click  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: bhk2click , 1: setBhk2click  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: bhk3click , 1: setBhk3click  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: bhk1 , 1: setBhk1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: bhk2 , 1: setBhk2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: bhk3 , 1: setBhk3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleBhk1 = ()=>{
        setBhk1(!bhk1);
        setBhk2(false);
        setBhk3(false);
    };
    const handleBhk2 = ()=>{
        setBhk2(!bhk2);
        setBhk1(false);
        setBhk3(false);
    };
    const handleBhk3 = ()=>{
        setBhk3(!bhk3);
        setBhk1(false);
        setBhk2(false);
    };
    const handleBhk1click = ()=>{
        setBhk1click(!bhk1click);
        setBhk2click(false);
        setBhk3click(false);
    };
    const handleBhk2click = ()=>{
        setBhk2click(!bhk2click);
        setBhk1click(false);
        setBhk3click(false);
    };
    const handleBhk3click = ()=>{
        setBhk3click(!bhk3click);
        setBhk1click(false);
        setBhk2click(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pt-36 tablet:px-10 px-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-7xl desktop:text-8xl text-default font-thin",
                        style: {
                            fontFamily: `${guthen}`
                        },
                        children: "Bundles"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-xl tracking-wide leading-none -mt-6 font-[aftika-bold]",
                        children: "Select Type"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 tablet:grid-cols-3 pt-12 items-center gap-4 w-full justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>{
                            handleBhk1click();
                            setBhk("1 Bedroom");
                            setActive(2);
                            router.push("/bundles?page=service");
                        },
                        className: `flex justify-between items-center  rounded-xl h-60 extraSmall:h-80   relative border-2 border-default text-default ${bhk1 ? 'bg-default text-white' : ''} ${bhk1click ? 'bg-default text-white' : ''} `,
                        onMouseOver: ()=>setBhk1(true)
                        ,
                        onMouseOut: ()=>setBhk1(false)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `w-4 h-4 bg-default rounded-full top-4 left-4 absolute ${bhk1 ? 'bg-white' : ''} `
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: ` ${bhk1 ? 'text-white' : ''} ${bhk1click ? 'text-white' : ''} text-xl uppercase font-[aftika-semibold]`,
                                    children: "1 Bedroom"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>{
                            handleBhk2click();
                            setBhk("2 Bedroom");
                            setActive(2);
                            router.push("/bundles?page=service");
                        },
                        className: `flex justify-between items-center   rounded-xl h-60 extraSmall:h-80 text-default border-2 border-default relative ${bhk2 ? 'bg-default text-white' : ''} ${bhk2click ? 'bg-default text-white' : ''} `,
                        onMouseOver: ()=>setBhk2(true)
                        ,
                        onMouseOut: ()=>setBhk2(false)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `w-4 h-4 bg-default ${bhk2 ? 'bg-white' : ''} ${bhk2click ? 'bg-white' : ''}  rounded-full top-4 left-4 absolute`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: ` ${bhk2 ? 'text-white' : ''} ${bhk2click ? 'text-white' : ''} text-xl uppercase font-[aftika-semibold]`,
                                    children: "2 Bedroom"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>{
                            handleBhk3click();
                            setBhk("3 Bedroom");
                            setActive(2);
                            router.push("/bundles?page=service");
                        },
                        className: `flex justify-between items-center rounded-xl h-60 extraSmall:h-80 relative text-default border-2 border-default ${bhk3 ? 'bg-default text-white' : ''} ${bhk3click ? 'bg-default text-white' : ''} `,
                        onMouseOver: ()=>setBhk3(true)
                        ,
                        onMouseOut: ()=>setBhk3(false)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `w-4 h-4 bg-default ${bhk3 ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: ` ${bhk3 ? 'text-white' : ''} ${bhk3click ? 'text-white' : ''} text-xl flex items-center justify-center mx-auto`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "uppercase font-[aftika-semibold]",
                                    children: "3 Bedroom"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-end items-center pt-6 pb-10"
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page1);


/***/ })

};
;