import React, { useState } from 'react'
import "../styles/Child.css";

function Selection({ applyColor }) {
  const [color, setColor] = useState({ background: '' })

  function handleClick() {
    applyColor(setColor);
    console.log("done");
  }

  return (
    <div className="fix-box"
      style={color}
      onClick={handleClick}>
      <h2 className="subheading">Selection</h2>
    </div>
  )
}

export default Selection
