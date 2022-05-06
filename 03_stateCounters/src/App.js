import React, { useState } from "react";
import "./App.css";

function App() {
  const [up, setUp] = useState(0);

  return (
    <div className="App">
      <header>
        <h1> Counters using React States</h1>
      </header>
      <h2>Current value: {up}</h2>
      <button onClick={() => setUp(0)}>Reset</button>
      <button onClick={() => (up > 10 ? "" : setUp(up + 1))}>Up</button>
      <button onClick={() => (up <= 0 ? "" : setUp(up - 1))}>Down</button>
    </div>
  );
}

export default App;
