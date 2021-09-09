import React, { useState } from "react";
import "../styles/Child.css";

export default function Selection({ applyColor }) {
  const [color, setColor] = useState({ background: '' });

  function handleClick() {
    applyColor(setColor)
  }

  return (
    <div
      className="fix-box"
      style={color}
      onClick={handleClick}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}