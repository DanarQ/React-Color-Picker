import React, { useState } from "react";
function Colorpicker() {
  const [color, setColor] = useState("#ffffff");

  function handleColorChange(e) {
    setColor(e.target.value);
  }
  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>Selected Color: {color}</p>
        </div>
        <label>Select a color:</label>
        <input type="color" value={color} onChange={handleColorChange}></input>
      </div>
    </>
  );
}
export default Colorpicker;
