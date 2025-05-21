import logo from "./logo.svg";
import "./App.css";
import CustomList from "./components/CustomList";
import Button from "./components/Button";
import { useRef, useState } from "react";
import MainHeader from "./components/MainHeader";

function App() {
  const [name, setName] = useState({
    first: "Connor",
    last: "Kim"
  })
  const firstNameRef = useRef()

  const confirm = () => {
    console.log(firstNameRef.current.value);
  }
  
  return (
    <div className="App">
      <h1>{name.last} {name.first}</h1>
      <input name="성" placeholder="성"></input>
      <input name="이름" placeholder="이름" ref={firstNameRef}></input>
      <button onClick={confirm}>확인</button>
    </div>
  );
}

export default App;
