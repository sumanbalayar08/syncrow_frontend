import React from "react";

function blueBundle(props) {
  return (
    <div className="bg-default laptop:w-72 desktop:w-96 rounded-3xl relative">
      <ul className="list-disc pl-7">
        <li className="laptop:text-3xl desktop:text-4xl text-white absolute -top-4 laptop:left-10 desktop:left-10">
          <span className="laptop:text-2xl desktop:text-3xl  absolute desktop:top-24 laptop:top-20 desktop:left-0 laptop:-left-8 w-72 font-semibold flex justify-center">
            {props.children}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default blueBundle;
