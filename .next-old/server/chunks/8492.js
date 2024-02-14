"use strict";
exports.id = 8492;
exports.ids = [8492];
exports.modules = {

/***/ 8492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headerStyles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6048);
/* harmony import */ var _headerStyles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_headerStyles_module_css__WEBPACK_IMPORTED_MODULE_4__);





const FormNew = ({ data , router  })=>{
    // console.log(data)
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: phone , 1: setPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: email1 , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: company , 1: setCompany  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const resetFields = ()=>{
        setName("");
        setPhone("");
        setEmail("");
        setCompany("");
        setMessage("");
    };
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const validation = ()=>{
        var isValid = true;
        if (!name) {
            alert("Please enter first & last name");
            isValid = false;
        } else if (name && name.trim().split(" ").length < 2) {
            alert("First and last name should contain atleast two words.");
            isValid = false;
        } else if (!phone) {
            alert("Please enter phone number");
            isValid = false;
        } else if (!email1) {
            alert("Please enter email address");
            isValid = false;
        } else if (email1 && !validateEmail(email1)) {
            alert("Please enter a valid email address");
            isValid = false;
        } else if (!message.trim()) {
            alert("Please enter message");
            isValid = false;
        }
        return isValid;
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        try {
            if (data.formtype === "bundle") {
                if (validation()) {
                    setIsLoading(true);
                    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post('https://ext.syncrow.ae/', {
                        method: 'POST',
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "Name": name,
                            "company_name": company,
                            "bundle_type": data.type,
                            "property_size": data.bhk,
                            "Email": email1,
                            "message": message,
                            "Phone": phone
                        })
                    });
                    setIsLoading(false);
                    if (res.status === 201 || res.status === 200 || res.status === 202) {
                        confirm("Your bundle request has been sent successfully!");
                        router.push("/bundles/thank-you");
                    } else {
                        confirm('Your bundle request has not been sent!');
                        window.location.href = '/';
                    }
                }
            } else if (data.formtype === "contact") {
                const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post('https://ext.syncrow.ae/contact', {
                    method: 'POST',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "name": event.target.name.value,
                        "company": event.target.company.value,
                        "email": event.target.email.value,
                        "message": event.target.message.value,
                        "phone": event.target.phone.value
                    })
                });
                // console.log(res.status)
                if (res.status === 201 || res.status === 200 || res.status === 202) {
                    confirm("Your contact request has been sent successfully!");
                    router.push("/contact/thank-you");
                } else {
                    confirm('Your contact request has not been sent!');
                    window.location.href = '/';
                }
            } else {
                if (validation()) {
                    setIsLoading(true);
                    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post('https://ext.syncrow.ae/build', {
                        method: 'POST',
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "name": name,
                            "company": company,
                            "property_type": data.type,
                            "emailaddress": email1,
                            "spaces": String(data.spaces),
                            "area": String(data.area),
                            "message": message,
                            "phone": phone,
                            "items": data.items
                        })
                    });
                    setIsLoading(false);
                    // console.log(res.status)
                    if (res.status === 201 || res.status === 200 || res.status === 202) {
                        confirm("Your build request has been sent successfully!");
                        router.push("/build/thank-you");
                    } else {
                        confirm('Your build request has not been sent!');
                        window.location.href = '/';
                    }
                }
            }
        } catch (e) {
        // console.log("e", e);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            background: "#F5F5F5"
        },
        className: "px-8 py-8",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "border-b-2 border-blue-300",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "uppercase font-[aftika-bold] text-black text-base",
                        children: "Details"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col mt-6 mb-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "text-black font-[aftika-light] text-tiny mb-1",
                            children: [
                                "First & Last Name ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-500 -ml-1",
                                    children: "*"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            value: name,
                            onChange: (e)=>setName(e.target.value)
                            ,
                            className: "outline-none rounded-md py-1 text-black pl-1",
                            id: "name",
                            name: "name"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex gap-4 mb-2 tablet:flex-row flex-col",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col flex-1",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    className: "text-black font-[aftika-light] text-tiny mb-1",
                                    children: [
                                        "Phone Number ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-red-500 -ml-1",
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    value: phone,
                                    onChange: (e)=>setPhone(e.target.value)
                                    ,
                                    className: "outline-none rounded-md py-1 text-black pl-1",
                                    id: "phone",
                                    name: "phone"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col flex-1",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    className: "text-black font-[aftika-light] text-tiny mb-1",
                                    children: [
                                        "Email Address ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-red-500 -ml-1",
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    value: email1,
                                    onChange: (e)=>setEmail(e.target.value)
                                    ,
                                    className: "outline-none rounded-md py-1 text-black pl-1",
                                    id: "email",
                                    name: "email"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col mb-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "text-black font-[aftika-light] text-tiny mb-1",
                            children: "Company Name (optional)"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            value: company,
                            onChange: (e)=>setCompany(e.target.value)
                            ,
                            className: "rounded-md py-1 text-black outline-none pl-1 ",
                            id: "company",
                            name: "company"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col mb-10",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "text-black font-[aftika-light] text-tiny mb-1",
                            children: [
                                "Message ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-500 -ml-1",
                                    children: "*"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            value: message,
                            onChange: (e)=>setMessage(e.target.value)
                            ,
                            placeholder: "Your message here...",
                            className: "rounded-md py-1 text-black outline-none pt-1 pl-1",
                            id: "message",
                            name: "message"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-black font-[aftika-light] mt-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-500 mr-1",
                                    children: "*"
                                }),
                                "Fields required"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between gap-4",
                    children: [
                        isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "bg-default uppercase flex justify-center items-center text-white desktop:w-48 w-36 desktop:h-10 h-8 rounded-lg",
                            type: "button",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_headerStyles_module_css__WEBPACK_IMPORTED_MODULE_4___default().loader)
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "bg-default uppercase text-white desktop:w-48 w-36 desktop:h-10 h-8 rounded-lg",
                            type: "submit",
                            children: "Submit"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>resetFields()
                            ,
                            className: "bg-default uppercase text-white desktop:w-48 w-36 desktop:h-10 h-8 rounded-lg",
                            type: "button",
                            children: "Reset"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
                    id: "zc_gad",
                    name: "zc_gad",
                    value: ""
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormNew);


/***/ })

};
;