import React from "react";

const PrograssBar = ({ max, current }) => {
  const width = (current / max) * 100;
  return (
    <div id="progressBar">
      <div id="progressBarFull" style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default PrograssBar;
