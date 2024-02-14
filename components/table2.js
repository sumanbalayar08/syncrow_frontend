import React, { useState } from "react";

function Table2(props) {
    var [quantity_list, setCount] = useState(new Array(props.itemList.length).fill(0));
    const handleQuantity = (index, type) => {
        var tempList = [...quantity_list];
        if (type === "plus") {
            tempList[index] = quantity_list[index] + 1;
            setCount(tempList);
        } else {
            if (quantity_list[index] > 0) {
                tempList[index] = quantity_list[index] - 1;
                setCount(tempList);
            } else {
                tempList[index] = 0;
                setCount(tempList);
            }
        }
    };
    return (
        <div className="relative">
            <div className="laptop:h-100 desktop:h-102 desktop:w-96 laptop:w-80 border-2 border-slate-400 absolute laptop:top-24 desktop:top-36 laptop:left-64 desktop:left-96 rounded-lg">
                <div className="text-default laptop:text-lg desktop:text-xl border-b-2 pb-2 border-slate-400 absolute w-full font-bold">
                    &nbsp; &nbsp; &nbsp; {props.name}
                </div>
                <div className="grid grid-cols-2 grid-flow-rows auto-rows-max absolute top-10 laptop:gap-x-24 desktop:gap-x-32 gap-y-1 left-2 overflow-y-scroll laptop:h-80 desktop:h-100">
                    {props.itemList.map((item, index) => {
                        return <React.Fragment key={index}>
                            <div className="text-default laptop:text-base desktop:text-lg pt-2 w-48">
                                {item.bundle_item.item_name.trim()}
                            </div>
                            <div className="pt-1 pl-3" >
                                <div className="w-24 h-10 border-2 border-slate-400 relative rounded-md">
                                    <button
                                        className={`bg-default rounded-tr-md w-8 h-5 text-white absolute -right-0.5 -top-0.5 text-base`}
                                        onClick={() => handleQuantity(index, "plus")}
                                    >
                                        +
                                    </button>
                                    <button
                                        className={`bg-default rounded-br-md w-8 h-5 text-white absolute -right-0.5 -bottom-0.5 text-base`}
                                        onClick={() => handleQuantity(index, "minus")}
                                    >
                                        ¯
                                    </button>
                                    <span className="text-default text-lg absolute top-1 left-5">
                                        {quantity_list[index]}
                                    </span>
                                </div>
                            </div>
                        </React.Fragment>

                    })}
                </div>
            </div>
        </div>
    );
}

export default Table2;
