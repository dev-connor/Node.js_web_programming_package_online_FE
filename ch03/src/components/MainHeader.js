import React from "react";

function MainHeader(props) {
  // 상태를 처리하는 함수 
  // [상태 데이터, 상태를 위한 setter 함수]
  return <h1>{props.text}</h1>; // arrow function ES6 문법 
}

export default MainHeader;
