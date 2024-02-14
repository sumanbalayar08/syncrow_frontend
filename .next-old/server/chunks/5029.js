"use strict";
exports.id = 5029;
exports.ids = [5029];
exports.modules = {

/***/ 5029:
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



function Page2({ active , setActive , convenience , setConvenience , energy , setEnergy , safety , setSafety , smartHome , setSmartHome , setType  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const guthen = 'Guthen Bloots Personal Use';
    const { 0: div1Hover , 1: setDiv1Hover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: div2Hover , 1: setDiv2Hover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: div3Hover , 1: setDiv3Hover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: div4Hover , 1: setDiv4Hover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleDiv1 = ()=>{
        setDiv1Hover(!div1Hover);
        setDiv2Hover(false);
        setDiv3Hover(false);
    };
    const handleDiv2 = ()=>{
        setDiv2Hover(!div2Hover);
        setDiv1Hover(false);
        setDiv3Hover(false);
    };
    const handleDiv3 = ()=>{
        setDiv3Hover(!div3Hover);
        setDiv1Hover(false);
        setDiv2Hover(false);
    };
    const handleDiv4 = ()=>{
        setDiv4Hover(!div4Hover);
        setDiv1Hover(false);
        setDiv2Hover(false);
    };
    const handleConvenience = ()=>{
        setConvenience(!convenience);
        setEnergy(false);
        setSafety(false);
        setSmartHome(false);
    };
    const handleEnergy = ()=>{
        setEnergy(!energy);
        setConvenience(false);
        setSafety(false);
        setSmartHome(false);
    };
    const handleSafety = ()=>{
        setSafety(!safety);
        setConvenience(false);
        setEnergy(false);
        setSmartHome(false);
    };
    const handleSmartHome = ()=>{
        setSafety(false);
        setConvenience(false);
        setEnergy(false);
        setSmartHome(!smartHome);
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-1 tablet:grid-cols-3 pt-12 items-center gap-6 w-full justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>{
                                handleConvenience();
                                setType('convenience');
                                if (!convenience) {
                                    setActive(3);
                                    router.push("bundles?page=devices");
                                }
                            },
                            className: `flex justify-between items-center  rounded-2xl h-44 extraSmall:h-80   relative border-2 border-default text-default ${convenience ? 'bg-default text-white' : ''} ${div1Hover ? 'bg-default text-white' : ''} `,
                            onMouseOver: ()=>setDiv1Hover(true)
                            ,
                            onMouseOut: ()=>setDiv1Hover(false)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `w-4 h-4 bg-default rounded-full top-4 left-4 absolute ${div1Hover ? 'bg-white' : ''} ${convenience ? 'bg-white' : ''} `
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center justify-center mx-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: ` ${div1Hover ? 'text-white' : ''} ${convenience ? 'text-white' : ''} text-xl uppercase font-[aftika-semibold]`,
                                        children: "Convenience"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>{
                                handleSafety();
                                setType('safety');
                                if (!safety) {
                                    setActive(3);
                                    router.push("bundles?page=devices");
                                }
                            },
                            className: `flex justify-between items-center   rounded-2xl h-44 extraSmall:h-80 text-default border-2 border-default relative ${div2Hover ? 'bg-default text-white' : ''} ${safety ? 'bg-default text-white' : ''}`,
                            onMouseOver: ()=>setDiv2Hover(true)
                            ,
                            onMouseOut: ()=>setDiv2Hover(false)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `w-4 h-4 bg-default ${div2Hover ? 'bg-white' : ''} ${safety ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center justify-center mx-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: `${safety ? 'text-white' : ''} ${div2Hover ? 'text-white' : ''} text-xl uppercase font-[aftika-semibold]`,
                                        children: "Safety"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>{
                                handleEnergy();
                                setType('energy');
                                if (!energy) {
                                    setActive(3);
                                    router.push("bundles?page=devices");
                                }
                            },
                            className: `flex justify-between items-center rounded-2xl h-44 extraSmall:h-80 relative text-default border-2 border-default ${div3Hover ? 'bg-default text-white' : ''} ${energy ? 'bg-default text-white' : ''} `,
                            onMouseOver: ()=>setDiv3Hover(true)
                            ,
                            onMouseOut: ()=>setDiv3Hover(false)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `w-4 h-4 bg-default ${energy ? 'bg-white' : ''} ${div3Hover ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: ` ${div3Hover ? 'text-white' : ''} ${energy ? 'text-white' : ''} text-xl flex items-center justify-center mx-auto`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "uppercase font-[aftika-semibold]",
                                        children: "Energy"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onClick: ()=>{
                    handleSmartHome();
                    setType('smartHome');
                    if (!smartHome) {
                        setActive(3);
                        router.push("bundles?page=devices");
                    }
                },
                className: `flex justify-between items-center rounded-2xl mt-6 h-40 tablet:h-28 extraSmall:h-80 relative text-default border-2 border-default ${div4Hover ? 'bg-default text-white' : ''} ${smartHome ? 'bg-default text-white' : ''} `,
                onMouseOver: ()=>setDiv4Hover(true)
                ,
                onMouseOut: ()=>setDiv4Hover(false)
                ,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `w-4 h-4 bg-default ${div4Hover ? 'bg-white' : ''} ${smartHome ? 'bg-white' : ''} rounded-full top-4 left-4 absolute`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: ` ${div4Hover ? 'text-white' : ''} ${smartHome ? 'text-white' : ''} text-xl flex items-center justify-center mx-auto`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "uppercase font-[aftika-semibold] px-10 text-center",
                            children: "Complete Smart Home Experience"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex small:flex-row flex-col gap-6 justify-end items-center pt-6 pb-10",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>router.back()
                    ,
                    className: "text-white uppercase bg-gray-400 rounded-lg py-2 px-20",
                    children: "Back"
                })
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page2);


/***/ })

};
;