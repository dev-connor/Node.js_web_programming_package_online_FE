import logo from "./logo.svg";
import "./App.css";
import CustomList from "./components/CustomList";
import Button from "./components/Button";
import { useState } from "react";
import MainHeader from "./components/MainHeader";

function App() {
  const [text, setText] = useState("감추기")

  const buttonClick = () => {
    text === "감추기" ? setText("보이기") : setText("감추기")
  }
  
  return (
    <div className="App">
      <h1>적용될까?</h1>
      {text === "보이기" && <MainHeader text="hello"></MainHeader>}
      
      <button onClick={() => {buttonClick()}}>{text}</button>
    </div>
  );
}

export default App;
