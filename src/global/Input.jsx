import React from "react";

const Input = ({ style, ...rest }) => {
  return (
    <input
      style={{
        border: "1px solid #e0e7ed",
        background: "#f7f8fc",
        padding: "15px",
        outline: "none",
        borderRadius: "5px",
        fontSize:".9rem",
        transition:"border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s",
        boxShadow: "inset 0 1px 1px rgba(0,0,0,0.075)",
        width:"100%",
        ...style,
       
      }}
      {...rest}
    />
  );
};

export default Input;
