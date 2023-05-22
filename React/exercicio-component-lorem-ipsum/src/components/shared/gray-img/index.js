import React from "react";
import "./style.css";

const GrayImg = (props) => {
  return (
    <img
      class={props.gray ? "gray-img" : "color-img"}
      src={props.img_url}
    ></img>
  );
};

export default GrayImg;
