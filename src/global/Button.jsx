import React from "react";

const Button = ({ size, styles, color, children, style, listener }) => {
  
  const BTN_SIZE = ["btn__small", "btn__medium", "btn__large", "btn__mobile"];
  const BTN_STYLE = ["btn__normal", "btn__rounded"];
  const BTN_COLOR = ["btn__primary", "btn__secondary"];

  const hasSize = BTN_SIZE.includes(size) ? size : BTN_SIZE[0];
  const hasStyle = BTN_STYLE.includes(styles) ? styles : BTN_STYLE[0];
  const hasSColor = BTN_COLOR.includes(color) ? color : BTN_COLOR[0];
  return (
    <button
      className={`btn ${hasSize} ${hasStyle} ${hasSColor}`}
      style={{ ...style }}
      onClick={listener}
    >
      {children}
    </button>
  );
};

export default Button;
