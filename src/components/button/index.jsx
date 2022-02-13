import React from "react";

function Button({ click, title, ...props }) {
  return (
    <button onClick={click} {...props}>
      {title}
    </button>
  );
}

export default Button;
