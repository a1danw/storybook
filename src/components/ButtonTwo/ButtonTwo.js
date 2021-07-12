import React from "react";
import "./ButtonTwo.modules.css";

const ButtonTwo = (props) => {
  const { variant = "primary", children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default ButtonTwo;
