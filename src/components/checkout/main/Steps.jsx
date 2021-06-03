import "./Steps.css";
import React from "react";

function Steps() {
  return (
    <div className="steps">
      <div className="step-1">
        <p>1</p>
      </div>
      <div className="space">
        <div className="point"></div>
        <div className="point"></div>
        <div className="point"></div>
      </div>
      <div className="step-2">
        <p>2</p>
      </div>
    </div>
  );
}

export default Steps;
