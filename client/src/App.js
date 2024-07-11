import React from "react";
import "./App.css";
import TypingEffect from "./component/TypingEffect";

function App() {
  const texts = ["Software Engineer", "Full-stack Developer"];
  return (
    <div className="App">
      <header className="App-header">
        <TypingEffect texts={texts} speed={150} />
      </header>
    </div>
  );
}

export default App;
