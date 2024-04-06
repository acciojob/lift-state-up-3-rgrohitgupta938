// ChildComponent2.js
import React from "react";

const ChildComponent2 = ({ selectedOption, onOptionChange }) => {
  return (
    <div
      className="child"
      style={{
        color: "black",
        backgroundColor: "yellow",
        padding: "20px 20px",
      }}
    >
      <h2>Child Component 2</h2>
      <button
        onClick={() => onOptionChange("Option 2")}
        disabled={selectedOption === "Option 2"}
      >
        Select Option 2
      </button>
    </div>
  );
};

export default ChildComponent2;
