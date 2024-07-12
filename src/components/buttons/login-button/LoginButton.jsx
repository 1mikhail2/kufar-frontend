import React from "react";

import "./LoginButton.css";

const LoginButton = (props) => {
  const { onClick, caption, disabled, ...restProps } = props;

  return (
    <button
      className="loginButton"
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {caption}
    </button>
  );
};

export default LoginButton;
