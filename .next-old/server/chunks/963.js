"use strict";
exports.id = 963;
exports.ids = [963];
exports.modules = {

/***/ 963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var type = "";
var title = "";
var amount = 0;
var bundle;
var property_size;
var property_type;
var items;
var quantity_lis;
const submitContact = async (event)=>{
    event.preventDefault();
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('https://ext.syncrow.ae/contact', {
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
            "message": "Contact: " + event.target.message.value,
            "phone": event.target.phone.value
        })
    });
    // console.log(res.status)
    if (res.status === 201 || res.status === 200 || res.status === 202) {
        confirm("Your contact request has been sent successfully!");
        window.location.href = '/';
    } else {
        confirm('Your contact request has not been sent!');
        window.location.href = '/';
    }
};
const submitRequest1 = async (event)=>{
    event.preventDefault();
    items = items.map((item)=>{
        return {
            "quantity": item.quantity,
            "bundle_item": item.bundle_item.data
        };
    });
    fetch('https://syncrow.kodagu.today/api/incomming-bundle-requests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "data": {
                "amount": amount,
                "fullname": event.target.name.value,
                "phone_number": event.target.phone.value,
                "email_address": event.target.email.value,
                "company_name": event.target.company.value,
                "message": event.target.message.value,
                "bundle_type": bundle,
                "property_size": property_size,
                "items": items
            }
        })
    }).then((data)=>{
        // console.log(data.status);
        if (data.status === 200) {
            confirm("Your Request has been sent successfully!");
            window.location.href = '/';
        } else {
            confirm('Your Request has not been sent successfully!');
            window.location.href = '/';
        }
    });
};
const submitRequest2 = async (event)=>{
    event.preventDefault();
    var temp = [];
    for(var i = 0; i < quantity_lis.length; i++){
        if (quantity_lis[i] > 0) {
            temp.push({
                "quantity": quantity_lis[i],
                "bundle_item": items[i].bundle_item
            });
        }
    }
    fetch('https://syncrow.kodagu.today/api/incomming-build-requests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "data": {
                "amount": amount,
                "fullname": event.target.name.value,
                "phone_number": event.target.phone.value,
                "email_address": event.target.email.value,
                "company_name": event.target.company.value,
                "message": event.target.message.value,
                "items": temp,
                "property_type": property_type,
                "property_size": property_size
            }
        })
    }).then((data)=>{
        // console.log(data.status);
        if (data.status === 200) {
            confirm("Your Request has been sent successfully!");
            window.location.href = '/';
        } else {
            confirm('Your Request has not been sent successfully!');
            window.location.href = '/';
        }
    });
};
function clicker(event) {
    // console.log(event);
    switch(type){
        case "bundle":
            return submitRequest1(event);
        case "build":
            return submitRequest2(event);
        case "contact":
            return submitContact(event);
        default:
            return submitContact(event);
    }
}
function Form(props) {
    type = props.type;
    title = props.title;
    amount = props.amount;
    bundle = props.bundle;
    property_size = props.property_size;
    property_type = props.property_type;
    items = props.item;
    quantity_lis = props.quantity_lis;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-2/5 absolute top-24 desktop:right-36 laptop:right-28 desktop:h-103 laptop:h-100",
        style: {
            background: "#F5F5F5"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-bold desktop:text-2xl laptop:text-xl absolute desktop:top-8 laptop:top-6 left-8",
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "desktop:text-xl laptop:text-base absolute desktop:top-16 laptop:top-12 left-10",
                onSubmit: clicker,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "FullName ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-red-500",
                                children: "*"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        id: "name",
                        name: "name",
                        className: "desktop:h-10 laptop:h-7 rounded-md w-full text-black"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "Phone Number ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-red-500",
                                children: "*"
                            })
                        ]
                    }),
                    "\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "Email Address ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-red-500",
                                children: "*"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "phone",
                        id: "phone",
                        className: "rounded-md desktop:h-10 laptop:h-7 text-black"
                    }),
                    "\xa0 \xa0",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "email",
                        id: "email",
                        className: "rounded-md desktop:h-10 laptop:h-7 text-black"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Company Name (optional)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "company",
                        id: "company",
                        className: "rounded-md desktop:h-10 laptop:h-7 w-full text-black"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "Message ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-red-500",
                                children: "*"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "message",
                        id: "message",
                        placeholder: "Your Message here...",
                        className: "w-full desktop:h-20 laptop:h-16 rounded-md pl-2 text-black"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-base",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-red-500",
                                children: "*"
                            }),
                            " Fields required"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "bg-default text-white desktop:w-48 laptop:w-40 desktop:h-10 laptop:h-9 rounded-lg",
                        type: "submit",
                        children: "Contact us now!"
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ })

};
;