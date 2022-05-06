import React from "react";
import Button from "./Button";
import "./style.css";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Button title="Click Me" />
      <Button title="Either Click Me" />
      <Button />
      {/* <button className="button">Click Me</button> */}
      {/* <button className="button">Either Click Me</button> */}
    </div>
  );
};

export default App;
