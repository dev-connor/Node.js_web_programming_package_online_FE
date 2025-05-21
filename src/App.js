import logo from "./logo.svg";
import "./App.css";
import CustomList from "./components/CustomList";
import Button from "./components/Button";
import { useEffect, useRef, useState } from "react";
import MainHeader from "./components/MainHeader";

function App() {
  const [secound, setSecound] = useState(0);

  // 마운트 이후 실행
  useEffect(() => {
    let interval = setInterval(() => {
      console.log(secound);
      setSecound(secound + 1);
    }, 1000);

    // 언마운트
    return () => {
      clearInterval(interval);
    };
  }, [secound]);

  return (
    <div>
      <p>{secound}초</p>
    </div>
  );
}

export default App;
