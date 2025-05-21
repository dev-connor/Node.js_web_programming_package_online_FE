import logo from "./logo.svg";
import "./App.css";
import CustomList from "./components/CustomList";
import Button from "./components/Button";
import { useState } from "react";
import MainHeader from "./components/MainHeader";

function App() {
  const [text, setText] = useState("Hello");

  const onChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };

  return (
    <div className="App">
      <h1>{text}</h1>
      <input onChange={onChange}></input>
    </div>
  );
}

export default App;
