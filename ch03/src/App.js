import logo from "./logo.svg";
import "./App.css";
import CustomList from "./components/CustomList";
import Button from "./components/Button";
import { useEffect, useRef, useState } from "react";
import MainHeader from "./components/MainHeader";
import Profile from "./Profile";
import Board from "./Board";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div classNAme="App">
      <nav>
        <ul>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a href="profile">프로필</a>
          </li>
          <li>
            <a href="board">게시판</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/profile" Component={Profile}></Route>
        <Route path="/board" Component={Board}></Route>
      </Routes>
    </div>
  );
}

export default App;
