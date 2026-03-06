import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, React!</h1>
      <p>This is a basic React App component.</p>
      <button onClick={() => alert("Button clicked!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;