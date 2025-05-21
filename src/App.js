import logo from "./logo.svg";
import "./App.css";
import CustomList from "./components/CustomList";
import Button from "./components/Button";
import { useRef, useState } from "react";
import MainHeader from "./components/MainHeader";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 0,
      text: "강의 듣기",
    },
  ]);
  const inputRef = useRef();

  const confirm = () => {
    const text = inputRef.current.value;
    setTask([
      ...tasks,
      {
        id: tasks[tasks.length - 1].id + 1,
        text,
      },
    ]);
  };

  return (
    <div className="App">
      <div>
        <input placeholder="내 목표" ref={inputRef}></input>
        <button onClick={confirm}>확인</button>
      </div>
      <ul>
        {tasks.map((v, index) => (
          <li key={v.id}>{v.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
