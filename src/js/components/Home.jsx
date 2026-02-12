import React, { useState, useEffect } from "react";
import "../../styles/index.css";


const Home = () => {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("hello", name);
  }, [name]);

  // RESTORED: Your original logic
  const submintvalue = () => {
    setName(inputValue);
    setColor(inputValue.toLowerCase());
    setInputValue("");
  };

  return (
    <div className="text-center mt-5">
      <h1>Hello {name}!</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn btn-success" onClick={submintvalue}>
        Submit
      </button>

      <div className="traffic-light-container">
        <div 
          className={`light red ${color === "red" ? "glow" : ""}`} 
          onClick={() => setColor("red")}
        ></div>
        <div 
          className={`light yellow ${color === "yellow" ? "glow" : ""}`} 
          onClick={() => setColor("yellow")}
        ></div>
        <div 
          className={`light green ${color === "green" ? "glow" : ""}`} 
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
};

export default Home;
