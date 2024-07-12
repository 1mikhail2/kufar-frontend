import React from "react";

import "./RegionLabelButton.css";

const RegionLabelButton = (props) => {
  const { onClick, children, caption, disabled, ...restProps } = props;

  return (
    <button
      className="regionLabelButton"
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

export default RegionLabelButton;
