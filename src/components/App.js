// App.js
import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./childComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      className="parent"
      style={{
        color: "black",
        backgroundColor: "green",
        width: "50%",
        height: "50%",
        padding: "20px 20px",
      }}
    >
      <h1>Parent Component</h1>
      <ChildComponent1
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
      <ChildComponent2
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;
