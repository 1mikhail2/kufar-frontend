import React from "react";

import "./SubmitButton.css";

const SubmitButton = (props) => {
  const { onClick, children, caption, disabled, ...restProps } = props;

  return (
    <button
      className="submitButton"
      onClick={onClick}
      disabled={disabled}
      children={children}
      {...restProps}
    >
      {children}
      {caption}
    </button>
  );
};

export default SubmitButton;
