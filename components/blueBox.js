import React from "react";

function blueBox(props) {
  return <div className={`h-full relative bg-default`}>{props.children}</div>;
}

export default blueBox;
