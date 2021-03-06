import React from "react";
// import "./Button.modules.css";

const Button = ({ children, ...rest }) => {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
