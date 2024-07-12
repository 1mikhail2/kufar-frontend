import React from "react";

import "./GoButton.css";

const GoButton = (props) => {
  const { onClick, caption, disabled, ...restProps } = props;

  return (
    <button
      className="goButton"
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {caption}
    </button>
  );
};

export default GoButton;
