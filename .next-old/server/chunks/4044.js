"use strict";
exports.id = 4044;
exports.ids = [4044];
exports.modules = {

/***/ 4044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_step_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8946);
/* harmony import */ var react_step_progress_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_step_progress_bar__WEBPACK_IMPORTED_MODULE_2__);




function Progress(props) {
    const { 0: w , 1: setW  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('w-0');
    var percentage = 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.active === 2) {
            setW(35);
        } else if (props.active === 3) {
            setW(35);
        } else if (props.active === 4) {
            setW(68);
        } else if (props.active === 6) {
            setW(100);
        } else {
            setW(0);
        }
    }, [
        props.active
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative top-16",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_step_progress_bar__WEBPACK_IMPORTED_MODULE_2__.ProgressBar, {
                percent: w,
                filledBackground: "#023DFE",
                height: 20,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_step_progress_bar__WEBPACK_IMPORTED_MODULE_2__.Step, {
                        transition: "scale",
                        children: ({ accomplished , index  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[20px] bg-default ml-[20px] h-[20px] rounded-xl"
                            })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_step_progress_bar__WEBPACK_IMPORTED_MODULE_2__.Step, {
                        transition: "scale",
                        children: ({ accomplished , index  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[20px] bg-default h-[20px] rounded-xl"
                            })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_step_progress_bar__WEBPACK_IMPORTED_MODULE_2__.Step, {
                        transition: "scale",
                        children: ({ accomplished , index  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[20px] bg-default h-[20px] rounded-xl"
                            })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_step_progress_bar__WEBPACK_IMPORTED_MODULE_2__.Step, {
                        transition: "scale",
                        children: ({ accomplished , index  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[20px] bg-default mr-[20px] h-[20px] rounded-xl"
                            })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "laptop:w-[30rem] desktop:w-104 flex justify-between my-3 px-[0rem] laptop:text-base desktop:text-xl font-bold mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "",
                        children: "Type"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "pl-[12%]",
                        children: "Size"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "pl-[12%]",
                        children: "Devices"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "",
                        children: "Installation"
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Progress);


/***/ })

};
;