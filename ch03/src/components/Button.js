import React from "react";
import "./../style/Button.scss"
import styled from "styled-components";

const MyButton = styled.button`
  fond-size: 24px;
`

export default function Button() {
  return <MyButton>Green</MyButton>
}