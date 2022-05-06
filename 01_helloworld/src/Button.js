import React from "react";

const Button = ({ title = "Nothing passed from App to title" }) => (
  <div>
    <button className="button">{title}</button>
  </div>
);

export default Button;
