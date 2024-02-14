"use strict";
exports.id = 7678;
exports.ids = [7678];
exports.modules = {

/***/ 7678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_lotties_bulb_animation_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4945);
/* harmony import */ var _pages_lotties_doorlock_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3131);
/* harmony import */ var _pages_lotties_interactiveHub_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(967);
/* harmony import */ var _pages_lotties_curtain_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2252);
/* harmony import */ var _pages_lotties_media_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5602);
/* harmony import */ var _pages_lotties_alarm_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6919);
/* harmony import */ var _pages_lotties_airCondition_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1017);
/* harmony import */ var _pages_lotties_heater_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1314);
/* harmony import */ var _pages_lotties_icon1_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(204);
/* harmony import */ var _pages_lotties_cctv_animation_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5502);
/* harmony import */ var _pages_lotties_energy_saving_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7461);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1189);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4044);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
















function Page5({ active , setActive , apartment , villa , office , setItems  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();
    const { 0: itemList , 1: setItemList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const doorlockOptions = {
        loop: true,
        autoplay: true,
        animationData: _pages_lotties_doorlock_json__WEBPACK_IMPORTED_MODULE_3__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const interactiveHubOptions = {
        loop: true,
        autoplay: true,
        animationData: _pages_lotties_interactiveHub_json__WEBPACK_IMPORTED_MODULE_4__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const curtainsOptions = {
        loop: true,
        autoplay: true,
        animationData: _pages_lotties_curtain_json__WEBPACK_IMPORTED_MODULE_5__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const mediaOptions = {
        loop: true,
        autoplay: true,
        animationData: _pages_lotties_media_json__WEBPACK_IMPORTED_MODULE_6__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const messageOptions = {
        loop: true,
        autoplay: true,
        animationData: _pages_lotties_icon1_json__WEBPACK_IMPORTED_MODULE_10__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const heaterOptions = {
        loop: true,
        autoplay: true,
        animationData: _pages_lotties_heater_json__WEBPACK_IMPORTED_MODULE_9__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const alarmOptions = {
        loop: true,
        autoplay: true,
        animationData: _pages_lotties_alarm_json__WEBPACK_IMPORTED_MODULE_7__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const airConditionOptions = {
        loop: true,
        autoplay: true,
        animationData: _pages_lotties_airCondition_json__WEBPACK_IMPORTED_MODULE_8__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const lightingOptions = {
        loop: true,
        autoplay: true,
        animationData: _pages_lotties_bulb_animation_json__WEBPACK_IMPORTED_MODULE_2__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const cameraOptions = {
        loop: true,
        autoplay: true,
        animationData: _pages_lotties_cctv_animation_json__WEBPACK_IMPORTED_MODULE_11__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const energyOptions = {
        loop: true,
        autoplay: true,
        animationData: _pages_lotties_energy_saving_json__WEBPACK_IMPORTED_MODULE_12__,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    // let pageBack;
    // if (apartment) {
    //   pageBack = 2;
    // } else if (villa) {
    //   pageBack = 3;
    // } else {
    //   pageBack = 4;
    // }
    const { 0: tick1 , 1: setTick1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: tick2 , 1: setTick2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: tick3 , 1: setTick3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: tick4 , 1: setTick4  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: tick5 , 1: setTick5  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: tick6 , 1: setTick6  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: tick7 , 1: setTick7  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: tick8 , 1: setTick8  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: tick9 , 1: setTick9  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: tick10 , 1: setTick10  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col pt-44",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 laptop:grid-cols-3 justify-around items-center px-10 gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl flex flex-col items-center h-80 extraSmall:h-96 justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-8 h-8 rounded-lg bg-white absolute top-4 left-4",
                                children: tick1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-xl text-default font-[aftika-bold] pl-2 pt-0",
                                    children: "✓"
                                }) : ''
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: lightingOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Lighting"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>{
                                    if (tick1) {
                                        setItemList(itemList.filter((item)=>item !== 'Lightning'
                                        ));
                                    } else {
                                        setItemList([
                                            ...itemList,
                                            'lightning'
                                        ]);
                                    }
                                    setTick1(!tick1);
                                },
                                className: "bg-white text-default rounded-lg py-2 text-tiny px-14 uppercase mt-2",
                                children: tick1 ? 'Unselect' : 'Select'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-8 h-8 rounded-lg bg-white absolute top-4 left-4",
                                children: tick2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-xl text-default font-[aftika-bold] pl-2 pt-0",
                                    children: "✓"
                                }) : ''
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: mediaOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Media"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>{
                                    if (tick2) {
                                        setItemList(itemList.filter((item)=>item !== 'Media'
                                        ));
                                    } else {
                                        setItemList([
                                            ...itemList,
                                            'Media'
                                        ]);
                                    }
                                    setTick2(!tick2);
                                },
                                className: "bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2",
                                children: tick2 ? 'Unselect' : 'Select'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-8 h-8 rounded-lg bg-white absolute top-4 left-4",
                                children: tick3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-xl text-default font-[aftika-bold] pl-2 pt-0",
                                    children: "✓"
                                }) : ''
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: airConditionOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Air Conditioner"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>{
                                    if (tick3) {
                                        setItemList(itemList.filter((item)=>item !== 'Air Conditioner'
                                        ));
                                    } else {
                                        setItemList([
                                            ...itemList,
                                            'Air Conditioner'
                                        ]);
                                    }
                                    setTick3(!tick3);
                                },
                                className: "bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2",
                                children: tick3 ? 'Unselect' : 'Select'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-8 h-8 rounded-lg bg-white absolute top-4 left-4",
                                children: tick4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-xl text-default font-[aftika-bold] pl-2 pt-0",
                                    children: "✓"
                                }) : ''
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: alarmOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-44 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Alarm"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>{
                                    if (tick4) {
                                        setItemList(itemList.filter((item)=>item !== 'Alarm'
                                        ));
                                    } else {
                                        setItemList([
                                            ...itemList,
                                            'Alarm'
                                        ]);
                                    }
                                    setTick4(!tick4);
                                },
                                className: "bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2",
                                children: tick4 ? 'Unselect' : 'Select'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-8 h-8 rounded-lg bg-white absolute top-4 left-4",
                                children: tick5 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-xl text-default font-[aftika-bold] pl-2 pt-0",
                                    children: "✓"
                                }) : ''
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: curtainsOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Curtains"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>{
                                    if (tick5) {
                                        setItemList(itemList.filter((item)=>item !== 'Curtains'
                                        ));
                                    } else {
                                        setItemList([
                                            ...itemList,
                                            'Curtains'
                                        ]);
                                    }
                                    setTick5(!tick5);
                                },
                                className: "bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2",
                                children: tick5 ? 'Unselect' : 'Select'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-8 h-8 rounded-lg bg-white absolute top-4 left-4",
                                children: tick6 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-xl text-default font-[aftika-bold] pl-2 pt-0",
                                    children: "✓"
                                }) : ''
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: interactiveHubOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Interactive Hub"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>{
                                    if (tick6) {
                                        setItemList(itemList.filter((item)=>item !== 'Interactive Hub'
                                        ));
                                    } else {
                                        setItemList([
                                            ...itemList,
                                            'Interactive Hub'
                                        ]);
                                    }
                                    setTick6(!tick6);
                                },
                                className: "bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2",
                                children: tick6 ? 'Unselect' : 'Select'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-8 h-8 rounded-lg bg-white absolute top-4 left-4",
                                children: tick7 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-xl text-default font-[aftika-bold] pl-2 pt-0",
                                    children: "✓"
                                }) : ''
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: doorlockOptions,
                                height: "200px",
                                width: "120px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Doorlock"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>{
                                    if (tick7) {
                                        setItemList(itemList.filter((item)=>item !== 'Doorlock'
                                        ));
                                    } else {
                                        setItemList([
                                            ...itemList,
                                            'Doorlock'
                                        ]);
                                    }
                                    setTick7(!tick7);
                                },
                                className: "bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2",
                                children: tick7 ? 'Unselect' : 'Select'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-8 h-8 rounded-lg bg-white absolute top-4 left-4",
                                children: tick8 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-xl text-default font-[aftika-bold] pl-2 pt-0",
                                    children: "✓"
                                }) : ''
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: heaterOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Heater"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>{
                                    if (tick8) {
                                        setItemList(itemList.filter((item)=>item !== 'Heater'
                                        ));
                                    } else {
                                        setItemList([
                                            ...itemList,
                                            'Heater'
                                        ]);
                                    }
                                    setTick8(!tick8);
                                },
                                className: "bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2",
                                children: tick8 ? 'Unselect' : 'Select'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-8 h-8 rounded-lg bg-white absolute top-4 left-4",
                                children: tick9 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-xl text-default font-[aftika-bold] pl-2 pt-0",
                                    children: "✓"
                                }) : ''
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: cameraOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Camera"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>{
                                    if (tick9) {
                                        setItemList(itemList.filter((item)=>item !== 'Camera'
                                        ));
                                    } else {
                                        setItemList([
                                            ...itemList,
                                            'Camera'
                                        ]);
                                    }
                                    setTick9(!tick9);
                                },
                                className: "bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2",
                                children: tick9 ? 'Unselect' : 'Select'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-8 h-8 rounded-lg bg-white absolute top-4 left-4",
                                children: tick10 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-xl text-default font-[aftika-bold] pl-2 pt-0",
                                    children: "✓"
                                }) : ''
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: energyOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Energy Saving & Monitoring"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>{
                                    if (tick10) {
                                        setItemList(itemList.filter((item)=>item !== 'Energy Saving & Monitoring'
                                        ));
                                    } else {
                                        setItemList([
                                            ...itemList,
                                            'Energy Saving & Monitoring'
                                        ]);
                                    }
                                    setTick10(!tick10);
                                },
                                className: "bg-white text-default rounded-lg py-2 px-14 text-tiny uppercase mt-2",
                                children: tick10 ? 'Unselect' : 'Select'
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
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_progress__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            active: active + 1
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-10 flex small:flex-row flex-col gap-4 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "bg-gray-400 rounded-xl py-2 px-20 text-white small:mr-6",
                                onClick: ()=>{
                                    router.back();
                                    setItems([]);
                                },
                                children: "Back"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "bg-default rounded-xl py-2 px-20 text-white",
                                onClick: ()=>{
                                    setActive(4);
                                    router.push("/build?page=installation");
                                    setItems(itemList);
                                },
                                children: "Next"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page5);


/***/ })

};
;