import React from "react";
import ArrowIcon from "../icons/arrow-icon";

export default function LineAndArrowComp() {
  return (
    <div className="line-and-arrow">
      <p className="line"></p>
      <button className="arrow">{<ArrowIcon></ArrowIcon>}</button>
    </div>
  );
}
