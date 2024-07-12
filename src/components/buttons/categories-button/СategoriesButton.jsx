import React from "react";

import "./CategoriesButton.css";

const СategoriesButton = (props) => {
  const { onClick, caption, children, disabled, ...restProps } = props;

  return (
    <button
      className="button"
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
      {caption}
    </button>
  );
};

export default СategoriesButton;
