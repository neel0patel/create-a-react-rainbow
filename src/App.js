// import logo from "./logo.svg";
// import "./App.css";
import React, { useState } from "react";
import ColorBlock from "./ColorBlock";

function App() {
  let [colors, setColors] = useState([
    "violet",
    "blue",
    "lightblue",
    "green",
    "greenyellow",
    "yellow",
    "orange",
    "red",
  ]);
  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };
  let colorMap = colors.map((color, i) => {
    return <ColorBlock color={color} />;
  });

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
      {/* {colors.map((color, i) => (
        <ColorBlock color={color} />
      ))} */}
    </div>
  );
}
export default App;
