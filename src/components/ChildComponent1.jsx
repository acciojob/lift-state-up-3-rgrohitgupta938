// ChildComponent1.js
import React from "react";

const ChildComponent1 = ({ selectedOption, onOptionChange }) => {
  return (
    <div className="child" style={{ color: "black", backgroundColor: "brown",padding: "20px 20px", }}>
      <h2>Child Component 1</h2>
      <button
        onClick={() => onOptionChange("Option 1")}
        disabled={selectedOption === "Option 1"}
      >
        Select Option 1
      </button>
    </div>
  );
};

export default ChildComponent1;
