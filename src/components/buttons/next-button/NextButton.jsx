import React from "react";

import "./NextButton.css";

const NextButton = (props) => {
  const { onClick, children, disabled, ...restProps } = props;

  return (
    <button
      className="nextButton"
      onClick={onClick}
      disabled={disabled}
      children={children}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default NextButton;
