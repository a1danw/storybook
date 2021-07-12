import React from "react";
import "./Input.css";

const Input = (props) => {
  const { size = "medium", ...rest } = props;
  return <div className={`input ${size}`} {...rest}></div>;
};

export default Input;
