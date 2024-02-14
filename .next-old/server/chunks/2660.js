"use strict";
exports.id = 2660;
exports.ids = [2660];
exports.modules = {

/***/ 2660:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);















function SmartHome({ active , setActive  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
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
    const { 0: tick1 , 1: setTick1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: tick2 , 1: setTick2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: tick3 , 1: setTick3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: tick4 , 1: setTick4  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: tick5 , 1: setTick5  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: tick6 , 1: setTick6  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: tick7 , 1: setTick7  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: tick8 , 1: setTick8  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: tick9 , 1: setTick9  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: tick10 , 1: setTick10  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const guthen = 'Guthen Bloots Personal Use';
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col pt-32",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tablet:px-10 px-8 mb-12",
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
                        children: "Complete Smart Home Experience"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 laptop:grid-cols-3 justify-around items-center px-10 gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl flex flex-col items-center h-80 extraSmall:h-96 justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: lightingOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Lightning"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: mediaOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Media"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: airConditionOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Air Conditioner"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: alarmOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-44 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Alarm"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: curtainsOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Curtains"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: interactiveHubOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Interactive Hub"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: doorlockOptions,
                                height: "200px",
                                width: "120px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Doorlock"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: heaterOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Heater"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: cameraOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Camera"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " bg-default rounded-xl h-80 extraSmall:h-96 flex flex-col items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_13___default()), {
                                options: energyOptions,
                                height: "200px",
                                width: "200px",
                                className: "z-10 middle:w-28 w-32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl w-10/12 text-center uppercase font-[aftika-bold] text-white tracking-widest",
                                children: "Energy Saving & Monitoring"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center laptop:justify-end items-center px-10 mb-28",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-10 flex small:flex-row flex-col gap-6 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "bg-gray-400 rounded-xl py-2 px-20 text-white ",
                            onClick: ()=>router.back()
                            ,
                            children: "Back"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "bg-gray-400 rounded-xl py-2 px-20 text-white",
                            onClick: ()=>router.push("/bundles?page=installation")
                            ,
                            children: "Next"
                        })
                    ]
                })
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartHome);


/***/ })

};
;